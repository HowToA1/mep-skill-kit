# Skill: mep-session-tracker (readable copy)

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

**What this document is:** the exact instructions inside **mep-session-tracker.zip** (the file SKILL.md). Claude reads them to know how to do this job. They're written *to Claude*, so the tone is like a manual. **To install the skill, upload the zip to Claude; this document is just for reading.**

**When Claude uses this skill:** Keeps a live, structured record of a Model European Parliament (MEP) session as it happens, covering committees and their questions, resolution texts and versions, amendments and their outcomes, speeches, delegation votes and key moments. Rough notes typed in a hurry become clean JSON (schema v1.0) plus a readable log, and a bundled script turns the record into statistics (pass rates, vote margins, how often plenary followed the committee, our delegation's record). Use it whenever someone says "log this", "track", "record the vote", "amendment passed/failed", "note that...", "what's the score so far", "session stats", or pastes results, schedules or vote counts during MEP, MUN or EYP.

**Reference documents bundled with it:** session-schema.md. They are the same documents you can read as Google Docs 02–06 in the main folder; session-schema.md describes the format of the session record.

---



Delegates forget fast. Votes, amendments and the best arguments blur by day five. This skill
keeps a clean record so the delegation can **use** it: who votes with whom, which arguments
won, which amendments the plenary accepts. It produces a final debrief with real numbers.
The record format (schema v1.0) is built to load into an online session-tracking platform later.

## How to use it in the chat
- The **first message** sets up the session: the name (default "64th iMEP Porto, 19–26 Nov
  2026"), our delegation (default Bulgaria) and the committees, if known.
- After that the user sends quick notes in any form, for example:
  - "AFET res passed 98-41-12, we voted for"
  - "amend OC4 ENVI by FR change 'ban' to 'phase out' — failed"
  - "speech against ITRE by DE: funding + subsidiarity"
  - "chair said GA starts 9:30 tomorrow"
- For each note: **parse → confirm in one line → update the record.** Ask only when a
  required field is truly ambiguous (for example, which resolution). Otherwise record the
  value as `null` and keep going. Speed matters more than completeness mid-session.

## The record
- Follow `references/session-schema.md` exactly (IDs, enums, `null` for unknowns).
- If file tools are available, keep the record in a file named `mep-session-record.json`
  and update it after each note. If not, keep it in the conversation and output the full
  JSON when asked ("export") or every ~10 updates.
- Never invent counts or outcomes. Record only what the user reports.
- Store other students as delegation codes or initials, not full names, unless the user says
  the person has agreed.

## Commands the user may type
| Command | What you do |
|---|---|
| `status` | 5-line summary: resolutions passed or failed, amendments, what's next on the schedule |
| `stats` | Run `python scripts/session_report.py mep-session-record.json` (if code execution is available) and show the report; otherwise compute the same figures by hand |
| `export` | Output the complete JSON record in one code block |
| `timeline` | Chronological list of events |
| `who votes with us` | From `votes.by_delegation`: delegations that voted the same way as BG, with their agreement rate |
| `what worked` | Speech and amendment patterns that correlate with passing (state the small sample size honestly) |

## Confirmation style
One line, for example: `✔ Logged: AFET resolution PASSED 98–41–12 (BG: for). Margin +57.`

## At the end of the session
Suggest `mep-debrief`, which turns this record into lessons, a report and posts.
