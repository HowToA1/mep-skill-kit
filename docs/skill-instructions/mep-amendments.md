# Skill: mep-amendments (readable copy)

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

**What this document is:** the exact instructions inside **mep-amendments.zip** (the file SKILL.md). Claude reads them to know how to do this job. They're written *to Claude*, so the tone is like a manual. **To install the skill, upload the zip to Claude; this document is just for reading.**

**When Claude uses this skill:** Writes, defends and answers amendments in a Model European Parliament (MEP) General Assembly on any topic. It produces correctly formatted amendments to operative clauses (add, delete or change) with a one-line justification, a 60-to-90-second proposer's defence, likely questions and a vote read; for your own committee it writes the 2-minute committee response recommending for or against. Includes a fast mode for amendments on the floor right now. Use it whenever someone wants to amend, change, fix or attack a clause, submit or defend an amendment, respond to one, or asks "should we accept this amendment?".

**Reference documents bundled with it:** eu-powers-map.md, mep-procedure.md. They are the same documents you can read as Google Docs 02–06 in the main folder.

---



Amendments are where many General Assemblies are won. A good amendment is **small, votable
and hard to argue against**: it fixes one thing, and the proposer can explain it in one breath.

## Rules (defaults; the session's rules win, see `references/mep-procedure.md`)
- Amendments change **operative clauses only**: add, delete or change text.
- They are submitted in writing to the Presidency by a deadline; the Presidency chooses which are debated.
- Debate: the proposer defends; questions from the floor; a committee speaker responds
  (about 2 minutes) and recommends; a vote follows, usually without abstentions.

## What does the user need?
1. **Write** an amendment to another committee's resolution (lobbying phase).
2. **Anticipate** amendments to our resolution and prepare responses.
3. **Respond live** (fast mode: keep it short).

## Amendment types
| Type | When it's strong | Pattern |
|---|---|---|
| Fix the law | A clause breaks competence, unanimity or non-discrimination rules | "bans" → "calls on the Commission to propose..."; aim it at the right actor |
| Add the money | A good clause has no funding source | Add "financed through [named fund / next MFF / EIB]" |
| Add a metric or deadline | The clause is vague | Add "and to report on progress by [year]" |
| Add youth or Bulgaria relevance | The clause ignores those most affected | Add "with particular attention to young people / cohesion regions" |
| Narrow the scope | It's overbroad and will scare swing voters | Insert "where justified by evidence", "in high-risk cases" |
| Delete | Harmful or contradictory, and can't be fixed | Delete OC n |

Avoid amendments that rewrite a whole clause into something new. Presidencies often reject
them, and voters distrust them.

## Workflow
1. Read the target clause and its neighbours (an amendment can create a contradiction).
2. Screen it with `references/eu-powers-map.md`; check any facts with web search.
3. Draft a minimal change in the exact format below.
4. Vote read: who gains, who loses, and the one argument that wins the swing delegations.

## Output: a new amendment
```
AMENDMENT to OC [n] — resolution of the Committee on [name]
Submitted by: the delegation of Bulgaria
Type: add / delete / change
Current text:  "..."
Amended text:  "..."   (changes in **bold**)
Justification: [1 sentence]
Proposer's defence (60–90 s, third person):
"Madam/Mr President, honourable delegates, the delegation of Bulgaria..."
Likely questions and answers: (3)
Vote read: supporters / opponents / swing + the winning argument
```

## Output: committee response (about 2 minutes, about 250 words)
```
Recommendation: FOR / AGAINST
"Thank you, Madam/Mr President. The committee has carefully considered the amendment proposed by the delegation of..."
- Acknowledge the intent (1 sentence)
- 2–3 reasons, each tied to a fact or clause number
- If AGAINST: show where the resolution already covers the concern
- Clear closing recommendation
```

## Fast mode (live)
Amended text, a 1-sentence justification, a 30-second defence or response. Nothing else.

## Quality bar
- One amendment, one idea; copy the original text exactly; keep MEP grammar and punctuation intact.
