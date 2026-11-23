# /tms · copy removed in v3.3

Each block is the exact template markup as it was on branch feat/uiux-v3 before v3.3 (TMS.dc.html).

## Hero · breadcrumb row (folded into the topic label; BreadcrumbList JSON-LD kept)

```html
          <nav aria-label="Breadcrumb"><ol className="ds-crumbs"><li><a href="/">Home</a></li><li><a href="/solutions">Solutions</a></li><li aria-current="page">TMS</li></ol></nav>
```

## Hero · topic label with Live pill

```html
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>AeroStrat TMS · Training management system <span className="ds-pill live">Live</span></div>
```

## Hero · arc under the headline

```html
          <svg className="ds-arc-under" aria-hidden="true" viewBox="0 0 120 14"><path d="M3 11Q60 0 117 11" pathLength="1"></path></svg>
```

## Hero · lead (two sentences, replaced by one sentence)

```html
          <p className="ds-lead">Validity, planning, recurrent training, records and audit in one system. Connects to AeroStrat EBT/CBTA for airlines that subscribe to it.</p>
```

## Hero · audience line

```html
          <p className="tms-for">For Directors of Training, Heads of Training and Crew Training Managers.</p>
```

## Hero · glass mini-console

```html
        <div className="ds-glass tms-mini ds-ui">
          <div className="tms-mini-h"><span>Overview · validity of active crew</span><span className="ds-pill sample">Sample data</span></div>
          <div className="tms-mini-g">
            <div className="tms-mini-k s-valid"><span className="l">Active crew</span><span className="n">148</span></div>
            <div className="tms-mini-k s-exp"><span className="l">Expired</span><span className="n">1</span></div>
            <div className="tms-mini-k s-crit"><span className="l">Critical ≤ 30 d</span><span className="n">3</span></div>
            <div className="tms-mini-k s-warn"><span className="l">Warning 31–60 d</span><span className="n">3</span></div>
          </div>
        </div>
```

## Section nav · previous links

```html
    <nav className="ds-snav" aria-label="On this page">
      <div className="ds-snav-in"><a href="#changes">What changes</a><a href="#tms-demo">Try the console</a><a href="#validity">Validity control</a><a href="#modules">The modules</a><a href="#how-it-works">How it works</a><a href="#integration">Integration</a><a href="#implementation">Implementation</a><a href="#faq">Questions</a></div>
      <div className="ds-snav-select"><label style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)" for="snav-sel">On this page</label><select id="snav-sel" aria-label="On this page"><option value="changes">What changes</option><option value="tms-demo">Try the console</option><option value="validity">Validity control</option><option value="modules">The modules</option><option value="how-it-works">How it works</option><option value="integration">Integration</option><option value="implementation">Implementation</option><option value="faq">Questions</option></select></div>
    </nav>
```

## What changes · Today / With AeroStrat toggle, both panels and the closing statement

```html
          <div className="tms-seg-wrap">
            <div role="tablist" aria-label="Compare" className="tms-seg">
              <sc-for list="{{ chgTabs }}" as="t" hint-placeholder-count="2"><button type="button" role="tab" aria-selected="{{ t.on }}" onClick="{{ t.go }}">{{ t.label }}</button></sc-for>
            </div>
          </div>
        </div>
        <sc-if value="{{ isToday }}" hint-placeholder-val="{{ true }}">
          <div className="tms-chg">
            <ul className="ds-hl c3">
              <li><span className="ds-hl-k">Time</span><h3 className="ds-hl-t">Hours lost to admin</h3><p className="ds-hl-d">The same dates are typed into spreadsheets, forms and emails. Staff check records instead of planning.</p></li>
              <li><span className="ds-hl-k">Errors</span><h3 className="ds-hl-t">One typo, one lapse</h3><p className="ds-hl-d">A wrong date or a missed renewal stays hidden until the roster is built or an inspector asks for the file.</p></li>
              <li><span className="ds-hl-k">Legacy tools</span><h3 className="ds-hl-t">Built for another era</h3><p className="ds-hl-d">Older systems often run on one PC, send no reminders and do not connect to rostering or competency data.</p></li>
            </ul>
            <p className="tms-strip"><span className="tms-strip-l">Records in many systems:</span><span>Cabinets</span><span>Spreadsheets</span><span>Legacy TMS</span><span className="coral">No forward planning</span></p>
          </div>
        </sc-if>
        <sc-if value="{{ isWith }}" hint-placeholder-val="{{ false }}">
          <div className="tms-chg">
            <ul className="ds-hl tms-hl5">
              <sc-for list="{{ withNodes }}" as="w" hint-placeholder-count="5"><li><h3 className="ds-hl-t">{{ w.t }}</h3><p className="ds-hl-d">{{ w.d }}</p></li></sc-for>
            </ul>
            <p className="tms-strip"><span className="tms-strip-px" aria-hidden="true"></span><span>A completed course updates the pilot's record, recalculates the expiry and feeds the plan and KPIs the moment it is entered.</span></p>
          </div>
        </sc-if>
        <p className="tms-statement" data-rv="">The data already exists. What is missing is one modern system that keeps it current automatically.</p>
```

## What changes · data for the With AeroStrat panel (component)

```html
      chgTabs: ['Today', 'With AeroStrat'].map((label, i) => ({ label, on: i === s.chgI ? 'true' : 'false', go: () => this.setState({ chgI: i }) })),
      isToday: s.chgI === 0, isWith: s.chgI === 1,
      withNodes: [['Validity', 'Every expiry, live'], ['Planning', '3-year plan and load'], ['Scheduling', 'Book and notify'], ['Records', 'Digital pilot file'], ['KPIs', 'Compliance at a glance']].map(([t, d]) => ({ t, d })),
```

## Try the console · lead (validity sentence merged in)

```html
          <p className="ds-lead">Filter by status, then record a renewal. The expiry is recalculated from the rule and the pilot leaves the list.</p>
```

## Try the console · footnote under the console (replaced by the dot + word status legend)

```html
          <div className="tms-con-f">Status follows the airline's rules, for example: Valid over 60 days · Warning 31–60 days · Critical 30 days or less · Expired · Missing.</div>
```

## Validity control · whole section (its idea merged into the console lead)

```html
    <section id="validity" className="ds-sec on-light">
      <div className="ds-wrap tms-val">
        <div className="tms-val-copy">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Validity control</div>
          <h2 className="ds-h2">The worst item sets the status.</h2>
          <p className="ds-body tms-val-p">Every licence, medical, check and course is scored against the airline's own rule. One lapsed check flags the whole file. Critical and expired items feed the renewal plan and pilot notifications automatically.</p>
          <div className="tms-rule" role="img" aria-label="Licence, medical, check and course: the worst item sets the overall status">
            <span className="tms-rule-i s-valid"><i></i>Licence</span>
            <span className="tms-rule-i s-valid"><i></i>Medical</span>
            <span className="tms-rule-i s-exp"><i></i>Check</span>
            <span className="tms-rule-i s-warn"><i></i>Course</span>
            <svg className="tms-rule-a" aria-hidden="true" width="40" height="12" viewBox="0 0 40 12"><path d="M1 6H37M32 1.5L37 6L32 10.5"></path></svg>
            <span className="tms-st s-exp">Overall status</span>
          </div>
          <div className="tms-legend"><sc-for list="{{ legend }}" as="l" hint-placeholder-count="5"><span className="tms-st {{ l.cls }}">{{ l.t }}</span></sc-for></div>
        </div>
        <div className="ds-glass tms-pilot ds-ui">
          <div className="tms-pilot-h">
            <span className="tms-pilot-who"><span className="t">F/O S. Ibrahim · B737</span><span className="s"><span className="ds-pill sample">Sample data</span>tap an item to change its status</span></span>
            <span className="tms-pilot-st"><span className="l">Pilot status</span><span className="tms-st {{ worst.cls }}">{{ worst.t }}</span></span>
          </div>
          <sc-for list="{{ valItems }}" as="v" hint-placeholder-count="5">
            <button type="button" onClick="{{ v.go }}" className="tms-pilot-r {{ v.rowCls }}"><span>{{ v.item }}</span><span className="tms-st {{ v.cls }}">{{ v.t }}</span></button>
          </sc-for>
        </div>
      </div>
    </section>
```

## Validity control · component state and data (pilot status demo)

```html
    // status scale: 0 expired, 1 critical, 2 warning, 3 missing, 4 valid (rank: worst first)
    const ST = [
      { t: 'Expired', cls: 's-exp', rank: 0 },
      { t: 'Critical', cls: 's-crit', rank: 1 },
      { t: 'Warning', cls: 's-warn', rank: 3 },
      { t: 'Missing', cls: 's-miss', rank: 2 },
      { t: 'Valid', cls: 's-valid', rank: 4 }
    ];
    const STD = { EXPIRED: { cls: 's-exp', t: 'Expired' }, RED: { cls: 's-crit', t: 'Critical' }, YELLOW: { cls: 's-warn', t: 'Warning' }, MISSING: { cls: 's-miss', t: 'Missing' }, GREEN: { cls: 's-valid', t: 'Valid' } };
    const valNames = ['Licence', 'Class 1 medical', 'Operator proficiency check', 'Line check', 'Dangerous goods'];
    const worstI = s.val.reduce((w, v) => ST[v].rank < ST[w].rank ? v : w, 4);
      legend: [ST[4], ST[2], ST[1], ST[0], ST[3]].map(x => ({ t: x.t === 'Valid' ? 'Valid · current' : x.t, cls: x.cls })),
      valItems: valNames.map((item, i) => { const x = ST[s.val[i]]; return { item, t: x.t, cls: x.cls, rowCls: x.rank < 2 ? 'is-hot' : '', go: () => this.setState(st => { const v = st.val.slice(); v[i] = (v[i] + 1) % 5; return { val: v }; }) }; }),
      worst: { t: ST[worstI].t, cls: ST[worstI].cls },
```

## The modules · lead with "Select a module."

```html
          <p className="ds-lead">Configured to the airline's Operations Manual, training rules and fleets. Select a module.</p>
```

## The modules · tabbed module switcher and detail panel

```html
        <div role="tablist" aria-label="Modules" className="tms-mods">
          <sc-for list="{{ modTabs }}" as="t" hint-placeholder-count="6"><button type="button" role="tab" aria-selected="{{ t.on }}" onClick="{{ t.go }}" className="tms-mod"><span className="{{ t.plate }}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="{{ t.ic }}"></path></svg></span><span className="tms-mod-t">{{ t.title }}</span></button></sc-for>
        </div>
        <div role="tabpanel" className="tms-mod-panel">
          <div className="tms-mod-head">
            <span className="tms-mod-k">{{ modCur.k }}</span>
            <h3 className="ds-h3">{{ modCur.h }}</h3>
            <p className="ds-body">{{ modCur.lead }}</p>
          </div>
          <ul className="ds-rows tms-mod-pts">
            <sc-for list="{{ modCur.pts }}" as="p" hint-placeholder-count="4"><li className="ds-row">{{ p.t }}</li></sc-for>
          </ul>
        </div>
```

## The modules · component data (icons, titles, headlines, leads, points)

```html
    // module icons: 24px grid, simple strokes
    const IC = [
      'M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4',
      'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
      'M3 6h6l2 2h10v11H3zM8 14h8',
      'M4 20h16M7 16v-4M12 16V7M17 16v-7',
      'M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4',
      'M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18zM12 7v5l3 2'
    ];
    const mods = [
      { title: 'Recurrent cycle', k: 'Module · recurrent cycle', h: 'The 3-year cycle, run per pilot.', lead: 'Phases, base-month groups and checklists built from the airline\'s recurrent programme. A passed check or course writes the completion and new expiry to the pilot\'s record.', pts: ['Seasonal phases, e.g. cold and hot weather operations', 'Base-month groups built from each pilot\'s check expiry', 'Lapse warnings for checks that expire before the plan', 'Cycle KPIs: completion, on-time, first-pass and remedial rates'] },
      { title: 'Planning & scheduling', k: 'Module · planning & scheduling', h: 'Demand known months ahead. Slots booked before anything lapses.', lead: 'Every renewal placed by expiry and lead time, with the reason shown for each month. Overdue items are pulled into the first planning month automatically.', pts: ['3-year renewal plan by month', 'Monthly load: peaks visible before they happen', 'Simulator groups aligned to each pilot\'s check expiry', 'Email on booking, change and cancellation'] },
      { title: 'Records & audit', k: 'Module · records & audit', h: 'One digital file per pilot.', lead: 'Records, documents and the audit trail, ready for the inspector at any time. Crew-system imports are reconciled against training records, so gaps are found before the auditor finds them.', pts: ['Record one pilot or a full class in one step', 'Documents flagged when missing or out of date', 'Pilot file in six folders, encrypted ZIP export for an inspection', 'Every change logged: who, when and how'] },
      { title: 'KPIs & reporting', k: 'Module · KPIs & reporting', h: 'Training performance, measured.', lead: 'Monthly, quarterly and yearly reports for the Director, by fleet and activity. Every KPI target is set by the airline\'s training department.', pts: ['Training compliance and on-time renewal rate', 'Overdue items and data gaps', 'First-pass and remedial training rates', 'MEETS / WATCH / BELOW status, export to PDF or Excel'] },
      { title: 'Pilot portal & notices', k: 'Module · pilot portal', h: 'Pilots see their own status.', lead: 'Self-service access for every pilot, and automatic messages that close the loop. Pilots stop asking the office for their dates.', pts: ['Licence, medical, ratings, qualifications and upcoming training', 'Email ahead of each expiry, e.g. 45 days, passports 90', 'Planned, changed or cancelled training by email', 'Daily digest of changes and expiries for admins'] },
      { title: 'Expiry engine', k: 'Built on the regulation', h: 'Calculated, not typed.', lead: 'Validity periods, renewal windows and expiry counting configured to the airline\'s OM-D and national authority. Every expiry traced to its rule.', pts: ['Calendar-month and end-of-month counting', 'Renewal windows keep the original expiry', 'Medical interval set per pilot', 'Check spacing validated against OM limits'] }
    ];
      modTabs: mods.map((m, i) => ({ title: m.title, ic: IC[i], plate: 'ds-plate sm' + (i === s.modI ? ' live' : ''), on: i === s.modI ? 'true' : 'false', go: () => this.setState({ modI: i }) })),
      modCur: Object.assign({}, mods[s.modI], { pts: mods[s.modI].pts.map(t => ({ t })) }),
```

## How it works · line under the loop

```html
            <p className="tms-loop-foot">Every pilot current. Every record ready for the inspector.</p>
```

## Integration · whole section (merged into How it works as one line and a text link)

```html
    <section id="integration" className="ds-sec on-light">
      <div className="ds-wrap">
        <div className="ds-split">
          <div>
            <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Integration</div>
            <h2 className="ds-h2">Records and competency grades. <span className="tone-2">One platform.</span></h2>
          </div>
          <p className="ds-lead">For airlines subscribed to AeroStrat EBT/CBTA, both systems share one crew list, one pilot record and one login.</p>
        </div>
        <div className="tms-int">
          <ul className="ds-hl tms-int-pair">
            <li><span className="ds-hl-k">Compliance</span><h3 className="ds-hl-t">AeroStrat TMS</h3><p className="ds-hl-d">Validity, planning, records and audit.</p></li>
            <li><span className="ds-hl-k">Competence</span><h3 className="ds-hl-t">AeroStrat EBT/CBTA</h3><p className="ds-hl-d">Simulator and line evaluations graded on the competency framework.</p><a className="ds-link" href="/ebt-cbta">See AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></a></li>
          </ul>
          <div className="tms-vis" aria-hidden="true">
            <svg viewBox="0 0 560 340" width="560" height="340" className="tms-v3 ds-ui">
              <defs><linearGradient id="tmsArc" x1="0" x2="1"><stop offset="0" stop-color="#3F9EE8"></stop><stop offset="1" stop-color="#FF5A13"></stop></linearGradient></defs>
              <g className="tms-mini-a" transform="translate(40 110)">
                <rect width="18" height="18" rx="4" className="f"></rect><rect x="26" width="18" height="18" rx="4" className="f"></rect><rect x="52" width="18" height="18" rx="4" className="f"></rect>
                <rect y="26" width="18" height="18" rx="4" className="f"></rect><rect x="26" y="26" width="18" height="18" rx="4" className="c"></rect><rect x="52" y="26" width="18" height="18" rx="4" className="f"></rect>
                <rect y="52" width="18" height="18" rx="4" className="f"></rect><rect x="26" y="52" width="18" height="18" rx="4" className="f"></rect><rect x="52" y="52" width="18" height="18" rx="4" className="f"></rect>
                <text x="0" y="98">Competence</text>
              </g>
              <g className="tms-mini-b" transform="translate(400 120)">
                <line x1="0" y1="40" x2="130" y2="40" className="axis"></line>
                <rect x="0" y="12" width="40" height="16" rx="5" className="v"></rect><rect x="46" y="12" width="40" height="16" rx="5" className="w"></rect><rect x="92" y="12" width="38" height="16" rx="5" className="x"></rect>
                <text x="0" y="88">Compliance</text>
              </g>
              <path className="ds-arcline tms-v3-arc" pathLength="1" data-draw="" d="M112 145 Q 170 70 228 150" stroke="url(#tmsArc)"></path>
              <path className="ds-arcline tms-v3-arc" pathLength="1" data-draw="" d="M332 150 Q 366 70 400 140" stroke="url(#tmsArc)"></path>
              <g className="tms-record" transform="translate(222 128)"><rect width="116" height="48" rx="12"></rect><rect x="12" y="18" width="12" height="12" rx="3" className="px"></rect><text x="32" y="29">One pilot record</text></g>
              <text x="530" y="320" className="tms-sample" text-anchor="end">Sample data</text>
            </svg>
          </div>
        </div>
        <ul className="ds-hl c3 tms-int-pts">
          <li><h3 className="ds-hl-t">Automatic completion</h3><p className="ds-hl-d">A completed, graded session updates the TMS record and the next expiry. No double entry.</p></li>
          <li><h3 className="ds-hl-t">One Director view</h3><p className="ds-hl-d">Validity, competency trends and instructor concordance side by side, per pilot and per fleet.</p></li>
          <li><h3 className="ds-hl-t">On the roadmap: airline LMS</h3><p className="ds-hl-d">Connect to the airline's existing LMS. AeroStrat does not build an LMS.</p></li>
        </ul>
      </div>
    </section>
```

## Implementation · migrate / configure / validate columns and the note

```html
        <div className="ds-hl tms-impl">
          <div><span className="ds-hl-k">We migrate</span><ul className="tms-mig"><sc-for list="{{ migrate }}" as="m" hint-placeholder-count="8"><li>{{ m.t }}</li></sc-for></ul></div>
          <div><span className="ds-hl-k">We configure</span><h3 className="ds-hl-t">Training rules</h3><p className="ds-hl-d">From your Operations Manual.</p><h3 className="ds-hl-t">Recurrent programme</h3><p className="ds-hl-d">Courses, phases, simulator cycle.</p></div>
          <div><span className="ds-hl-k">We validate</span><h3 className="ds-hl-t">Reconciliation</h3><p className="ds-hl-d">Checked against the source data.</p><h3 className="ds-hl-t">Director sign-off</h3><p className="ds-hl-d">Approved before go-live.</p></div>
        </div>
        <p className="ds-body tms-impl-note">Every record mapped to the pilot, every expiry recalculated, every document filed in the pilot's digital file. Users are trained on the live system with their own data.</p>
```

## Implementation · component data (migrate list)

```html
      migrate: ['Excel training sheets', 'Paper records', 'Legacy TMS data', 'Crew master & rosters', 'Training history', 'Certificates & scans', 'Licences & medicals', 'Simulator & check records'].map(t => ({ t }))
```

## FAQ · removed questions (FAQPage JSON-LD updated to match)

```html
          <details className="aerostrat-faq-item">
            <summary><h3>Do pilots get reminders before something expires?</h3></summary>
            <p>Yes. Pilots get an email ahead of each expiry, for example 45 days before, or 90 for passports, and when training is planned, changed or cancelled. They also see their own status in the pilot portal.</p>
          </details>
          <details className="aerostrat-faq-item">
            <summary><h3>Does it work with AeroStrat EBT/CBTA?</h3></summary>
            <p>Yes, for airlines that subscribe to both. They share one crew list, one pilot record and one login, so a completed, graded session updates the TMS record and the next expiry with no double entry.</p>
          </details>
```
## Up next · navigation after the closing CTA (as on the v3.3 home page; the footer carries the same links)

```html
    <nav aria-label="Up next" className="ds-next on-deep" style="border-top:1px solid rgba(255,255,255,0.14)">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/solutions" className="ds-next-a"><span className="ds-next-t">Solutions <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Two connected products for airline pilot training.</span></a>
          <a href="/ebt-cbta" className="ds-next-a"><span className="ds-next-t">AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Every check graded against the nine ICAO competencies.</span></a>
          <a href="/contact" className="ds-next-a"><span className="ds-next-t">Contact us <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">A 30-minute walkthrough on your own data.</span></a>
        </div>
      </div>
    </nav>
```
