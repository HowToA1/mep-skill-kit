---
name: mep-topic-briefing
description: Turns any Model European Parliament (MEP) committee topic into a complete study pack within minutes, for a delegate who has just received their committee and question. It identifies which EU powers apply, the laws and proposals already in place, Parliament's and the Council's latest positions, dated statistics, the main political divides, case studies, Bulgaria's angle, and the ten questions the committee will argue about. Includes a crash mode for when the topic arrives late and a deep mode for the study-guide stage. Use it whenever someone says "we got our topic", "our committee is...", "explain this topic", "help me prepare for MEP/MUN/EYP", "research [topic] for the EU", or pastes a committee question or study guide, even if they don't ask for a "briefing".
metadata:
  author: Dimitar Bidzhekov
  kit: MEP Skill Kit v1.0
---

# MEP Topic Briefing

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

The delegate has just been handed a topic (it could be AI, migration, defence, climate,
health, housing, enlargement, anything). In the first hours, whoever understands **what the
EU can actually do** and **what's already on the table** leads the committee. This skill gets
the delegate there fast, with facts they can trust.

## Inputs
- **The committee name and question** (required). If a study guide or topic text is pasted,
  treat it as the primary source for scope.
- Defaults: delegation **Bulgaria**; session **64th iMEP Porto, 19–26 Nov 2026**; language English.
- **Mode:** `crash` (under 1 hour until committee: one page), `standard` (default) or `deep`
  (the full study pack). Infer it from the user's urgency.

## Workflow
1. **Decode the question.** Rewrite the committee question in plain words, then list the 3–5
   sub-questions hidden inside it. Committee questions are usually two problems joined by
   "while" or "and" (for example "boost X while protecting Y"), so name the tension.
2. **Map the powers.** Use `references/eu-powers-map.md`. Say which competence applies
   (exclusive, shared or supporting), which Treaty articles matter, whether unanimity applies,
   and which institution holds the key lever. This shapes every clause later.
3. **Find what already exists.** Using web search and `references/research-sources.md`:
   - Laws in force and proposals in progress (EUR-Lex and OEIL; note procedure numbers).
   - The latest **EPRS briefing** on the topic (best single explainer).
   - The latest European Parliament resolution, Council conclusions and Commission strategy.
   - 6–10 key **dated** statistics (Eurostat first).
   - What happened in the **last 3 months** (news), because committees love fresh hooks.
4. **Map the divides.** Typical cleavages: market vs. regulation; EU action vs. subsidiarity;
   security vs. rights; cost vs. ambition; East vs. West or North vs. South interests; current
   generation vs. young people. State each side's best argument fairly.
5. **Add Bulgaria's angle.** Use `references/bulgaria-profile.md`, then search for Bulgaria's
   current official stance on this topic (gov.bg, mfa.bg, BTA). Label it as stated, policy
   record or inferred.
6. **Write the pack** in the format below and self-check: every stat dated and sourced; no
   invented laws or quotes; contested claims labelled as contested.

## Output format (standard)
```
# Study Pack — [Committee]: [question]
Prepared [date] | Delegation of Bulgaria | 64th iMEP Porto

## The question in plain words
[2–3 sentences] **The core tension:** [X] vs [Y]

## Sub-questions the committee must answer
1. ... (3–5)

## Who has the power?
Competence: ... | Key articles: ... | Unanimity? ... | Key actor: ...
→ So the realistic asks are: ...

## What already exists
| Instrument | Type | Status/date | What it does | Gap it leaves |

## Numbers that matter
| Stat | Source, date | Use it to argue... |

## Last 90 days
- [Date] — [development] — why it matters

## The divides
| Divide | Side A's best argument | Side B's best argument |

## Case studies (2–4)
- [Country/city]: what they did → result → lesson

## Bulgaria's angle
Situation · Official position (labelled) · What Bulgaria wants · Our weak spot

## 10 questions the committee will fight about
## 5 clause ideas to bring (ideas, not a pre-written resolution)
## Glossary (acronyms used)
## Sources
```
**Crash mode:** the question in plain words, who has the power, 5 numbers, 3 divides,
Bulgaria in 3 lines, 3 clause ideas, 3 things to say first. One page.
**Deep mode:** add a full timeline, the positions of all 7 EP political groups (from their
own statements), country clusters, an annotated reading list, and a 20-question practice set.

## Quality bar
- Primary sources beat press; the date is mandatory for every stat.
- If nothing new is found for "last 90 days", say so rather than padding.
- Never present a proposal as adopted law. Check its status in OEIL.
- An example of a finished pack, on housing, is in `references/example-topic-pack-housing.md`.
  Use it to see the depth expected, not as content for other topics.
- End with: "Next: run `mep-bulgaria-position` for our stance, then `mep-resolution` in clause-bank mode."
