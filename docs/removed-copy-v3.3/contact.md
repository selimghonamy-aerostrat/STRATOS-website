# Contact · copy removed in v3.3

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

