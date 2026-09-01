const RESUME_DATA = {
  updated: '2026-09',
  pdfFile: 'miao-dongxu-resume-en.pdf',
  pdfArchiveFile: 'miao-dongxu-resume-en-2026-09.pdf',
  person: {
    name: 'Miao Dongxu · 缪东旭',
    pinyin: 'Miao Dongxu',
    title: 'Robotics Systems Technical Lead',
    focus: 'Hands-on Technical Lead\nSystems Engineering · Data & Evaluation · Model Post-Training & Real-Robot Adaptation',
    summary: 'Over 7 years of experience in autonomous driving and robotics systems, turning algorithmic capabilities into deliverable, measurable systems. As an early member of XiaomiEV\'s autonomous-driving team, I built a perception systems team of up to 9 engineers and established quality, performance, and delivery mechanisms that supported R&D collaboration as the organization grew from about 40 to 400+ engineers. Since moving into robotics in 2025, I have owned robot-system integration, task delivery, model deployment, data and evaluation, embodied-model post-training, and real-robot adaptation; I am seeking broader end-to-end responsibility as a hands-on robotics systems technical lead.',
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
    'Systems and team: built a perception systems team from 0 to 9 engineers and established shared code, tooling, and ownership mechanisms supporting R&D collaboration at an organization of 400+ engineers.',
    'Quality and performance: shifted testing left, automated crash routing, and governed system resources; average release crash rate per million kilometers fell about 98%, while issue localization and routing dropped from about one day to under one hour.',
    'Robotics delivery: integrated and optimized three workstation types while owning one task end to end; built 90+ focused tests and brought whole-system CPU P90 below 60%.',
    'Data, models, and robots: scaled simulation data generation and model evaluation to 100+ cloud instances, doubling per-instance throughput; completed data adaptation, fine-tuning, inference, scene adaptation, and AGIBOT G2 execution for two pi0.5 tasks.',
  ],
  experience: [
    { period: '2025.03 - Present', company: 'XiaomiEV · Autonomous Driving & Robotics', role: 'Senior Algorithm Engineer, Robotics Lab', bullets: [
      'Robotics systems and delivery: moved into robotics in 2025 and took ownership of system integration, performance, and testing within 2–3 weeks. Integrated and optimized three workstation types while owning one task end to end; built 90+ focused tests, brought CPU P90 below 60%, and moved the integrated algorithm and software stack from laboratory readiness to small-batch delivery readiness.',
      'Model deployment, data, and evaluation: deployed VLN from sensors through cloud or on-device inference to robot control. Scaled simulation data generation and model evaluation to 100+ cloud instances, doubling per-instance throughput and combining metrics, trajectories, visual results, and failure cases for model comparison and root-cause analysis.',
      'Model post-training and real-robot adaptation: using the AGIBOT World Challenge @ ICRA 2026 task system and Genie Sim 3.0, completed data adaptation, fine-tuning, inference, in-house scene adaptation, and AGIBOT G2 execution for two pi0.5 tasks.',
      'Open tasks and agents: delivered a constrained pick-and-place prototype in about 1.5 months, validating action success above 90% on a bounded task set across two robot forms. Founded RoboClaws and RoboHarness for controlled execution and machine-verifiable acceptance; RoboHarness won first place in the 2026 department AI Hackathon.',
    ], awards: ['2025 H1 Auto Division Special Project Award', '2025 H1 Autonomous Driving Best Connector Award', '2026 Autonomous Driving & Robotics AI Hackathon, 1st Place'] },
    { period: '2021.08 - 2025.03', company: 'XiaomiEV · Autonomous Driving', role: 'Perception Systems Team Lead', bullets: [
      'Team scope: joined the early autonomous-driving R&D team and built a perception systems team of up to 9 engineers, covering team building, production delivery, quality release gates, and system performance.',
      'Engineering foundation: standardized shared code frameworks, cross-platform integration, automated releases, MIL / SIL / HIL, code quality, and performance tooling across teams.',
      'Quality and performance: shifted testing left, automated crash routing, and managed whole-vehicle resources; average release crash rate per million kilometers fell about 98%, while issue localization and routing dropped from about one day to under one hour.',
      'Sustainable mechanisms: turned one-off delivery work into reusable code, tools, and processes that continued operating after the move to robotics.',
    ], awards: ['2022 H2 Autonomous Driving Best Delivery Award', '2022 H2 Autonomous Driving Outstanding Contribution Award'] },
    { period: '2019.03 - 2021.07', company: 'DeepMotion.ai', role: 'Algorithm Engineer', bullets: ['Worked on autonomous-driving and parking algorithms. Led delivery for the SAIC Marvel-R parking collaboration in 2020–2021, covering algorithm design, on-site tuning, testing, performance optimization, and delivery.'], awards: ['Employee of the Year, 2020'] },
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
  skills: ['Robotics systems engineering & delivery', 'Data and evaluation loops', 'Embodied-model post-training, fine-tuning & real-robot adaptation', 'Team building & cross-functional collaboration', 'Controlled agent execution & acceptance'],
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
