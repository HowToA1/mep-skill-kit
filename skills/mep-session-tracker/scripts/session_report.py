#!/usr/bin/env python3
"""MEP Skill Kit v1.0 · by Dimitar Bidzhekov

Summarise an MEP session record (schema v1.0) into a Markdown report.

Usage: python session_report.py session.json [-o report.md]
"""
import argparse
import json
import sys
from collections import Counter


def pct(a, b):
    return f"{(100 * a / b):.0f}%" if b else "n/a"


def build_report(data):
    s = data.get("session", {})
    lines = [f"# Session report — {s.get('name', 'MEP session')}",
             f"{s.get('city', '')} · {s.get('start_date', '?')} → {s.get('end_date', '?')}"
             f" · tracked by {s.get('tracked_by', '?')}", ""]

    committees = {c["id"]: c for c in data.get("committees", [])}
    resolutions = data.get("resolutions", [])
    votes = {v["resolution_id"]: v for v in data.get("votes", [])}
    amendments = data.get("amendments", [])
    speeches = data.get("speeches", [])

    # Resolutions
    lines += ["## Resolutions", "| Committee | Status | For | Against | Abstain | Margin | OCs |",
              "|---|---|---|---|---|---|---|"]
    passed = 0
    for r in resolutions:
        v = votes.get(r["id"], {})
        f, a, ab = v.get("for"), v.get("against"), v.get("abstain")
        margin = (f - a) if isinstance(f, int) and isinstance(a, int) else "—"
        status = v.get("result") or r.get("status", "?")
        passed += status == "passed"
        name = committees.get(r.get("committee_id"), {}).get("name", r.get("committee_id"))
        lines.append(f"| {name} | {status} | {f if f is not None else '—'} | "
                     f"{a if a is not None else '—'} | {ab if ab is not None else '—'} | "
                     f"{margin} | {len(r.get('operative_clauses', []))} |")
    lines += ["", f"Passed: {passed}/{len(resolutions)}", ""]

    # Amendments
    res = Counter(am.get("result") or "pending" for am in amendments)
    debated = res["passed"] + res["failed"]
    lines += ["## Amendments",
              f"Submitted: {len(amendments)} · Debated: {debated} · Passed: {res['passed']}"
              f" ({pct(res['passed'], debated)} of debated) · Not selected: {res['not_selected']}"]
    agree = [am for am in amendments
             if am.get("committee_recommendation") and am.get("result") in ("passed", "failed")]
    followed = sum((am["committee_recommendation"] == "for") == (am["result"] == "passed") for am in agree)
    if agree:
        lines.append(f"Plenary followed the committee's recommendation {followed}/{len(agree)} times "
                     f"({pct(followed, len(agree))}).")
    own = data.get("session", {}).get("tracked_by", "")
    own_id = next((d["id"] for d in data.get("delegations", []) if d.get("country") and d["country"] in own), None)
    if own_id:
        mine = [am for am in amendments if am.get("submitted_by") == own_id]
        lines.append(f"Our delegation ({own_id}): {len(mine)} submitted, "
                     f"{sum(am.get('result') == 'passed' for am in mine)} passed.")
    lines.append("")

    # Speeches
    by_type = Counter(sp.get("type") for sp in speeches)
    by_del = Counter(sp.get("speaker_delegation") for sp in speeches)
    lines += ["## Speeches",
              "By type: " + (", ".join(f"{k} {v}" for k, v in by_type.most_common()) or "none"),
              "Most active delegations: " + (", ".join(f"{k} {v}" for k, v in by_del.most_common(5)) or "none"),
              ""]

    # Our delegation's votes
    if own_id:
        lines += [f"## How {own_id} voted", "| Resolution | Our vote | Result |", "|---|---|---|"]
        for rid, v in votes.items():
            lines.append(f"| {rid} | {v.get('by_delegation', {}).get(own_id, '—')} | {v.get('result', '—')} |")
        lines.append("")

    lines.append(f"Events logged: {len(data.get('events', []))}")
    lines.append("")
    lines.append("Generated with MEP Skill Kit v1.0 · by Dimitar Bidzhekov")
    return "\n".join(lines)


def main():
    p = argparse.ArgumentParser()
    p.add_argument("record")
    p.add_argument("-o", "--output")
    args = p.parse_args()
    with open(args.record, encoding="utf-8") as fh:
        data = json.load(fh)
    if data.get("schema_version") != "1.0":
        print("warning: expected schema_version 1.0", file=sys.stderr)
    report = build_report(data)
    if args.output:
        with open(args.output, "w", encoding="utf-8") as fh:
            fh.write(report + "\n")
    else:
        print(report)


if __name__ == "__main__":
    main()
