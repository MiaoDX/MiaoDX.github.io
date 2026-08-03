// Single source of content for the site.
// Edit here — the Editorial homepage reads from this file.
// Each text field is { zh, en }.

const SITE_CONTENT = {
  meta: {
    name: { zh: '缪东旭', en: 'Dongxu Miao' },
    handle: 'MiaoDX',
    location: { zh: '北京', en: 'Beijing' },
    pageTitle: {
      zh: 'MiaoDX — 机器人系统与具身智能',
      en: 'MiaoDX — Robotics Systems & Embodied AI',
    },
    description: {
      zh: '缪东旭（MiaoDX）：机器人系统与具身智能方向的 hands-on 技术负责人，关注复杂系统交付、模型与真机、数据评测和团队建设',
      en: 'Dongxu Miao (MiaoDX): a hands-on robotics systems lead focused on embodied AI, real-world delivery, model-to-robot integration, evaluation and team building',
    },
    tagline: {
      zh: '机器人系统 · 具身模型 · 复杂系统交付',
      en: 'Robotics Systems · Embodied Models · Complex-System Delivery',
    },
    portrait: 'images/miaodx-profile.jpg',
  },

  hero: {
    headline: {
      zh: ['让复杂智能系统', '走向真实交付'],
      en: ['Intelligent systems', 'built for the real world'],
    },
    lede: {
      zh: '我是缪东旭，一名从自动驾驶量产系统走到机器人完整任务的 hands-on 技术负责人。曾从 0 到 1 组建感知系统团队；现在在机器人一线做系统交付、具身模型微调与真机适配，并用数据、评测和 Agent 提高研发迭代效率',
      en: 'I am Dongxu Miao, a hands-on technical lead who moved from production autonomous-driving systems into complete robotics tasks. I built a perception-systems team from zero and now work across delivery, embodied-model fine-tuning, real-robot adaptation, evaluation and agent-assisted development',
    },
    ctas: [
      { label: { zh: '代表工作', en: 'Selected work' }, href: '#work', primary: true },
      { label: { zh: '文章与分享', en: 'Writing & talks' }, href: 'https://miaodx.com/LIP/' },
      { label: { zh: '简历', en: 'Resume' }, href: 'resume/' },
      { label: { zh: '工作 Timeline', en: 'Work timeline' }, href: 'https://miaodx.com/LIP/share/work-timeline.html' },
    ],
  },

  about: {
    heading: {
      zh: '在复杂系统里，把算法做成真正可交付的产品能力',
      en: 'Turning algorithms into dependable product capabilities',
    },
    paragraphs: [
      {
        zh: '2021 年加入小米汽车自动驾驶早期研发团队，后从 0 到 1 组建最多 9 人的感知系统团队，负责量产交付、质量准出和系统性能；2025 年主动转入机器人业务，2–3 周内开始承担整机集成与性能交付',
        en: 'I joined Xiaomi EV autonomous driving in its early R&D stage, then built a perception-systems team of up to nine people and owned production delivery, quality gates and system performance. In 2025 I moved into robotics and began taking on system integration and performance delivery within two to three weeks',
      },
      {
        zh: '当前聚焦具身模型微调、训练工程与真机适配，并把数据评测、可验证 Harness 和受控 Agent 执行带进机器人研发，让模型能力真正进入自有场景和持续迭代闭环',
        en: 'Today I focus on embodied-model fine-tuning, training engineering and real-robot adaptation, while bringing data, evaluation, verifiable harnesses and controlled agent execution into robotics development',
      },
    ],
    pullquote: {
      zh: '技术负责人的价值，是让模型、系统和团队最终对同一个真实任务结果负责',
      en: 'A technical lead connects models, systems and teams around the same real-world task outcome',
    },
    closing: {
      zh: ['案例、复盘与演讲持续发布在 ', 'Learn in Public', ''],
      en: ['Case studies, retrospectives and talks are published through ', 'Learn in Public', ''],
    },
    closingHref: 'https://miaodx.com/LIP/',
    tags: [
      { zh: '机器人系统', en: 'Robotics Systems' },
      { zh: '具身模型与真机', en: 'Embodied Models & Robots' },
      { zh: '算法工程化', en: 'Algorithm Engineering' },
      { zh: '数据与评测', en: 'Data & Evaluation' },
      { zh: '团队建设', en: 'Team Building' },
      { zh: 'Learn in Public', en: 'Learn in Public' },
    ],
  },

  focus: [
    {
      index: '01',
      title: { zh: '真实系统交付', en: 'Real-world delivery' },
      body: {
        zh: '把算法能力部署到受资源约束的产品系统，处理性能、集成、质量准出与跨模块协作',
        en: 'Deploying algorithms into resource-constrained products across performance, integration, quality gates and cross-team execution',
      },
    },
    {
      index: '02',
      title: { zh: '数据与评测闭环', en: 'Data & evaluation loops' },
      body: {
        zh: '用稳定的数据生产、批量评测、结果对比与失败回归，支撑模型和系统持续迭代',
        en: 'Building stable data pipelines, batch evaluation, comparison and failure regression for continuous system improvement',
      },
    },
    {
      index: '03',
      title: { zh: '具身模型与真机', en: 'Embodied models & real robots' },
      body: {
        zh: '从公开任务与模型能力出发，完成微调、训练工程、自有场景适配和真机端到端验证',
        en: 'Taking public tasks and model capabilities through fine-tuning, training engineering, scenario adaptation and end-to-end real-robot validation',
      },
    },
  ],

  experience: [
    { year: '2025—', role: { zh: '小米汽车 · 机器人实验室 · 高级算法工程师', en: 'Robotics Lab · Xiaomi EV · Senior Algorithm Engineer' }, kind: 'current' },
    { year: '2021—25', role: { zh: '小米汽车 · 自驾感知系统团队负责人', en: 'Perception Systems Lead · Xiaomi EV' }, kind: 'lead' },
    { year: '2019—21', role: { zh: 'DeepMotion.ai · 算法工程师', en: 'Algorithm Engineer · DeepMotion.ai' }, kind: 'eng' },
    { year: '2018', role: { zh: '地平线机器人 · 算法工程师', en: 'Algorithm Engineer · Horizon Robotics' }, kind: 'eng' },
    { year: '2016—18', role: { zh: '天津大学 · 硕士', en: 'Tianjin University · M.S.' }, kind: 'edu' },
    { year: '2012—16', role: { zh: '西安电子科技大学 · 本科', en: 'Xidian University · B.S.' }, kind: 'edu' },
  ],

  photos: [
    { src: 'images/events/2026-06/0602-roboharness-hackathon.png', caption: { zh: '06.02 · RoboHarness 一等奖分享', en: '06.02 · RoboHarness first-prize talk' }, file: '0602_roboharness.jpg', tag: 'project' },
    { src: 'images/events/2026-05/0513-ultrathink-to-goal.png', caption: { zh: '05.13 · AI Coding 工程化分享', en: '05.13 · AI Coding engineering talk' }, file: '0513_ai-coding-engineering.jpg', tag: 'talk' },
    { src: 'images/events/2026-04/0426-meetup.jpg', caption: { zh: '04.26 · 直觉机器漫谈 Meetup', en: '04.26 · Intuition Machine Meetup' }, file: '0426_intuition-machine.jpg', tag: 'talk' },
    { src: 'images/events/2026-03/0324-raise-lab-share.png', caption: { zh: '03.24 · Raise Lab 分享', en: '03.24 · Raise Lab talk' }, file: '0324_raise-lab-share.png', tag: 'talk' },
    { src: 'images/events/2026-03/0310-talk-screenshot.jpg', caption: { zh: '03.10 · AI Coding 宣讲', en: '03.10 · AI Coding talk' }, file: '0310_ai-coding-talk.jpg', tag: 'talk' },
  ],

  projects: [
    {
      name: 'Embodied Model → Real Robot',
      slug: 'embodied-model-real-robot',
      tagline: {
        zh: '从公开任务与模型能力出发，完成 π0.5 微调、训练工程、自有场景适配和智元 G2 真机端到端验证',
        en: 'Taking public tasks and model capabilities through π0.5 fine-tuning, training engineering, scenario adaptation and end-to-end validation on an AgiBot G2',
      },
      status: 'active',
      links: [
        { label: { zh: '查看案例', en: 'Case study' }, href: 'https://miaodx.com/LIP/share/work-timeline.html#7' },
        { label: { zh: '完整简历', en: 'Resume' }, href: 'resume/' },
      ],
    },
    {
      name: 'RoboClaws',
      slug: 'roboclaws',
      tagline: {
        zh: '面向机器人开放任务的 AI Agent / 机器人大脑框架 — 用 MCP、Skill 与 Agent SDK 组织受控、可观察的机器人能力',
        en: 'AI Agent / robot-brain framework for open-ended tasks — organizing controlled, observable robot capabilities with MCP, Skills and Agent SDK',
      },
      status: 'active',
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/MiaoDX/roboclaws' },
      ],
    },
    {
      name: 'RoboHarness',
      slug: 'roboharness',
      tagline: {
        zh: '面向机器人研发 Agent 的仿真测试与验收框架 — 用指标、视觉证据和基线对比形成可复查的结果闭环',
        en: 'Simulation testing and acceptance framework for robotics development agents — combining metrics, visual evidence and baseline comparisons into reviewable outcomes',
      },
      status: 'active',
      links: [
        { label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/MiaoDX/roboharness' },
        { label: { zh: '在线报告', en: 'Report' }, href: 'https://miaodx.com/roboharness/' },
      ],
    },
  ],

  events: [
    {
      date: '2026-06-02',
      short: '06.02',
      featured: true,
      title: {
        zh: '自驾内部 Hackathon · RoboHarness 一等奖分享',
        en: 'AD Internal Hackathon · RoboHarness First Prize Talk',
      },
      desc: {
        zh: '我们在自驾内部 Hackathon 中凭 RoboHarness 获得一等奖，并分享了从真实机器人项目抽出来的 Agent 验收层：指标与可视化验收框架让长程 AI Coding 任务可验证、可迭代',
        en: 'RoboHarness won first prize at the autonomous driving internal hackathon, followed by a talk on the Agent acceptance layer extracted from real robotics work: metric + visual harness for verifiable long-horizon AI Coding tasks',
      },
      links: [
        { label: { zh: '完整分享', en: 'Full talk' }, href: 'https://miaodx.com/LIP/ai-coding/roboharness-self-evaluating-agents' },
      ],
      image: 'images/events/2026-06/0602-roboharness-hackathon.png',
      tag: 'internal',
    },
    {
      date: '2026-05-13',
      short: '05.13',
      featured: true,
      title: {
        zh: '从 Ultrathink 到 Goal：AI Coding 工程化的一年',
        en: 'From Ultrathink to Goal: A Year of AI Coding Engineering',
      },
      desc: {
        zh: '汽车人 AI 进化论第 09 期，50 min lecture：同一模型更换验收框架相差 25pp，Skill / Context / Verification 三轴拆解 Claude Code 405 个版本',
        en: 'Autobot AI Evolution #09, 50 min lecture: 25pp gap from harness alone, Skill / Context / Verification axis across Claude Code 405 releases',
      },
      links: [
        { label: { zh: '完整 Slides', en: 'Full slides' }, href: 'https://miaodx.com/LIP/share/ultrathink-to-goal/' },
      ],
      image: 'images/events/2026-05/0513-ultrathink-to-goal.png',
      tag: 'talk',
    },
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
      featured: true,
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
      featured: true,
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
      zh: '机器人系统与具身智能\n模型到真机 · 复杂系统交付 · 团队建设\n持续公开构建，持续复盘',
      en: 'Robotics systems & embodied AI\nModel to robot · Complex-system delivery · Team building\nBuilding and learning in public',
    },
    right: { zh: '北京 · MiaoDX', en: 'Beijing · MiaoDX' },
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