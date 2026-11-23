# Copy removed in v3.3 (kept so the owner can bring any of it back)

Each block is the exact template markup as it was on branch feat/uiux-v3 before v3.3.


# Home /
## Home · hero

```html
<div className="hm-chips" aria-hidden="true">
          <div className="hm-chip c1"><i></i><span className="ds-hud"><b>SAW</b> 3.4 <span className="up">↑</span></span><span className="ds-hud hm-sample">Sample data</span></div>
          <div className="hm-chip c2"><i className="warn"></i><span className="ds-hud"><b>LPC</b> · 45 days to expiry · <span className="warn">Warning</span></span><span className="ds-hud hm-sample">Sample data</span></div>
          <div className="hm-chip c3"><i></i><span className="ds-hud"><b>Grading reliability</b> · Concordant</span><span className="ds-hud hm-sample">Sample data</span></div>
        </div>
```

## Home · hero lead

```html
<p className="ds-lead hm-hero-p">AeroStrat brings 25+ years of experience in the aviation sector together with deep technology expertise, to build software for the way airlines operate.</p>
```

## Home · standards marquee

```html
<div className="hm-marquee on-deep">
      <p className="hm-sr">Built on ICAO, IATA and EASA guidance</p>
      <div className="ds-marquee" aria-hidden="true">
        <div className="ds-marquee-track">
          <span>ICAO</span><i></i><span>IATA</span><i></i><span>EASA</span><i></i><span>ECAA</span><i></i><span>Evidence-based training</span><i></i><span>CBTA</span><i></i><span>Nine competencies</span><i></i><span>Observable behaviours</span><i></i><span>Training records</span><i></i><span>Audit trail</span><i></i>
          <span>ICAO</span><i></i><span>IATA</span><i></i><span>EASA</span><i></i><span>ECAA</span><i></i><span>Evidence-based training</span><i></i><span>CBTA</span><i></i><span>Nine competencies</span><i></i><span>Observable behaviours</span><i></i><span>Training records</span><i></i><span>Audit trail</span><i></i>
        </div>
      </div>
    </div>
```

## Home · training solution · photo with sample readouts

```html
<div className="hm-expand" data-expand="">
          <img src="uploads/ebt-hero-bg.webp" alt="" aria-hidden="true" width="1060" height="586" loading="lazy" decoding="async" className="ds-photo" data-px="">
          <div className="hm-expand-hud" aria-hidden="true">
            <span className="ds-hud"><b>FPM</b> · below standard</span>
            <span className="ds-hud"><b>Concordance</b> · 0.91</span>
            <span className="ds-pill sample">Sample data</span>
          </div>
        </div>
```

## Home · training solution · step bullets

```html
<ul className="ds-rows hm-step-rows"><li className="ds-row">Nine ICAO/IATA competencies and all 73 observable behaviours</li><li className="ds-row">Day 2 training planned from the pilot's Day 1 evidence</li><li className="ds-row">Trends by pilot, cohort, fleet and instructor</li></ul>
```

## Home · training solution · step bullets

```html
<ul className="ds-rows hm-step-rows"><li className="ds-row">Every licence, medical, check and course tracked live</li><li className="ds-row">Renewals planned months ahead, pilots reminded before anything lapses</li><li className="ds-row">One digital file per pilot, ready for the inspector</li></ul>
```

## Home · training solution · step bullets

```html
<ul className="ds-rows hm-step-rows"><li className="ds-row">A graded check updates the record and sets the next expiry</li><li className="ds-row">Compliance and competence side by side for the Director</li><li className="ds-row">One audit trail across both products</li></ul>
```

## Home · FAQ

```html
<details className="aerostrat-faq-item">
          <summary><h3>How can we see it?</h3></summary>
          <p>Book a live walkthrough on a sample of your own crew, records and check forms at aero-strat.com/contact, or email info@aero-strat.com.</p>
          </details>
```

## Home · Up next

```html
<nav aria-label="Up next" className="ds-next on-deep">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/solutions" className="ds-next-a"><span className="ds-next-t">Solutions <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Two connected products for airline pilot training.</span></a>
          <a href="/ebt-cbta" className="ds-next-a"><span className="ds-next-t">AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Every check graded against the nine ICAO competencies.</span></a>
          <a href="/tms" className="ds-next-a"><span className="ds-next-t">AeroStrat TMS <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Validity, planning, records and audit in one system.</span></a>
        </div>
      </div>
    </nav>
```

# Solutions /solutions

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

# AeroStrat EBT/CBTA /ebt-cbta

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

# AeroStrat TMS /tms

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

# About /about

Exact template markup from About.dc.html on feat/uiux-v3 before v3.3.

## Hero · breadcrumb row (BreadcrumbList JSON-LD kept)

```html
        <ol className="ds-crumbs"><li><a href="/">Home</a></li><li aria-current="page">About Us</li></ol>
```

## Hero · arc under the headline

```html
        <svg className="ds-arc-under" aria-hidden="true" viewBox="0 0 120 14"><path d="M3 11Q60 0 117 11" pathLength="1"></path></svg>
```

## Hero · original lead (shortened to 22 words in v3.3)

```html
        <p className="ds-lead">AeroStrat is an aviation technology company based in Tallinn, Estonia. Our team pairs 25+ years of experience in the aviation sector with deep technology expertise. We are developing technology across the airline, and we started with training: AeroStrat EBT/CBTA and AeroStrat TMS are live today.</p>
```

## Vision and mission · hairline above each statement (CSS)

```css
.ab-vm-col{border-top:1px solid var(--hair);padding-top:28px}
```

## Who we are · icon (replaced by the sprite technology icon, as on home)

```html
          <div data-rv=""><span className="ds-plate ab-pillar-plate"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"></rect><path d="M9 2.5v3.5M15 2.5v3.5M9 18v3.5M15 18v3.5M2.5 9h3.5M2.5 15h3.5M18 9h3.5M18 15h3.5"></path><path d="M10 10h4v4h-4z"></path></svg></span><span className="ab-pillar-t">Deep technology expertise</span><span className="ds-stat-cap">Software engineering, data and analytics, delivered as secure systems an airline can rely on every day.</span></div>
```

## Who we are · count-up on 25+

```html
          <div data-rv=""><span className="ds-stat-num" data-count="25">25<span className="plus">+</span></span><span className="ab-pillar-t">Years of experience in the aviation sector</span><span className="ds-stat-cap">Flight operations, crew training, regulation and oversight, seen from inside the airline.</span></div>
```

## Our direction · product links under the flight path

```html
        <div className="ds-actions ab-dir-links" data-rv="">
          <a href="/ebt-cbta" className="ds-link">AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></a>
          <a href="/tms" className="ds-link">AeroStrat TMS <span className="arr" aria-hidden="true">→</span></a>
        </div>
```

## Core strategic pillars · whole section (merged into Values and pillars)

```html
    <section className="ds-sec on-light ab-pil">
      <div className="ds-wrap">
        <div className="ab-head">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Our strategy</div>
          <h2 className="ds-h2" data-lm="">Core strategic pillars.</h2>
        </div>
        <ul className="ds-hl c3">
          <li data-rv=""><span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="2"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="19" cy="19" r="2"></circle><circle cx="12" cy="12" r="2"></circle><path d="M7 12h3M13.6 10.8l3.8-4.6M13.6 13.2l3.8 4.6"></path></svg></span><h3 className="ds-hl-t">Connected Intelligence</h3><p className="ds-hl-d">Elevating passive records into active, cross-departmental forecasting and risk assessment.</p></li>
          <li data-rv=""><span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8z"></path><path d="M3.5 12l8.5 4.5 8.5-4.5"></path><path d="M3.5 16l8.5 4.5 8.5-4.5"></path></svg></span><h3 className="ds-hl-t">Architectural Scalability</h3><p className="ds-hl-d">Deploying a unified technological infrastructure designed to adapt and expand seamlessly alongside evolving global aviation needs.</p></li>
          <li data-rv=""><span className="ds-plate sm"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"></path><circle cx="12" cy="12" r="3"></circle></svg></span><h3 className="ds-hl-t">Operational Clarity</h3><p className="ds-hl-d">Delivering complex industry data through intuitive, high-visibility interfaces that minimise administrative friction.</p></li>
        </ul>
      </div>
    </section>
```

## Brand values · whole section (merged into Values and pillars)

```html
    <section className="ds-sec on-navy ab-val">
      <div className="ds-decor"><div className="ds-orb sky" style="right:-25%;top:10%"></div></div>
      <div className="ds-wrap">
        <div className="ab-head">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Our values</div>
          <h2 className="ds-h2" data-lm="">Brand values</h2>
        </div>
        <ul className="ab-vals">
          <li data-rv=""><h3 className="ab-val-w">Absolute Precision</h3><p className="ab-val-d">We treat data with the exact rigour required on the flight deck. Accuracy and structural integrity are non-negotiable.</p></li>
          <li data-rv=""><h3 className="ab-val-w">Architectural Foresight</h3><p className="ab-val-d">We build for tomorrow's scale, every module and workflow engineered to integrate into a wider ecosystem.</p></li>
          <li data-rv=""><h3 className="ab-val-w">Actionable Clarity</h3><p className="ab-val-d">We ruthlessly eliminate cognitive load, distilling complex metrics into insights that accelerate decisions.</p></li>
          <li data-rv=""><h3 className="ab-val-w">Continuous Integration</h3><p className="ab-val-d">We champion the feedback loop between operational execution, data evaluation, and systemic improvement.</p></li>
        </ul>
      </div>
    </section>
```

## Closing CTA · topic label

```html
        <div className="ds-eyebrow ab-close-eb">How we work with you</div>
```

## Closing CTA · original lead (last sentence cut in v3.3)

```html
        <p className="ds-lead" data-rv="">AeroStrat staff onboard each airline from its own manuals. We build your check forms from your paper forms, set your grading scale and document control, and configure the platform to your authority. Building your forms is part of the implementation service, not a self-serve builder.</p>
```

## Closing CTA · note under the lead

```html
        <p className="ab-close-note" data-rv="">Your forms stay as they are, whether they start on paper or in digital form. Support and maintenance included.</p>
```

## Up next · row (removed, as on home and glossary)

```html
    <nav aria-label="Up next" className="ds-next on-deep" style="border-top:1px solid rgba(255,255,255,0.14)">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/solutions" className="ds-next-a"><span className="ds-next-t">Solutions <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Two connected products for airline pilot training.</span></a>
          <a href="/clients" className="ds-next-a"><span className="ds-next-t">Clients <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Developed and tested with two regional airlines.</span></a>
          <a href="/contact" className="ds-next-a"><span className="ds-next-t">Contact us <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">A 30-minute walkthrough on your own data.</span></a>
        </div>
      </div>
    </nav>
```

# Clients /clients

Exact template markup from Clients.dc.html on feat/uiux-v3 before v3.3.

## Hero · breadcrumb row (BreadcrumbList JSON-LD kept)

```html
        <ol className="ds-crumbs"><li><a href="/">Home</a></li><li aria-current="page">Clients</li></ol>
```

## Hero · original one-line headline (now two lines with a lead and buttons)

```html
        <h1 className="ds-h1">Our clients.</h1>
```

## Hero · arc under the headline

```html
        <svg className="ds-arc-under" aria-hidden="true" viewBox="0 0 120 14"><path d="M3 11Q60 0 117 11" pathLength="1"></path></svg>
```

## Coming soon · whole section (merged with the proof numbers into “Client stories are coming”)

```html
    <section className="ds-sec on-light ds-pattern faint cl-soon">
      <div className="ds-wrap">
        <div className="cl-soon-in">
          <span className="ds-pill next" data-rv="">Coming soon</span>
          <h2 className="ds-h2" data-lm="">Our client stories will be published soon.</h2>
          <p className="ds-lead" data-rv="">In the meantime, see AeroStrat on a sample of your own crew, records and check forms.</p>
          <div className="ds-actions" data-rv="">
            <a href="/contact#book" data-cta="book-walkthrough" className="aerostrat-btn aerostrat-btn-primary">Book a 30-minute walkthrough <span className="arr" aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </section>
```

## Developed with airlines · whole section (merged into “Client stories are coming”; count-ups removed)

```html
    <section className="ds-sec ds-band on-deep ds-pattern cl-proof">
      <div className="ds-wrap">
        <div className="cl-head">
          <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Developed with airlines</div>
          <h2 className="ds-h2" data-lm="">Built and tested on real recurrent training.</h2>
        </div>
        <div className="ds-stats">
          <div data-rv=""><span className="ds-stat-num" data-count="120">120<span className="plus">+</span></span><span className="ds-stat-cap">pilots</span></div>
          <div data-rv=""><span className="ds-stat-num" data-count="250">250<span className="plus">+</span></span><span className="ds-stat-cap">cabin crew</span></div>
          <div data-rv=""><span className="ds-stat-num" data-count="14000">14,000<span className="plus">+</span></span><span className="ds-stat-cap">grades recorded</span></div>
        </div>
        <p className="cl-proof-cap" data-rv="">In co-development with two regional airlines for more than eight months.</p>
      </div>
    </section>
```

## Up next · row (removed, as on home and glossary)

```html
    <nav aria-label="Up next" className="ds-next on-deep" style="border-top:1px solid rgba(255,255,255,0.14)">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/solutions" className="ds-next-a"><span className="ds-next-t">Solutions <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Two connected products for airline pilot training.</span></a>
          <a href="/about" className="ds-next-a"><span className="ds-next-t">About us <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Aviation experience, built into technology.</span></a>
          <a href="/contact" className="ds-next-a"><span className="ds-next-t">Contact us <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">A 30-minute walkthrough on your own data.</span></a>
        </div>
      </div>
    </nav>
```

# Contact /contact

Exact template markup from Contact.dc.html on feat/uiux-v3 before v3.3.

## Hero · breadcrumb row (BreadcrumbList JSON-LD kept)

```html
        <nav aria-label="Breadcrumb"><ol className="ds-crumbs"><li><a href="/">Home</a></li><li aria-current="page">Contact Us</li></ol></nav>
```

## Hero · arc under the headline

```html
        <svg className="ds-arc-under" aria-hidden="true" viewBox="0 0 120 14"><path d="M3 11Q60 0 117 11" pathLength="1"></path></svg>
```

## Hero · original lead (shortened to 22 words in v3.3)

```html
        <p className="ds-lead">Book a walkthrough, send one of your check forms and see how it grades in AeroStrat, or see AeroStrat TMS on a sample of your own crew and training data.</p>
```

## Send a message · aside: What a first call covers

```html
          <aside className="ct-aside" data-rv="">
            <h3 className="ds-h3">What a first call covers</h3>
            <p className="ds-body">For the TMS: your crew list, your current training records and the training rules in your <a href="/glossary#om-d"><abbr title="Operations Manual Part D">OM-D</abbr></a>. For EBT/CBTA: your EBT stage and plans, your check forms, and what AeroStrat needs from you to set up: your forms and competency mapping, your standards, your instructor ranks, and the training managers who receive alerts.</p>
          </aside>
```

## What happens next · whole section (the three steps moved beside the form; the email now appears once, in step 2)

```html
    <section className="ds-sec on-light ct-next">
      <div className="ds-wrap">
        <h2 className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>What happens next</h2>
        <ol className="ds-steps ct-steps" data-rv="">
          <li><h3 className="ds-steps-t">Pick a time, or send the form.</h3><p className="ds-steps-d">Book a slot above, or tell us about your fleet, your stage and what you would like to see.</p></li>
          <li><h3 className="ds-steps-t">You get a calendar invite with a Google Meet link, or a reply within one business day.</h3><p className="ds-steps-d">Replies come from info@aero-strat.com.</p></li>
          <li><h3 className="ds-steps-t">A 30-minute walkthrough on your data.</h3><p className="ds-steps-d">On a sample of your own crew, records and check forms.</p></li>
        </ol>
        <div className="ct-mail" data-rv="">
          <span className="ct-mail-k">Email</span>
          <a className="ct-mail-a" href="mailto:info@aero-strat.com">info@aero-strat.com</a>
        </div>
      </div>
    </section>
```

## Up next · row

```html
    <nav aria-label="Up next" className="ds-next on-deep" style="border-top:1px solid rgba(255,255,255,0.14)">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/solutions" className="ds-next-a"><span className="ds-next-t">Solutions <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Two connected products for airline pilot training.</span></a>
          <a href="/ebt-cbta" className="ds-next-a"><span className="ds-next-t">AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Every check graded against the nine ICAO competencies.</span></a>
          <a href="/tms" className="ds-next-a"><span className="ds-next-t">AeroStrat TMS <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Validity, planning, records and audit in one system.</span></a>
        </div>
      </div>
    </nav>
```

# Glossary /glossary

Exact template markup from Glossary.dc.html on feat/uiux-v3 before v3.3. No terms, definitions or ids were removed.

## Hero · breadcrumb row (BreadcrumbList JSON-LD kept)

```html
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Glossary</div>
```

## Hero · arc under the headline

```html
        <p className="ds-lead">Plain-English definitions of the terms airline training departments use for evidence-based training (EBT) and competency-based training and assessment (CBTA), from the nine pilot competencies to Baseline EBT and training records.</p>
```

## Hero · original lead (shortened to 19 words in v3.3)

```html
        <p className="gl-reviewed">Last reviewed: November 2026.</p>
```

## Hero · section jump links (boxed pills)

```html
          <a href="#approaches">Training approaches</a>
          <a href="#programme">The EBT programme</a>
          <a href="#stages">Implementation stages</a>
          <a href="#records">Grading, records and training management</a>
        </nav>
      </div>
```

## Closing CTA · note under the buttons

```html
        <p className="gl-close-note">A 30-minute walkthrough on a sample of your own crew, records and check forms. We reply within one business day.</p>
```

## Up next · row

```html
    <nav aria-label="Up next" className="ds-next on-deep" style="border-top:1px solid rgba(255,255,255,0.14)">
      <div className="ds-wrap">
        <div className="ds-eyebrow"><svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8"><path d="M1.5 6.5Q11 0.5 20.5 6.5"></path></svg>Up next</div>
        <div className="ds-next-row">
          <a href="/ebt-cbta" className="ds-next-a"><span className="ds-next-t">AeroStrat EBT/CBTA <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Every check graded against the nine ICAO competencies.</span></a>
          <a href="/tms" className="ds-next-a"><span className="ds-next-t">AeroStrat TMS <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">Validity, planning, records and audit in one system.</span></a>
          <a href="/contact" className="ds-next-a"><span className="ds-next-t">Contact us <span className="arr" aria-hidden="true">→</span></span><span className="ds-next-d">A 30-minute walkthrough on your own data.</span></a>
        </div>
      </div>
    </nav>
```
