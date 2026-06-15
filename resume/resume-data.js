const RESUME_DATA = {
  updated: '2026-06',
  pdfFile: 'miao-dongxu-resume-zh-2026-06.pdf',
  person: {
    name: '缪东旭',
    pinyin: 'Miao Dongxu',
    title: '自动驾驶与机器人工程师',
    location: '北京',
    summary: '7 年自动驾驶与机器人研发经验，曾负责小米汽车自驾感知系统团队，从 0 到 1 建立量产交付、质量准出与性能优化体系。2025 年主动从团队管理角色切换到机器人业务一线，作为自驾转入机器人团队的首位研发人员，将自驾交付体系迁移到机器人场景。持续关注 AI Agent 时代的研发方式：通过清晰目标、评测闭环、自动化工具和 Agent 协作，提升复杂系统研发的确定性与迭代效率。',
  },
  contacts: {
    email: 'miaodx@hotmail.com',
    phone: '13502009660',
    github: 'https://github.com/MiaoDX',
    website: 'https://miaodx.com',
    publicAccount: '直觉机器漫谈',
  },
  highlights: [
    '业务切换与体系迁移：从自驾感知团队负责人主动转入机器人业务一线，作为自驾转入机器人团队的首位研发人员，将量产交付、测试准出、性能治理和跨团队协作经验迁移到机器人场景。',
    '机器人交付体系：推动工厂机器人项目完成内部验收，成为当年团队标杆项目，并在 2026 年完成正式宣发；过程中建立测试、问题闭环和跨模块协作机制。',
    '数据评测闭环：围绕 VLN 模型部署、数据管线和自动化评测，推动团队从单点模型研发转向可持续迭代的工程闭环。',
    'AI-native 团队实践：通过 AI Coding、Agent SDK、MCP、Skill 和 visual harness 等实践，探索复杂机器人系统中的交付、评测、架构演进和方法沉淀。',
  ],
  experience: [
    {
      period: '2025.03 - 至今',
      company: '小米汽车 自动驾驶与机器人部',
      role: '导航规划团队，高级算法工程师',
      bullets: [
        '作为自驾转入机器人团队的首位研发人员，主动从团队管理角色切换到新业务一线，承担早期方向验证、体系迁移和关键交付工作。',
        '工厂交付线：推动工厂机器人项目从研发调试走向内部验收，成为团队标杆项目，并在 2026 年完成正式宣发；过程中建立测试、问题闭环、跨模块协作和持续运营机制。',
        'VLN / 数据评测线：围绕模型部署、数据管线和自动化评测搭建研发闭环，推动团队从“单点模型训练”转向“数据、评测、部署共同驱动”的持续迭代模式。',
        '开放场景线：支撑家庭空间开放场景 demo 链路，推进取放能力和 RoboClaws 机器人大脑方向，用 MCP、Skill、Agent SDK 组织机器人能力，支持开放任务和 clean up 场景。',
        'AI-native 研发方式：将 AI Coding、visual harness 和 Agent 工作流纳入日常研发与验证流程，探索复杂机器人系统中更可验证、更可复用的研发方式。',
      ],
      awards: ['2025 H1 汽车部专项项目奖', '2025 H1 自驾最佳纽带奖', '2026 自动驾驶与机器人部 AI Hackathon 一等奖'],
    },
    {
      period: '2021.08 - 2025.03',
      company: '小米汽车 自动驾驶部',
      role: '感知系统团队负责人',
      bullets: [
        '全程参与小米汽车自动驾驶从 0 到 1 研发，负责感知系统团队建设、量产交付、质量准出和性能治理体系。',
        '从头组建感知系统团队，正式员工规模增长至 9 人；带领团队完成多代硬件平台平稳演进和同步支持。',
        '建立自动化算法发版、MIL/SIL、CI/CD、代码质量、日常测试、性能拦截与优化等流程，形成数据与评测驱动的算法交付体系。',
        '沉淀性能优化和交付方法论，并在转入机器人业务后复用到工厂项目、测试流程和数据评测闭环建设中。',
      ],
      awards: ['2022 H2 自驾最佳交付奖', '2022 H2 自驾突出贡献奖'],
    },
    {
      period: '2019.03 - 2021.07',
      company: 'DeepMotion.ai',
      role: '算法工程师',
      bullets: [
        '参与自动驾驶与泊车相关算法研发；2020-2021 年担任公司与上汽 Marvel-R 泊车合作项目交付负责人。',
        '负责驻场调试、测试、性能优化和最终交付工作。',
      ],
      awards: ['2020 年度公司最佳员工'],
    },
    {
      period: '2018.07 - 2018.09',
      company: 'Horizon Robotics',
      role: '算法工程师（实习）',
      bullets: [
        '负责车道线消失点检测算法研发。',
        '设计并开发标注工具，提升数据处理效率。',
      ],
    },
  ],
  projects: [
    {
      name: 'RoboClaws',
      link: '',
      desc: '面向家庭空间开放任务的机器人大脑方案。通过 MCP、Skill 与 Agent SDK 组织机器人观测、感知、导航、抓取和任务调度能力，探索 AI Agent 如何参与真实机器人任务规划与执行。',
    },
    {
      name: 'Roboharness',
      link: 'https://github.com/MiaoDX/roboharness',
      desc: '面向 AI coding agent 的机器人仿真测试与验收框架。将 metric 与 visual harness 结合，让 agent 能看到机器人动作、判断结果并迭代，服务于 AI-native 团队的研发验证闭环。',
    },
  ],
  education: [
    {
      period: '2016 - 2018',
      school: '天津大学',
      degree: '硕士，软件工程',
      bullets: [
        '研究方向：主动视觉、机器人。',
        '负责实验室六自由度重定位机器人平台软硬件升级维护、控制程序研发与算法方案升级。',
        '2018 ICRA DJI RoboMaster AI Challenge 团队算法负责人，团队获得决赛资格。',
      ],
      papers: [
        'ICASSP 2018：ACTIVE CAMERA RELOCALIZATION WITH RGBD CAMERA FROM A SINGLE 2D IMAGE（第一作者）',
        'ICME 2018 Oral：Fast and Reliable Computational Rephotography on Mobile Device',
      ],
      awards: ['2018-2019 华为奖学金', '2017-2018 校级二等奖学金', '2016-2017 校级一等奖学金'],
    },
    {
      period: '2012 - 2016',
      school: '西安电子科技大学',
      degree: '本科，软件工程',
      bullets: ['2016 年研究生推免至天津大学软件学院。'],
      awards: ['2014-2015 国家励志奖学金', '2014 全国大学生数学建模竞赛陕西赛区二等奖', '2013-2014 校级二等奖学金', '2012-2013 校级一等奖学金'],
    },
  ],
  talks: [
    '2026.06 自动驾驶与机器人部 AI Hackathon：Roboharness 一等奖分享',
    '2026.05 汽车人 AI 进化论第 09 期：从 Ultrathink 到 Goal，AI Coding 工程化的一年',
    '2026.04 汽车部 AI 创意市集：OpenClaw 与机器人应用展示，决赛入围',
    '2026.03 自动驾驶与机器人部 Agentic Coding 系列第一期：AI Coding 实战分享，从零到机器人抓取',
    '公众号「直觉机器漫谈」：持续分享 AI Infra、LLM、数据评测与 AI Coding 工程化实践',
  ],
  skills: [
    '研发体系建设',
    '机器人业务交付',
    '自动驾驶感知系统',
    '算法交付与质量准出',
    '数据与评测闭环',
    'AI Agent 工程化',
    'AI Coding / Agent SDK / MCP / Skill',
    '机器人导航规划与任务执行',
  ],
};

window.RESUME_DATA = RESUME_DATA;
