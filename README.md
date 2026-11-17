# MEP Skill Kit

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

**12 Claude skills that give a Model European Parliament (MEP) delegation an edge on any committee topic**, from the moment the topic arrives to the final vote and the debrief. First built for the **Delegation of Bulgaria at the 64th International Model European Parliament, Porto (19–26 November 2026)**.

> This is a standalone project by Dimitar Bidzhekov, separate from the HowToAI application.

## What's inside

| Folder | What it holds |
|---|---|
| `install/` | The 12 ready-to-upload skill packages (.zip), one per skill |
| `skills/` | The source of each skill: `SKILL.md` (the instructions Claude follows) plus its `references/` |
| `shared/` | The reference knowledge the skills share: EU powers map, Bulgaria profile, MEP procedure, research sources |
| `examples/` | A worked study pack and resolution (housing) that show the expected standard |
| `docs/guides/` | Plain-language guides for delegates (Start Here, The 12 Skills, and more), also published as Google Docs |
| `docs/skill-instructions/` | A readable copy of each skill's instructions |
| `presentation/` | The kit presentation (.pptx, also on Google Slides) and the script that builds it |
| `guide/` | The one-page web guide |
| `build.py` | Copies shared references into each skill, validates them, and builds the zips |

## The 12 skills

| # | Skill | Use it when | Best model |
|---|---|---|---|
| 1 | `mep-topic-briefing` | The committee topic arrives | Opus 5.5 |
| 2 | `mep-bulgaria-position` | Right after the briefing | Opus 5.5 |
| 3 | `mep-resolution` | Preparing clause ideas, then in committee | Opus 5.5 + extended thinking |
| 4 | `mep-red-team` | After every draft; lobbying | Fable 5.2 / Opus 5.5 |
| 5 | `mep-amendments` | Lobbying and General Assembly | Sonnet 5.5 |
| 6 | `mep-speeches` | Before every speaking slot | Sonnet 5.5 → Opus 5.5 |
| 7 | `mep-sparring` | Evenings, before the GA | Sonnet 5.5 (voice mode) |
| 8 | `mep-live-copilot` | During the session | Haiku 5.5 |
| 9 | `mep-fact-check` | Before speaking; when others quote numbers | Opus 5.5 |
| 10 | `mep-lobbying` | Deadlocks; before votes | Opus 5.5 |
| 11 | `mep-session-tracker` | Throughout the session | Sonnet 5.5 |
| 12 | `mep-debrief` | Every evening and after the session | Sonnet 5.5 |

## Install (claude.ai)
1. **Settings → Capabilities:** turn on *Code execution and file creation*.
2. **Customize → Skills → + → Create skill → Upload a skill:** upload each zip from `install/` (keep them zipped).
3. Turn on web search in your chats. Then just ask naturally, for example "We got our topic: … prepare me fast."

Full delegate guide: [`docs/guides/00-start-here.md`](docs/guides/00-start-here.md).

## Build from source
```bash
pip install pyyaml
python build.py            # copies shared references into each skill, checks them, writes dist/*.zip
```

## Roadmap
- v1.1: improvements from delegates' feedback after Porto (collected by the `mep-debrief` skill).
- The `mep-session-tracker` record format (schema v1.0) is the data model for a planned online MEP session-tracking platform for delegations in Bulgaria and internationally.

## Author
**Dimitar Bidzhekov**. Facts verified on 17 November 2026; the skills re-check anything time-sensitive.

© 2026 Dimitar Bidzhekov. All rights reserved.
