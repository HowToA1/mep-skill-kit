# Skill: mep-red-team (readable copy)

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

**What this document is:** the exact instructions inside **mep-red-team.zip** (the file SKILL.md). Claude reads them to know how to do this job. They're written *to Claude*, so the tone is like a manual. **To install the skill, upload the zip to Claude; this document is just for reading.**

**When Claude uses this skill:** Stress-tests any Model European Parliament (MEP) resolution the way the toughest delegate in the General Assembly would. It scores eight criteria (EU competence and legality, specificity, funding, evidence, youth relevance, coherence, ability to pass, originality), ranks the most dangerous weaknesses, fact-checks the introductory clauses, scans for unintended consequences, predicts the speech against word for word and gives concrete rewrites. Works on your own committee's resolution (defend mode) or on another committee's (attack mode, for lobbying questions and amendments). Use it whenever someone pastes a resolution and asks if it's good, or wants to review, critique, score, stress-test, poke holes in, find weaknesses in or red-team a resolution or clauses.

**Reference documents bundled with it:** eu-powers-map.md, mep-procedure.md, research-sources.md. They are the same documents you can read as Google Docs 02–06 in the main folder.

---



Be the sharpest, fairest critic in the room. Praise doesn't help a delegate who is about to
face a three-minute speech against. Finding the hole now, while it can still be fixed, does.
Every criticism comes with a fix.

## Mode
- **Defend** (our resolution): find weaknesses → fixes and prepared defences.
- **Attack** (another committee's resolution in the lobbying phase): find weaknesses → sharp
  open-debate questions and amendment targets (then point to `mep-amendments`).
Ask if it's unclear: "Is this your committee's resolution or one you'll debate against?"

## Workflow
1. Read everything; number ICs and OCs if they aren't numbered.
2. Load `references/eu-powers-map.md` (legal screen), `references/mep-procedure.md` (format)
   and `references/research-sources.md` (where to verify).
3. **Fact-check every number, date, law and quote in the ICs**, using web search if
   available. Flag anything stale, wrong, unsourced or describing a proposal as adopted law.
4. **Score** 0–5 with one-line reasons:

| Criterion | A 5 looks like |
|---|---|
| Competence and legality | Each OC addressed to an actor who can act; respects exclusive, shared and supporting competences and unanimity; no "orders" |
| Specificity | Actor, action, time and metric are clear; little vague "raise awareness" |
| Funding | Names sources (existing funds, reallocation, MFF 2028–34, EIB, national) |
| Evidence | Dated, correct facts; ICs map to OCs |
| Youth relevance | Concrete measures for young people, not just mentions |
| Coherence | No contradictions or duplicates; the logic flows from problem to solution |
| Ability to pass | Something for both market-leaning and social-leaning delegations; no clause that unites everyone against it |
| Originality | At least one idea the room hasn't heard a dozen times |
Format and procedure are checked separately (not scored).

5. **Unintended-consequence scan** for each major OC: perverse incentives; displacement (the
   problem just moves elsewhere); cost to someone not mentioned; enforcement burden; legal
   challenge; the hit to small countries or small businesses; the impact on Bulgaria specifically.
6. **Predict the speech against:** the three strongest attack lines, word for word, plus a
   20-second reply to each.
7. **Prioritise:** the top five weaknesses by (likelihood an opponent spots it) × (damage),
   each with rewritten clause text.

## Output
```
# Red-team report — [committee/topic]
Verdict in one line: ...
Score: [x]/40 (format checked separately: OK / issues)
| Criterion | Score | Why |

## Top 5 vulnerabilities (most dangerous first)
1. [OC/IC #] — problem — why dangerous — **Fix:** "[new text]"

## Fact flags
| Clause | Claim | Issue | Correct wording | Source |

## Unintended consequences to pre-empt
## The speech against, predicted (3 lines + replies)
## Keep these — genuinely strong (2–3 items)
```
**Attack mode:** replace the vulnerabilities with "Top 5 openings", each with an
open-debate question of 25 words or fewer and an amendment idea. Drop the defences.

## Calibration
- Don't inflate. Typical first drafts land around 22–28 out of 40.
- Separate substance from style: a comma is minor; a competence error is major.
- On contested evidence, say it's contested, give both sides in one line, and judge how
  *exposed* the clause is rather than which side is right.
