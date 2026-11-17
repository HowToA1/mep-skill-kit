# Changelog — MEP Skill Kit

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

All changes to the kit are recorded here. Format: version · date · what changed · why.

## v1.0.0 · 2026-11-17 · First release for the 64th iMEP Porto (19–26 Nov 2026)
**Added: 12 skills, topic-agnostic, for the Delegation of Bulgaria**
- `mep-topic-briefing`: study pack for any committee topic (crash, standard and deep modes).
- `mep-bulgaria-position`: position paper with labelled evidence (stated / policy record / inferred) and the head-of-delegation intro.
- `mep-resolution`: clause-bank mode (respects "no pre-written resolution" rules) and committee mode; ACTOR · LEVER · TIME · METRIC check; clause-defence table.
- `mep-red-team`: 8-criterion score out of 40, top-5 vulnerabilities, predicted speech against, attack mode.
- `mep-amendments`: amendment format, proposer defence, 2-minute committee response, fast mode.
- `mep-speeches`: all MEP speech types with timing (about 125 wpm), delivery marks, live slots for closing speeches.
- `mep-sparring`: 8 personas, scoring out of 10, drill / speech-against / rapid-fire / role-play / hard modes.
- `mep-live-copilot`: ≤45-word in-session answers, counter-questions, procedure moves.
- `mep-fact-check`: verdicts per claim, primary sources, IC-ready citations, checks on opponents' claims.
- `mep-lobbying`: interest maps, compromise wording bank, merged clauses, vote counts, pitches.
- `mep-session-tracker`: session record schema v1.0 (JSON) plus `session_report.py` statistics script (tested on sample data).
- `mep-debrief`: daily check-ins, session report, handover note, factual posts, kit feedback in changelog format.

**Added: shared references (copied into the skills that use them by `build.py`)**
- `eu-powers-map.md`: competences (Arts. 2–6 TFEU), institutions, legislative procedure, act types, unanimity zones, budget, red-flag rewrites.
- `bulgaria-profile.md`: verified 17 Nov 2026. PM Rumen Radev (since 8 May 2026), President Iliana Iotova (elected 1 Nov 2026), euro since 1 Jan 2026, angles by topic, sensitive issues.
- `mep-procedure.md`: resolution format, phrase banks, GA order and timings, voting, etiquette (MEP defaults; session rules override).
- `research-sources.md`: tiered sources and quoting rules.
- Examples: a housing topic pack and a worked housing resolution, as quality references.

**Changed during development (same day)**
- Initial draft was housing-specific (all-housing committee). Rebuilt as topic-agnostic after confirming the delegation represents Bulgaria and the committee topic is unknown. Housing material kept only as worked examples.
- Fixed YAML-breaking colons in two skill descriptions (`mep-live-copilot`, `mep-session-tracker`).

**Validation:** all 12 skills pass the skill-creator validator; descriptions are 614–771 characters (limit 1024); every referenced file exists.

**Docs (same day)**
- Added the guide page (`guide/index.html`): install steps, 12 skill cards with when to use them, best and alternative models, settings and copyable starter prompts, a model guide, the 8-day game plan and ground rules.
- Renamed the "Fast model" column to "Alternative"; set Haiku 5.5 as the alternative for `mep-speeches`.

**Google Drive edition (same day, 17 Nov 2026)**
- Created the Drive folder "Project - MEP Skill Kit v1.0: Delegation of Bulgaria, 64th iMEP Porto" (shared with editor access for the kit maintainers; every file inside inherits it).
- Rewrote the kit as 8 plain-language Google Docs (00 Start Here to 07 Changelog), with no code formatting.
- Built a 13-slide presentation and converted it to Google Slides.
- Uploaded the 12 skill zips to the "Install files" subfolder.
- Fixed bullet lists that merged into paragraphs in the first Docs upload; the broken copies were moved to the trash and replaced.

## v1.0.1 · 2026-11-17 · by Dimitar Bidzhekov
- Author stamp "by Dimitar Bidzhekov" added everywhere: each SKILL.md (frontmatter metadata.author and a line under the heading), all references, examples, the README, the guide page, the session_report.py output, Google Docs titles and headings, and every slide footer.
- Drive: relabelled the Install files folder (the zips are the skills themselves and are uploaded still zipped); added the "Skill instructions (readable copies)" folder with each SKILL.md as a Google Doc; replaced the stamped Docs, zips and presentation (old copies moved to the trash).
- GitHub: published publicly as the standalone repository HowToA1/mep-skill-kit, separate from the HowToAI application.

## v1.0.2 · 2026-11-17 · by Dimitar Bidzhekov
- Security check before publishing: no email addresses, passwords, API keys or tokens, private links (Drive, Vercel, Supabase), personal social handles or other people's names in any file, inside the skill zips, in the presentation's file properties or in the commit history. Commits use GitHub's no-reply address.
- Fixed: presentation/build-deck.js contained file paths from the build machine; replaced them with portable settings.
- Repository published publicly. The description and topics are set by hand on GitHub (this session cannot change repository settings).
