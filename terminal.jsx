// Terminal direction — reads from window.SITE_CONTENT
const TerminalDesign = ({ lang = 'zh', onLightbox }) => {
  const C = window.SITE_CONTENT;
  const p = (f) => window.pick(f, lang);
  const [cursorOn, setCursorOn] = React.useState(true);

  React.useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 550);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="tm-root">
      <style>{`
        .tm-root {
          --tm-bg: #f5f1ea;
          --tm-panel: #efe9dd;
          --tm-line: #dfd5c2;
          --tm-line-hot: #c9bfa8;
          --tm-fg: #1a1613;
          --tm-dim: #7a6f60;
          --tm-amber: oklch(0.55 0.14 55);
          --tm-green: oklch(0.48 0.12 155);
          --tm-pink: oklch(0.52 0.14 355);
          background: var(--tm-bg);
          color: var(--tm-fg);
          font-family: 'JetBrains Mono', 'SF Mono', ui-monospace, monospace;
          font-size: 13px;
          line-height: 1.55;
          background-image:
            linear-gradient(rgba(201,191,168,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,191,168,0.35) 1px, transparent 1px);
          background-size: 48px 48px;
          background-position: -1px -1px;
        }
        .tm-root * { box-sizing: border-box; }
        .tm-root a { color: var(--tm-green); text-decoration: none; }
        .tm-root a:hover { text-decoration: underline; }

        .tm-chrome {
          display: grid; grid-template-columns: auto 1fr auto;
          gap: 16px; align-items: center;
          padding: 10px 20px;
          background: var(--tm-panel);
          border-bottom: 1px solid var(--tm-line-hot);
          font-size: 11px; color: var(--tm-dim);
        }
        .tm-dots { display: flex; gap: 6px; }
        .tm-dot { width: 10px; height: 10px; border-radius: 50%; }
        .tm-dot.r { background: #d47a7a; }
        .tm-dot.y { background: var(--tm-amber); }
        .tm-dot.g { background: var(--tm-green); }
        .tm-chrome-mid { text-align: center; }
        .tm-chrome-mid b { color: var(--tm-fg); }

        .tm-wrap { padding: 32px 28px 56px; max-width: 1280px; margin: 0 auto; }

        .tm-prompt { color: var(--tm-dim); margin-bottom: 8px; }
        .tm-prompt .user { color: var(--tm-green); }
        .tm-prompt .path { color: var(--tm-amber); }
        .tm-prompt .branch { color: var(--tm-pink); }
        .tm-cursor {
          display: inline-block; width: 7px; height: 14px;
          background: var(--tm-fg); vertical-align: -2px; margin-left: 3px;
        }
        .tm-cursor.off { background: transparent; }

        .tm-hero {
          padding: 28px 0 36px;
          border-bottom: 1px dashed var(--tm-line-hot);
          margin-bottom: 28px;
          display: grid; grid-template-columns: 1fr 200px;
          gap: 36px; align-items: start;
        }
        .tm-hero h1 {
          font-size: 40px; line-height: 1.1; margin: 12px 0 16px;
          font-weight: 500; letter-spacing: -0.01em;
        }
        .tm-hero h1 .accent { color: var(--tm-green); }
        .tm-hero h1 .claw { color: var(--tm-amber); }
        .tm-lede { color: var(--tm-fg); max-width: 62ch; font-size: 14px; margin: 0 0 20px; }
        .tm-lede .com { color: var(--tm-dim); }
        .tm-cta { display: flex; gap: 10px; flex-wrap: wrap; }
        .tm-btn {
          padding: 8px 14px; font-size: 12px;
          color: var(--tm-fg); border: 1px solid var(--tm-line-hot);
          background: var(--tm-panel); font-family: inherit;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.15s;
        }
        .tm-btn:hover { border-color: var(--tm-green); color: var(--tm-green); text-decoration: none; }
        .tm-btn.primary { background: var(--tm-fg); color: var(--tm-bg); border-color: var(--tm-fg); font-weight: 600; }
        .tm-btn.primary:hover { background: var(--tm-green); border-color: var(--tm-green); color: var(--tm-bg); text-decoration: none; }

        .tm-avatar-card {
          border: 1px solid var(--tm-line-hot);
          background: var(--tm-panel);
          padding: 12px; font-size: 11px; color: var(--tm-dim);
        }
        .tm-avatar-card img {
          width: 100%; aspect-ratio: 1/1;
          object-fit: cover; margin-bottom: 8px;
        }
        .tm-avatar-card dl { margin: 0; display: grid; grid-template-columns: 60px 1fr; gap: 2px 8px; }
        .tm-avatar-card dt { color: var(--tm-dim); }
        .tm-avatar-card dd { margin: 0; color: var(--tm-fg); }
        .tm-avatar-card dd.hot { color: var(--tm-amber); }

        .tm-section { margin-bottom: 48px; }
        .tm-sec-head {
          display: flex; align-items: center; gap: 12px;
          font-size: 11px; color: var(--tm-dim);
          padding-bottom: 8px;
          border-bottom: 1px solid var(--tm-line-hot);
          margin-bottom: 20px;
          text-transform: uppercase; letter-spacing: 0.1em;
        }
        .tm-sec-head .num { color: var(--tm-green); }
        .tm-sec-head .ttl { color: var(--tm-fg); font-size: 13px; letter-spacing: 0; text-transform: none; }
        .tm-sec-head .sub { margin-left: auto; color: var(--tm-dim); font-size: 11px; }

        .tm-about { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; }
        .tm-about-body p { margin: 0 0 12px; }
        .tm-about-body p .com { color: var(--tm-dim); }
        .tm-about-body p .hot { color: var(--tm-amber); }
        .tm-about-body p .str { color: var(--tm-green); }

        .tm-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
        .tm-tag {
          font-size: 11px; padding: 3px 8px;
          border: 1px solid var(--tm-line-hot); color: var(--tm-fg);
        }
        .tm-tag::before { content: '#'; color: var(--tm-dim); }

        .tm-table {
          border: 1px solid var(--tm-line-hot);
          background: var(--tm-panel); font-size: 12px;
        }
        .tm-table .th {
          display: grid; grid-template-columns: 80px 1fr 60px;
          padding: 6px 12px; color: var(--tm-dim);
          border-bottom: 1px solid var(--tm-line-hot);
          font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .tm-table .tr {
          display: grid; grid-template-columns: 80px 1fr 60px;
          padding: 7px 12px;
          border-bottom: 1px solid var(--tm-line); gap: 8px;
        }
        .tm-table .tr:last-child { border-bottom: none; }
        .tm-table .tr:hover { background: #e6ddc8; }
        .tm-table .tr .y { color: var(--tm-amber); }
        .tm-table .tr .r { color: var(--tm-fg); }
        .tm-table .tr .k { color: var(--tm-dim); justify-self: end; font-size: 10px; text-transform: uppercase; }
        .tm-table .tr[data-k='current'] .k { color: var(--tm-green); }

        .tm-projects { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .tm-proj {
          border: 1px solid var(--tm-line-hot);
          background: var(--tm-panel); padding: 20px;
        }
        .tm-proj-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; }
        .tm-proj h3 {
          font-size: 18px; margin: 0;
          font-family: inherit; font-weight: 600;
        }
        .tm-proj h3 .slash { color: var(--tm-dim); margin-right: 6px; }
        .tm-proj-status {
          font-size: 10px; padding: 2px 7px;
          border: 1px solid var(--tm-green);
          color: var(--tm-green); letter-spacing: 0.08em;
        }
        .tm-proj p { color: var(--tm-fg); margin: 0 0 14px; font-size: 12.5px; }
        .tm-proj-links { display: flex; gap: 14px; font-size: 12px; }

        .tm-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .tm-gallery-item {
          position: relative;
          border: 1px solid var(--tm-line-hot);
          background: var(--tm-panel);
          overflow: hidden; cursor: zoom-in;
          transition: border-color 0.15s;
        }
        .tm-gallery-item:hover { border-color: var(--tm-green); }
        .tm-gallery-item img {
          width: 100%; aspect-ratio: 4/3;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .tm-gallery-item:hover img { transform: scale(1.02); }
        .tm-gallery-meta {
          display: flex; justify-content: space-between;
          padding: 6px 10px; font-size: 10.5px; color: var(--tm-dim);
          border-top: 1px solid var(--tm-line-hot);
        }
        .tm-gallery-meta .tag { color: var(--tm-amber); }

        .tm-events { display: grid; gap: 0; border-top: 1px solid var(--tm-line-hot); }
        .tm-event {
          display: grid; grid-template-columns: 110px 1fr 180px;
          gap: 20px; padding: 18px 0;
          border-bottom: 1px solid var(--tm-line-hot);
          align-items: start;
        }
        .tm-event-date { color: var(--tm-amber); font-size: 12px; }
        .tm-event-date .brk { color: var(--tm-dim); }
        .tm-event h3 { margin: 0 0 6px; font-size: 15px; font-family: inherit; font-weight: 600; color: var(--tm-fg); }
        .tm-event p { margin: 0 0 10px; color: var(--tm-fg); font-size: 12.5px; }
        .tm-event-links { display: flex; flex-wrap: wrap; gap: 12px; font-size: 11.5px; }
        .tm-event-links a::before { content: '→ '; color: var(--tm-dim); }
        .tm-event-img {
          width: 100%; aspect-ratio: 4/3; object-fit: cover;
          border: 1px solid var(--tm-line-hot);
          cursor: zoom-in; transition: border-color 0.15s;
        }
        .tm-event-img:hover { border-color: var(--tm-green); }
        .tm-event-tag {
          display: inline-block;
          font-size: 10px; padding: 1px 6px;
          background: var(--tm-panel);
          border: 1px solid var(--tm-line-hot);
          color: var(--tm-dim); margin-left: 6px;
          text-transform: uppercase; letter-spacing: 0.08em;
        }

        .tm-connect {
          display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;
          padding: 28px; background: var(--tm-panel);
          border: 1px solid var(--tm-line-hot);
        }
        .tm-connect-msg h2 { font-family: inherit; font-size: 22px; margin: 0 0 10px; font-weight: 600; }
        .tm-connect-msg p { margin: 0; color: var(--tm-fg); }
        .tm-qr { text-align: center; }
        .tm-qr img {
          width: 100%; max-width: 160px; aspect-ratio: 1/1;
          object-fit: contain; background: white; padding: 10px;
          border: 1px solid var(--tm-line-hot);
        }
        .tm-qr-label {
          font-size: 11px; color: var(--tm-dim); margin-top: 8px;
          text-transform: uppercase; letter-spacing: 0.1em;
        }

        .tm-footer {
          display: flex; justify-content: space-between;
          padding: 18px 0 0; margin-top: 32px;
          font-size: 11px; color: var(--tm-dim);
          border-top: 1px solid var(--tm-line);
        }
        .tm-footer .ok { color: var(--tm-green); }

        @media (max-width: 900px) {
          .tm-hero { grid-template-columns: 1fr; }
          .tm-about, .tm-projects, .tm-connect { grid-template-columns: 1fr; }
          .tm-gallery { grid-template-columns: 1fr 1fr; }
          .tm-event { grid-template-columns: 1fr; }
          .tm-event-img { max-width: 280px; }
        }
      `}</style>

      <div className="tm-chrome">
        <div className="tm-dots">
          <span className="tm-dot r"></span>
          <span className="tm-dot y"></span>
          <span className="tm-dot g"></span>
        </div>
        <div className="tm-chrome-mid">
          <b>miaodx@learn-in-public</b> · ~/index.html
        </div>
        <div></div>
      </div>

      <div className="tm-wrap">
        <div className="tm-prompt">
          <span className="user">miaodx</span>@<span className="path">~/site</span>{' '}
          <span className="branch">(main)</span> $ cat about.md
        </div>

        <section className="tm-hero">
          <div>
            <div style={{ color: 'var(--tm-dim)', fontSize: 11 }}># MiaoDX · <span style={{ color: 'var(--tm-green)' }}>learn-in-public</span></div>
            <h1>
              {C.hero.headline[lang][0]} <span className="accent">+</span> {lang === 'zh' ? '多只' : 'multi'} <span className="claw">🦞</span><br />
              <span style={{ color: 'var(--tm-dim)', fontSize: 22 }}>
                OPC = One Person + multi Claws<span className={`tm-cursor ${cursorOn ? '' : 'off'}`}></span>
              </span>
            </h1>
            <p className="tm-lede">
              <span className="com">{'// '}</span>{p(C.hero.lede)}
            </p>
            <div className="tm-cta">
              {C.hero.ctas.map((c, i) => (
                <a key={i} className={`tm-btn ${c.primary ? 'primary' : ''}`} href={c.href}>
                  {c.primary ? './' : '--'}{p(c.label).toLowerCase().replace(/\s/g, '-')}
                </a>
              ))}
            </div>
          </div>
          <div className="tm-avatar-card">
            <img src={C.meta.portrait} alt={p(C.meta.name)} />
            <dl>
              <dt>name</dt><dd>{C.meta.handle}</dd>
              <dt>loc</dt><dd>{p(C.meta.location)}</dd>
              <dt>role</dt><dd>Robotics · XiaomiEV</dd>
              <dt>status</dt><dd className="hot">building</dd>
            </dl>
          </div>
        </section>

        <section className="tm-section">
          <div className="tm-sec-head">
            <span className="num">01.</span><span className="ttl">./about</span>
            <span className="sub">readme.md</span>
          </div>
          <div className="tm-about">
            <div className="tm-about-body">
              {C.about.paragraphs.map((para, i) => (
                <p key={i}><span className="com">{'// '}</span>{p(para)}</p>
              ))}
              <p>
                <span className="com">{'/* '}</span>
                <span className="str">&quot;{p(C.about.pullquote)}&quot;</span>
                <span className="com">{' */'}</span>
              </p>
              <p>
                <span className="com">→ </span>
                {C.about.closing[lang][0]}
                <a href={C.about.closingHref}>{C.about.closing[lang][1]}</a>
              </p>
              <div className="tm-tags">
                {C.about.tags.map((tg, i) => (
                  <span key={i} className="tm-tag">{p(tg).toLowerCase().replace(/\s/g, '-')}</span>
                ))}
              </div>
            </div>
            <div className="tm-table">
              <div className="th"><span>year</span><span>role</span><span>kind</span></div>
              {C.experience.map((e) => (
                <div key={e.year} className="tr" data-k={e.kind}>
                  <span className="y">{e.year}</span>
                  <span className="r">{p(e.role)}</span>
                  <span className="k">{e.kind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tm-section">
          <div className="tm-sec-head">
            <span className="num">02.</span><span className="ttl">./projects</span>
            <span className="sub">{lang === 'zh' ? '// 精选项目' : '// selected'}</span>
          </div>
          <div className="tm-projects">
            {C.projects.map((pr, i) => (
              <div key={i} className="tm-proj">
                <div className="tm-proj-head">
                  <h3><span className="slash">→</span>{pr.name}</h3>
                  <span className="tm-proj-status">● {pr.status}</span>
                </div>
                <p>{p(pr.tagline)}</p>
                <div className="tm-proj-links">
                  {pr.links.map((l, j) => (
                    <a key={j} href={l.href}>git://{pr.slug}{j > 0 ? '/report' : ''}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tm-section">
          <div className="tm-sec-head">
            <span className="num">03.</span><span className="ttl">./gallery</span>
            <span className="sub">ls -la ./events/</span>
          </div>
          <div className="tm-gallery">
            {C.photos.map((ph, i) => (
              <div key={i} className="tm-gallery-item" onClick={() => onLightbox({ src: ph.src, caption: p(ph.caption) })}>
                <img src={ph.src} alt={p(ph.caption)} />
                <div className="tm-gallery-meta">
                  <span>{ph.file}</span>
                  <span className="tag">#{ph.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tm-section">
          <div className="tm-sec-head">
            <span className="num">04.</span><span className="ttl">./talks</span>
            <span className="sub">git log --since=2026-03 --oneline</span>
          </div>
          <div className="tm-events">
            {C.events.map((e, i) => (
              <article key={i} className="tm-event">
                <div className="tm-event-date">
                  <span className="brk">[</span>{e.date}<span className="brk">]</span>
                </div>
                <div>
                  <h3>{p(e.title)}<span className="tm-event-tag">{e.tag}</span></h3>
                  <p>{p(e.desc)}</p>
                  {e.links.length > 0 && (
                    <div className="tm-event-links">
                      {e.links.map((l, j) => <a key={j} href={l.href}>{p(l.label)}</a>)}
                    </div>
                  )}
                </div>
                {e.image ? (
                  <img className="tm-event-img" src={e.image} alt={p(e.title)}
                    onClick={() => onLightbox({ src: e.image, caption: p(e.title) })} />
                ) : <div />}
              </article>
            ))}
          </div>
        </section>

        <section id="connect" className="tm-section">
          <div className="tm-sec-head">
            <span className="num">05.</span><span className="ttl">./connect</span>
            <span className="sub">scan-to-chat</span>
          </div>
          <div className="tm-connect">
            <div className="tm-connect-msg">
              <h2>$ ./say-hi</h2>
              <p><span style={{ color: 'var(--tm-dim)' }}>{'// '}</span>{p(C.connect.body)}</p>
            </div>
            {C.connect.qrs.map((q, i) => (
              <div key={i} className="tm-qr">
                <img src={q.src} alt={p(q.label)} />
                <div className="tm-qr-label">{p(q.label)}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="tm-footer">
          <span>{p(C.footer.left)}</span>
          <span><span className="ok">●</span> build ok · {p(C.footer.right)}</span>
        </div>
      </div>
    </div>
  );
};

window.TerminalDesign = TerminalDesign;
