# Clients · copy removed in v3.3

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
