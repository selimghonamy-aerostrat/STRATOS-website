# AeroStrat EBT/CBTA: EBT/CBTA assessment platform for airlines

> From paper records to performance intelligence. AeroStrat EBT/CBTA grades every check against the ICAO nine-competency framework on the airline's own forms, and turns every submission into pilot, cohort and fleet analytics. Built on the ICAO, IATA and EASA method (also ECAA). Live, in daily production at AlMasria Universal Airlines.

Canonical page: https://aero-strat.com/ebt-cbta
For: Training Directors, Heads of Training and TRE/TRI leads.

Key numbers: 9 ICAO core competencies · 73 observable behaviours (IATA wording and numbering) · 329 IATA scenarios for Day 2 planning · 3 analytical altitudes (micro, macro, trend) · 4 one-click outcomes on submission.

## The problem: today's tools record the grade, analysis is still done by hand

EBT/CBTA expects grades derived from observed behaviour, trends tracked across the whole pilot population, and proof that every instructor grades to one standard.

- **Paper and spreadsheets (records, not insight):** grades are cut off from the competency framework; every cohort review and audit response is assembled by hand, and a lost file is a gap in a pilot's record. Result: trends surface too late.
- **An existing ETR system (built to file grades):** designed to store training records, with competencies added later. Instructors still work out competency grades by hand, so consistency depends on the individual. Result: instructor variance unseen.
- **Tools built for the methodology (thin where it matters):** analysis usually stops at the individual pilot; cohort trends, fleet risk and instructor standardisation stay manual, and fixed templates make airlines adapt to the tool. Result: insight stays manual.

## Positioning: the EBT/CBTA layer

AeroStrat EBT/CBTA sits alongside the airline's LMS and can be integrated with AeroStrat TMS.

- **LMS (adjacent system):** delivers e-learning content (course hosting, SCORM playback, knowledge checks). AeroStrat does not deliver e-learning.
- **AeroStrat EBT/CBTA:** calculates competency grades against the ICAO nine-competency framework using the airline's own scoring rules. A signed PDF per evaluation, a permanent per-pilot history with a full edit audit trail, and pilot, cohort and fleet analytics.
- **AeroStrat TMS (integrates):** validity, planning and scheduling, on one pilot record.
- **Responsibilities:** the airline owns every regulatory obligation (implementation plan, safety risk assessment, authority submissions). AeroStrat supports it: captures evidence, recommends grades, applies the correct standard and raises policy flags. The instructor decides and sets the final grade; any override needs a written reason. AeroStrat never overwrites it.

## Native to the EBT transition

Whether an airline is starting EBT or already running it, AeroStrat supports the programme at its current stage and carries it to the next, on one platform. Each airline sets its own stage, with a start date, and moves up with the same records, pilots and history. Each check is graded under the stage in force on its date.

- **Stage 0, Conventional ("train, then check"):** native, live. Item by item: satisfactory / unsatisfactory or pass / fail per item, against flight tolerances, on the scale the authority's form uses. No competency framework needed; a task and manoeuvre list instead.
- **Stage 1, EBT principles ("check, then train"):** native, live. A Day 1 proficiency check comes first; Day 2 training is planned from its findings, with ranked scenarios from the 329 in IATA's EBT workbook. The nine competencies are graded 1–5 as the airline's manual defines, with optional observable behaviours and TEM outcomes.
- **Stage 2, Mixed EBT ("evidence-led"):** native for pilot assessment, live. Evaluation phase, manoeuvres validation and scenario-based training; the licence is still revalidated by check. Recommended grades from evidence, interim and final standards, alerts, policies and flags.
- **Stage 3, Baseline EBT ("full EBT"):** partly roadmap. Same engine, cycles and modules: live. Equivalency tables and line-check intervals: on the roadmap.
- **Enhanced EBT:** needs flight-data integration (future plan).

## On submission: one click, four things happen automatically

1. **Calculates competency grades:** nine competencies graded on the airline's scale, following its sign-off chain. Each grade is derived from observed behaviours by the IATA lowest-of-three method.
2. **Generates a signed PDF report.**
3. **Adds a permanent record** to the pilot's history, with the observed behaviours behind each grade.
4. **Feeds live fleet analytics:** fleet dashboard and cohort comparison updated.

## Grading engine

- Every check graded against the nine ICAO/IATA pilot competencies (KNO application of knowledge, PRO procedures & compliance, COM communication, FPA flight path automation, FPM flight path manual, LTW leadership & teamwork, PSD problem solving & decision making, SAW situation awareness, WLM workload management), with all 73 observable behaviours in IATA's own wording and numbering.
- Each exercise is mapped to the competencies it mainly tests and those it supports.
- Recommended grade by the IATA lowest-of-three rule: how many OBs, how often, TEM outcome.
- "Insufficient evidence" instead of a number when evidence is thin.
- Any item graded 1 or 2 needs observable-behaviour evidence.
- The instructor decides; a different final grade needs a written reason.

## Forms: built from your manual

Rebuilt from the airline's own forms at onboarding: items, grading scale per section, attempts, TEM-applicable items and competency mapping, printed in the layout of the airline's paper form.

- Simulator check (OPC/LPC), line check, training & evaluation, cabin crew, remedial training
- The airline's scale per section: S/U/N-A, PASS/FAIL or 1–5
- First and second attempts recorded

## Day 2 planning

The next session is built from what the last check found. The recurrent programme is planned as cycles, modules and two-day sessions, each with an assigned instructor.

- Open a pilot's Day 1 and see which OBs were demonstrated
- Choose the competencies to develop
- IATA Appendix G.V scenarios ranked by coverage, tagged primary or secondary
- A record of who chose what and when

## Analytics at three altitudes

- **Micro (the single evaluation):** a close look category by category, behaviour by behaviour. Numeric or categorical, detected automatically.
- **Macro (the cohort):** compare every pilot in a class, rank or aircraft type. Tells an individual issue from a programme one (one pilot struggled, or the entire class did), which is the input EBT expects in the next recurrent cycle.
- **Trend (the pilot over time):** a chronological view of one pilot's history: improving, plateauing or slipping.
- **Fleet risk board:** a short, ranked list of the pilots to review first, each linked to the pilot's record and trend view.

## Instructor standardisation

Each instructor's average grade is updated with every submission and compared with the fleet mean, with a tolerance band, so standards stay consistent. Supports instructor standardisation in Mixed EBT. Trainees rate each session through a short link (QR), no login. Director dashboard for instructor ratings.

## Records and audit

Submitting a form calculates the grades, generates a signed PDF, adds a permanent record and feeds live analytics at once. Every edit after submission is logged in an append-only audit trail. Below-standard alerts email the training managers. Records export for IOSA and the airline's authority.

## AI coaching assistant

For pilots with two or more checks, a plain-language coaching and remediation summary. Gated on history, just-culture framing, Director-only switch.

## Product status

**Live:** own forms (simulator, remedial, line check, cabin crew) · grading engine (lowest-of-three, your scale) · reports & signatures (signed PDF, audit trail) · micro/macro/trend analytics · fleet dashboard (KPIs, risk ranking, TEM themes) · instructor comparison · AI coaching & fleet report (Director-gated) · trainee feedback (QR, no login) · currency & validity (3-year cycle expiry alerts).

**Planned next:** malfunction and approach equivalency tables · baseline line-check intervals · instructor Mixed EBT.

**Future plan:** Enhanced EBT with flight-data integration · type rating, MPL and ab initio · pilot self-service · offline app.

## Onboarding: fitted to the airline

AeroStrat develops forms from the airline's training manual, with competency mapping, OBs and TEM, or digitises existing forms exactly as they are. Support and maintenance included.

1. **Discovery:** the training manual and any existing evaluation forms, digital or paper.
2. **Build:** each form developed from the manual, or existing forms digitised as they are.
3. **Configure:** rosters loaded, instructor and Director accounts created, departments set.
4. **Go-live:** grading, reporting and analytics run from the first submission.

## Frequently asked questions

**What is AeroStrat EBT/CBTA?**
Evidence-based training and assessment software for airlines. It grades every check against the nine ICAO/IATA pilot competencies and all 73 observable behaviours, on forms built from the airline's own manual, and turns every submission into pilot, cohort and fleet analytics. It is live, in daily production at AlMasria Universal Airlines.

**How is a competency grade calculated?**
Each grade is derived from observed behaviours by the IATA lowest-of-three method: how many observable behaviours, how often, and the TEM outcome. When the evidence is thin, AeroStrat shows "insufficient evidence" instead of a number.

**Who sets the final grade?**
The instructor. AeroStrat recommends a grade, applies the correct standard and raises policy flags. A different final grade needs a written reason, and AeroStrat never overwrites it.

**Do we need to be running EBT already?**
No. Conventional checking, EBT principles and Mixed EBT (for pilot assessment) are supported natively and live today. Baseline EBT runs on the same engine, with equivalency tables and line-check intervals on the roadmap. Each airline sets its own stage with a start date and moves up with the same records, pilots and history, and each check is graded under the stage in force on its date. Enhanced EBT, which needs flight data, is a future plan.

**How does Day 2 planning work?**
Open a pilot's Day 1 check and see which observable behaviours were demonstrated, then choose the competencies to develop. AeroStrat ranks scenarios from the 329 in IATA's EBT workbook by coverage, and records who chose what and when.

**Is AeroStrat EBT/CBTA an LMS?**
No. It does not deliver e-learning. It sits alongside the airline's LMS, and can be integrated with AeroStrat TMS on one pilot record.

**Which reports does it produce for audits?**
Every submission creates a signed PDF and a permanent record in the pilot's history. Every edit after submission is logged in an append-only audit trail, and records export for IOSA and the airline's authority.

Contact: https://aero-strat.com/contact · info@aero-strat.com
