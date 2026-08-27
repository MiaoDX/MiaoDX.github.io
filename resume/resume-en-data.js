const RESUME_DATA = {
  updated: '2026-08',
  pdfFile: 'miao-dongxu-resume-en.pdf',
  pdfArchiveFile: 'miao-dongxu-resume-en-2026-08.pdf',
  person: {
    name: 'Miao Dongxu · 缪东旭',
    pinyin: 'Miao Dongxu',
    title: 'Robotics Systems & Embodied Intelligence',
    focus: 'Robotics Systems Technical Lead\nSystems Engineering · Data & Evaluation',
    summary: 'Over 7 years of experience in autonomous driving and robotics. I turn algorithmic capabilities into deliverable, measurable robot systems. As an early member of XiaomiEV\'s autonomous driving team, I built a perception systems team of up to 9 engineers and established the engineering, quality, and performance mechanisms that supported R&D collaboration as the organization grew from about 40 to 400+ engineers. In 2025, I moved into robotics to own end-to-end system delivery, model deployment, data evaluation, embodied-model post-training, and real-robot adaptation. I am looking to take on broader responsibility in robotics systems engineering or data and evaluation while staying hands-on and using evidence to accelerate model and system iteration.',
  },
  contacts: {
    email: 'miaodx@hotmail.com',
    phone: '13502009660',
    github: 'https://github.com/MiaoDX',
    website: 'https://miaodx.com',
    workTimeline: 'https://miaodx.com/LIP/share/work-timeline.html',
    publicAccount: '953900030',
  },
  highlights: [
    'Systems and teams: built a perception systems team from 0 to 9 engineers, with shared code, tools, ownership, quality, and performance mechanisms that supported R&D collaboration as the organization grew from about 40 to 400+ engineers.',
    'Delivery: reduced average release Crash rate by about 98%; cut average issue routing time from about one day to under one hour. In engineering terms, moved the robot from laboratory readiness to small-batch delivery readiness, with all algorithm and software modules running reliably.',
    'Data and evaluation: scaled simulation data generation and model evaluation to 100+ cloud instances; doubled per-instance throughput and used metrics, visual results, and failure cases for version comparison and root-cause analysis.',
    'Model to robot: owned sensor, cloud/on-device inference, and robot-control deployment; connected data, fine-tuning, inference, scene adaptation, and real-robot execution for two pi0.5 tasks on the AGIBOT G2.',
  ],
  experience: [
    { period: '2025.03 - Present', company: 'XiaomiEV · Autonomous Driving & Robotics', role: 'Senior Algorithm Engineer, Robotics Lab', bullets: [
      'Robotics systems and delivery: took ownership of system integration, performance, and testing within 2–3 weeks of moving to robotics. Integrated and optimized three workstation types, owning one task end to end. Built 90+ focused tests, brought CPU P90 below 60%, and moved the robot from laboratory readiness to small-batch delivery readiness, with all algorithm and software modules running reliably.',
      'Model deployment and evaluation: deployed VLN from sensors through cloud or on-device inference to robot control. Scaled simulation data generation and model evaluation to 100+ cloud instances, doubling per-instance throughput and enabling model comparison and failure attribution.',
      'Embodied models and real robots: using the AGIBOT World Challenge @ ICRA 2026 task system and Genie Sim 3.0, connected data, fine-tuning, inference, in-house scene adaptation, and the Agibot G2 for two pi0.5 tasks.',
      'Open tasks and agents: delivered a constrained pick-and-place prototype in about 1.5 months, validated on two robot forms at over 90% success. Founded RoboClaws and RoboHarness for controlled execution and machine-verifiable acceptance; RoboHarness won first place in the 2026 department AI Hackathon.',
    ], awards: ['2025 H1 Auto Division Special Project Award', '2025 H1 Autonomous Driving Best Connector Award', '2026 Autonomous Driving & Robotics AI Hackathon, 1st Place'] },
    { period: '2021.08 - 2025.03', company: 'XiaomiEV · Autonomous Driving', role: 'Head of Perception Systems', bullets: [
      'Joined the early autonomous driving R&D team and built a perception systems team of up to 9 engineers, covering team building, production delivery, quality release gates, and system performance.',
      'Standardized shared code frameworks, cross-platform integration, automated releases, SIL/DIL, code quality, and performance tooling across teams.',
      'Shifted testing left, automated Crash routing, and managed whole-vehicle resources: average release Crash rate fell about 98%, while issue localization and routing dropped from about one day to under one hour.',
      'Turned one-off delivery work into reusable code, tools, and processes that continued operating after the move to robotics.',
    ], awards: ['2022 H2 Autonomous Driving Best Delivery Award', '2022 H2 Autonomous Driving Outstanding Contribution Award'] },
    { period: '2019.03 - 2021.07', company: 'DeepMotion.ai', role: 'Algorithm Engineer', bullets: ['Worked on autonomous driving and parking algorithms. Led delivery for SAIC Marvel-R parking collaboration in 2020–2021, covering algorithm design, on-site tuning, testing, optimization, and delivery.'], awards: ['2020 Company Outstanding Employee'] },
    { period: '2018.07 - 2018.09', company: 'Horizon Robotics', role: 'Algorithm Engineer Intern', bullets: ['Developed lane-line vanishing-point detection algorithms.', 'Designed and built an annotation tool to improve data processing efficiency.'], awards: [] },
  ],
  projects: [
    { name: 'RoboClaws', link: 'https://github.com/MiaoDX/roboclaws', desc: 'A controlled execution framework for open-ended robotics tasks. Task, Skill, Tool, and backend contracts organize robot capabilities so AI agents can connect simulation, cloud services, and real robots within explicit permission, state, and execution boundaries.' },
    { name: 'RoboHarness', link: 'https://github.com/MiaoDX/roboharness', desc: 'A simulation testing and acceptance framework for robotics R&D agents. Metrics, visual evidence, failure cases, and baseline comparisons create a machine-verifiable development loop; in a public case, it helped reduce robot grasp-planning time from 16 seconds to about 3 seconds.' },
    { name: 'Soma', link: 'https://github.com/MiaoDX/soma', desc: 'A bottom-up robotics systems foundation for embodied intelligence, built in Rust with established industry practices. It focuses on clear, verifiable engineering boundaries across hardware abstraction, real-time control, runtime communication, and simulation.' },
    { name: 'UnitCompose', link: 'https://github.com/MiaoDX/unit-compose', desc: 'A Rust systems-engineering framework informed by large-scale production algorithm collaboration. Typed Units, named Resources, and configuration-driven DAGs establish clear module boundaries and decouple algorithm implementations, algorithm compositions, and host software, enabling algorithm and software teams to develop, test, and evolve independently while keeping system integration and runtime performance under control.' },
    { name: 'intuitive-flow', link: 'https://github.com/MiaoDX/intuitive-flow', desc: 'An open-source synthesis of agent software-engineering practices. Small human-facing surfaces, reusable Skills, and repo-local guidance organize clarification, planning, review, execution, verification, and maintenance into stable flows that reduce repository entropy from AI-assisted development.' },
  ],
  education: [
    { period: '2016 - 2018', school: 'Tianjin University', degree: 'M.S. · Software Engineering', bullets: ['Research: active vision and robotics; worked on algorithms and engineering for a six-DOF relocalization robot.', 'Algorithm lead for the 2018 ICRA DJI RoboMaster AI Challenge team, which qualified for the finals.'], papers: ['ICASSP 2018: Active Camera Relocalization with RGBD Camera from a Single 2D Image (first author)', 'ICME 2018 Oral: Fast and Reliable Computational Rephotography on Mobile Device'], awards: ['Huawei Scholarship', 'University First- and Second-Class Scholarships'] },
    { period: '2012 - 2016', school: 'Xidian University', degree: 'B.S. · Software Engineering', bullets: ['Recommended for direct admission to Tianjin University\'s School of Software.'], awards: ['National Encouragement Scholarship', 'Second Prize, Shaanxi Division, National Mathematical Contest in Modeling'], papers: [] },
  ],
  talks: ['2026.06 AI Hackathon: RoboHarness first-place presentation', '2026.05 Automotive AI Evolution #09: From Ultrathink to Goal', '2026.03 Agentic Coding #01: AI Coding in practice, from zero to robot grasping'],
  skills: ['Robotics systems engineering & delivery', 'Data and evaluation loops', 'Embodied-model post-training & real-robot adaptation', 'Team building & cross-functional collaboration', 'Controlled agent execution & acceptance'],
  stack: [
    { label: 'Languages', items: ['C++', 'Python', 'Rust'] },
    { label: 'Systems', items: ['Linux', 'QNX'] },
    { label: 'Robotics', items: ['ROS 2'] },
    { label: 'Inference', items: ['CUDA', 'TensorRT', 'PyTorch'] },
    { label: 'Simulation', items: ['Isaac Sim', 'Genie Sim', 'MuJoCo'] },
    { label: 'Agent Engineering', items: ['MCP', 'Agent SDK', 'Agent Skills'] },
  ],
};
window.RESUME_DATA = RESUME_DATA;
