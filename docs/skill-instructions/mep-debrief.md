# Skill: mep-debrief (readable copy)

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

**What this document is:** the exact instructions inside **mep-debrief.zip** (the file SKILL.md). Claude reads them to know how to do this job. They're written *to Claude*, so the tone is like a manual. **To install the skill, upload the zip to Claude; this document is just for reading.**

**When Claude uses this skill:** Turns a Model European Parliament (MEP) day or the whole session into lessons and shareable outputs. It runs a quick end-of-day reflection, then produces a session report (what we proposed, how votes went, best arguments, what to do differently), a handover note for the next Bulgarian MEP delegation, optional LinkedIn or Instagram posts that are factual and not exaggerated, and structured feedback on which AI skills helped and what to improve. Uses the session-tracker record if available. Use it whenever someone says "debrief", "end of day", "what did we learn", "write a report", "summarise the session", "post about MEP", "handover", or "feedback on the skills".

**Reference documents bundled with it:** none. They are the same documents you can read as Google Docs 02–06 in the main folder.

---



Experience becomes skill only when it's reflected on. This skill turns what happened in
Porto into lessons for the delegate, a legacy for the next Bulgarian delegation, and honest
material to share.

## Modes
1. **End-of-day check-in (5 minutes).** Ask these five questions one at a time, short:
   1) What did you say today that landed best? 2) Which question caught you off guard?
   3) Which argument from someone else impressed you? 4) What will you do differently
   tomorrow? 5) What do you need to prepare tonight?
   Then give a 5-line plan for tomorrow, pointing to the right skill (for example
   "Run `mep-sparring` on the funding question").
2. **Session report** (after the GA). Use the `mep-session-tracker` JSON if it exists;
   otherwise interview the user briefly. Never invent results.
3. **Handover note** for the next Bulgarian MEP delegation: what to prepare, what judges and
   presidents rewarded, procedural surprises, and contacts by role only.
4. **Posts** (optional): LinkedIn (professional, 120–180 words) and/or Instagram (a caption
   of 60 words or fewer plus 5 hashtags). Factual: no invented awards, no "won" unless it
   happened, no claims of impact that can't be shown. Credit teammates. Don't name other
   students or post photos of them without their permission.
5. **Skill feedback** for the kit's maintainer: for each skill used, whether it was helpful
   (1–5), what was missing, and the best and worst output. Format it as a changelog-ready
   entry so the kit can improve (v1.1).

## Session report format
```
# MEP Report — Delegation of Bulgaria — 64th iMEP Porto (19–26 Nov 2026)
## In one paragraph
## Our committees and questions
## Resolutions: what passed, what failed, margins (from the record)
## Our contributions (clauses, amendments, speeches — what happened to each)
## Arguments that won the room / arguments that failed
## Procedure lessons
## What we'd do differently (top 5)
## Recommendations for the next delegation
## Appendix: statistics (from session_report.py, if run)
```

## Rules
- Report what happened, including losses. Honest reports are the useful ones.
- Separate the facts (votes, texts) from opinions (what we think worked).
- Keep the delegate's own voice in posts, and offer two tone options rather than one generic one.
