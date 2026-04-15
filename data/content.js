export const navItems = ["Home", "About", "Experience", "Projects", "Community", "Contact"];

export const stats = [
  { value: "$6.5M+", label: "Documented Savings" },
  { value: "10,465", label: "Hours Saved Annually" },
  { value: "12+", label: "Years of Experience" },
  { value: "7", label: "Professional Certifications" },
];

export const experience = [
  {
    title: "AI & Agile Practice Coach",
    subtitle: "Technology and Data Innovations",
    org: "Vanguard | Personal Investor Division",
    dates: "2021 - Present",
    description:
      "Hand-selected in late 2025 to transition from the Office of Continuous Improvement into the Agile Practice. I partner with developers, product owners, and engineering teams to drive AI-enabled process transformation, build developer tooling, and deliver scalable technology solutions.",
    highlights: [
      "Automated PAS Email Evaluation Workflow: 10,465 hours saved/year, $984K in value",
      "$4.9M annual waste reduction through Lean consulting",
      "19.8% improvement in organizational maturity subdivision-wide",
      "800,000+ account transition via Agile/Scrum training program",
      "50+ Claude AI skills managed in GitHub for coaching at scale",
      "Jira Forge app integrations for risk scoring and impact assessments",
    ],
  },
  {
    title: "Tax Operations Manager",
    subtitle: "Retail Regulatory Operations",
    org: "Vanguard",
    dates: "2019 - 2021",
    description:
      "Directed 18 tax and cost basis experts through operational realignment, DMAIC projects, and data-driven performance management.",
    highlights: [
      "$325,220 annual cost savings through strategic KPIs",
      "$476,350 combined savings across two DMAIC initiatives",
      "13.2% reduction in defect work, surpassing target",
    ],
  },
  {
    title: "Participant Services Manager",
    subtitle: "Institutional Investment Group",
    org: "Vanguard",
    dates: "2015 - 2019",
    description:
      "Led 24 FINRA-licensed representatives. Oversaw licensing programs achieving 85% and 98% pass rates in consecutive years.",
    highlights: [
      "Highest Series 6/63 pass rates in department history",
      "Perfect de-escalation record with elevated clients",
      "Built Excel/VBA forecasting tool for headcount planning",
    ],
  },
  {
    title: "Senior Branch Manager",
    subtitle: "Multiple Locations",
    org: "Hertz Car Rentals",
    dates: "2012 - 2015",
    description:
      "Managed $2.5M+ annual revenue across multiple offices. Led fleet management strategies and built key business partnerships.",
    highlights: [],
  },
];

export const projects = [
  {
    title: "Agentic Project Launcher",
    category: "AI Architecture",
    description:
      "Designed a multi-agent project delivery system using Power Platform where a single user prompt triggers five sequential AI agents (Project Manager, Scrum Master, Copywriter, Professional Coach, QA Reviewer) that collaboratively build a complete project plan, sprint backlog, communications, and coaching artifacts. All outputs stored in Dataverse with full audit logging.",
    impact: "5-agent AI system",
    tags: ["Copilot Studio", "Power Automate", "Dataverse", "AI Agents"],
    featured: true,
  },
  {
    title: "PAS Email Evaluation Automation",
    category: "Power Automate",
    description:
      "Replaced a labor-intensive manual workflow with automated conditional logic, multi-level approvals, and real-time notifications. Processing 4,830+ evaluations monthly.",
    impact: "$984K annual value",
    tags: ["Power Automate", "Change Management", "Process Design"],
    featured: true,
  },
  {
    title: "Claude AI Skills Library",
    category: "AI & Developer Tooling",
    description:
      "Built and manage a GitHub-hosted repository of 50+ Claude AI skills purpose-built for Agile and Lean coaches. A recent organizational innovation to scale AI-assisted coaching.",
    impact: "50+ skills deployed",
    tags: ["Claude Code", "GitHub", "AI Architecture"],
    featured: true,
  },
  {
    title: "Enterprise Integration Architecture",
    category: "Azure / Forge / Dataverse",
    description:
      "Architected a full enterprise integration pipeline connecting Atlassian Jira to Microsoft Dataverse via Azure AD. Designed OAuth application authentication flow, Forge backend functions for server-side API calls, normalized two-table Dataverse schema, and Graph API write operations. Built to support risk scoring data that feeds Power BI dashboards and Power Apps.",
    impact: "Cross-platform data pipeline",
    tags: ["Azure AD", "Graph API", "Jira Forge", "Dataverse"],
    featured: true,
  },
  {
    title: "Incident Management Process Consolidation",
    category: "Facilitation / Process Mapping",
    description:
      "Architected and led a 3-month cross-functional consultation between two incident management teams, one technical (developers, IT leadership, CTO officers) and one business-facing, with significant process overlap. Built the entire engagement in Figma, conducting discovery, process mapping, redundancy analysis, and collaborative RACI charting. Designed async collaboration frameworks for virtual teams and delivered strategic recommendations for process optimization at integration points, eliminating duplicate effort while navigating sensitive organizational dynamics.",
    impact: "3-month enterprise engagement",
    tags: ["Figma", "Process Mapping", "RACI", "Cross-Functional Facilitation"],
  },
  {
    title: "Jira Forge Risk Scoring App",
    category: "Custom Development",
    description:
      "Built Jira Forge app integrations to manage risk scoring and impact assessments, extending Jira native capabilities with custom tooling for structured decision making.",
    impact: "Enterprise-wide tooling",
    tags: ["Jira Forge", "JavaScript", "Atlassian"],
  },
  {
    title: "Demand & Capacity Frontier",
    category: "Lean / Power BI",
    description:
      "Transformed how demand and capacity were understood and managed across a subdivision, visualizing operational maturity and empowering leaders with actionable data.",
    impact: "19.8% maturity improvement",
    tags: ["Power BI", "Kanban", "Lean Systems"],
  },
  {
    title: "Platform Transition Program",
    category: "Agile Coaching",
    description:
      "Orchestrated end-to-end Agile and Scrum training for Vanguard's Platform Transition, developing comprehensive Jira training and project boards for 800,000+ account migration.",
    impact: "800K+ accounts transitioned",
    tags: ["Jira", "Scrum", "Training Design"],
  },
  {
    title: "Agile Practice Data Lakes",
    category: "Data & Analytics",
    description:
      "Self-taught SQL and built Tableau/Tableau Prep Flows pipelines to manage massive data lakes the Agile Practice uses for coaching and performance insights.",
    impact: "Practice-wide analytics",
    tags: ["SQL", "Tableau", "Data Engineering"],
  },
  {
    title: "Personal Budget Tracking App",
    category: "Full-Stack Development",
    description:
      "Built and shipped a personal finance web app from scratch using vanilla JavaScript, Chart.js, and localStorage. Features include income/expense projection, debt payoff visualization, and a guided onboarding wizard. Subsequently designed a v4.0 React/Zustand redesign with a cyber-neumorphism dark theme, phased build plan, and full JSON round-trip data compatibility.",
    impact: "Shipped to GitHub",
    tags: ["React", "Zustand", "Chart.js", "Claude Code"],
  },
  {
    title: "VVI Net Settlement Account Process Mapping",
    category: "Process Optimization",
    description:
      "Transformed a complex bank attestation process into a clear, actionable framework through stakeholder collaboration and facilitation. Transitioned from consultant to project lead, conducted discovery with senior leaders, led a four-hour collaborative mapping session, and delivered a comprehensive Visio process map with strategic recommendations that earned recognition from regulatory bodies.",
    impact: "Regulatory recognition",
    tags: ["Process Mapping", "Visio", "MURAL", "Compliance"],
  },
  {
    title: "Scientific Method for System Adoption",
    category: "Change Management",
    description:
      "Combined the Scientific Method with human-centered design to create a structured brainstorming model that tackled low adoption rates of the Vanguard Management System. Led iterative development of the model, transitioned it to MS Whiteboard for digital collaboration, and executed an organization-wide observation blitz that validated hypotheses and generated actionable adoption strategies.",
    impact: "Division-wide adoption improvement",
    tags: ["Scientific Method", "Human-Centered Design", "MS Whiteboard"],
  },
  {
    title: "Strategic Value Proposition Development",
    category: "Facilitation",
    description:
      "Designed and facilitated a MURAL-based workshop to help a senior leader and her team in Brokerage and Investments craft a compelling value proposition. Opened with Simon Sinek's Start With Why framework, guided the team through structured brainstorming, and delivered a standardized template that unified diverse perspectives into a shared strategic vision.",
    impact: "Leadership alignment achieved",
    tags: ["MURAL", "Simon Sinek", "Workshop Design", "Facilitation"],
  },
  {
    title: "SATA Change Management Framework Training",
    category: "Training Design",
    description:
      "Designed and delivered a training program introducing the SATA (Sponsor, Advocate, Target, Agent) change management framework to peers and leaders. Drew from direct academic study with the model's author, Chris Crosby, and translated the framework from theory into practical organizational application, positioning it as a complement to existing models like RACI.",
    impact: "Org-wide training delivered",
    tags: ["SATA Framework", "Instructional Design", "Change Management"],
  },
  {
    title: "Process Owner Library Automation",
    category: "Power Automate",
    description:
      "Automated the management of critical contact data for process and product owners, eliminating manual tracking and ensuring real-time accuracy. Built change alert notifications so stakeholders were immediately informed of updates, supporting both day-to-day operational efficiency and crisis readiness across the organization.",
    impact: "Real-time accuracy achieved",
    tags: ["Power Automate", "SharePoint", "Data Automation"],
  },
];

export const community = [
  {
    title: "ABLE CRG - Arizona Site Lead / Enterprise Operations",
    org: "Vanguard",
    dates: "2023 - Present",
    description:
      'Planned and executed the "ABLE Summit: Empowering All Abilities," a global event emphasizing accessibility and empowerment. Led cross-departmental teams and collaborated with the Managing Director and Chief Diversity Officer.',
  },
  {
    title: "Girls JV Flag Football Head Coach",
    org: "Sandra Day O'Connor High School",
    dates: "2025 - Present",
    description:
      "Building culture, developing athletic confidence, and creating an inclusive competitive environment for student-athletes.",
  },
  {
    title: "Community Digital Engagement Volunteer",
    org: "SDO Wrestling",
    dates: "2022 - Present",
    description:
      "Manage websites, online storefronts, digital marketing, and fundraising campaigns for the school wrestling program and club team.",
  },
  {
    title: "Career Coach and Mentor",
    org: "Vanguard AZ Career Development",
    dates: "2017 - Present",
    description:
      "Leadership coaching, interview preparation, networking strategy, and career growth guidance for participants across the organization.",
  },
];

export const tools = [
  { category: "AI & Dev", items: ["Claude Code", "GitHub", "Jira Forge", "AI Prompt Engineering"] },
  { category: "Data", items: ["Tableau", "SQL", "Power BI", "Python", "Excel/VBA"] },
  { category: "Platform", items: ["Power Automate", "Power Apps", "Copilot Studio"] },
  { category: "Design", items: ["Figma", "MURAL", "Visio", "Adobe Creative Suite"] },
  { category: "Project", items: ["Jira", "Confluence", "Kanban", "ActionableAgile"] },
];

export const certs = [
  "PL-900 (Microsoft)",
  "PSM (Scrum.org)",
  "PSPO (Scrum.org)",
  "PSK (Scrum.org)",
  "SPS (Scrum.org)",
  "CSSGB (ASQ)",
  "LUMA Facilitator",
];
