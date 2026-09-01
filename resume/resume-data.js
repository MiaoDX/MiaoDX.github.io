const RESUME_DATA = {
  updated: '2026-09',
  pdfFile: 'miao-dongxu-resume-zh.pdf',
  pdfArchiveFile: 'miao-dongxu-resume-zh-2026-09.pdf',
  person: {
    name: '缪东旭',
    pinyin: 'Miao Dongxu',
    title: '机器人系统技术负责人',
    focus: 'Hands-on Technical Lead\n系统工程 · 数据与评测 · 模型后训练与真机适配',
    summary: '7 年多自动驾驶与机器人系统研发经验，专注将算法能力转化为可交付、可验收的完整系统。作为小米汽车自动驾驶早期成员，从 0 到 1 组建最多 9 人的感知系统团队，并主导感知软件栈从工控机向 NVIDIA Orin-X、Orin-N 及 Thor-U 的平台演进、架构升级和算法优化；2025 年转入机器人业务，负责整机系统、任务交付、模型部署、数据评测，以及具身模型后训练与真机适配。希望以 hands-on 技术负责人方式承担机器人平台工程的端到端责任，持续从问题定义推进到真机验证和交付。',
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
    '团队与系统：从 0 到 1 组建最多 9 人的感知系统团队，建设共享代码、工具与 Owner 机制，服务约 400+ 人规模的研发协作。',
    '平台演进：主导自动驾驶感知软件栈从工控机向 NVIDIA Orin-X、Orin-N 及 Thor-U 的技术演进、架构升级、跨平台集成和算法优化，覆盖量产交付与多代硬件约束。',
    '质量与性能：推动测试左移、Crash 自动路由和资源治理，使版本平均 Crash 率按每百万公里统计下降约 98%，问题定位并路由给责任人的平均时间由约 1 天缩短至 1 小时内。',
    '机器人交付：负责三类工站的整机集成与性能，并端到端负责其中一类任务；建立 90+ 项专项测试，将整机 CPU P90 降至 60% 以下。',
    '数据、模型与真机：将仿真数据生产与模型评测扩展至云端百实例级，单实例吞吐提升约 2 倍；完成两组 π0.5 任务的数据适配、微调、推理、场景适配和 G2 真机执行。',
  ],
  experience: [
    {
      period: '2025.03 - 至今',
      company: '小米汽车 自动驾驶与机器人部',
      role: '机器人实验室，高级算法工程师',
      bullets: [
        '机器人系统工程与交付：2025 年主动转入机器人业务，2–3 周内从系统集成、性能和测试切入；横向负责三类工站共用的整机集成与性能，纵向端到端负责其中一类任务。建立 90+ 项专项测试，推动整机 CPU P90 降至 60% 以下，将整机算法与软件栈从实验室状态收敛到小批量交付状态。',
        '模型部署、数据与评测：负责 VLN 从传感器接入、云端或板端推理到机器人运控的真机部署；将仿真数据生产与模型评测扩展到云端百实例级，单实例数据生产吞吐提升约 2 倍，并结合指标、轨迹、视觉结果和失败案例支持模型版本比较及问题归因。',
        '模型后训练与真机适配：基于 AGIBOT World Challenge @ ICRA 2026 的任务体系与 Genie Sim 3.0 工具链，完成两组 π0.5 任务的数据适配、微调、推理、自有场景适配和智元 G2 真机执行。',
        '开放任务与 Agent：约 1.5 个月完成限定范围取放初版，在两种机器人形态和限定任务集上验证，动作成功率超过 90%；提出并主导 RoboClaws 与 RoboHarness，分别建设受控执行和机器验收能力，RoboHarness 获 2026 部门 AI Hackathon 一等奖。',
      ],
      awards: ['2025 H1 汽车部专项项目奖', '2025 H1 自驾最佳纽带奖', '2026 自动驾驶与机器人部 AI Hackathon 一等奖'],
    },
    {
      period: '2021.08 - 2025.03',
      company: '小米汽车 自动驾驶部',
      role: '感知系统团队负责人',
      bullets: [
        '团队与范围：2021 年加入小米汽车自动驾驶早期研发团队；从 0 到 1 组建最多 9 人的感知系统团队，负责团队建设、量产交付、质量准出和系统性能。',
        '平台演进与系统架构：主导感知软件栈从工控机向 NVIDIA Orin-X、Orin-N 及 Thor-U 的技术演进和架构升级，推进跨平台集成、算力与资源预算、算法优化及量产 bring-up。',
        '系统工程底座：统一多团队共用的代码框架、自动发版、MIL / SIL / HIL、代码质量和性能工具，让同类工程问题尽量只解决一次。',
        '质量与性能：推动测试左移、Crash 自动路由和整机资源管理，使版本平均 Crash 率按每百万公里统计下降约 98%，平均定位并路由给责任人的时间由约 1 天缩短至 1 小时内。',
        '可持续机制：把一次性交付转化为可复用的代码、工具和流程；转入机器人业务后，原有体系继续运行，相关方法复用于机器人交付和数据评测。',
      ],
      awards: ['2022 H2 自驾最佳交付奖', '2022 H2 自驾突出贡献奖'],
    },
    {
      period: '2019.03 - 2021.07',
      company: 'DeepMotion.ai',
      role: '算法工程师',
      bullets: [
        '参与自动驾驶与泊车相关算法研发；2020–2021 年担任上汽 Marvel-R 泊车合作项目交付负责人，负责算法方案、现场调试、测试、性能优化与交付。',
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
      desc: '面向机器人开放任务的受控执行框架。通过 Task、Skill、Tool 和后端接口契约组织机器人能力，使 AI Agent 能够在明确的权限、状态和执行边界内连接仿真、云端服务与真机。',
    },
    {
      name: 'RoboHarness',
      link: 'https://github.com/MiaoDX/roboharness',
      desc: '面向机器人研发 Agent 的仿真测试与验收框架。通过指标、视觉证据、失败案例和基线对比建立机器可验证的研发闭环；在公开案例中，将机器人抓取规划时间从 16 秒优化到约 3 秒。',
    },
    {
      name: 'Soma',
      link: 'https://github.com/MiaoDX/soma',
      desc: '使用 Rust 和业界成熟实践，从底层向上构建具身智能机器人系统基础，重点探索硬件抽象、实时控制、运行时通信与仿真之间清晰、可验证的工程边界。',
    },
    {
      name: 'UnitCompose',
      link: 'https://github.com/MiaoDX/unit-compose',
      desc: '基于大规模量产算法协作经验设计的 Rust 系统工程框架。通过类型化 Unit、命名 Resource 和配置驱动 DAG 建立清晰的模块边界，解耦算法实现、算法组合与宿主软件，使算法和软件团队能够独立研发、测试与演进，同时保持系统集成和运行性能的可控性。',
    },
    {
      name: 'intuitive-flow',
      link: 'https://github.com/MiaoDX/intuitive-flow',
      desc: '对 Agent 软件工程方法的开源总结。通过精简的人类协作界面、可复用 Skill 和仓库级指导，将需求澄清、计划、评审、执行、验证与维护组织成稳定流程，降低 AI 编程带来的仓库熵增。',
    },
  ],
  education: [
    {
      period: '2016 - 2018',
      school: '天津大学',
      degree: '硕士，软件工程',
      bullets: [
        '研究方向：主动视觉、机器人；负责六自由度重定位机器人算法与工程研发。',
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
    '机器人系统工程与交付',
    '数据与评测闭环',
    '具身模型后训练、微调与真机适配',
    '团队建设与跨团队协作',
    '受控 Agent 执行与验收',
  ],
  stack: [
    { label: '编程语言', items: ['C++', 'Python', 'Rust'] },
    { label: '系统平台', items: ['Linux', 'QNX', 'NVIDIA Orin-X / Orin-N / Thor-U'] },
    { label: '机器人', items: ['ROS 2'] },
    { label: '推理部署', items: ['CUDA', 'TensorRT', 'PyTorch'] },
    { label: '仿真', items: ['Isaac Sim', 'Genie Sim', 'MuJoCo'] },
    { label: 'Agent 工程', items: ['MCP', 'Agent SDK', 'Agent Skills'] },
  ],
};

window.RESUME_DATA = RESUME_DATA;
