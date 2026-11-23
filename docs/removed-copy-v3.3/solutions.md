# /solutions · copy removed in v3.3

Each block is the exact template markup (or component data) from Solutions.dc.html on branch feat/uiux-v3 before v3.3.

## Hero · breadcrumb row, arc-under and original lead (two sentences)

```html
        <nav aria-label="Breadcrumb"><ol className="ds-crumbs"><li><a href="/">Home</a></li><li aria-current="page">Solutions</li></ol></nav>
        <svg className="ds-arc-under" aria-hidden="true" viewBox="0 0 120 14"><path d="M3 11Q60 0 117 11" pathLength="1"></path></svg>
        <p className="ds-lead sol-hero-lead">AeroStrat EBT/CBTA grades competency by the ICAO, IATA and EASA method. AeroStrat TMS keeps every pilot current and every renewal planned.</p>
```

## Hero · entry paths (repeated the Two products section)

```html
        <div className="ds-paths sol-paths">
          <a href="#sol-ebt" className="ds-path"><span className="ds-path-k">Competence</span><span className="ds-path-t">AeroStrat EBT/CBTA</span><span className="ds-path-d">Competency assessment and training records</span><span className="ds-path-a" aria-hidden="true">↓</span></a>
          <a href="#sol-tms" className="ds-path"><span className="ds-path-k">Compliance</span><span className="ds-path-t">AeroStrat TMS</span><span className="ds-path-d">Validity, planning, records and audit</span><span className="ds-path-a" aria-hidden="true">↓</span></a>
          <a href="#sol-together" className="ds-path"><span className="ds-path-k">Together</span><span className="ds-path-t">How they work together</span><span className="ds-path-d">One crew list, one pilot record, one login</span><span className="ds-path-a" aria-hidden="true">↓</span></a>
        </div>
```

## Our direction · domains row (lives on Home and About)

```html
    <section className="ds-sec tight on-light sol-dom">
      <div className="ds-wrap">
        <div className="sol-head">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Our direction</div>
          <h2 className="ds-h2">Where we started, and what comes next.</h2>
        </div>
        <div className="ds-route">
          <svg className="ds-route-path" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 92 Q 500 -40 1000 92"></path></svg>
          <ol className="ds-domains">
            <li className="ds-dom live" data-rv="">
              <span className="ds-plate live"><svg className="as-ic" aria-hidden="true"><use href="/uploads/svg/icons/sprite.svg#training"></use></svg></span>
              <span className="ds-wp" aria-hidden="true"></span>
              <span className="ds-pill live">Live</span>
              <h3 className="ds-dom-t">Training</h3>
              <p className="ds-dom-l">Live today.</p>
              <a href="/solutions" className="ds-link ds-dom-link">See the training solution <span className="arr" aria-hidden="true">→</span></a>
            </li>
            <li className="ds-dom" data-rv="">
              <span className="ds-plate"><svg className="as-ic" aria-hidden="true"><use href="/uploads/svg/icons/sprite.svg#safety"></use></svg></span>
              <span className="ds-wp" aria-hidden="true"></span>
              <span className="ds-pill next">Next</span>
              <h3 className="ds-dom-t">Safety &amp; Compliance</h3>
              <p className="ds-dom-l">Safety evidence, connected.</p>
            </li>
            <li className="ds-dom" data-rv="">
              <span className="ds-plate"><svg className="as-ic" aria-hidden="true"><use href="/uploads/svg/icons/sprite.svg#flight-ops"></use></svg></span>
              <span className="ds-wp" aria-hidden="true"></span>
              <span className="ds-pill next">Next</span>
              <h3 className="ds-dom-t">Flight Operations</h3>
              <p className="ds-dom-l">Crew readiness in one record.</p>
            </li>
            <li className="ds-dom" data-rv="">
              <span className="ds-plate"><svg className="as-ic" aria-hidden="true"><use href="/uploads/svg/icons/sprite.svg#maintenance"></use></svg></span>
              <span className="ds-wp" aria-hidden="true"></span>
              <span className="ds-pill next">Next</span>
              <h3 className="ds-dom-t">Maintenance &amp; Engineering</h3>
              <p className="ds-dom-l">Technical people, tracked.</p>
            </li>
            <li className="ds-dom" data-rv="">
              <span className="ds-plate"><svg className="as-ic" aria-hidden="true"><use href="/uploads/svg/icons/sprite.svg#network"></use></svg></span>
              <span className="ds-wp" aria-hidden="true"></span>
              <span className="ds-pill next">Next</span>
              <h3 className="ds-dom-t">Network Planning</h3>
              <p className="ds-dom-l">Capacity meets readiness.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
```

## AeroStrat EBT/CBTA · product section with module tabs and mock-up

```html
    <section id="sol-ebt" className="ds-sec tight on-navy sol-prod">
      <div className="ds-decor"><div className="ds-orb deep" style="right:-24%;top:-12%"></div></div>
      <div className="ds-wrap sol-prod-grid">
        <div className="sol-prod-copy">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>AeroStrat EBT/CBTA · Competence</div>
          <h2 className="ds-h2 sol-prod-h">Every grade consistent. <span className="tone-2">Every skill measured.</span></h2>
          <p className="ds-body sol-prod-p">Evidence-based training and assessment for airline recurrent pilot training. Grading, training planning, analytics and records in one system, built on the ICAO, IATA and EASA method. Select a module.</p>
          <ul className="ds-rows sol-prod-rows">
            <sc-for list="{{ ebtRows }}" as="sp" hint-placeholder-count="4"><li className="ds-row"><span><b className="sol-num">{{ sp.v }}</b> {{ sp.l }}</span></li></sc-for>
          </ul>
          <a href="/ebt-cbta" className="ds-link sol-prod-link">See AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></a>
        </div>
        <div className="ds-glass sol-mock ds-ui">
          <div role="tablist" aria-label="AeroStrat EBT/CBTA modules" className="sol-tabs">
            <sc-for list="{{ ebtTabs }}" as="t" hint-placeholder-count="7"><button type="button" role="tab" aria-selected="{{ t.sel }}" onClick="{{ t.go }}" className="sol-tab">{{ t.title }}</button></sc-for>
          </div>
          <div role="tabpanel" className="sol-panel">
            <div className="sol-spec-row"><span className="sol-spec">{{ ebtCur.spec }}</span><span className="ds-pill sample">Sample data</span></div>
            <h3 className="sol-mtitle">{{ ebtCur.title }}</h3>
            <p className="sol-mlead">{{ ebtCur.lead }}</p>
            <div className="sol-pbody">
            <ul className="sol-points">
              <sc-for list="{{ ebtCur.points }}" as="pt" hint-placeholder-count="4"><li>{{ pt.t }}</li></sc-for>
            </ul>
            <div className="sol-sample">
              <div className="sol-sample-h">{{ ebtCur.sampleTitle }}</div>
              <sc-for list="{{ ebtCur.sample }}" as="r" hint-placeholder-count="5"><div className="sol-srow"><span className="sol-sab"><span className="sol-sa">{{ r.a }}</span><span className="sol-sb">{{ r.b }}</span></span><span className="{{ r.cls }}">{{ r.c }}</span></div></sc-for>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
```

## AeroStrat TMS · product section with module tabs and mock-up

```html
    <section id="sol-tms" className="ds-sec tight on-navy sol-prod sol-prod-rev">
      <div className="ds-decor"><div className="ds-orb deep" style="left:-24%;top:-8%"></div></div>
      <div className="ds-wrap sol-prod-grid">
        <div className="sol-prod-copy">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>AeroStrat TMS · Compliance</div>
          <h2 className="ds-h2 sol-prod-h">Every pilot current. <span className="tone-2">Every renewal planned.</span></h2>
          <p className="ds-body sol-prod-p">The training management system. Validity, planning, recurrent training, records and audit in one place, configured to the airline's Operations Manual and authority. Select a module.</p>
          <ul className="ds-rows sol-prod-rows">
            <sc-for list="{{ tmsRows }}" as="sp" hint-placeholder-count="4"><li className="ds-row"><span><b className="sol-num">{{ sp.v }}</b> {{ sp.l }}</span></li></sc-for>
          </ul>
          <a href="/tms" className="ds-link sol-prod-link">See AeroStrat TMS <span className="arr" aria-hidden="true">→</span></a>
        </div>
        <div className="ds-glass sol-mock ds-ui">
          <div role="tablist" aria-label="AeroStrat TMS modules" className="sol-tabs">
            <sc-for list="{{ tmsTabs }}" as="t" hint-placeholder-count="7"><button type="button" role="tab" aria-selected="{{ t.sel }}" onClick="{{ t.go }}" className="sol-tab">{{ t.title }}</button></sc-for>
          </div>
          <div role="tabpanel" className="sol-panel">
            <div className="sol-spec-row"><span className="sol-spec">{{ tmsCur.spec }}</span><span className="ds-pill sample">Sample data</span></div>
            <h3 className="sol-mtitle">{{ tmsCur.title }}</h3>
            <p className="sol-mlead">{{ tmsCur.lead }}</p>
            <div className="sol-pbody">
            <ul className="sol-points">
              <sc-for list="{{ tmsCur.points }}" as="pt" hint-placeholder-count="4"><li>{{ pt.t }}</li></sc-for>
            </ul>
            <div className="sol-sample">
              <div className="sol-sample-h">{{ tmsCur.sampleTitle }}</div>
              <sc-for list="{{ tmsCur.sample }}" as="r" hint-placeholder-count="5"><div className="sol-srow"><span className="sol-sab"><span className="sol-sa">{{ r.a }}</span><span className="sol-sb">{{ r.b }}</span></span><span className="{{ r.cls }}">{{ r.c }}</span></div></sc-for>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
```

## How they work together · second sentence of the lead

```html
Follow one pilot's proficiency check through both: every step writes to the same record, so nothing is typed twice.
```

## How they work together · four-step journey panel

```html
          <div className="ds-glass ds-glass-pad sol-journey">
            <ol role="tablist" aria-label="Steps" className="ds-steps sol-jsteps">
              <sc-for list="{{ togSteps }}" as="st" hint-placeholder-count="4"><li role="presentation" className="{{ st.cls }}"><button type="button" role="tab" aria-selected="{{ st.sel }}" onClick="{{ st.go }}" className="sol-jtab"><span className="ds-steps-k">{{ st.sys }}</span><span className="ds-steps-t">{{ st.title }}</span></button></li></sc-for>
            </ol>
            <div role="tabpanel" className="sol-jpanel">
              <h3 className="ds-h3">{{ togCur.title }}</h3>
              <p className="ds-body">{{ togCur.what }}</p>
              <p className="sol-jlabel">Written in this step</p>
              <ul className="ds-rows sol-jrows"><sc-for list="{{ togCur.writes }}" as="c" hint-placeholder-count="3"><li className="ds-row">{{ c.t }}</li></sc-for></ul>
              <div className="sol-jnav">
                <button type="button" onClick="{{ stPrev }}" aria-label="Previous step" className="sol-jbtn">&larr;</button>
                <button type="button" onClick="{{ stNext }}" aria-label="Next step" className="sol-jbtn">&rarr;</button>
              </div>
            </div>
          </div>
```

## What is shared, and who writes it · architecture section

```html
    <section id="architecture" className="ds-sec ds-band on-deep ds-pattern sol-arch">
      <div className="ds-wrap">
        <div className="ds-split">
          <div>
            <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Architecture · one pilot record</div>
            <h2 className="ds-h2">What is shared, and who writes it.</h2>
          </div>
          <p className="ds-lead">Both products read and write the same records. Tap a record type to see where its data comes from and where it goes.</p>
        </div>
        <div className="sol-dm">
          <div className="sol-dm-head" aria-hidden="true"><span>Shared item</span><span>Who writes it</span></div>
          <sc-for list="{{ dmItems }}" as="d" hint-placeholder-count="8">
            <div className="{{ d.cls }}">
              <button type="button" className="sol-dm-row" aria-expanded="{{ d.on }}" onClick="{{ d.go }}"><span className="sol-dm-name">{{ d.name }}</span><span className="sol-dm-w">{{ d.w }}</span><span className="sol-dm-x" aria-hidden="true"></span></button>
              <sc-if value="{{ d.open }}"><div className="sol-dm-detail"><p className="sol-dm-desc">{{ d.desc }}</p><p className="sol-dm-r"><span>Read by</span> {{ d.r }}</p></div></sc-if>
            </div>
          </sc-for>
        </div>
        <p className="sol-arch-note">Every airline's data is isolated from every other's. Pilot and cabin-crew records are kept separate at the database level, and the data stays yours, exportable in full at any time.</p>
      </div>
    </section>
```

## Who uses it · role cards with TMS/EBT detail lists

```html
        <ul className="ds-hl c4 sol-role-list">
          <sc-for list="{{ roleList }}" as="r" hint-placeholder-count="4">
            <li data-rv="">
              <span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="{{ r.icon }}"></path></svg></span>
              <h3 className="ds-hl-t">{{ r.name }}</h3>
              <p className="ds-hl-d">{{ r.who }}</p>
              <p className="sol-role-h">In AeroStrat TMS</p>
              <ul className="sol-role-l"><sc-for list="{{ r.tms }}" as="x" hint-placeholder-count="3"><li>{{ x.t }}</li></sc-for></ul>
              <p className="sol-role-h">In AeroStrat EBT/CBTA</p>
              <ul className="sol-role-l"><sc-for list="{{ r.ebt }}" as="x" hint-placeholder-count="3"><li>{{ x.t }}</li></sc-for></ul>
            </li>
          </sc-for>
        </ul>
```

## Implementation · "Tap a stage." in the lead

```html
Tap a stage.
```

## Implementation · stage tabs and From you / AeroStrat does / Output panel

```html
        <ol role="tablist" aria-label="Stages" className="ds-steps sol-isteps">
          <sc-for list="{{ implTabs }}" as="t" hint-placeholder-count="4"><li role="presentation" className="{{ t.cls }}"><button type="button" role="tab" aria-selected="{{ t.on }}" onClick="{{ t.go }}" className="sol-itab"><span className="ds-steps-k">{{ t.week }}</span><span className="ds-steps-t">{{ t.name }}</span></button></li></sc-for>
        </ol>
        <div role="tabpanel" className="ds-glass ds-glass-pad sol-ipanel">
          <div className="sol-icol"><p className="sol-ilabel">From you</p><ul className="ds-rows"><sc-for list="{{ implCur.you }}" as="x" hint-placeholder-count="2"><li className="ds-row">{{ x.t }}</li></sc-for></ul></div>
          <div className="sol-icol"><p className="sol-ilabel">AeroStrat does</p><ul className="ds-rows"><sc-for list="{{ implCur.we }}" as="x" hint-placeholder-count="3"><li className="ds-row">{{ x.t }}</li></sc-for></ul></div>
          <div className="sol-icol sol-iout"><p className="sol-ilabel">Output</p><p className="sol-iout-t">{{ implCur.out }}</p></div>
        </div>
```

## Implementation · Who does what

```html
        <div className="sol-who">
          <div>
            <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Who does what</div>
            <h3 className="ds-h3 sol-who-h">You own the programme. <span className="tone-2">We make it workable.</span></h3>
          </div>
          <p className="ds-body">The airline keeps every regulatory obligation and the instructor sets every final grade; AeroStrat never overwrites it. Authorities approve programmes, not software.</p>
        </div>
        <ul className="ds-hl c3 sol-parties">
          <li data-rv=""><span className="ds-hl-k">The airline</span><h3 className="ds-hl-t">Holds the approval and the programme</h3><p className="ds-hl-d">Its training programme, its manuals and every regulatory obligation stay with the airline.</p></li>
          <li data-rv=""><span className="ds-hl-k">The authority</span><h3 className="ds-hl-t">Approves the programme</h3><p className="ds-hl-d">The authority approves the airline&#x27;s training programme, as it does today.</p></li>
          <li data-rv=""><span className="ds-hl-k">AeroStrat</span><h3 className="ds-hl-t">Provides the software and the setup</h3><p className="ds-hl-d">The software, your forms, the configuration to your manuals and ongoing support.</p></li>
        </ul>
```

## Implementation · Your data

```html
        <div className="sol-data">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Your data</div>
          <ul className="ds-hl c4">
            <li data-rv=""><span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2"></rect><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3"></path></svg></span><h3 className="ds-hl-t">Each airline&#x27;s data isolated</h3><p className="ds-hl-d">One airline never sees another airline&#x27;s records.</p></li>
            <li data-rv=""><span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11"></path><path d="M7.5 10.5L12 15l4.5-4.5"></path><path d="M5 19.5h14"></path></svg></span><h3 className="ds-hl-t">Exportable in full at any time</h3><p className="ds-hl-d">Your records leave with you, in full, whenever you ask.</p></li>
            <li data-rv=""><span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"></path><path d="M16 11.5l2 2 3.5-3.5"></path></svg></span><h3 className="ds-hl-t">Role-based access</h3><p className="ds-hl-d">Every action is written to the audit log: who, when and what.</p></li>
            <li data-rv=""><span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3.5h8l3.5 3.5v13.5H7z"></path><path d="M10 12.5l2 2 3.5-3.5"></path></svg></span><h3 className="ds-hl-t">Instructors set every final grade</h3><p className="ds-hl-d">AeroStrat recommends; it never overwrites an instructor&#x27;s grade.</p></li>
          </ul>
        </div>
```

## Up next · three links after the closing CTA (the page ends on the closing CTA, as Home does)

```html
    <nav aria-label="Up next" className="ds-next on-deep" style="border-top:1px solid rgba(255,255,255,0.14)">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/ebt-cbta" className="ds-next-a"><span className="ds-next-t">AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Every check graded against the nine ICAO competencies.</span></a>
          <a href="/tms" className="ds-next-a"><span className="ds-next-t">AeroStrat TMS <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Validity, planning, records and audit in one system.</span></a>
          <a href="/about" className="ds-next-a"><span className="ds-next-t">About us <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Aviation experience, built into technology.</span></a>
        </div>
      </div>
    </nav>
```

## FAQ · questions dropped (max five kept; also removed from the FAQPage JSON-LD)

```html
          <details className="aerostrat-faq-item">
          <summary><h3>Will our pilots accept it?</h3></summary>
          <p>Results are framed as coaching, not discipline. The instructor sets every grade and AeroStrat never overwrites it. Pilots also see their own status in the portal instead of asking the office.</p>
          </details>
          <details className="aerostrat-faq-item">
          <summary><h3>Does it replace our LMS or rostering?</h3></summary>
          <p>No. AeroStrat works alongside both. Rostering stays where it is, and AeroStrat does not deliver e-learning. Connecting the TMS to an existing LMS is on the roadmap: where the LMS supports module export, its learning modules can be embedded in the TMS.</p>
          </details>
          <details className="aerostrat-faq-item">
          <summary><h3>How long does implementation take?</h3></summary>
          <p>Four stages, about five weeks, from receiving your manual, records and forms. You name one owner; AeroStrat does the setup.</p>
          </details>
```

## Component data · journey steps, shared items, roles with TMS/EBT lists, stage details, product modules and rows

The text strings behind the removed markup above, from the component's renderVals().

```js
    const L = (a) => a.map(t => ({ t }));
    const stepsD = [
      { sys: 'TMS', title: 'Plans the check', what: 'The expiry engine sees the operator proficiency check falls due inside the planning window. The pilot is placed in the November simulator group and emailed the assignment, with a reminder before the session.', fields: [['OPC expiry', '30 Nov 2026', '50 days', 'YELLOW'], ['Next session', '14 Nov 2026 · FFS A320', 'Booked', 'BLUE'], ['Latest grade', 'Previous OPC · mean 3.4', 'On file', 'MISSING'], ['Notices', 'Assignment and reminder', 'Sent', 'GREEN']], writes: ['Group booking', 'Email to pilot', 'Audit entry · booked by the training office'] },
      { sys: 'EBT/CBTA', title: 'Grades the check', what: 'The instructor grades the session on the airline\'s own simulator check form. AeroStrat recommends each competency grade by the IATA lowest-of-three rule; the instructor sets the final grade and signs.', fields: [['OPC expiry', '30 Nov 2026', '50 days', 'YELLOW'], ['Session', '14 Nov 2026 · completed', 'Graded', 'BLUE'], ['Competencies', 'Mean 3.6 · all nine at or above 3', 'Standard', 'GREEN'], ['Report', 'Signed PDF generated on submission', 'Filed', 'GREEN']], writes: ['Competency grades and OB evidence', 'Signed PDF', 'Live fleet analytics'] },
      { sys: 'TMS', title: 'Updates the record', what: 'The completed, graded session updates the TMS record with no re-typing. The expiry engine recalculates the check from its rule (6 calendar months, end of month) and the plan drops the pilot from November.', fields: [['OPC expiry', '31 May 2027', '231 days', 'GREEN'], ['Completion', '14 Nov 2026 · passed, first attempt', 'Recorded', 'GREEN'], ['Pilot portal', 'New expiry shown to the pilot', 'Updated', 'BLUE'], ['Monthly load', 'Removed from Nov 2026', 'Updated', 'BLUE']], writes: ['New expiry', 'Completion record', 'Portal update · office notified'] },
      { sys: 'Both', title: 'Director sees both', what: 'Validity and competence for the same pilot, fleet and period, side by side. Board-ready reports and an audit pack are one click away.', fields: [['Training compliance', 'A320 fleet · month end', '98.6%', 'GREEN'], ['Pilot status', 'Every item current', 'Valid', 'GREEN'], ['Fleet competency', 'Mean 3.5 · weakest PRO', 'Watch', 'YELLOW'], ['Audit pack', 'Pilot file, PDFs, change log', 'Ready', 'BLUE']], writes: ['KPI report', 'Fleet risk board', 'Audit pack on demand'] }
    ];
    const sI = s.solStep || 0;
    const sc = stepsD[sI];
    const dm = [
      { name: 'Crew list', desc: 'One crew list, imported from the crew system and matched to every training record. Imports are reconciled, so gaps are found before the auditor finds them.', w: ['TMS · crew-system import'], r: ['AeroStrat TMS', 'AeroStrat EBT/CBTA', 'Pilot portal'] },
      { name: 'Pilot record', desc: 'The single record both products update: licences, medicals, checks, courses, grades and documents, per pilot.', w: ['AeroStrat TMS', 'AeroStrat EBT/CBTA'], r: ['Director dashboards', 'Pilot portal', 'Audit export'] },
      { name: 'Training rules', desc: 'Validity periods and renewal windows from your OM-D; competency model, scales and standards from your manual. Settings your EBT stage does not allow are blocked.', w: ['Admin · configured per airline'], r: ['TMS expiry engine', 'EBT/CBTA grading engine'] },
      { name: 'Grades & evidence', desc: 'Competency grades with the observable behaviours, TEM outcome and instructor narrative behind each one.', w: ['AeroStrat EBT/CBTA'], r: ['TMS completion', 'Fleet analytics', 'Analysis summaries'] },
      { name: 'Expiries', desc: 'Calculated by the expiry engine from the latest record and its rule, never typed. Every expiry is traced to its rule.', w: ['TMS expiry engine'], r: ['Action list', '3-year plan', 'Pilot portal', 'KPI reports'] },
      { name: 'Documents & reports', desc: 'Scans and certificates filed to the pilot, flagged when missing or outdated, plus a signed PDF for every evaluation.', w: ['TMS pilot file', 'EBT/CBTA signed PDF'], r: ['Pilot file', 'Inspection export'] },
      { name: 'Audit log', desc: 'Every change: who, when and how it was entered. Every save is backed up automatically.', w: ['AeroStrat TMS', 'AeroStrat EBT/CBTA'], r: ['Training Director', 'Auditor export'] },
      { name: 'Users & roles', desc: 'One login. Each user sees and changes only what their role allows, in both products.', w: ['Admin'], r: ['AeroStrat TMS', 'AeroStrat EBT/CBTA'] }
    ];
    const dI = s.dmI == null ? 0 : s.dmI;
    const roles = [
      { label: 'Training Director', name: 'Training Director & admins', who: 'Sees everything; sets the rules', tms: ['Rules, settings and users', 'KPI reports by fleet and period', 'The full audit trail'], ebt: ['Fleet dashboards and the risk board', 'Instructor consistency', 'Policies, standards and alerts'] },
      { label: 'Instructors', name: 'Instructors & instructors', who: 'TRE / TRI / instructor', tms: ['Completed, graded sessions update the record automatically', 'Next expiry set from the rule'], ebt: ['Grade on forms built from your manual', 'Plan Day 2 from the pilot\'s Day 1', 'Sign; a PDF is generated on submission'] },
      { label: 'Training office', name: 'Training coordinators', who: 'Runs the daily work', tms: ['Record training for one pilot or a class', 'Update crew, plan groups, book sessions', 'Import and export'], ebt: ['Grade in AeroStrat EBT/CBTA if subscribed'] },
      { label: 'Pilots & cabin crew', name: 'Pilots & cabin crew', who: 'Self-service, no calls to the office', tms: ['Portal: licence, medical, renewals, upcoming training', 'Email before each expiry'], ebt: ['Rate each session through a short link, no login', 'Results framed as coaching, not discipline'] }
    ];
    const rI = s.roleI || 0;
    const impl = [
      { week: 'Week 1', name: 'Discovery', you: ['Operations Manual and training manual', 'Current records and forms', 'One named owner'], we: ['Review manuals, records and forms', 'Map every record to a pilot'], out: 'Scope and plan agreed' },
      { week: 'Weeks 2–3', name: 'Build', you: ['Answers to mapping questions'], we: ['Move records from Excel, paper or your old system', 'Build forms from your manual', 'Recalculate every expiry'], out: 'Records migrated, forms built' },
      { week: 'Week 4', name: 'Configure', you: ['Review rules and standards'], we: ['Load the crew list and create accounts', 'Set up training rules and standards', 'Reconcile against the source data'], out: 'Director sign-off' },
      { week: 'Week 5', name: 'Go-live', you: ['Team attends training on live data'], we: ['Train users on their own data', 'Switch on notices and dashboards'], out: 'Expiries, grades and dashboards live' }
    ];
    const iI = s.implI || 0;
    const smp = (rows) => rows.map(([a, b, c, st]) => ({ a, b, c, st }));
    const tmsMods = [
      { title: 'Validity control', spec: '5 status levels · checked daily', lead: 'Every licence, medical, check and course is scored against the airline\'s own rule. A pilot\'s overall status is their worst item, so one lapsed check flags the whole file.', points: ['Valid > 60 days · Warning 31–60 · Critical ≤ 30 · Expired · Missing', 'Daily action list by fleet, status and item', 'Data-gap report for mandatory items with no record', 'Critical and expired items feed the plan and pilot notices automatically'], sampleTitle: 'Action list · 29 items', sample: smp([['Capt. K. Mansour', 'OPC · 9 overdue', 'Expired', 'EXPIRED'], ['F/O S. Ibrahim', 'MED · 7 days', 'Critical', 'RED'], ['F/O M. Tarek', 'CRM · no record', 'Missing', 'MISSING'], ['Capt. Y. Salem', 'LPC · 41 days', 'Warning', 'YELLOW'], ['Capt. A. Farouk', 'LC · 13 days', 'Critical', 'RED']]) },
      { title: 'Expiry engine', spec: 'Calculated, not typed', lead: 'Validity periods, renewal windows and expiry counting are configured to the airline\'s OM-D and national authority. The new expiry is suggested from the rule and reviewed before saving.', points: ['Calendar-month and end-of-month counting', 'Renewal windows keep the original expiry', 'Medical interval set per pilot, by age and operation', 'Check spacing validated against OM limits'], sampleTitle: 'Rules · typical EASA / ICAO values', sample: smp([['OPC', 'ORO.FC.230 · 6 cal. months', 'End of month', 'BLUE'], ['LPC', 'FCL.740.A · 12 months', 'Keeps date', 'BLUE'], ['Line check', 'ORO.FC.230 · 12 cal. months', '3-mo window', 'BLUE'], ['Dangerous goods', 'ICAO Doc 9284', '24 months', 'BLUE'], ['Class 1 medical', 'MED.A.045', 'Age-based', 'BLUE']]) },
      { title: 'Planning & scheduling', spec: '3-year plan · monthly load', lead: 'Every renewal is placed by expiry and lead time, with the reason shown for each month. Open next month\'s load, see the pilots due, book the simulator group.', points: ['Overdue items pulled into the first planning month', 'Simulator groups aligned to each pilot\'s check expiry', 'OPC + SIM shown as one booking', 'Email on booking, change and cancellation, plus a reminder'], sampleTitle: 'Monthly load · crew to schedule', sample: smp([['Nov 2026', 'Includes 3 overdue', '17', 'RED'], ['Dec 2026', 'OPC + SIM · 5', '18', 'BLUE'], ['Jan 2027', 'OPC + SIM · 7', '22', 'YELLOW'], ['Feb 2027', 'OPC + SIM · 5', '16', 'BLUE'], ['May 2027', 'Peak month', '24', 'YELLOW']]) },
      { title: 'Recurrent cycle', spec: '3-year programme · per pilot', lead: 'Phases, base-month groups and checklists built from the airline\'s recurrent programme. A passed check or course writes the completion and the new expiry to the pilot\'s record.', points: ['Seasonal phases, e.g. cold and hot weather operations', 'Each item: date, result, score, attempts, remedial, simulator hours, feedback', 'Lapse warnings for checks that expire before the plan', 'Cycle KPIs: completion, on-time, first-pass and remedial rate'], sampleTitle: 'Cycle 2026 – 2029', sample: smp([['Y1 · Hot weather ops', 'Apr – Sep 2026', '100%', 'GREEN'], ['Y1 · Cold weather ops', 'Oct 2026 – Mar 2027', '64%', 'BLUE'], ['Y2 · Hot weather ops', 'Apr – Sep 2027', 'Planned', 'MISSING'], ['Y2 · Cold weather ops', 'Oct 2027 – Mar 2028', 'Planned', 'MISSING'], ['Y3 · Cycle complete', 'Oct 2028 – Mar 2029', 'Planned', 'MISSING']]) },
      { title: 'Records & audit', spec: 'One digital file · six folders', lead: 'One digital file per pilot, ready for the inspector at any time. Crew-system imports are reconciled against training records, so gaps are found before the auditor finds them.', points: ['Record one pilot or a full class in one step', 'Documents flagged when missing or older than the record they support', 'Every change logged: who, when and how it was entered', 'Automatic backups · encrypted ZIP export for an inspection'], sampleTitle: 'Pilot file · Capt. K. Mansour', sample: smp([['Personal', 'Photo, ID, passport', 'Filed', 'GREEN'], ['Licence & medical', 'Authorisations', 'Filed', 'GREEN'], ['Simulator & checks', 'OPC record', 'Missing', 'RED'], ['Ground training', 'Courses', 'Filed', 'GREEN'], ['3-year cycle', 'Phase records', 'Filed', 'GREEN']]) },
      { title: 'KPIs & reporting', spec: '8 KPIs · MEETS / WATCH / BELOW', lead: 'Monthly, quarterly and yearly reports for the Director, by fleet and activity. Targets are set by the airline\'s training department.', points: ['Training compliance, on-time renewal and first-pass rate', 'Overdue items and data gaps read the live action list', 'Simulator utilisation against plan, instructor observations', 'Export to PDF or Excel'], sampleTitle: 'KPI report · October 2026', sample: smp([['Training compliance', 'Target ≥ 98%', '98.0%', 'GREEN'], ['On-time renewal', 'Target ≥ 95%', '96.2%', 'GREEN'], ['Overdue items', 'Target 0', '3', 'RED'], ['First-pass rate', 'Target ≥ 95%', '96.4%', 'GREEN'], ['Instructor observations', 'Target 100%', '97%', 'YELLOW']]) },
      { title: 'Pilot portal & notices', spec: 'Self-service · email', lead: 'Pilots see their own licence, medical, ratings, qualifications and upcoming training. Automatic messages close the loop, and the office stops chasing dates.', points: ['Email ahead of each expiry, e.g. 45 days, passports 90', 'Planned, changed or cancelled training by email', 'Daily digest of changes and expiries for admins', 'Role-based access; every action logged'], sampleTitle: 'Email notices', sample: smp([['Renewal notice', 'Class 1 medical · 8 days', 'Sent', 'GREEN'], ['Assignment', 'OPC + SIM · 4 pilots', 'Sent', 'GREEN'], ['Change notice', 'Class 1 medical · 04 Nov', 'Queued', 'YELLOW'], ['Passport notice', '90 days ahead', 'Sent', 'GREEN'], ['Daily digest', 'Admins · 07:00', 'Daily', 'BLUE']]) }
    ];
    const ebtMods = [
      { title: 'Competency grading', spec: '9 competencies · 73 OBs', lead: 'Every check graded against the nine ICAO/IATA pilot competencies, with all 73 observable behaviours in IATA\'s own wording and numbering. Each exercise is mapped to the competencies it mainly tests and those it supports.', points: ['Recommended grade by the IATA lowest-of-three rule: how many OBs, how often, TEM outcome', '"Insufficient evidence" instead of a number when evidence is thin', 'Any item graded 1 or 2 needs observable-behaviour evidence', 'The instructor decides; a different final grade needs a written reason'], sampleTitle: 'Competency profile · fleet mean', sample: smp([['PRO', 'Application of procedures', '2.7', 'RED'], ['FPM', 'Manual flight path', '3.1', 'YELLOW'], ['COM', 'Communication', '3.4', 'GREEN'], ['KNO', 'Application of knowledge', '3.9', 'GREEN'], ['LTW', 'Leadership & teamwork', '4.5', 'GREEN']]) },
      { title: 'Forms from your manual', spec: 'Forms · 6 building blocks', lead: 'Rebuilt from your own forms at onboarding: items, grading scale per section, attempts, TEM-applicable items and competency mapping. Printed in the layout of your own paper form.', points: ['Simulator check (OPC/LPC), line check, training & evaluation, cabin crew', 'Your scale per section: S/U/N-A, PASS/FAIL or 1–5', 'First and second attempts recorded', 'Signed on submission; a PDF is generated straight away'], sampleTitle: 'Forms', sample: smp([['Simulator check', 'OPC / LPC · FSTD', 'Live', 'GREEN'], ['Line check', 'Line ops · TEM', 'Live', 'GREEN'], ['Training & evaluation', 'Nine competencies', 'Live', 'GREEN'], ['Cabin crew', 'S / NI / U / N/A', 'Live', 'GREEN'], ['Remedial training', 'Built from your manual', 'Live', 'GREEN']]) },
      { title: 'Training planning', spec: 'Day 1 → Day 2 · 329 scenarios', lead: 'The next session is built from what the last check found. The recurrent programme is planned as cycles, modules and two-day sessions, each with an assigned instructor.', points: ['Open a pilot\'s Day 1 and see which OBs were demonstrated', 'Choose the competencies to develop', 'IATA Appendix G.V scenarios ranked by coverage, tagged primary or secondary', 'A record of who chose what and when'], sampleTitle: 'Day 2 · ranked scenarios', sample: smp([['Unreliable airspeed', 'FPM · SAW · WLM', '3 / 3', 'BLUE'], ['Engine failure after V1', 'FPM · PRO · COM', '3 / 3', 'BLUE'], ['Go-around, low energy', 'FPM · WLM', '2 / 3', 'BLUE'], ['Wind shear on approach', 'SAW · PSD', '2 / 3', 'BLUE'], ['Your own scenario', 'Visible only to you', 'Custom', 'MISSING']]) },
      { title: 'Analytics at three altitudes', spec: 'Micro · macro · trend', lead: 'Evaluate the pilot, analyse the cohort, monitor the fleet. Macro analysis separates one pilot struggling from a whole class weak on the same competency.', points: ['Micro: one evaluation, category by category', 'Macro: a cohort side by side, weakest skills ranked', 'Trend: one pilot\'s history, improving, plateauing or slipping', 'Fleet risk board: the pilots to review first'], sampleTitle: 'Fleet risk · share below standard', sample: smp([['PRO', 'Procedures', '42%', 'RED'], ['FPM', 'Manual flight path', '26%', 'RED'], ['COM', 'Communication', '18%', 'YELLOW'], ['WLM', 'Workload', '11%', 'YELLOW'], ['SAW', 'Situation awareness', '5%', 'GREEN']]) },
      { title: 'Instructor consistency', spec: 'Each grader vs the fleet', lead: 'Each instructor\'s average grade, updated with every submission and compared with the fleet mean, so standards stay consistent. Trainees rate each session through a short link, no login.', points: ['Drift shown against the fleet mean with a tolerance band', 'Supports instructor standardisation in Mixed EBT', 'Quick feedback after each session, no login required', 'Director dashboard for instructor ratings'], sampleTitle: 'Instructor drift · vs fleet mean', sample: smp([['Saleh', '+0.10', 'Within', 'GREEN'], ['Karim', '−0.05', 'Within', 'GREEN'], ['Adel', '+0.45', 'Review', 'YELLOW'], ['Mostafa', '−0.50', 'Review', 'YELLOW'], ['Nabil', '+0.20', 'Within', 'GREEN']]) },
      { title: 'Signed records & audit', spec: 'Signed PDF · append-only log', lead: 'Submitting a form calculates the grades, generates a signed PDF, adds a permanent record and feeds live analytics at once. Every edit after submission is logged.', points: ['Signed PDF per evaluation, ready to file or share', 'Permanent per-pilot history with the observed behaviours behind each grade', 'Below-standard alerts email your training managers', 'Records exported for IOSA and your authority'], sampleTitle: 'Audit trail · one evaluation', sample: smp([['18:42', 'Submitted and signed', 'Signed', 'GREEN'], ['18:41', 'PDF generated', 'Filed', 'GREEN'], ['18:30', 'Grade 3.3 amended S3 → S2', 'Logged', 'YELLOW'], ['16:05', 'Form opened, session 2', 'Logged', 'BLUE'], ['09:12', 'Check scheduled', 'Logged', 'BLUE']]) },
      { title: 'Stage coverage', spec: 'Conventional → Baseline EBT', lead: 'Each airline sets its own stage, with a start date, and moves up on the same platform: same records, same pilots, same history. Each check is graded under the stage in force on its date.', points: ['Conventional checking: native', 'Introducing EBT principles (Day 1 → Day 2): native', 'Mixed EBT: native for pilot assessment', 'Baseline EBT: native, on the same engine'], sampleTitle: 'IATA EBT stages', sample: smp([['Stage 0', 'Conventional', 'Live', 'GREEN'], ['Stage 1', 'EBT principles', 'Live', 'GREEN'], ['Stage 2', 'Mixed EBT', 'Live', 'GREEN'], ['Stage 3', 'Baseline EBT', 'Live', 'GREEN'], ['Enhanced', 'Needs flight data', 'Future plan', 'MISSING']]) }
    ];
    const tabsOf = (mods, cur, key) => mods.map((m, i) => ({ title: m.title, spec: m.spec, sel: i === cur ? 'true' : 'false', go: () => this.setState({ [key]: i }) }));
    const tmsI = s.tmsTab || 0, ebtI = s.ebtTab || 0;
    const chipCls = { EXPIRED: 'exp', RED: 'red', YELLOW: 'warn', GREEN: 'ok', MISSING: 'miss', BLUE: 'info' };
    const curOf = (m) => Object.assign({}, m, { points: m.points.map(t => ({ t })), sample: m.sample.map(r => ({ a: r.a, b: r.b, c: r.c, cls: 'sol-chip ' + (chipCls[r.st] || 'info') })) });
    const roleIcons = ['M4 20V10M10 20V4M16 20v-7M22 20H2', 'M8 3.5h8M9 3.5V6h6V3.5M6 5h12v15.5H6z M9 12l2 2 4-4', 'M4 6.5h16v13.5H4zM4 10.5h16M8.5 4v4M15.5 4v4', 'M12 3.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zM5 20.5c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5'];
    const solX = {
      ebtRows: [{ v: '9', l: 'ICAO/IATA pilot competencies' }, { v: '73', l: 'observable behaviours, IATA wording' }, { v: '329', l: 'IATA scenarios for Day 2 planning' }, { v: 'Forms', l: 'as many as you use, built natively rule for rule' }],
      tmsRows: [{ v: 'Daily', l: 'validity checked every day' }, { v: '5', l: 'status levels, worst item sets the file' }, { v: '3-year', l: 'recurrent cycle, run per pilot' }, { v: '8', l: 'KPIs, targets set per airline' }],
      tmsTabs: tabsOf(tmsMods, tmsI, 'tmsTab'), ebtTabs: tabsOf(ebtMods, ebtI, 'ebtTab'),
      tmsCur: curOf(tmsMods[tmsI]), ebtCur: curOf(ebtMods[ebtI]),
      togSteps: stepsD.map((x, i) => ({ sys: x.sys, title: x.title, sel: i === sI ? 'true' : 'false', cls: i === sI ? 'is-on' : (i < sI ? 'is-done' : ''), go: () => this.setState({ solStep: i }) })),
      togCur: { title: sc.title, what: sc.what, writes: L(sc.writes) },
      stPrev: () => this.setState(st => ({ solStep: ((st.solStep || 0) + 3) % 4 })),
      stNext: () => this.setState(st => ({ solStep: ((st.solStep || 0) + 1) % 4 })),
      dmItems: dm.map((d, i) => ({ name: d.name, w: d.w.join(' · '), r: d.r.join(' · '), desc: d.desc, open: i === dI, on: i === dI ? 'true' : 'false', cls: 'sol-dm-item' + (i === dI ? ' is-open' : ''), go: () => this.setState({ dmI: i === dI ? -1 : i }) })),
      roleList: roles.map((r, i) => ({ name: r.name, who: r.who, icon: roleIcons[i], tms: L(r.tms), ebt: L(r.ebt) })),
      implTabs: impl.map((x, i) => ({ week: x.week, name: x.name, on: i === iI ? 'true' : 'false', cls: i === iI ? 'is-on' : (i < iI ? 'is-done' : ''), go: () => this.setState({ implI: i }) })),
      implCur: { you: L(impl[iI].you), we: L(impl[iI].we), out: impl[iI].out }
    };
```
