// Single source of content for the site.
// Edit here — both Editorial and Terminal styles read from this file.
// Each text field is { zh, en }.

const SITE_CONTENT = {
  meta: {
    name: { zh: '缪东旭', en: 'Dongxu Miao' },
    handle: 'MiaoDX',
    location: { zh: '北京', en: 'Beijing' },
    tagline: {
      zh: '公开构建 AI 协作与自动化系统',
      en: 'Building AI collaboration & automation systems in public',
    },
    motto: {
      zh: '一个人 + 多只龙虾',
      en: 'One Person + multi Claws',
    },
    portrait: 'images/miaodx-profile.jpg',
  },

  hero: {
    headline: {
      zh: ['一个人', '多只龙虾'],
      en: ['One Person', 'Multi Claws'],
    },
    lede: {
      zh: '缪东旭，在北京 — 把 AI Agent 从 demo 推进到能真实创造价值的生产系统，并持续公开复盘',
      en: 'Dongxu Miao, based in Beijing — pushing AI Agents from demos into production systems that deliver real value, documented in public',
    },
    ctas: [
      { label: { zh: '进入 LIP', en: 'Enter LIP' }, href: 'https://miaodx.com/LIP/', primary: true },
      { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/MiaoDX' },
      { label: { zh: '联系', en: 'Contact' }, href: '#connect' },
    ],
  },

  about: {
    heading: {
      zh: '长期在工程一线做 AI、自动驾驶、机器人',
      en: 'A decade of hands-on work in AI, autonomous driving and robotics',
    },
    paragraphs: [
      {
        zh: '你好，我是缪东旭，目前在北京。正在把个人实践升级为新 OPC——「One Person + multi Claws」，并公开复盘全部过程',
        en: 'Hi, I\'m MiaoDX. I\'m evolving my practice into a new OPC — "One Person + multi Claws" — and building the whole thing in public',
      },
    ],
    pullquote: {
      zh: '让更多人看到：AI Agent 不只是 demo，而是能真实创造交付价值的生产系统',
      en: 'To show that AI Agents are not just demos — they are production systems that deliver real value',
    },
    closing: {
      zh: ['案例、复盘、演讲和月报都在 ', 'LIP', ''],
      en: ['Case studies, retros, talks and monthly updates at ', 'LIP', ''],
    },
    closingHref: 'https://miaodx.com/LIP/',
    tags: [
      { zh: 'AI Coding', en: 'AI Coding' },
      { zh: '多 Agent', en: 'Multi-Agent' },
      { zh: '自动驾驶', en: 'Autonomous Driving' },
      { zh: 'OpenClaw', en: 'OpenClaw' },
      { zh: 'Learn in Public', en: 'Learn in Public' },
    ],
  },

  experience: [
    { year: '2025—', role: { zh: 'Robotics Team · XiaomiEV', en: 'Robotics Team · XiaomiEV' }, kind: 'current' },
    { year: '2021—25', role: { zh: 'Perception Team Lead · XiaomiEV', en: 'Perception Team Lead · XiaomiEV' }, kind: 'lead' },
    { year: '2019—21', role: { zh: 'DeepMotion.ai', en: 'DeepMotion.ai' }, kind: 'eng' },
    { year: '2018', role: { zh: 'Horizon Robotics', en: 'Horizon Robotics' }, kind: 'eng' },
    { year: '2016—18', role: { zh: '天津大学 · 硕士', en: 'Tianjin University · M.S.' }, kind: 'edu' },
    { year: '2012—16', role: { zh: '西安电子科技大学 · 本科', en: 'Xidian University · B.S.' }, kind: 'edu' },
  ],

  photos: [
    { src: 'images/events/2026-04/0426-forge.jpg', caption: { zh: '04.26 · 手工川 AI 创造营第一期', en: '04.26 · Forge AI Bootcamp #1' }, file: '0426_forge-bootcamp.jpg', tag: 'meetup' },
    { src: 'images/events/2026-04/0426-meetup.jpg', caption: { zh: '04.26 · 直觉机器漫谈 Meetup', en: '04.26 · Intuition Machine Meetup' }, file: '0426_intuition-machine.jpg', tag: 'talk' },
    { src: 'images/events/2026-03/0324-raise-lab-share.png', caption: { zh: '03.24 · Raise Lab 分享', en: '03.24 · Raise Lab talk' }, file: '0324_raise-lab-share.png', tag: 'talk' },
    { src: 'images/events/2026-03/0315-share-photo.jpg', caption: { zh: '03.15 · 龙虾蜕壳 Meetup', en: '03.15 · Lobster Molt Meetup' }, file: '0315_lobster-molt.jpg', tag: 'meetup' },
    { src: 'images/events/2026-03/0314-group-photo.jpg', caption: { zh: '03.14 · OpenClaw 大会合影', en: '03.14 · OpenClaw conference' }, file: '0314_openclaw-group.jpg', tag: 'conf' },
    { src: 'images/events/2026-03/0314-on-stage.jpg', caption: { zh: '03.14 · OpenClaw 现场', en: '03.14 · OpenClaw live' }, file: '0314_on-stage.jpg', tag: 'stage' },
    { src: 'share/meetup-photo-1.jpg', caption: { zh: '04.10 · 两只 Claw 的茶水间', en: '04.10 · Two Claws\' Tea Room' }, file: '0410_two-claws-meetup.jpg', tag: 'meetup' },
    { src: 'images/events/2026-03/0310-talk-screenshot.jpg', caption: { zh: '03.10 · AI Coding 宣讲', en: '03.10 · AI Coding talk' }, file: '0310_ai-coding-talk.jpg', tag: 'talk' },
  ],

  projects: [
    {
      name: 'Roboharness',
      slug: 'roboharness',
      tagline: {
        zh: 'AI coding agent 机器人仿真测试框架 — 让 Claude Code 和 Codex 看到机器人动作，自主判断并迭代',
        en: 'Robot simulation testing framework for AI coding agents — let Claude Code and Codex see robot actions and iterate autonomously',
      },
      status: 'active',
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/MiaoDX/roboharness' },
        { label: { zh: '在线报告', en: 'Report' }, href: 'https://miaodx.com/roboharness/' },
      ],
    },
    {
      name: 'claw-skills',
      slug: 'claw-skills',
      tagline: {
        zh: 'OpenClaw 可复用技能库 — 从错误到规则、跨实例协作协议，经过实战验证的技能集合',
        en: 'Reusable OpenClaw skills — error-to-rule, cross-instance collaboration protocols, battle-tested',
      },
      status: 'active',
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/MiaoDX/claw-skills' },
      ],
    },
  ],

  events: [
    {
      date: '2026-04-26',
      short: '04.26',
      title: {
        zh: '手工川 AI 创造营第一期',
        en: 'Forge AI Bootcamp #1',
      },
      desc: {
        zh: '南川（手工川）主办的线下 AI 创造营第一期，"但愿每个 OPC，都不是 NPC"',
        en: 'First offline AI bootcamp by NanChuan (Forge) — "May every OPC not be an NPC"',
      },
      links: [
        { label: { zh: '学员墙', en: 'Wall of alumni' }, href: 'https://forge.lovstudio.ai/' },
      ],
      image: 'images/events/2026-04/0426-forge.jpg',
      tag: 'community',
    },
    {
      date: '2026-04-26',
      short: '04.26',
      title: {
        zh: '直觉机器漫谈 · 借助 Claude Code Routine 把想法快速完成 0 到 1',
        en: 'Intuition Machine Meetup · From 0 to 1 with Claude Code Routine',
      },
      desc: {
        zh: '线下 Meetup 分享：一个人 + 一组 routine 怎么把新项目从 0 推到 alpha，全程基本不坐电脑前',
        en: 'Offline meetup: how one person + routines push a new project from 0 to alpha, barely touching a computer',
      },
      links: [
        { label: { zh: '完整 Slides', en: 'Full slides' }, href: 'https://miaodx.com/LIP/share/meetup_260426.html' },
      ],
      image: 'images/events/2026-04/0426-meetup.jpg',
      tag: 'community',
    },
    {
      date: '2026-04-10',
      short: '04.10',
      title: {
        zh: '两只 Claw 的茶水间 · OpenClaw 内部 Meetup',
        en: 'Two Claws\' Tea Room · OpenClaw Internal Meetup',
      },
      desc: {
        zh: '在公司举办的 OpenClaw 内部活动，现场演示 WLB 🦞 和 GSD 🥷 双 Agent 在 Slack 里自主协作、吵架、debug 的完整工作流',
        en: 'Internal OpenClaw meetup with a live demo of WLB 🦞 and GSD 🥷 dual-agent collaboration, debates and debugging in Slack',
      },
      links: [
        { label: { zh: '活动介绍页', en: 'Event page' }, href: 'https://miaodx.com/share/meetup-poster.html' },
      ],
      image: 'share/meetup-photo-1.jpg',
      tag: 'internal',
    },
    {
      date: '2026-03-24',
      short: '03.24',
      title: {
        zh: 'Raise Lab · AI Coding for Research 分享',
        en: 'Raise Lab · AI Coding for Research Talk',
      },
      desc: {
        zh: '在深圳理工大学 Raise Lab 的分享：如何让 AI 真正帮到研究者——从工具到工作流，包含实战案例与现场 Demo',
        en: 'Talk at SIST Raise Lab: how AI can truly help researchers — from tools to workflows, with real-world cases and live demos',
      },
      links: [
        { label: { zh: '完整 Slides', en: 'Full slides' }, href: 'https://miaodx.com/LIP/share/AICodingRaiseLab.html' },
      ],
      image: 'images/events/2026-03/0324-raise-lab-share.png',
      tag: 'academic',
    },
    {
      date: '2026-03-21',
      short: '03.21',
      title: {
        zh: 'OpenClaw 分享 v3 · 25 页完整版',
        en: 'OpenClaw Sharing v3 · Full 25-page Slides',
      },
      desc: {
        zh: '完整的 OpenClaw 实践分享，包含多 Agent 协作、实战案例与部署经验',
        en: 'Full OpenClaw practice sharing: multi-agent collaboration, real-world cases and deployment experience',
      },
      links: [
        { label: { zh: '公众号文章', en: 'WeChat article' }, href: 'https://mp.weixin.qq.com/s/6PcKetQ0s1XNS6pnsrUChQ' },
        { label: { zh: '演示文稿', en: 'Slides' }, href: 'https://miaodx.com/LIP/share/openclaw-sharing-v3.html' },
      ],
      image: null,
      tag: 'talk',
    },
    {
      date: '2026-03-15',
      short: '03.15',
      title: {
        zh: '龙虾蜕壳 Meetup · 低成本多 Agent 部署',
        en: 'Lobster Molt Meetup · Low-cost Multi-Agent Deployment',
      },
      desc: {
        zh: '面向外部社区的实践分享，主题围绕低成本多 Agent 部署，获新浪、日照新闻网报道',
        en: 'Community talk on low-cost multi-agent deployment, covered by Sina and Rizhao News',
      },
      links: [
        { label: { zh: '新浪报道', en: 'Sina coverage' }, href: 'https://cj.sina.cn/articles/view/7984421895/1dbe89c0700101nnpq' },
        { label: { zh: '日照新闻网', en: 'Rizhao News' }, href: 'https://m.bjnews.com.cn/detail/1773632898129687.html' },
        { label: { zh: '分享材料', en: 'Slides' }, href: 'https://miaodx.com/LIP/share/lowcost-multiplatform-multiagent-deploy.html' },
      ],
      image: 'images/events/2026-03/0315-share-photo.jpg',
      tag: 'community',
    },
    {
      date: '2026-03-14',
      short: '03.14',
      title: {
        zh: 'OpenClaw 大会 · 龙虾文明游戏',
        en: 'OpenClaw Conference · Lobster Civilization',
      },
      desc: {
        zh: '南川组织的 OpenClaw 大会，负责龙虾文明游戏环节与现场演示',
        en: 'OpenClaw conference organized by NanChuan — led the Lobster Civilization game segment with live demos',
      },
      links: [
        { label: { zh: '公众号推文', en: 'WeChat post' }, href: 'https://mp.weixin.qq.com/s/H-hadizfOhqc9waA69PRog' },
        { label: { zh: '龙虾文明总结页', en: 'Summary' }, href: 'https://miaodx.com/LIP/share/claws-civilization.html' },
      ],
      image: 'images/events/2026-03/0314-on-stage.jpg',
      tag: 'conf',
    },
    {
      date: '2026-03-10',
      short: '03.10',
      title: {
        zh: 'AI Coding 内部宣讲 · 听众 > 1k',
        en: 'AI Coding Internal Talk · 1k+ audience',
      },
      desc: {
        zh: '聚焦 Agent 协作实践与案例拆解（内部分享，暂无法直接分享材料）',
        en: 'Focused on agent collaboration practices and case breakdowns (internal talk)',
      },
      links: [],
      image: 'images/events/2026-03/0310-talk-screenshot.jpg',
      tag: 'internal',
    },
  ],

  connect: {
    heading: { zh: '合作 · 交流 · 闲聊', en: 'Collaborate · Chat · Say hi' },
    body: { zh: '扫码或走 GitHub、LIP 都行', en: 'Scan a code, or find me on GitHub and LIP' },
    qrs: [
      { src: 'share/qr-personal.jpg', label: { zh: '微信个人号', en: 'WeChat · personal' } },
      { src: 'share/qr-gzh.jpg', label: { zh: '公众号', en: 'WeChat · official' } },
    ],
  },

  footer: {
    left: {
      zh: '自驾与机器人研发工程师\nLIP 实践者 — Learn in public\nOPC 实践者 — One Person, plus multi Claws\n白天和 claude code + codex 一起给机器人写（refactor 解）bug\n其他时间和 AI Agents 一起花费 token，做更多有趣的事',
      en: 'Autonomous Driving & Robotics Engineer\nLIP Practitioner — Learn in public\nOPC Practitioner — One Person, plus multi Claws\nDaytime: writing (and refactoring) robot bugs with Claude Code + Codex\nOther times: spending tokens with AI Agents to do more interesting things',
    },
    right: { zh: '北京 · 2026', en: 'Beijing · 2026' },
  },
};

// Helper: pick a localized field
const pick = (field, lang) => {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[lang] ?? field.en ?? '';
};

window.SITE_CONTENT = SITE_CONTENT;
window.pick = pick;
