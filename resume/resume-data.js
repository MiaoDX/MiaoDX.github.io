const RESUME_DATA = {
  updated: '2026-08',
  pdfFile: 'miao-dongxu-resume-zh.pdf',
  pdfArchiveFile: 'miao-dongxu-resume-zh-2026-08.pdf',
  person: {
    name: '缪东旭',
    pinyin: 'Miao Dongxu',
    title: '机器人系统与具身智能',
    focus: '职业定位：机器人系统技术负责人',
    location: '北京',
    summary: '7 年多自动驾驶与机器人研发经验，曾从 0 到 1 组建最多 9 人的感知系统团队，并通过量产工程、质量与性能机制支撑百人级研发协作。2025 年主动转入机器人业务，2–3 周内开始承担整机交付，随后进入数据评测、开放任务、具身模型微调与真机适配；下一步希望对机器人系统的技术路线、团队建设和完整任务结果负责。',
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
    '团队建设：从 0 到 1 组建最多 9 人的感知系统团队，明确各模块负责人和责任边界；转岗后，代码、工具和流程继续由团队使用。',
    '量产系统：把发版、测试、Crash 路由和整机资源管理做成持续机制，版本平均 Crash 率下降约 98%，平均定位并分发给责任人的时间由约 1 天缩短至 1 小时内。',
    '机器人交付：把专项测试、整机性能和端到端测试连成持续运行的闭环，所负责工站的平均单次任务时长由 3.5 分钟缩短至 2 分钟内。',
    '模型到真机：基于公开任务与工具链，完成两组 π0.5 任务微调、训练工程、自有场景适配和智元 G2 真机端到端验证。',
  ],
  experience: [
    {
      period: '2025.03 - 至今',
      company: '小米汽车 自动驾驶与机器人部',
      role: '机器人实验室，高级算法工程师',
      bullets: [
        '机器人系统交付：2025 年主动转入机器人业务，2–3 周内从系统集成、性能和测试切入交付；统一负责三类工站的整机集成与性能，并端到端负责其中一类任务，建立 90+ 项专项测试，推动整机 CPU P90 降至 60% 以下，平均单次任务由 3.5 分钟缩短至 2 分钟以内。',
        '数据与评测：负责仿真数据管线与云端批量评测，把本地单实例扩展到百实例级并行，单实例数据生产吞吐提升约 2 倍，并用指标、视觉结果与失败回归支持研发决策。',
        '具身模型与真机：基于 AGIBOT World Challenge @ ICRA 2026 的任务体系与 Genie Sim 3.0 工具链，完成两组 π0.5 任务微调、训练工程优化、自有场景适配和智元 G2 真机端到端验证。',
        '开放任务与 Agent：约 1.5 个月完成限定范围取放初版并在两种机器人形态上验证，成功率超过 90%；提出并主导 RoboClaws 与 RoboHarness，分别建设受控执行和机器验收能力，RoboHarness 获 2026 部门 AI Hackathon 一等奖。',
      ],
      awards: ['2025 H1 汽车部专项项目奖', '2025 H1 自驾最佳纽带奖', '2026 自动驾驶与机器人部 AI Hackathon 一等奖'],
    },
    {
      period: '2021.08 - 2025.03',
      company: '小米汽车 自动驾驶部',
      role: '感知系统团队负责人',
      bullets: [
        '团队与范围：2021 年加入小米汽车自动驾驶早期研发团队；从头组建最多 9 人的感知系统团队，负责团队建设、量产交付、质量准出和系统性能管理。',
        '共用工程系统：统一多团队共用的代码框架、跨平台集成、自动发版、SIL / DIL、代码质量和性能工具，让同类工程问题尽量只解决一次。',
        '质量与性能：推动测试左移、Crash 自动路由和整机资源管理，版本平均 Crash 率下降约 98%，平均定位并分发给责任人的时间由约 1 天缩短至 1 小时内。',
        '可持续性：把一次性交付转化为可复用的代码与流程，并形成团队能力；转入机器人业务后，原有体系继续运行，相关方法复用于机器人交付和数据评测。',
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
      desc: '面向家庭空间开放任务的机器人执行框架。通过 Task、Skill、Tool 与后端接口契约组织受控、可观察的机器人能力，连接仿真、云端服务与真机执行。',
    },
    {
      name: 'RoboHarness',
      link: 'https://github.com/MiaoDX/roboharness',
      desc: '面向机器人研发 Agent 的仿真测试与验收框架。用指标、视觉证据和基线对比建立可验证闭环，在公开案例中将机器人抓取规划从 16 秒优化到约 3 秒。',
    },
  ],
  education: [
    {
      period: '2016 - 2018',
      school: '天津大学',
      degree: '硕士，软件工程',
      bullets: [
        '研究方向：主动视觉、机器人；负责六自由度重定位机器人平台升级与控制程序研发。',
        '2018 ICRA DJI RoboMaster AI Challenge 团队算法负责人，团队获得决赛资格。',
      ],
      papers: [
        'ICASSP 2018：ACTIVE CAMERA RELOCALIZATION WITH RGBD CAMERA FROM A SINGLE 2D IMAGE（第一作者）',
        'ICME 2018 Oral：Fast and Reliable Computational Rephotography on Mobile Device',
      ],
      awards: ['华为奖学金', '校级一等奖学金、二等奖学金'],
    },
    {
      period: '2012 - 2016',
      school: '西安电子科技大学',
      degree: '本科，软件工程',
      bullets: ['2016 年研究生推免至天津大学软件学院。'],
      awards: ['国家励志奖学金', '全国大学生数学建模竞赛陕西赛区二等奖'],
    },
  ],
  talks: [
    '2026.06 自动驾驶与机器人部 AI Hackathon：RoboHarness 一等奖分享',
    '2026.05 汽车人 AI 进化论第 09 期：从 Ultrathink 到 Goal，AI Coding 工程化的一年',
    '2026.03 自动驾驶与机器人部 Agentic Coding 系列第一期：AI Coding 实战分享，从零到机器人抓取',
  ],
  skills: [
    '机器人系统集成与任务执行',
    '具身模型微调、训练工程与真机适配',
    '复杂算法系统交付',
    '团队建设与跨团队协作',
    '数据与评测闭环',
    '受控 Agent 执行与验收',
  ],
  stack: [
    'C++ / Python',
    'Linux / QNX',
    'ROS / ADOS',
    'CUDA / TensorRT',
    'Isaac Sim / Genie Sim',
    'π0.5',
    'MCP / Agent SDK / Skill',
  ],
};

window.RESUME_DATA = RESUME_DATA;
