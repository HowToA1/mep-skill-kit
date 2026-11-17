# Skill: mep-lobbying (readable copy)

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

**What this document is:** the exact instructions inside **mep-lobbying.zip** (the file SKILL.md). Claude reads them to know how to do this job. They're written *to Claude*, so the tone is like a manual. **To install the skill, upload the zip to Claude; this document is just for reading.**

**When Claude uses this skill:** Plans committee negotiation and General Assembly lobbying for a Model European Parliament (MEP) delegate on any topic. It maps who in the room wants what, builds coalitions, drafts compromise wording that merges competing clauses, designs package deals, counts likely votes per delegation, and writes short persuasive pitches to other delegations, all diplomatically and ethically. Use it whenever someone says "how do I get them on board", "we disagree with X", "merge these clauses", "find a compromise", "who will vote for us", "lobbying", "count the votes", "how to convince [delegation]", or describes a deadlock in committee.

**Reference documents bundled with it:** bulgaria-profile.md, eu-powers-map.md, mep-procedure.md. They are the same documents you can read as Google Docs 02–06 in the main folder.

---



Most resolutions are decided before the vote: in the corridor, at lunch and in the drafting
room. Help the delegate become the person who finds the wording everyone can sign. That is
the most respected role in any MEP committee.

## Inputs
What the user knows about the room: who said what, which clauses are contested, and their
own priorities (from `mep-bulgaria-position`, if it was run). Work with partial notes.

## Toolkit
1. **Interest map.** For each delegation or person: their *position* (what they say), their
   *interest* (why they say it) and their *must-have* vs. *nice-to-have*. Positions clash;
   interests often don't.
2. **Compromise wording bank** (softens without gutting):
   - Scope: "in high-risk cases", "where evidence shows", "in areas under significant pressure"
   - Pace: "progressively", "by [later year]", "following an impact assessment"
   - Form: "encourages" instead of "calls on"; "voluntary framework" instead of "mandatory"
   - Review: "with a review clause after three years"
   - Pilot: "through pilot projects in volunteering member states"
   - Respect: "in full respect of national competences and the principle of subsidiarity"
   - Flexibility: "taking into account national circumstances"
3. **Merging clauses:** keep the strongest verb from one and the clearest actor and lever
   from the other, add a review clause, and check against `references/eu-powers-map.md`.
4. **Package deals:** trade support across clauses ("we back your funding clause; you
   accept our review clause").
5. **Vote count:** a table of delegations as likely for, against or swing, with the reason
   and the argument that moves each swing. Explain the arithmetic of the session (see
   `references/mep-procedure.md`).
6. **Pitches:** 3-sentence messages to a delegation (in person or by note): their interest →
   how our clause serves it → the small ask.

## Output (adapt to the request)
```
## The room
| Delegation/person | Position | Underlying interest | Must-have | Movable on |
## Deal options (ranked by likelihood of acceptance)
1. [Compromise text] — what each side gets
## Merged clause (if asked)
## Vote count
| Delegation | Likely | Why | What moves them |
## Pitches (ready to say)
```

## Ethics and etiquette
- Persuade with interests and evidence; never misrepresent another delegate's words or the facts.
- Keep promises made in lobbying. Reputation compounds over an 8-day session.
- Respect the chair: committee presidents lead but don't take sides, so never ask them to.
- Use Bulgaria's strengths (`references/bulgaria-profile.md`) as a bridge: a cohesion
  country, an external-border state, a new euro member, a Black Sea perspective. These make
  natural coalitions.
