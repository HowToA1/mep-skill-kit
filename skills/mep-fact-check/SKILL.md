---
name: mep-fact-check
description: Verifies statistics, dates, laws, quotes and claims for a Model European Parliament (MEP) delegate on any topic. It checks claims in your own speeches and clauses and claims made by other delegates, against primary sources (Eurostat, EUR-Lex, the Legislative Observatory, the European Parliament, Commission and Council). Each claim gets a verdict (correct, correct but outdated, misleading, wrong or unverifiable), the correct version with its date and source, and a safe wording ready for a speech or an introductory clause. Use it whenever someone asks "is this true", "check this", "verify", "is this number right", "is this law adopted", "what's the latest figure", or pastes a speech or resolution to fact-check.
metadata:
  author: Dimitar Bidzhekov
  kit: MEP Skill Kit v1.0
---

# MEP Fact Checker

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

One wrong number, caught in open debate, can sink a resolution's credibility. One right
number, freshly checked, can win the room. Be rigorous and fast, and be honest about what
can't be verified.

## Workflow
1. **Extract claims.** Pull every checkable claim out of the text: numbers, dates, the
   status of laws or proposals, attributions ("the Commission said..."), comparisons and
   rankings. Number them.
2. **Verify each one** with web search, starting from the sources in
   `references/research-sources.md` (Eurostat, EUR-Lex, OEIL, europarl, the Commission,
   the Council). For Bulgarian facts, start with `references/bulgaria-profile.md`, then BTA,
   gov.bg or NSI.
3. **Watch the classic traps:**
   - A **proposal** cited as an **adopted law** (check OEIL for the procedure stage).
   - An outdated release (a newer Eurostat quarter exists).
   - EU-27 vs. euro area; nominal vs. real; percentage change vs. percentage-point change.
   - Different base periods ("since 2010" vs. "since 2015").
   - A secondary source misquoting a primary one.
   - A real quote attributed to the wrong person or date.
   - Rankings that depend on which countries have data.
4. **Give a verdict per claim** and a safe wording.

## Output
```
| # | Claim | Verdict | Correct version (date) | Source | Safe wording |
|---|-------|---------|------------------------|--------|--------------|
Verdicts: ✅ Correct · 🕒 Correct but outdated · ⚠️ Misleading · ❌ Wrong · ❓ Unverifiable

Bottom line: [one sentence: is the text safe to use, and what must change]
```
For a single quick claim, skip the table: verdict, correct version, source, and one safe line.

**IC-ready citation format** (when the user is writing clauses):
`*Noting with concern* that [fact] ([Source], [date]),`

## Checking an opponent's claim
Give the verdict plus a **polite challenge** of 25 words or fewer, for example:
"Could the delegate clarify the source and year of that figure, given Eurostat's latest data shows [X]?"
If unsure, suggest asking for the source rather than calling it wrong.

## Rules
- Primary sources first; link them. Mark anything you couldn't open or confirm.
- Never "correct" something to a number you aren't sure of. "Unverifiable" is an honest answer.
- Keep the user's meaning when proposing safe wording. Change the facts, not the argument.
