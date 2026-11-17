---
name: mep-speeches
description: Writes timed, delivery-ready speeches for a Model European Parliament (MEP) session on any topic. Covers the head-of-delegation introduction, the opening speech presenting a resolution, the speech against, the closing speech (with fill-in slots to answer the speech against live), amendment defences and committee responses, and 30-second open-debate answers. Each speech comes with a word count, estimated time, delivery marks, rebuttal-ready backup lines and, where useful, a Bulgarian angle. Use it whenever someone needs a speech, opening, closing, intro, statement, a "speech against", talking points, or wants to rewrite, shorten, time or rehearse a speech for MEP, MUN or a debate.
metadata:
  author: Dimitar Bidzhekov
  kit: MEP Skill Kit v1.0
---

# MEP Speech Writer

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

In a General Assembly of 150+ students, speeches are remembered for **one clear idea, one
human moment and one fact nobody else had**. Write for the ear, to the clock, and in a voice
the delegate can deliver naturally.

## Speech types and defaults (check the session's limits)
| Type | Time | Words (about 125 wpm; use 115 for nervous or non-native speakers) |
|---|---|---|
| Head-of-delegation intro | 1.5–3 min (handbooks vary, so check) | 190–375 |
| Opening speech (presenting the resolution) | 3 min | about 360 |
| Speech against | 3 min | about 360 |
| Closing speech (for the resolution) | 3 min | about 360, with about 40% left as live slots |
| Amendment defence / committee response | 2 min | about 250 |
| Open-debate answer | 30–45 s | 60–90 |

## Workflow
1. Identify the type, time limit, resolution text (if relevant), the speaker's delegation
   (default Bulgaria) and anything the speaker wants to emphasise.
2. Check etiquette in `references/mep-procedure.md`: third person, "Madam/Mr President",
   no personal attacks.
3. Pick **one core message** (a sentence of 12 words or fewer). Everything else serves it.
4. Structure:
   - **Opening speech:** hook (a striking dated fact, or a clearly framed hypothetical:
     "Imagine a 19-year-old in Plovdiv...") → the problem in two sentences → the resolution's
     logic in 3 pillars (cite OC numbers) → pre-empt the obvious objection → a call to vote.
   - **Speech against:** acknowledge the good intent (credibility) → 3 attacks ranked by
     strength (competence, funding, consequences) → what a better resolution would do →
     a call to vote against.
   - **Closing speech:** thank the speech against → answer its 2–3 points (leave
     **[SLOT]**s to fill live, each with prepared answers to the likeliest attacks) → restate
     the core message → a memorable final line.
   - **Intro:** greeting to the Presidency and Porto → Bulgaria in one striking fact →
     3 themes the delegation cares about → a promise of cooperation → a closing line.
5. Use facts only with dates and sources (`references/research-sources.md`); use
   `references/bulgaria-profile.md` for the Bulgarian angle. **Never invent a statistic or an
   anecdote presented as real.** Hypotheticals must sound hypothetical.
6. Add delivery marks: `/` short pause, `//` long pause, **bold** for stress, [look up] for eye contact.

## Output
```
## [Speech type] — [topic] — target [time]
Core message: "..."

[Speech text with delivery marks]

---
Word count: X | Estimated time: m:ss at 125 wpm (m:ss at 115)
Delivery notes: 3 bullets (pace, where to slow down, gesture/eye contact)
Backup lines: 2 one-liners if attacked on [likely point]
Cut list: what to drop first if time runs short
```

## Style rules
- Short sentences. Concrete nouns. One number per paragraph at most.
- The rule of three, contrast ("not X, but Y") and callbacks to the opening line work well in big rooms.
- No pronouns referring to the speaker ("I think"). Use "The delegation of Bulgaria believes...".
- Humour only if it's light and inclusive.
- Offer to run `mep-sparring` so the delegate can practise against the likely responses.
