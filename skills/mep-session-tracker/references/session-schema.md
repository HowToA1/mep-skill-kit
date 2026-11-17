# MEP Session Record — Schema v1.0

*MEP Skill Kit v1.0 · by Dimitar Bidzhekov*

One JSON file per session. It is designed to be the data model for an online MEP session
tracker: committees, resolutions, clauses, amendments, speeches and votes, all linked by IDs.
Unknown values are `null`; never guess them.

```json
{
  "schema_version": "1.0",
  "session": {
    "id": "imep-64-porto-2026",
    "name": "64th International Model European Parliament",
    "city": "Porto", "country": "Portugal",
    "start_date": "2026-11-19", "end_date": "2026-11-26",
    "tracked_by": "Delegation of Bulgaria"
  },
  "delegations": [
    {"id": "BG", "country": "Bulgaria", "members": [{"name": "First name or initials", "committee_id": "AFET"}]}
  ],
  "committees": [
    {"id": "AFET", "name": "Committee on Foreign Affairs", "question": "...", "president": null}
  ],
  "resolutions": [
    {
      "id": "RES-AFET",
      "committee_id": "AFET",
      "status": "draft | submitted | debated | passed | failed",
      "introductory_clauses": [{"id": "A", "text": "..."}],
      "operative_clauses": [{"id": "1", "text": "...", "sub": [{"id": "a", "text": "..."}]}],
      "ga_slot": {"date": "2026-11-25", "order": 1, "start": "09:30", "end": "10:45"}
    }
  ],
  "amendments": [
    {
      "id": "AM-AFET-1",
      "resolution_id": "RES-AFET",
      "target_clause": "OC 4",
      "type": "add | delete | change",
      "submitted_by": "BG",
      "original_text": "...", "amended_text": "...",
      "committee_recommendation": "for | against | null",
      "result": "passed | failed | not_selected | null",
      "votes": {"for": null, "against": null, "abstain": null}
    }
  ],
  "speeches": [
    {
      "id": "SP-1",
      "resolution_id": "RES-AFET",
      "type": "intro | opening | against | closing | amendment_defence | committee_response | open_debate",
      "speaker_delegation": "BG",
      "duration_sec": null,
      "key_points": ["..."]
    }
  ],
  "votes": [
    {
      "resolution_id": "RES-AFET",
      "for": null, "against": null, "abstain": null,
      "by_delegation": {"BG": "for"},
      "result": "passed | failed"
    }
  ],
  "events": [
    {"timestamp": "2026-11-25T09:42", "type": "note | point | question | procedure", "text": "...", "resolution_id": null}
  ]
}
```

## Privacy
Store other students' names only as their delegation, or as initials, unless they have
agreed otherwise. The record is about the simulation, not about people.
