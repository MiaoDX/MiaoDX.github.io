const RESUME_DATA = {
  updated: '2026-07',
  pdfFile: 'miao-dongxu-resume-zh-2026-07.pdf',
  person: {
    name: '缪东旭',
    pinyin: 'Miao Dongxu',
    title: '自动驾驶与机器人工程师',
    focus: 'AI-Native 算法工程化',
    location: '北京',
    summary: '7 年自动驾驶与机器人研发经验，长期在算法、系统工程与组织协作的交界处，把单点能力变成可交付、可验收、可持续迭代的复杂系统。曾从 0 到 1 组建 9 人感知系统团队；2025 年主动回到机器人业务一线，现聚焦机器人完整任务、数据评测与 Agent 系统。',
  },
  contacts: {
    email: 'miaodx@hotmail.com',
    phone: '13502009660',
    github: 'https://github.com/MiaoDX',
    website: 'https://miaodx.com',
    workTimeline: 'https://miaodx.com/LIP/share/work-timeline.html',
    publicAccount: '直觉机器漫谈',
  },
  highlights: [
    '量产系统：把发版、测试、Crash 路由和资源治理做成持续机制，版本平均 Crash 率下降约 98%，平均定位与责任人路由由约 1 天缩短至 1 小时内。',
    '团队建设：从 0 到 1 组建最多 9 人的感知系统团队，明确模块 ownership；转岗后，代码、工具和流程继续由团队使用。',
    '机器人交付：把专项测试、整机性能和端到端运营连成闭环，负责工站任务由 3.5 分钟缩短至 2 分钟内。',
    'AI-native 研发：用 RoboClaws 约束机器人 Agent 执行边界，用 RoboHarness 把验收条件与证据做成可运行的 harness。',
  ],
  experience: [
    {
      period: '2025.03 - 至今',
      company: '小米汽车 自动驾驶与机器人部',
      role: '机器人实验室，高级算法工程师',
      bullets: [
        '角色转换：在机器人业务早期主动从团队负责人转为高级 IC，先以系统集成、性能和测试为支点，再把责任扩展到完整任务、数据评测与开放场景。',
        '工厂交付：横向治理三类工站的集成与整机性能，纵向端到端负责一类工站；建立 90+ 项专项测试，推动整机 CPU P90 降至 60% 以下，单次任务由 3.5 分钟缩短至 2 分钟内。',
        '数据与评测：负责仿真数据管线与云端批量评测，把本地单实例扩展到百实例级并行，单实例数据生产吞吐提升约 2 倍，并用指标、视觉结果与失败回归支持研发决策。',
        '开放任务：约 1.5 个月完成限定范围取放初版，在两种机器人形态上验证，成功率超过 90%；随后提出并主导 RoboClaws，用 MCP、Skill 与 Agent SDK 组织受控的机器人能力。',
        'AI-native 研发：提出并主导 RoboHarness，把完成条件、基线与 metric / visual evidence 做成可运行的验收契约；项目获 2026 部门 AI Hackathon 一等奖。',
      ],
      awards: ['2025 H1 汽车部专项项目奖', '2025 H1 自驾最佳纽带奖', '2026 自动驾驶与机器人部 AI Hackathon 一等奖'],
    },
    {
      period: '2021.08 - 2025.03',
      company: '小米汽车 自动驾驶部',
      role: '感知系统团队负责人',
      bullets: [
        '团队与范围：全程参与小米汽车自动驾驶从 0 到 1 研发，从头组建最多 9 人的感知系统团队，负责团队建设、量产交付、质量准出和性能治理。',
        '系统底座：统一多团队共用的代码框架、跨平台集成、自动发版、SIL / DIL、代码质量和性能工具，让同类工程问题尽量只解决一次。',
        '质量与性能：推动测试左移、Crash 自动路由和整机资源治理，版本平均 Crash 率下降约 98%，平均定位与责任人路由由约 1 天缩短至 1 小时内。',
        '可持续性：把一次性交付沉淀为代码、流程与团队能力；转入机器人业务后，原有体系继续运行，相关方法复用于机器人交付和数据评测。',
      ],
      awards: ['2022 H2 自驾最佳交付奖', '2022 H2 自驾突出贡献奖'],
    },
    {
      period: '2019.03 - 2021.07',
      company: 'DeepMotion.ai',
      role: '算法工程师',
      bullets: [
        '参与自动驾驶与泊车相关算法研发；2020-2021 年担任公司与上汽 Marvel-R 泊车合作项目交付负责人。',
        '负责项目现场调试、测试、性能优化和最终交付工作。',
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
      link: 'https://github.com/MiaoDX/roboclaws',
      desc: '面向家庭空间开放任务的机器人大脑方案。通过 task、skill、tool 与 backend contract 组织机器人能力，以 runtime map 保存任务状态、运行轨迹和待处理对象，连接仿真、云端服务与真机方向。',
    },
    {
      name: 'RoboHarness',
      link: 'https://github.com/MiaoDX/roboharness',
      desc: '面向 AI coding agent 的机器人仿真测试与验收框架。用 metric 与 visual evidence 建立可验证闭环，在公开案例中将机器人抓取规划从 16 秒优化到约 3 秒。',
    },
    {
      name: 'Intuitive Flow',
      link: 'https://github.com/MiaoDX/intuitive-flow',
      desc: '面向 agent-written software 的可移植工作流工具包。为 Claude Code 与 Codex 组织目标澄清、计划、执行、验证和熵减维护，将长期 Agentic Coding 实践沉淀为可复用 Skill 与仓库约定，并用于部门内部的方法推广与工程实践分享。',
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
    '2026.06 自动驾驶与机器人部 AI Hackathon：RoboHarness 一等奖分享',
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
