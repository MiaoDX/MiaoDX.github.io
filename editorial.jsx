// Editorial direction — reads from window.SITE_CONTENT
const EditorialDesign = ({ lang = 'zh', onLightbox }) => {
  const C = window.SITE_CONTENT;
  const p = (f) => window.pick(f, lang);

  return (
    <div className="ed-root">
      <style>{`
        .ed-root {
          --ed-paper: #f5f1ea;
          --ed-ink: #1a1613;
          --ed-ink-soft: #534b42;
          --ed-rule: #c9bfb0;
          --ed-accent: oklch(0.48 0.14 25);
          --ed-accent-soft: oklch(0.92 0.04 25);
          background: var(--ed-paper);
          color: var(--ed-ink);
          font-family: 'Inter', -apple-system, sans-serif;
          padding: 56px 72px 80px;
          font-size: 15px;
          line-height: 1.6;
        }
        .ed-root * { box-sizing: border-box; }
        .ed-root h1, .ed-root h2, .ed-root h3, .ed-root .ed-serif {
          font-family: 'Noto Serif SC', 'Source Serif Pro', Georgia, serif;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        .ed-masthead {
          display: flex; justify-content: space-between; align-items: baseline;
          border-bottom: 1px solid var(--ed-ink);
          padding-bottom: 14px; margin-bottom: 40px;
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          font-family: 'JetBrains Mono', monospace;
        }
        .ed-masthead .ed-brand { font-weight: 600; }
        .ed-masthead .ed-meta { color: var(--ed-ink-soft); display: flex; gap: 18px; }

        .ed-hero {
          display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px;
          align-items: end;
          padding-bottom: 48px; border-bottom: 1px solid var(--ed-rule);
          margin-bottom: 48px;
        }
        .ed-hero .ed-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ed-accent); margin-bottom: 16px;
        }
        .ed-hero h1 {
          font-size: clamp(48px, 6vw, 88px); line-height: 0.98;
          margin: 0 0 24px; letter-spacing: -0.02em;
        }
        .ed-hero h1 em { font-style: italic; color: var(--ed-accent); font-weight: 400; }
        .ed-hero .ed-lede {
          font-family: 'Noto Serif SC', Georgia, serif;
          font-size: 20px; line-height: 1.5;
          max-width: 44ch; margin: 0 0 28px;
        }
        .ed-hero .ed-cta { display: flex; gap: 14px; flex-wrap: wrap; }
        .ed-btn {
          padding: 12px 22px; font-size: 13px; font-weight: 500;
          border: 1px solid var(--ed-ink); color: var(--ed-ink);
          background: transparent; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.15s;
        }
        .ed-btn:hover { background: var(--ed-ink); color: var(--ed-paper); }
        .ed-btn.primary { background: var(--ed-ink); color: var(--ed-paper); }
        .ed-btn.primary:hover { background: var(--ed-accent); border-color: var(--ed-accent); }

        .ed-hero-aside { border-left: 1px solid var(--ed-rule); padding-left: 40px; padding-bottom: 8px; }
        .ed-portrait {
          width: 100%; max-width: 260px; aspect-ratio: 4/5;
          object-fit: cover; margin-bottom: 16px;
        }
        .ed-caption {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ed-ink-soft);
        }

        .ed-section { margin-bottom: 72px; }
        .ed-section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--ed-ink-soft);
          display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
        }
        .ed-section-label::before { content: ''; flex: none; width: 28px; height: 1px; background: var(--ed-ink); }
        .ed-section h2 { font-size: 38px; line-height: 1.1; margin: 0 0 32px; max-width: 20ch; }

        .ed-about { display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; }
        .ed-about p {
          font-family: 'Noto Serif SC', Georgia, serif;
          font-size: 17px; line-height: 1.65; margin: 0 0 18px;
        }
        .ed-about p:first-of-type::first-letter {
          font-size: 54px; line-height: 0.9; float: left;
          padding: 6px 12px 0 0; font-weight: 500; color: var(--ed-accent);
        }
        .ed-about .ed-pullquote {
          font-family: 'Noto Serif SC', Georgia, serif;
          font-style: italic; font-size: 22px; line-height: 1.45;
          padding: 16px 0 16px 20px; border-left: 2px solid var(--ed-accent);
          margin: 20px 0;
        }

        .ed-exp { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--ed-rule); }
        .ed-exp li {
          display: grid; grid-template-columns: 96px 1fr;
          padding: 14px 0; border-bottom: 1px solid var(--ed-rule);
          gap: 20px; align-items: baseline;
        }
        .ed-exp .y { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--ed-ink-soft); letter-spacing: 0.04em; }
        .ed-exp .r { font-size: 15px; }

        .ed-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 24px; }
        .ed-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; padding: 5px 10px;
          border: 1px solid var(--ed-rule); color: var(--ed-ink-soft);
          letter-spacing: 0.04em;
        }

        .ed-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .ed-gallery-item {
          position: relative; cursor: pointer;
          overflow: hidden; background: var(--ed-ink);
          aspect-ratio: 4/3;
        }
        .ed-gallery-item img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .ed-gallery-item:hover img { transform: scale(1.04); }
        .ed-gallery-item .ed-photo-cap {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 14px; background: linear-gradient(to top, rgba(26,22,19,0.88), transparent);
          color: var(--ed-paper);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          opacity: 0; transition: opacity 0.2s;
        }
        .ed-gallery-item:hover .ed-photo-cap { opacity: 1; }

        .ed-events { border-top: 1px solid var(--ed-ink); }
        .ed-event {
          display: grid; grid-template-columns: 80px 1fr 280px;
          gap: 32px; padding: 28px 0;
          border-bottom: 1px solid var(--ed-rule);
          align-items: start;
        }
        .ed-event .ed-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; font-weight: 500;
          color: var(--ed-accent); padding-top: 4px;
        }
        .ed-event h3 { font-size: 22px; line-height: 1.25; margin: 0 0 8px; font-weight: 500; }
        .ed-event p {
          font-family: 'Noto Serif SC', Georgia, serif;
          font-size: 15px; color: var(--ed-ink-soft);
          margin: 0 0 14px; line-height: 1.55;
        }
        .ed-event-links { display: flex; flex-wrap: wrap; gap: 14px; }
        .ed-event-links a {
          font-size: 12px; color: var(--ed-ink);
          text-decoration: none;
          border-bottom: 1px solid var(--ed-ink);
          padding-bottom: 1px;
        }
        .ed-event-links a:hover { color: var(--ed-accent); border-color: var(--ed-accent); }
        .ed-event-img {
          width: 100%; aspect-ratio: 16/10;
          object-fit: cover; cursor: pointer;
          transition: transform 0.3s;
        }
        .ed-event-img:hover { transform: scale(1.02); }

        .ed-projects {
          display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
          background: var(--ed-rule); border: 1px solid var(--ed-rule);
        }
        .ed-project { background: var(--ed-paper); padding: 32px 28px; }
        .ed-project-mark {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.14em;
          color: var(--ed-accent); margin-bottom: 12px;
        }
        .ed-project h3 { font-size: 28px; margin: 0 0 12px; letter-spacing: -0.01em; }
        .ed-project p {
          font-family: 'Noto Serif SC', Georgia, serif;
          font-size: 15px; color: var(--ed-ink-soft); margin: 0 0 18px;
        }

        .ed-connect {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          gap: 40px; align-items: center;
          padding: 40px 0;
          border-top: 1px solid var(--ed-ink);
          border-bottom: 1px solid var(--ed-ink);
        }
        .ed-connect h2 { margin-bottom: 14px; font-size: 32px; }
        .ed-connect p { font-family: 'Noto Serif SC', Georgia, serif; color: var(--ed-ink-soft); margin: 0; }
        .ed-qr { text-align: center; }
        .ed-qr img {
          width: 100%; max-width: 180px; aspect-ratio: 1/1;
          object-fit: contain; background: white; padding: 10px;
          border: 1px solid var(--ed-rule);
        }
        .ed-qr strong {
          display: block; margin-top: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; font-weight: 500;
        }

        .ed-footer {
          margin-top: 56px; padding-top: 20px;
          border-top: 1px solid var(--ed-rule);
          display: flex; justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--ed-ink-soft);
        }

        @media (max-width: 900px) {
          .ed-root { padding: 32px 24px 60px; }
          .ed-hero { grid-template-columns: 1fr; gap: 32px; }
          .ed-hero-aside { border-left: none; padding-left: 0; border-top: 1px solid var(--ed-rule); padding-top: 24px; }
          .ed-about { grid-template-columns: 1fr; gap: 32px; }
          .ed-event { grid-template-columns: 64px 1fr; }
          .ed-event-img { grid-column: 1 / -1; }
          .ed-projects { grid-template-columns: 1fr; }
          .ed-connect { grid-template-columns: 1fr; }
          .ed-gallery { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="ed-masthead">
        <span className="ed-brand">MiaoDX · Learn in Public</span>
        <div className="ed-meta">
          <span>{lang === 'zh' ? '公开构建' : 'Learn in Public'}</span>
          <span>{p(C.meta.location)}</span>
        </div>
      </div>

      <section className="ed-hero">
        <div>
          <div className="ed-eyebrow">{p(C.meta.tagline)}</div>
          <h1>
            {C.hero.headline[lang][0]}<br />
            <em>{C.hero.headline[lang][1]}</em>
          </h1>
          <p className="ed-lede">{p(C.hero.lede)}</p>
          <div className="ed-cta">
            {C.hero.ctas.map((c, i) => (
              <a key={i} className={`ed-btn ${c.primary ? 'primary' : ''}`} href={c.href}>
                {p(c.label)}{c.primary ? ' →' : ''}
              </a>
            ))}
          </div>
        </div>
        <div className="ed-hero-aside">
          <img className="ed-portrait" src={C.meta.portrait} alt={p(C.meta.name)} />
          <div className="ed-caption">{p(C.meta.name)} · {C.meta.handle} · 2026</div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-section-label">01 / {lang === 'zh' ? '关于' : 'About'}</div>
        <div className="ed-about">
          <div>
            <h2 className="ed-serif">{p(C.about.heading)}</h2>
            {C.about.paragraphs.map((para, i) => (
              <p key={i}>{p(para)}</p>
            ))}
            <div className="ed-pullquote">{p(C.about.pullquote)}</div>
            <p>
              {C.about.closing[lang][0]}
              <a href={C.about.closingHref} style={{ color: 'var(--ed-accent)', textDecoration: 'underline' }}>
                {C.about.closing[lang][1]}
              </a>
              {C.about.closing[lang][2]}
            </p>
            <div className="ed-tags">
              {C.about.tags.map((tg, i) => <span key={i} className="ed-tag">{p(tg)}</span>)}
            </div>
          </div>
          <div>
            <div className="ed-caption" style={{ marginBottom: 14 }}>{lang === 'zh' ? '履历' : 'Trajectory'}</div>
            <ul className="ed-exp">
              {C.experience.map((e) => (
                <li key={e.year}>
                  <span className="y">{e.year}</span>
                  <span className="r">{p(e.role)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-section-label">02 / {lang === 'zh' ? '现场' : 'In the Field'}</div>
        <h2>{lang === 'zh' ? '分享、演讲、meetup' : 'Talks, meetups, the occasional stage'}</h2>
        <div className="ed-gallery">
          {C.photos.map((ph, i) => (
            <div key={i} className="ed-gallery-item" onClick={() => onLightbox({ src: ph.src, caption: p(ph.caption) })}>
              <img src={ph.src} alt={p(ph.caption)} />
              <div className="ed-photo-cap">{p(ph.caption)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-section-label">03 / {lang === 'zh' ? '开源' : 'Open Source'}</div>
        <h2>{lang === 'zh' ? '精选项目' : 'Selected Projects'}</h2>
        <div className="ed-projects">
          {C.projects.map((pr, i) => (
            <div key={i} className="ed-project">
              <div className="ed-project-mark">→ PROJECT {String(i + 1).padStart(2, '0')}</div>
              <h3>{pr.name}</h3>
              <p>{p(pr.tagline)}</p>
              <div className="ed-event-links">
                {pr.links.map((l, j) => (
                  <a key={j} href={l.href}>{p(l.label)}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ed-section">
        <div className="ed-section-label">04 / {lang === 'zh' ? '近期分享' : 'Recent Talks'}</div>
        <h2>{lang === 'zh' ? '按时间倒排' : 'Most recent first'}</h2>
        <div className="ed-events">
          {C.events.map((e, i) => (
            <article key={i} className="ed-event">
              <div className="ed-date">{e.short}</div>
              <div>
                <h3>{p(e.title)}</h3>
                <p>{p(e.desc)}</p>
                {e.links.length > 0 && (
                  <div className="ed-event-links">
                    {e.links.map((l, j) => (
                      <a key={j} href={l.href}>{p(l.label)} ↗</a>
                    ))}
                  </div>
                )}
              </div>
              {e.image ? (
                <img className="ed-event-img" src={e.image} alt={p(e.title)}
                  onClick={() => onLightbox({ src: e.image, caption: p(e.title) })} />
              ) : <div />}
            </article>
          ))}
        </div>
      </section>

      <section id="connect" className="ed-connect">
        <div>
          <div className="ed-section-label" style={{ marginBottom: 10 }}>05 / {lang === 'zh' ? '联系' : 'Connect'}</div>
          <h2 className="ed-serif">{p(C.connect.heading)}</h2>
          <p>{p(C.connect.body)}</p>
        </div>
        {C.connect.qrs.map((q, i) => (
          <div key={i} className="ed-qr">
            <img src={q.src} alt={p(q.label)} />
            <strong>{p(q.label)}</strong>
          </div>
        ))}
      </section>

      <div className="ed-footer">
        <span>{p(C.footer.left)}</span>
        <span>{p(C.footer.right)}</span>
      </div>
    </div>
  );
};

window.EditorialDesign = EditorialDesign;
