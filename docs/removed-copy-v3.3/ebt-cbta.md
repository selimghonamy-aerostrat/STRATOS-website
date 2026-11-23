# Removed copy · /ebt-cbta (v3.3)

Copy and markup removed from `EBT-CBTA.dc.html` in the v3.3 simplification, pasted exactly as it was in the template.

## Hero · breadcrumb row (BreadcrumbList JSON-LD kept; label is now "Solutions · EBT/CBTA")

```html
        <nav aria-label="Breadcrumb"><ol className="ds-crumbs"><li><a href="/">Home</a></li><li><a href="/solutions">Solutions</a></li><li aria-current="page">EBT/CBTA</li></ol></nav>
```

## Hero · original topic label with Live pill

```html
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>AeroStrat EBT/CBTA platform <span className="ds-pill live">Live</span></div>
```

## Hero · arc under the headline

```html
        <svg className="ds-arc-under" aria-hidden="true" viewBox="0 0 120 14"><path d="M3 11Q60 0 117 11" pathLength="1"></path></svg>
```

## Hero · original lead (now cut to 22 words: dropped "Unify your training ecosystem." and the "and")

```html
        <p className="ds-lead">Unify your training ecosystem. Every check graded against the ICAO nine-competency framework on your airline's own forms, and every submission turned into pilot, cohort and fleet analytics.</p>
```

## Hero · audience line

```html
        <p className="eb-for">For Training Directors, Heads of Training and <a href="/glossary#tre-tri" className="eb-abbr"><abbr title="Type rating examiner / instructor">TRE/TRI</abbr></a> leads.</p>
```

## Hero · stat strip (now the text line "9 ICAO competencies · 3 altitudes · 4 one-click outcomes" in Analytics)

```html
        <div className="ds-stats eb-stats">
          <div><span className="ds-stat-num" data-count="9">9</span><span className="ds-stat-cap">ICAO core competencies</span></div>
          <div><span className="ds-stat-num" data-count="3">3</span><span className="ds-stat-cap">Analytical altitudes</span></div>
          <div><span className="ds-stat-num" data-count="4">4</span><span className="ds-stat-cap">One-click outcomes</span></div>
        </div>
```

## Hero · standards line

```html
        <p className="eb-std">ICAO · IATA · EASA · <a href="/glossary#ecaa" className="eb-abbr"><abbr title="Egyptian Civil Aviation Authority">ECAA</abbr></a></p>
```

## Section nav · original nine links

```html
    <nav className="ds-snav" aria-label="On this page">
      <div className="ds-snav-in"><a href="#problem">The problem</a><a href="#positioning">Positioning</a><a href="#stages">The transition</a><a href="#ebt-demo">Try it</a><a href="#analytics">Analytics</a><a href="#directors-view">Director's view</a><a href="#status">Product status</a><a href="#onboarding">Onboarding</a><a href="#faq">Questions</a></div>
      <div className="ds-snav-select"><label for="snav-sel" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">On this page</label><select id="snav-sel" aria-label="On this page"><option value="problem">The problem</option><option value="positioning">Positioning</option><option value="stages">The transition</option><option value="ebt-demo">Try it</option><option value="analytics">Analytics</option><option value="directors-view">Director's view</option><option value="status">Product status</option><option value="onboarding">Onboarding</option><option value="faq">Questions</option></select></div>
    </nav>
```

## The problem · original section (headline, tab switcher and closing paragraph)

```html
    <section id="problem" className="ds-sec on-light eb-problem">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>The problem</div>
        <h2 className="ds-h2 eb-h2-wide">Today's tools can record the grade. <span className="tone-2">The analysis is still done by hand.</span></h2>
        <div className="eb-switch" data-rv="">
          <div role="tablist" aria-label="Today's tools" aria-orientation="vertical" className="eb-switch-list">
            <sc-for list="{{ probTabs }}" as="p" hint-placeholder-count="3">
              <button type="button" role="tab" aria-selected="{{ p.on }}" onClick="{{ p.go }}" className="eb-switch-tab"><span className="eb-switch-k">{{ p.k }}</span><span className="eb-switch-t">{{ p.t }}</span></button>
            </sc-for>
          </div>
          <div role="tabpanel" className="eb-switch-panel">
            <p className="eb-switch-body">{{ probCur.body }}</p>
            <p className="eb-switch-res"><span className="eb-dot" aria-hidden="true"></span>{{ probCur.result }}</p>
          </div>
        </div>
        <p className="ds-body eb-after">EBT/CBTA expects grades derived from observed behaviour, trends tracked across the whole pilot population, and proof that every instructor grades to one standard.</p>
      </div>
    </section>
```

## Positioning · whole section (merged into The problem: LMS line folded into the paragraph; the three roles kept as one line)

```html
    <section id="positioning" className="ds-sec on-deep ds-pattern eb-pos">
      <div className="ds-wrap">
        <div className="ds-split">
          <div>
            <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Positioning</div>
            <h2 className="ds-h2">The EBT/CBTA layer.</h2>
          </div>
          <p className="ds-lead">Sits alongside your LMS and can be integrated with AeroStrat TMS, as the competency layer your records were never built for.</p>
        </div>
        <ul className="ds-hl c3 eb-layers" data-rv="">
          <li>
            <span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h6a2 2 0 0 1 2 2V19a1.6 1.6 0 0 0-1.6-1.6H4z"></path><path d="M20 5.5h-6a2 2 0 0 0-2 2V19a1.6 1.6 0 0 1 1.6-1.6H20z"></path></svg></span>
            <span className="ds-hl-k">Adjacent system</span>
            <h3 className="ds-hl-t">LMS</h3>
            <p className="ds-hl-d">Delivers e-learning content: course hosting, SCORM playback, knowledge checks. AeroStrat does not deliver e-learning.</p>
          </li>
          <li className="eb-us">
            <span className="ds-plate sm live"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V11"></path><path d="M10 19V6"></path><path d="M15 19v-5"></path><path d="M20 19V9"></path></svg></span>
            <span className="ds-hl-k">This is us</span>
            <h3 className="ds-hl-t">AeroStrat EBT/CBTA</h3>
            <p className="ds-hl-d">Calculates competency grades against the ICAO nine-competency framework using your airline's own scoring rules. A signed PDF per evaluation, a permanent per-pilot history with a full edit audit trail, and pilot, cohort and fleet analytics.</p>
          </li>
          <li>
            <span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2.5"></rect><path d="M4 10h16"></path><path d="M8.5 3.5v4"></path><path d="M15.5 3.5v4"></path></svg></span>
            <span className="ds-hl-k">Integrates</span>
            <h3 className="ds-hl-t">AeroStrat TMS</h3>
            <p className="ds-hl-d">Validity, planning and scheduling. Integrated with AeroStrat EBT/CBTA on one pilot record.</p>
            <a href="/tms" className="ds-link eb-hl-link">See AeroStrat TMS <span className="arr" aria-hidden="true">→</span></a>
          </li>
        </ul>
        <ul className="ds-hl c3 eb-roles" data-rv="">
          <li><h3 className="ds-hl-t">The airline owns it</h3><p className="ds-hl-d">Every regulatory obligation: implementation plan, safety risk assessment, authority submissions.</p></li>
          <li><h3 className="ds-hl-t">AeroStrat supports it</h3><p className="ds-hl-d">Captures evidence, recommends grades, applies the correct standard and raises policy flags.</p></li>
          <li><h3 className="ds-hl-t">The instructor decides</h3><p className="ds-hl-d">Sets the final grade; any override needs a written reason. AeroStrat never overwrites it.</p></li>
        </ul>
      </div>
    </section>
```

## The transition · original stepper, detail panel, footnote and Coral CTA button

```html
        <div role="tablist" aria-label="EBT stages" className="eb-stepper">
          <sc-for list="{{ stages }}" as="st" hint-placeholder-count="4">
            <button type="button" role="tab" aria-selected="{{ st.on }}" onClick="{{ st.go }}" className="{{ st.cls }}">
              <span className="eb-step-dot" aria-hidden="true"></span>
              <span className="eb-step-name">{{ st.name }}</span>
              <span className="eb-step-motto">{{ st.motto }}</span>
              <span className="ds-pill here eb-here" aria-hidden="{{ st.hereHidden }}">You are here</span>
            </button>
          </sc-for>
        </div>
        <div role="tabpanel" className="ds-glass ds-glass-pad eb-stage-panel">
          <div className="eb-stage-head"><span className="ds-pill live">{{ stCur.status }}</span><h3 className="ds-h3">{{ stCur.name }}: {{ stCur.motto }}</h3></div>
          <p className="ds-body">{{ stCur.desc }}</p>
        </div>
        <div className="eb-stage-foot">
          <p className="eb-note">Each check is graded under the stage in force on its date.</p>
          <a href="{{ stCur.href }}" data-cta="book-walkthrough" className="aerostrat-btn aerostrat-btn-primary">{{ stCur.cta }}</a>
        </div>
      </div>
```

## Try it · footnote

```html
        <p className="eb-note eb-demo-note">Simplified sample. In AeroStrat each competency grade is derived from observed behaviours by the IATA lowest-of-three method, on your airline's own scale.</p>
```

## Try it · form subtitle (dropped "· sample data"; the "Sample data" label stays)

```html
              <div className="eb-form-title"><span className="eb-form-t">Simulator form · Capt. John</span><span className="eb-form-s">A320 · <a href="/glossary#opc-lpc" className="eb-abbr"><abbr title="Operator proficiency check">OPC</abbr></a> · sample data</span></div>
```

## Analytics at three altitudes · original section (tabs Micro/Macro/Trend and their mock-ups)

```html
    <section id="analytics" className="ds-sec on-light eb-alt">
      <div className="ds-wrap">
        <div className="ds-split">
          <div>
            <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Analytics at three altitudes</div>
            <h2 className="ds-h2">Evaluate the pilot. <span className="tone-2">Analyse the cohort. Monitor the fleet.</span></h2>
          </div>
          <p className="ds-lead">Paper and spreadsheets can store a grade. These three views turn a grade into organisational intelligence.</p>
        </div>
        <div className="eb-alt-tabs" role="tablist" aria-label="Altitudes">
          <sc-for list="{{ altTabs }}" as="t" hint-placeholder-count="3"><button type="button" role="tab" aria-selected="{{ t.sel }}" onClick="{{ t.go }}" className="eb-alt-tab"><span className="eb-alt-tl">{{ t.label }}</span></button></sc-for>
        </div>
        <div role="tabpanel" className="eb-alt-panel">
          <div className="eb-alt-text">
            <h3 className="ds-h3">{{ altCur.t }}</h3>
            <p className="ds-body">{{ altCur.desc }}</p>
          </div>
          <div data-enlarge="Analytics at three altitudes · sample data" className="ds-glass ds-ui on-light eb-mock eb-mock-light">
            <div className="eb-mock-bar"><span className="ds-pill sample">Sample data</span><button type="button" data-enlarge-open="" className="eb-enlarge">Enlarge</button></div>
            <sc-if value="{{ isMicro }}" hint-placeholder-val="{{ true }}">
              <div className="eb-micro">
                <span className="eb-cap">Capt. Mike · Sim check · Sep 2026</span>
                <sc-for list="{{ microRows }}" as="m" hint-placeholder-count="9">
                  <div className="eb-micro-row"><span className="eb-code">{{ m.code }}</span><span className="eb-bar"><span style="width:{{ m.w }};background:{{ m.c }}"></span></span><span className="eb-val">{{ m.v }}</span></div>
                </sc-for>
              </div>
            </sc-if>
            <sc-if value="{{ isMacro }}" hint-placeholder-val="{{ false }}">
              <div className="eb-macro">
                <div className="eb-heat">
                  <span></span>
                  <sc-for list="{{ compCodes }}" as="c" hint-placeholder-count="9"><span className="eb-heat-h">{{ c.t }}</span></sc-for>
                  <sc-for list="{{ heatCells }}" as="h" hint-placeholder-count="80"><span className="eb-heat-c" style="color:{{ h.fg }};background:{{ h.bg }}">{{ h.v }}</span></sc-for>
                </div>
                <p className="eb-mock-note">Six of eight pilots flag the same column. That is a programme finding, not an individual one, and exactly the input EBT expects in the next recurrent cycle.</p>
              </div>
            </sc-if>
            <sc-if value="{{ isTrend }}" hint-placeholder-val="{{ false }}">
              <div className="eb-trend">
                <span className="eb-cap">Capt. Chris · Situation awareness (SAW) · last five line checks</span>
                <div className="eb-trend-bars">
                  <sc-for list="{{ trendBars }}" as="b" hint-placeholder-count="5"><div className="eb-trend-col"><span className="eb-val">{{ b.v }}</span><span className="eb-trend-bar" style="height:{{ b.h }};background:{{ b.c }}"></span></div></sc-for>
                </div>
                <div className="eb-trend-q"><sc-for list="{{ trendBars }}" as="b" hint-placeholder-count="5"><span>{{ b.q }}</span></sc-for></div>
                <p className="eb-mock-note">Slipping below standard, visible long before any single report makes it obvious.</p>
              </div>
            </sc-if>
          </div>
        </div>
      </div>
    </section>
```

## Director's view · whole section (merged into Analytics as the Fleet level; id kept as an anchor there)

```html
    <section id="directors-view" className="ds-sec on-navy eb-dir">
      <div className="ds-decor"><div className="ds-orb deep" style="left:-20%;top:-10%"></div></div>
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>The Director's view</div>
        <h2 className="ds-h2 eb-h2-wide">A short list. <span className="tone-2">Not a wall.</span></h2>
        <div className="eb-dir-grid">
          <div data-enlarge="Risk board · sample data" className="ds-glass ds-ui eb-mock eb-risk">
            <div className="eb-mock-head"><span className="eb-mock-t">Risk board · ranked</span><span className="eb-mock-tools"><span className="ds-pill sample">Sample data</span><span className="eb-mock-s">Select a pilot</span><button type="button" data-enlarge-open="" className="eb-enlarge">Enlarge</button></span></div>
            <sc-for list="{{ riskRows }}" as="r" hint-placeholder-count="5">
              <button type="button" onClick="{{ r.go }}" aria-expanded="{{ r.on }}" className="{{ r.cls }}">
                <span className="eb-risk-line"><span className="eb-risk-n">{{ r.n }}</span><span className="eb-risk-name">{{ r.name }}</span><span className="eb-risk-fleet">{{ r.fleet }}</span></span>
                <sc-if value="{{ r.open }}" hint-placeholder-val="{{ false }}"><span className="eb-risk-why">{{ r.why }}</span></sc-if>
              </button>
            </sc-for>
            <p className="eb-mock-foot">Sample data. Each rank links to the pilot's record and trend view.</p>
          </div>
          <div data-enlarge="Instructor comparison · sample data" className="ds-glass ds-ui eb-mock eb-instr">
            <div className="eb-mock-head"><span className="eb-mock-t">Instructor comparison · COM</span><span className="eb-mock-tools"><span className="ds-pill sample">Sample data</span><button type="button" data-enlarge-open="" className="eb-enlarge">Enlarge</button></span></div>
            <span className="eb-mock-s eb-instr-sub">Mean grade, 2026-Q3 · scale 1–5</span>
            <div className="eb-instr-rows">
              <sc-for list="{{ instrRows }}" as="i" hint-placeholder-count="6">
                <div className="eb-instr-row"><span className="eb-instr-name">{{ i.name }}</span><span className="eb-instr-track" style="background:{{ i.band }}"><span className="eb-instr-dot" style="left:{{ i.left }};background:{{ i.c }}"></span></span><span className="eb-val">{{ i.v }}</span><span className="{{ i.tagCls }}">{{ i.tag }}</span></div>
              </sc-for>
            </div>
            <p className="eb-mock-foot">Sample data. Shaded band: the mean for the same scope, ± 0.4. Outside it means Review: flagged for review, never judged automatically.</p>
          </div>
        </div>
        <div className="eb-ai" data-rv="">
          <div>
            <span className="eb-ai-k">AI analysis</span>
            <h3 className="ds-h3">From grades to guidance.</h3>
            <p className="ds-body">For pilots with two or more checks, a plain-language analysis and remediation summary.</p>
          </div>
          <ul className="ds-rows">
            <li className="ds-row">Gated on history</li>
            <li className="ds-row">Just-culture framing</li>
            <li className="ds-row">Director-only switch</li>
          </ul>
        </div>
      </div>
    </section>
```

## Product status · whole section (its key line already lives in the FAQ answer "What is AeroStrat EBT/CBTA?")

```html
    <section id="status" className="ds-sec on-light eb-status">
      <div className="ds-wrap">
        <div className="ds-split">
          <div>
            <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Product status</div>
            <h2 className="ds-h2">Live today. <span className="tone-2">Clear about what comes next.</span></h2>
          </div>
          <p className="ds-lead">Tested for more than 8 months in co-development with two regional airlines.</p>
        </div>
        <div className="eb-status-grid" data-rv="">
          <div className="eb-status-col">
            <span className="ds-pill live">Live</span>
            <ul className="ds-hl c2 eb-status-hl">
              <sc-for list="{{ liveCaps }}" as="c" hint-placeholder-count="9"><li><h3 className="ds-hl-t">{{ c.t }}</h3><p className="ds-hl-d">{{ c.d }}</p></li></sc-for>
            </ul>
          </div>
          <div className="eb-status-col">
            <span className="ds-pill next">Planned next</span>
            <ul className="ds-hl eb-status-hl">
              <li><h3 className="ds-hl-t">Equivalency tables (malfunction and approach)</h3></li>
              <li><h3 className="ds-hl-t">Line-check interval tracking</h3></li>
              <li><h3 className="ds-hl-t">Instructor Mixed EBT</h3></li>
            </ul>
          </div>
          <div className="eb-status-col">
            <span className="ds-pill eb-later">Future plan</span>
            <ul className="ds-hl eb-status-hl">
              <li><h3 className="ds-hl-t">Enhanced EBT with flight-data integration</h3></li>
              <li><h3 className="ds-hl-t">Type rating, <a href="/glossary#mpl" className="eb-abbr"><abbr title="Multi-crew pilot licence">MPL</abbr></a> and ab initio</h3></li>
              <li><h3 className="ds-hl-t">Pilot self-service</h3></li>
              <li><h3 className="ds-hl-t">Offline app</h3></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
```

## Onboarding · original lead (cut "with competency mapping, OBs and TEM" and "Four stages, about five weeks from receiving your manual and forms.")

```html
          <p className="ds-lead">We develop your forms from your training manual, with competency mapping, OBs and <a href="/glossary#tem" className="eb-abbr"><abbr title="Threat and Error Management">TEM</abbr></a>, or digitise your existing forms exactly as they are. Support and maintenance included. Four stages, about five weeks from receiving your manual and forms.</p>
```

## FAQ · two questions removed (also removed from the FAQPage JSON-LD)

```html
          <details className="aerostrat-faq-item">
            <summary><h3>How does Day 2 planning work?</h3></summary>
            <p>Open a pilot's Day 1 check and see which observable behaviours were demonstrated, then choose the competencies to develop. AeroStrat ranks scenarios from the 329 in IATA's EBT workbook by coverage, and records who chose what and when.</p>
          </details>
          <details className="aerostrat-faq-item">
            <summary><h3>Is AeroStrat EBT/CBTA an LMS?</h3></summary>
            <p>No. It does not deliver e-learning. It sits alongside the airline's LMS, and can be integrated with AeroStrat TMS on one pilot record.</p>
          </details>
```

## Up next · whole row

```html
    <nav aria-label="Up next" className="ds-next on-deep" style="border-top:1px solid rgba(255,255,255,0.14)">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/solutions" className="ds-next-a"><span className="ds-next-t">Solutions <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Two connected products for airline pilot training.</span></a>
          <a href="/tms" className="ds-next-a"><span className="ds-next-t">AeroStrat TMS <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Validity, planning, records and audit in one system.</span></a>
          <a href="/glossary" className="ds-next-a"><span className="ds-next-t">EBT and CBTA glossary <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">The terms airline training uses, in plain English.</span></a>
        </div>
      </div>
    </nav>
```

## Component data no longer used (problem tabs, full stage descriptions, altitude tabs, risk board, instructor comparison, live capabilities)

```js
    const probs = [
      { k: 'Paper & spreadsheets', t: 'Records, not insight', body: 'Grades sit on paper forms and spreadsheets, cut off from the competency framework. Every cohort review and audit response is assembled by hand, and a lost file is a gap in a pilot\'s record.', result: 'Result: trends surface too late.' },
      { k: 'Legacy & generic ETR', t: 'Built to file grades', body: 'Designed to store training records, with competencies added later. Instructors still work out competency grades by hand, so consistency depends on the individual, not the system.', result: 'Result: instructor variance unseen.' },
      { k: 'Native EBT/CBTA platforms', t: 'Thin where it matters', body: 'Built for the methodology, but analysis usually stops at the individual pilot. Cohort trends, fleet risk and instructor standardisation stay manual, and fixed templates make airlines adapt to the tool.', result: 'Result: insight stays manual.' }
    ];
    const stages = [
      { name: 'Conventional', motto: 'Train, then check', status: 'Native · Live', desc: 'Item by item: Satisfactory / Unsatisfactory or pass / fail per item, against flight tolerances. The grading scale is whatever the authority\'s form uses. No competency framework needed; a task and manoeuvre list instead.' },
      { name: 'EBT principles', motto: 'Check, then train', status: 'Native · Live', desc: 'A Day 1 proficiency check comes first; Day 2 training is planned from its findings, with ranked scenarios from the 329 in IATA\'s EBT workbook. The nine competencies are graded 1–5 as your manual defines, with optional observable behaviours and TEM outcomes.' },
      { name: 'Mixed EBT', motto: 'Evidence-led', status: 'Native for pilot assessment · Live', desc: 'Evaluation phase, manoeuvres validation and scenario-based training; the licence is still revalidated by check. Recommended grades from evidence, interim and final standards, alerts, policies and flags.' },
      { name: 'Baseline EBT', motto: 'Full EBT', status: 'Native · Live', desc: 'Full EBT on the same engine, cycles and modules, live today. Equivalency tables (malfunction and approach) and line-check interval tracking are planned additions.' }
    ];
    const alts = [
      { label: 'Micro · the single evaluation', t: 'The single evaluation', desc: 'A close, granular look: category by category, behaviour by behaviour. Numeric or categorical, detected automatically.' },
      { label: 'Macro · the cohort', t: 'One pilot struggled. Or the entire class did.', desc: 'Compare every pilot in a class, rank or aircraft type. Macro analysis tells an individual issue from a programme one, and shows who needs what.' },
      { label: 'Trend · the pilot over time', t: 'The pilot, over time', desc: 'A chronological view of one pilot\'s history: improving, plateauing or slipping.' }
    ];
    const risks = [
      ['Capt. Joe', 'A320 · CPT', 'Last four line checks trending downward on Situation Awareness (SAW).'],
      ['Capt. John', 'A320 · CPT', 'Three consecutive grades of 2 on FPA (automation), latest a 1.'],
      ['Capt. Mike', 'A320 · CPT', 'Missed two consecutive recurrent training sessions; currency expiry approaching.'],
      ['Capt. Chris', 'A320 · CPT', 'Plateaued at 3 on Application of Knowledge (KNO) for six months.'],
      ['Capt. Harry', 'B737 · FO', 'A single 2 in a training and evaluation check; review after the next cycle.']
    ];
    const instr = [['Instructor A', 3.5], ['Instructor B', 3.3], ['Instructor C', 3.7], ['Instructor D', 3.4], ['Instructor E', 3.6], ['Instructor F', 2.6]];
    const live = [['Your own forms', 'Simulator, remedial, line check, cabin crew'], ['Grading engine', 'Lowest-of-three, your scale'], ['Reports & signatures', 'Signed PDF, audit trail'], ['Micro / macro / trend', 'Three-altitude analytics'], ['Fleet dashboard', 'KPIs, risk ranking, TEM themes'], ['Instructor comparison', 'Average grade per instructor'], ['AI analysis & fleet report', 'Director-gated'], ['Trainee feedback (QR)', 'No login, time-limited link'], ['Currency & validity', '3-year cycle expiry alerts']];
    const micro = [4, 3, 5, 1, 4, 3, 4, 4, 5];
    const trend = [['Q3 25', 5], ['Q4 25', 4], ['Q1 26', 4], ['Q2 26', 3], ['Q3 26', 2]];
```
