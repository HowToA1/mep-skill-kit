#!/usr/bin/env python3
"""MEP Skill Kit v1.0 · by Dimitar Bidzhekov

Build the MEP Skill Kit: copy shared references into each skill, validate, and zip.

Each skill zip has the skill folder as its root (the format claude.ai expects for upload).
"""
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path

import yaml

ROOT = Path(__file__).parent
SKILLS = ROOT / "skills"
DIST = ROOT / "dist"
SHARED = ROOT / "shared"
EXAMPLES = ROOT / "examples"
# Optional: path to the skill-creator validator (quick_validate.py). Set MEP_VALIDATOR to use it.
import os
VALIDATOR = Path(os.environ["MEP_VALIDATOR"]) if os.environ.get("MEP_VALIDATOR") else None

REFS = {
    "mep-topic-briefing": ["eu-powers-map.md", "research-sources.md", "bulgaria-profile.md", "example-topic-pack-housing.md"],
    "mep-bulgaria-position": ["bulgaria-profile.md", "eu-powers-map.md", "research-sources.md"],
    "mep-resolution": ["mep-procedure.md", "eu-powers-map.md", "research-sources.md", "example-resolution-housing.md"],
    "mep-red-team": ["eu-powers-map.md", "mep-procedure.md", "research-sources.md"],
    "mep-amendments": ["mep-procedure.md", "eu-powers-map.md"],
    "mep-speeches": ["mep-procedure.md", "research-sources.md", "bulgaria-profile.md"],
    "mep-sparring": ["eu-powers-map.md", "bulgaria-profile.md"],
    "mep-live-copilot": ["mep-procedure.md", "bulgaria-profile.md", "eu-powers-map.md"],
    "mep-fact-check": ["research-sources.md", "bulgaria-profile.md"],
    "mep-lobbying": ["eu-powers-map.md", "mep-procedure.md", "bulgaria-profile.md"],
    "mep-session-tracker": [],
    "mep-debrief": [],
}


def source(name):
    for d in (SHARED, EXAMPLES):
        if (d / name).exists():
            return d / name
    raise FileNotFoundError(name)


def check_refs(skill_dir):
    """Every references/... or scripts/... path mentioned in SKILL.md must exist."""
    text = (skill_dir / "SKILL.md").read_text()
    missing = [m for m in set(re.findall(r"`((?:references|scripts)/[\w.\-/]+)", text))
               if not (skill_dir / m).exists()]
    return missing


def main():
    DIST.mkdir(exist_ok=True)
    for z in DIST.glob("*.zip"):
        z.unlink()
    ok = True
    for name, refs in REFS.items():
        sd = SKILLS / name
        rd = sd / "references"
        rd.mkdir(exist_ok=True)
        for r in refs:
            shutil.copy2(source(r), rd / r)
        if not any(rd.iterdir()):
            rd.rmdir()
        fm = yaml.safe_load(re.match(r"^---\n(.*?)\n---", (sd / "SKILL.md").read_text(), re.S).group(1))
        assert fm["name"] == name, f"name mismatch in {name}"
        desc_len = len(fm["description"])
        res = subprocess.run([sys.executable, str(VALIDATOR), str(sd)], capture_output=True, text=True) if VALIDATOR else subprocess.CompletedProcess([], 0, "frontmatter OK", "")
        missing = check_refs(sd)
        status = "OK" if res.returncode == 0 and not missing and desc_len <= 1024 else "FAIL"
        ok &= status == "OK"
        print(f"{status:4} {name:24} desc={desc_len:4} chars  {res.stdout.strip()} {'missing: ' + str(missing) if missing else ''}")
        with zipfile.ZipFile(DIST / f"{name}.zip", "w", zipfile.ZIP_DEFLATED) as z:
            for f in sorted(sd.rglob("*")):
                if f.is_file() and "__pycache__" not in f.parts:
                    z.write(f, f.relative_to(SKILLS))
    # Full bundle: all skill folders + docs
    with zipfile.ZipFile(DIST / "mep-skill-kit-v1.0-all.zip", "w", zipfile.ZIP_DEFLATED) as z:
        for f in sorted(SKILLS.rglob("*")):
            if f.is_file() and "__pycache__" not in f.parts:
                z.write(f, Path("mep-skill-kit") / "skills" / f.relative_to(SKILLS))
        for zf in sorted(DIST.glob("mep-*.zip")):
            if "all" not in zf.name:
                z.write(zf, Path("mep-skill-kit") / "upload-these-zips" / zf.name)
        for doc in ("README.md", "CHANGELOG.md"):
            if (ROOT / doc).exists():
                z.write(ROOT / doc, Path("mep-skill-kit") / doc)
    print("\nALL OK" if ok else "\nSOME FAILED")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
