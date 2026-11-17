---
name: mep-resolution
description: Drafts and formats Model European Parliament (MEP) resolutions on any topic, in correct MEP style, with lettered introductory clauses and numbered operative clauses. Before the session it builds a clause bank of ideas, because many sessions forbid pre-written resolutions; during committee work it turns what the committee agreed into a clean resolution and adds a clause-defence table. Every operative clause names the right EU actor, a real legal or financial lever, a timeline and a measurable result. Use it whenever someone wants to write, draft, fix, format, merge, shorten, strengthen or polish a resolution, clauses, ICs or OCs (preambulatory or operative clauses), or asks "how do we phrase this", for MEP, MUN, EYP or school parliaments.
metadata:
  author: Dimitar Bidzhekov
  kit: MEP Skill Kit v1.0
---

# MEP Resolution Drafter

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

A winning resolution is not the longest or the most ambitious. It is the one where **every
operative clause survives the question "who exactly does this, with what power, paid how?"**
Help the committee write clauses like that, and make sure the delegate understands every word.

## Mode
- **Clause-bank mode (default before the session):** grouped *ideas and clause options*,
  each with a softer and a harder version and their trade-offs. Don't assemble a finished
  resolution unless the user confirms their session allows it. MEP committees are meant to
  write together, and arriving with a finished text can count against a delegate.
- **Committee mode (the committee agreed points, or a draft is pasted):** format, tighten and
  improve. Mark your own suggestions clearly as suggestions, because the content belongs to
  the committee.
- If it's unclear, ask: "Preparing ideas before the session, or formatting what your committee agreed?"

## Workflow
1. Load `references/mep-procedure.md` (format, phrase banks, punctuation) and
   `references/eu-powers-map.md` (competences, actors, red flags). Use
   `references/research-sources.md` to source facts.
2. **Problem tree:** the 3–5 causes of the problem and who is most affected (always check
   the youth angle; MEP juries notice it).
3. **Choose 3–4 pillars** that answer the tree. Typical pillars: regulate, fund, protect the
   most affected, and measure and review.
4. **Draft each operative clause against the ACTOR · LEVER · TIME · METRIC check:**
   - Actor: Commission, Council or member states, a named agency, the EIB, regions, or the Parliament itself.
   - Lever: a real power (a legislative proposal under the right article, an existing fund,
     a regulation in force, the Semester, a recommendation) or a clearly national competence
     ("Recommends that member states...").
   - Time: a date, review point or MFF period. Metric: how success is measured.
   Missing elements should be deliberate choices, not accidents.
5. **Legal screen:** replace red-flag phrases using the table in `eu-powers-map.md` (no
   "orders", no EU taxes by the back door, no harmonising supporting-competence areas, no
   nationality discrimination, no unanimity blind spots).
6. **Write the introductory clauses last.** 5–8 dated, sourced facts and references (laws,
   EP resolutions, strategies) that set up exactly what the OCs solve. An IC with no matching
   OC is dead weight.
7. **Format exactly:** the heading line; "The Model European Parliament,"; ICs A., B., C.
   with italic phrases, ending in commas; OCs 1., 2., 3. with bold verbs, ending in
   semicolons; sub-clauses a), b); and a full stop at the very end.
8. **Add the clause-defence table** and 3 "why this works" notes so the delegate learns the pattern.

## Output (committee mode)
```
Committee on [name] ([ACRONYM]) submits the following resolution to the Model European
Parliament about [topic].

The Model European Parliament,

A. *[Phrase]* ...,
...
1. **[Verb]** ...;
...

---
## Clause-defence table
| OC | Plain-words meaning | Why this actor can do it (article / fund) | Evidence | Likely attack | 1-line defence |
## Open choices for the committee
## Why this works (3 bullets)
```

## Output (clause-bank mode)
```
# Clause bank — [topic]
## Pillar 1: [name]
- Option A (bold): ... — strength / risk
- Option B (moderate): ...
## Introductory-clause facts ready to use (dated, sourced)
## Clauses to avoid, and why
## Clauses Bulgaria would especially champion
```

## Quality bar
- Specific beats grand. "Requests Eurostat to publish by 2028 an indicator on X" beats "Calls for an end to X".
- No invented facts, laws or quotes. Check the status of any proposal you cite.
- Balance: something for market-leaning and social-leaning delegations, so the resolution can pass.
- For a worked example of the pattern (on housing), see `references/example-resolution-housing.md`.
- Then suggest running `mep-red-team`.
