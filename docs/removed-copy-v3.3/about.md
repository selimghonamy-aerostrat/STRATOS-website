# About · copy removed in v3.3

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
