export type RoomId =
  | "network"
  | "it"
  | "media"
  | "hr"
  | "consumer"
  | "business"
  | "finance"
  | "legal"
  | "security"
  | "support"
  | "executive";

export type Agent = {
  id: string;
  name: string;
  room: RoomId;
  functionLabel: string;
  persona: string;
  description: string;
  outcome: string;
  roiCategory: "Revenue growth" | "Cost reduction" | "Risk reduction" | "Productivity";
  risk: "Low" | "Low-Medium" | "Medium" | "High";
  dataSensitivity: "Low" | "Medium" | "High" | "Confidential";
  approvedActions: string;
  humanApproval: string;
  certification: "Certified" | "Production candidate" | "In review" | "Pilot";
  governance: "Certified" | "Production candidate" | "In review" | "Pilot";
  adoption: number;
  usage: number;
  roiScore: number;
  maturity: "Scaling" | "Piloting" | "Emerging";
  pattern: string;
  status: "Live" | "Ramping" | "Onboarding";
  url: string;
};

export type Room = {
  id: RoomId;
  name: string;
  short: string;
  persona: string;
  owner: string;
  outcomes: string[];
  governance: string;
  maturity: number;
  accent: string;
};

export const rooms: Room[] = [
  {
    id: "network",
    name: "Network Agentic Solutions",
    short: "Network Operations Room",
    persona: "CTO, Network Engineering Leader, NOC Leader, Field Operations Leader",
    owner: "CTO",
    outcomes: [
      "Lower MTTR",
      "Higher network reliability",
      "Faster root cause analysis",
      "Reduced escalations",
      "Better capacity planning",
      "Improved customer experience during outages",
    ],
    governance: "Certified with human-in-the-loop remediation",
    maturity: 82,
    accent: "var(--ms-blue)",
  },
  {
    id: "it",
    name: "IT Agentic Solutions",
    short: "IT Operations Room",
    persona: "CIO, VP IT Operations, Service Desk Leader, Enterprise Architecture Leader",
    owner: "CIO",
    outcomes: [
      "Lower IT support costs",
      "Faster incident resolution",
      "Reduced ticket volume",
      "Better change quality",
      "Improved employee productivity",
      "Multi-cloud cost control",
    ],
    governance: "Certified",
    maturity: 86,
    accent: "var(--ms-teal)",
  },
  {
    id: "media",
    name: "Media Agentic Solutions",
    short: "Media & Venue Room",
    persona:
      "Media Executive, Sports & Entertainment Leader, Rights Management Leader, Venue Revenue Leader, Sponsorship Leader",
    owner: "Media / Venue Executive",
    outcomes: [
      "Better media rights monetization",
      "Increased venue revenue",
      "Higher sponsorship yield",
      "Faster campaign planning",
      "Improved partner value",
      "Better audience and inventory insights",
    ],
    governance: "Certified with rights-constraint checks",
    maturity: 74,
    accent: "var(--ms-amber)",
  },
  {
    id: "hr",
    name: "HR Agentic Solutions",
    short: "HR Workforce Room",
    persona: "CHRO, Talent Acquisition Leader, Workforce Planning Leader, HR Operations Leader",
    owner: "CHRO",
    outcomes: [
      "Faster hiring",
      "Improved internal mobility",
      "Reduced recruiting cost",
      "Better workforce planning",
      "Skills-based talent matching",
      "Improved candidate and employee experience",
    ],
    governance: "Human review required on all recommendations",
    maturity: 68,
    accent: "var(--ms-green)",
  },
  {
    id: "consumer",
    name: "Consumer LOB Agentic Solutions",
    short: "Consumer Growth Room",
    persona:
      "Consumer Business Leader, CMO, Chief Customer Officer, Digital Channel Leader, Care Leader",
    owner: "Consumer Business Leader",
    outcomes: [
      "Reduced churn",
      "Increased mobile attach",
      "Improved customer lifetime value",
      "Better local growth planning",
      "More personalized offers",
      "Improved next-best-action decisions",
    ],
    governance: "Certified with offer-policy guardrails",
    maturity: 88,
    accent: "var(--ms-violet)",
  },
  {
    id: "business",
    name: "Business LOB Agentic Solutions",
    short: "Business Sales Room",
    persona: "SMB Sales Leader, B2B Sales Leader, Commercial Operations Leader, Channel Leader",
    owner: "B2B Sales Leader",
    outcomes: [
      "Higher SMB conversion",
      "Better lead prioritization",
      "Faster quote-to-close",
      "Improved sales productivity",
      "More personalized B2B outreach",
      "Better pipeline visibility",
    ],
    governance: "Approved for sales productivity use",
    maturity: 71,
    accent: "var(--ms-cyan)",
  },
  {
    id: "finance",
    name: "Finance Agentic Solutions",
    short: "Finance Room",
    persona: "CFO, Revenue Assurance Leader, Finance Operations Leader, FP&A Leader",
    owner: "CFO",
    outcomes: [
      "Revenue leakage recovery",
      "Improved billing accuracy",
      "Stronger financial controls",
      "Better order-to-cash visibility",
      "Reduced revenue risk",
      "Improved EBITDA protection",
    ],
    governance: "Certified, finance-owned",
    maturity: 80,
    accent: "var(--ms-green)",
  },
  {
    id: "legal",
    name: "Legal and Procurement",
    short: "Legal & Procurement Room",
    persona: "General Counsel, Compliance Leader, Procurement Leader, Contract Management Leader",
    owner: "General Counsel / Procurement Leader",
    outcomes: [
      "Reduced compliance risk",
      "Faster contract review",
      "Better obligation tracking",
      "Improved vendor governance",
      "Stronger regulatory readiness",
      "Reduced manual review effort",
    ],
    governance: "Legal review required",
    maturity: 65,
    accent: "var(--ms-red)",
  },
  {
    id: "security",
    name: "Corporate Security Agentic Solutions",
    short: "Corporate Security Room",
    persona: "Chief Security Officer, Cybersecurity Leader, Physical Security Leader, Fraud Operations Leader",
    owner: "Chief Security Officer",
    outcomes: [
      "Faster threat detection",
      "Reduced incident response time",
      "Better fraud prevention",
      "Improved security posture visibility",
      "Stronger insider-threat controls",
      "Lower breach risk",
    ],
    governance: "Security-operations reviewed with human-in-the-loop action",
    maturity: 70,
    accent: "var(--ms-red)",
  },
  {
    id: "support",
    name: "Customer Support Agentic Solutions",
    short: "Customer Support Room",
    persona: "Customer Care Leader, Contact Center Leader, Digital Support Leader, Field Service Leader",
    owner: "Chief Customer Officer / Contact Center Leader",
    outcomes: [
      "Higher first-contact resolution",
      "Lower average handle time",
      "Reduced agent training burden",
      "Improved customer satisfaction",
      "Faster escalation routing",
      "Better knowledge-base coverage",
    ],
    governance: "Care-policy guardrails with human escalation",
    maturity: 76,
    accent: "var(--ms-violet)",
  },
  {
    id: "executive",
    name: "Executive Mission Control",
    short: "Executive Mission Control",
    persona: "CEO, COO, CFO, Chief AI Officer, Executive Leadership Team",
    owner: "CEO / Executive Leadership Team",
    outcomes: [
      "One enterprise view of agent value",
      "Faster executive decisions",
      "Cross-functional signal awareness",
      "Portfolio prioritization",
      "Governance and risk visibility",
      "Value realization tracking",
    ],
    governance: "Certified, executive-owned",
    maturity: 84,
    accent: "var(--ms-cyan)",
  },
];

export const roomById = (id: RoomId) => rooms.find((r) => r.id === id)!;

export const agents: Agent[] = [
  {
    id: "network-engineering-copilot",
    name: "Network Engineering Copilot",
    room: "network",
    functionLabel: "Network",
    persona: "Network Engineering Leader",
    description:
      "AI assistant for network engineers that correlates alarms, logs, topology, KPIs, and historical incidents to accelerate troubleshooting and root cause analysis.",
    outcome: "Faster root cause analysis and lower MTTR across the access and core network.",
    roiCategory: "Productivity",
    risk: "High",
    dataSensitivity: "High",
    approvedActions: "Read telemetry, correlate incidents, draft remediation plans",
    humanApproval: "Required for remediation",
    certification: "Production candidate",
    governance: "Production candidate",
    adoption: 74,
    usage: 81,
    roiScore: 88,
    maturity: "Scaling",
    pattern: "Azure AI Foundry + Fabric telemetry",
    status: "Live",
    url: "https://net-copilot-ai.lovable.app/",
  },
  {
    id: "network-guardian",
    name: "Network Guardian Agentic Solution",
    room: "network",
    functionLabel: "Network",
    persona: "NOC Leader",
    description:
      "Autonomous network guardian that monitors service health, detects risks, recommends remediation, and supports proactive network operations.",
    outcome: "Proactive detection of service degradation before customer impact.",
    roiCategory: "Risk reduction",
    risk: "High",
    dataSensitivity: "High",
    approvedActions: "Monitor health, raise risk signals, recommend remediation",
    humanApproval: "Required for automated action",
    certification: "Certified",
    governance: "Certified",
    adoption: 69,
    usage: 77,
    roiScore: 84,
    maturity: "Scaling",
    pattern: "Copilot Studio agent + event-driven orchestration",
    status: "Live",
    url: "https://agent-network-guard.lovable.app/",
  },
  {
    id: "multicloud-finops",
    name: "Multicloud FinOps Agentic Solution",
    room: "it",
    functionLabel: "IT",
    persona: "CIO / Cloud Economics Leader",
    description:
      "Multi-cloud FinOps intelligence agent that compares cloud costs, workloads, AI spend, optimization opportunities, and business value across Azure, AWS, and Google Cloud.",
    outcome: "Cloud and AI workload cost optimization with clear business value attribution.",
    roiCategory: "Cost reduction",
    risk: "Medium",
    dataSensitivity: "Medium",
    approvedActions: "Analyze spend, model scenarios, recommend optimizations",
    humanApproval: "Required for commitment changes",
    certification: "Certified",
    governance: "Certified",
    adoption: 83,
    usage: 86,
    roiScore: 91,
    maturity: "Scaling",
    pattern: "Fabric + Power BI embedded analytics",
    status: "Live",
    url: "https://finops-insight-bot.lovable.app/",
  },
  {
    id: "enterprise-it-copilot",
    name: "Enterprise IT Copilot",
    room: "it",
    functionLabel: "IT",
    persona: "VP IT Operations",
    description:
      "AI-powered IT operations command center for incidents, service desk automation, knowledge, change management, and root cause analysis.",
    outcome: "Ticket deflection, faster incident resolution and higher change quality.",
    roiCategory: "Productivity",
    risk: "High",
    dataSensitivity: "High",
    approvedActions: "Triage incidents, draft changes, automate service desk responses",
    humanApproval: "Required for production changes",
    certification: "Certified",
    governance: "Certified",
    adoption: 88,
    usage: 92,
    roiScore: 89,
    maturity: "Scaling",
    pattern: "Copilot Studio + ITSM connectors",
    status: "Live",
    url: "https://vital-copilot.lovable.app/",
  },
  {
    id: "media-rights",
    name: "Media Rights Agentic Solution",
    room: "media",
    functionLabel: "Media",
    persona: "Rights Management Leader",
    description:
      "AI rights intelligence agent for understanding rights packages, obligations, windows, partners, exclusivity, risks, and monetization opportunities.",
    outcome: "Higher rights monetization with fewer exclusivity and obligation breaches.",
    roiCategory: "Revenue growth",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Read rights repositories, summarize obligations, flag constraints",
    humanApproval: "Required for partner-facing output",
    certification: "Certified",
    governance: "Certified",
    adoption: 62,
    usage: 66,
    roiScore: 80,
    maturity: "Piloting",
    pattern: "Azure AI Search + Purview-labelled content",
    status: "Ramping",
    url: "https://rights-flow.lovable.app/",
  },
  {
    id: "venue-revenue",
    name: "Venue Revenue Optimizer Agentic Solution",
    room: "media",
    functionLabel: "Media",
    persona: "Venue Revenue Leader",
    description:
      "Agentic revenue optimizer for venues, events, tickets, concessions, seat utilization, premium inventory, and live event monetization.",
    outcome: "Higher yield per event across tickets, premium seating and concessions.",
    roiCategory: "Revenue growth",
    risk: "Medium",
    dataSensitivity: "Medium",
    approvedActions: "Model pricing scenarios, recommend inventory actions",
    humanApproval: "Required for pricing publication",
    certification: "Certified",
    governance: "Certified",
    adoption: 71,
    usage: 74,
    roiScore: 87,
    maturity: "Scaling",
    pattern: "Fabric semantic model + Power BI embedded",
    status: "Live",
    url: "https://event-revenue-optimizerdemo.lovable.app/",
  },
  {
    id: "venue-sponsorship",
    name: "Venue Sponsorship Agentic Solution",
    room: "media",
    functionLabel: "Media",
    persona: "Sponsorship Leader",
    description:
      "Sponsorship intelligence agent that analyzes sponsor assets, inventory, audience segments, campaign value, and partnership optimization opportunities.",
    outcome: "Improved sponsorship yield and stronger partner value stories.",
    roiCategory: "Revenue growth",
    risk: "Low-Medium",
    dataSensitivity: "Medium",
    approvedActions: "Analyze inventory, score sponsor fit, build value cases",
    humanApproval: "Not required for analysis",
    certification: "In review",
    governance: "In review",
    adoption: 58,
    usage: 61,
    roiScore: 76,
    maturity: "Piloting",
    pattern: "Copilot Studio agent + Dataverse",
    status: "Ramping",
    url: "https://sponsor-sense-ai.lovable.app/",
  },
  {
    id: "talent-spark",
    name: "Talent Spark Agentic Solution",
    room: "hr",
    functionLabel: "HR",
    persona: "Talent Acquisition Leader",
    description:
      "AI talent intelligence solution that identifies internal and external candidates, analyzes skills gaps, supports interview planning, and helps workforce leaders make faster talent decisions.",
    outcome: "Faster hiring cycles and stronger internal mobility.",
    roiCategory: "Productivity",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Match skills, shortlist candidates, draft interview plans",
    humanApproval: "Human review required",
    certification: "Production candidate",
    governance: "Production candidate",
    adoption: 64,
    usage: 60,
    roiScore: 72,
    maturity: "Piloting",
    pattern: "Azure OpenAI + Entra-scoped HR data",
    status: "Ramping",
    url: "https://scout-swarm-ai.lovable.app/",
  },
  {
    id: "churn-reduction",
    name: "Churn Reduction Agent Assist",
    room: "consumer",
    functionLabel: "Consumer",
    persona: "Chief Customer Officer",
    description:
      "Customer retention and churn reduction agent that analyzes customer risk, reasons for churn, service experience, offers, and next-best-actions.",
    outcome: "Lower churn and higher save rates in care and digital channels.",
    roiCategory: "Revenue growth",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Score churn risk, recommend retention offers",
    humanApproval: "Required for offer issuance above threshold",
    certification: "Certified",
    governance: "Certified",
    adoption: 90,
    usage: 94,
    roiScore: 93,
    maturity: "Scaling",
    pattern: "Fabric customer 360 + Copilot Studio",
    status: "Live",
    url: "https://agenthellebuyck-telco-insight.lovable.app/",
  },
  {
    id: "growth-planning",
    name: "Growth Planning Agentic Solution",
    room: "consumer",
    functionLabel: "Consumer",
    persona: "Digital Channel Leader",
    description:
      "Territory and neighborhood growth planning agent that identifies local market opportunities, underserved areas, channel actions, and revenue growth plays.",
    outcome: "Sharper local growth plans and better channel investment allocation.",
    roiCategory: "Revenue growth",
    risk: "Low-Medium",
    dataSensitivity: "Medium",
    approvedActions: "Analyze territories, rank plays, generate plans",
    humanApproval: "Not required for planning output",
    certification: "Certified",
    governance: "Certified",
    adoption: 67,
    usage: 70,
    roiScore: 82,
    maturity: "Scaling",
    pattern: "Fabric geospatial model + Power BI",
    status: "Live",
    url: "https://territory-vision-app.lovable.app/",
  },
  {
    id: "mobile-attach",
    name: "Mobile Attach Agent",
    room: "consumer",
    functionLabel: "Consumer",
    persona: "Consumer Business Leader",
    description:
      "AI growth agent that identifies customers likely to add mobile, recommends personalized offers, and helps drive convergence across wireless and wireline services.",
    outcome: "Higher mobile attach rate and stronger household convergence.",
    roiCategory: "Revenue growth",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Score propensity, recommend bundles",
    humanApproval: "Required for outbound campaigns",
    certification: "Certified",
    governance: "Certified",
    adoption: 85,
    usage: 88,
    roiScore: 90,
    maturity: "Scaling",
    pattern: "Azure AI Foundry + CRM connectors",
    status: "Live",
    url: "https://mobile-growth-agent.lovable.app/",
  },
  {
    id: "life-events",
    name: "Life Events Agent",
    room: "consumer",
    functionLabel: "Consumer",
    persona: "CMO",
    description:
      "AI agent that identifies customer life events such as moving, new family needs, student transitions, business changes, and recommends timely, relevant service offers.",
    outcome: "Timely, relevant offers at moments that matter for the household.",
    roiCategory: "Revenue growth",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Detect life-event signals, recommend next-best-action",
    humanApproval: "Required for sensitive segments",
    certification: "In review",
    governance: "In review",
    adoption: 55,
    usage: 58,
    roiScore: 74,
    maturity: "Piloting",
    pattern: "Purview-governed signals + Copilot Studio",
    status: "Ramping",
    url: "https://event-aura-agent.lovable.app/",
  },
  {
    id: "smb-inside-sales",
    name: "SMB Inside Sales Agentic Solution",
    room: "business",
    functionLabel: "Business",
    persona: "SMB Sales Leader",
    description:
      "AI sales agent for SMB prospecting, account intelligence, offer recommendations, outreach preparation, next-best-actions, and sales pipeline acceleration.",
    outcome: "Higher SMB conversion and faster quote-to-close cycles.",
    roiCategory: "Revenue growth",
    risk: "Low-Medium",
    dataSensitivity: "Medium",
    approvedActions: "Research accounts, draft outreach, prioritize pipeline",
    humanApproval: "Not required for drafts",
    certification: "Certified",
    governance: "Certified",
    adoption: 76,
    usage: 79,
    roiScore: 83,
    maturity: "Scaling",
    pattern: "Copilot Studio + Dynamics/CRM connectors",
    status: "Live",
    url: "https://agent-riley-hq.lovable.app/",
  },
  {
    id: "enterprise-sales-coach",
    name: "Enterprise Sales Coach",
    room: "business",
    functionLabel: "Business",
    persona: "B2B Sales Leader",
    description:
      "Deal coaching agent that analyzes enterprise opportunities, surfaces risks and gaps, recommends next best moves, and prepares sellers for executive conversations.",
    outcome: "Improved win rates and stronger seller productivity on complex B2B deals.",
    roiCategory: "Revenue growth",
    risk: "Low-Medium",
    dataSensitivity: "Medium",
    approvedActions: "Analyze deals, coach sellers, draft call plans",
    humanApproval: "Not required for coaching guidance",
    certification: "Certified",
    governance: "Certified",
    adoption: 71,
    usage: 74,
    roiScore: 81,
    maturity: "Scaling",
    pattern: "Azure AI Foundry + Dynamics/CRM connectors",
    status: "Live",
    url: "https://deal-dynamics-coach.lovable.app/",
  },
  {
    id: "revenue-assurance",
    name: "Revenue Assurance Agent",
    room: "finance",
    functionLabel: "Finance",
    persona: "CFO / Revenue Assurance Leader",
    description:
      "Finance intelligence agent that detects revenue leakage, billing mismatches, usage anomalies, contract-to-billing gaps, and recoverable revenue opportunities.",
    outcome: "Recovered revenue leakage and stronger billing accuracy controls.",
    roiCategory: "Revenue growth",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Detect anomalies, quantify exposure, open recovery cases",
    humanApproval: "Required for customer adjustments",
    certification: "Certified",
    governance: "Certified",
    adoption: 81,
    usage: 84,
    roiScore: 92,
    maturity: "Scaling",
    pattern: "Fabric finance lakehouse + Azure OpenAI",
    status: "Live",
    url: "https://earnflow-detective.lovable.app/",
  },
  {
    id: "regulatory-compliance",
    name: "Regulatory Compliance Agent",
    room: "legal",
    functionLabel: "Legal / Procurement",
    persona: "General Counsel / Compliance Leader",
    description:
      "Regulatory intelligence agent that monitors obligations, policy requirements, compliance status, evidence gaps, and executive risk actions.",
    outcome: "Continuous regulatory readiness with fewer evidence gaps.",
    roiCategory: "Risk reduction",
    risk: "High",
    dataSensitivity: "Confidential",
    approvedActions: "Monitor obligations, assess status, flag gaps",
    humanApproval: "Legal review required",
    certification: "Production candidate",
    governance: "Production candidate",
    adoption: 59,
    usage: 63,
    roiScore: 78,
    maturity: "Piloting",
    pattern: "Purview + Azure AI Search over policy corpus",
    status: "Ramping",
    url: "https://guardian-sage-04.lovable.app/",
  },
  {
    id: "contracts-copilot",
    name: "Contracts Copilot",
    room: "legal",
    functionLabel: "Legal / Procurement",
    persona: "Procurement / Contract Management Leader",
    description:
      "Contract intelligence agent that reviews agreements, extracts obligations, identifies risks, summarizes terms, and supports procurement and legal workflows.",
    outcome: "Faster contract review cycles with better obligation tracking.",
    roiCategory: "Productivity",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Summarize contracts, extract obligations, flag risk clauses",
    humanApproval: "Required before execution",
    certification: "Certified",
    governance: "Certified",
    adoption: 72,
    usage: 75,
    roiScore: 81,
    maturity: "Scaling",
    pattern: "Azure AI Search + Microsoft Graph connectors",
    status: "Live",
    url: "https://synapsis-contracts.lovable.app/",
  },
  {
    id: "executive-value-agent",
    name: "Executive Value Orchestrator",
    room: "it",
    functionLabel: "IT",
    persona: "Chief AI Officer",
    description:
      "Cross-portfolio orchestration agent that aggregates signals from every room, scores agent ROI, and briefs executives on where to scale, govern or retire agents.",
    outcome: "Unified executive view of value, adoption, risk and portfolio decisions.",
    roiCategory: "Productivity",
    risk: "Medium",
    dataSensitivity: "Medium",
    approvedActions: "Aggregate portfolio telemetry, produce executive briefings",
    humanApproval: "Required for retirement decisions",
    certification: "Certified",
    governance: "Certified",
    adoption: 70,
    usage: 68,
    roiScore: 85,
    maturity: "Scaling",
    pattern: "Agent365 telemetry + Fabric + Power BI",
    status: "Live",
    url: "https://vital-copilot.lovable.app/",
  },
  {
    id: "executive-copilot",
    name: "Executive Copilot",
    room: "executive",
    functionLabel: "Executive",
    persona: "CEO / Executive Leadership Team",
    description:
      "Executive-level copilot at the top of the house that synthesizes signals from every room into a single narrative on performance, value, risk and the decisions leadership needs to make next.",
    outcome: "A unified executive view of enterprise performance, agent value and next-best decisions.",
    roiCategory: "Productivity",
    risk: "Medium",
    dataSensitivity: "Confidential",
    approvedActions: "Aggregate cross-room signals, draft executive briefings and decision options",
    humanApproval: "Required for executive decisions and communications",
    certification: "Certified",
    governance: "Certified",
    adoption: 81,
    usage: 76,
    roiScore: 92,
    maturity: "Scaling",
    pattern: "Azure AI Foundry + Fabric + Power BI + Agent365 telemetry",
    status: "Live",
    url: "https://executive-copilot-core.lovable.app",
  },
];

export const agentsByRoom = (room: RoomId) => agents.filter((a) => a.room === room);
export const agentById = (id: string) => agents.find((a) => a.id === id);
export const agentByName = (name: string) => agents.find((a) => a.name === name)!;

export const kpis = [
  { label: "Agent Blueprints", value: "17", sub: "Across 8 business functions", tone: "blue" },
  { label: "Business Functions Covered", value: "8", sub: "Network to Legal", tone: "teal" },
  { label: "Annual Value Potential", value: "$186M", sub: "Validated business case", tone: "green" },
  {
    label: "Productivity Hours Recovered",
    value: "420,000",
    sub: "Annualized run-rate",
    tone: "cyan",
  },
  { label: "Revenue Protected / Created", value: "$92M", sub: "Growth + assurance", tone: "green" },
  { label: "Cost Avoidance", value: "$38M", sub: "Cloud, IT and ops", tone: "teal" },
  { label: "Risk Reduction Opportunities", value: "64", sub: "Open across portfolio", tone: "amber" },
  { label: "Active Agent Recommendations", value: "143", sub: "Awaiting executive action", tone: "blue" },
  { label: "Governance Compliance", value: "91%", sub: "Agent365 certified controls", tone: "green" },
  { label: "Agent Adoption Score", value: "78%", sub: "Weighted active usage", tone: "amber" },
] as const;

export const priorityAreas = [
  "Revenue",
  "Customer Growth",
  "Network Reliability",
  "IT Productivity",
  "Media Monetization",
  "Compliance",
];

export const heroMessage =
  "Agentic Telecom & Media Company HQ brings together agent blueprints across network operations, IT, finance, HR, media, consumer, business, and legal functions into one governed enterprise operating model. Each room shows what can be built hand in hand with Microsoft Frontier Company FDE and Industry teams alongside your own engineering, data and business resources, while the command center gives executives a unified view of business value, risk, adoption, and cross-functional opportunity.";

export const collections = [
  {
    name: "CFO Value Suite",
    tone: "green",
    blurb: "Protect and recover revenue while controlling cloud and operating cost.",
    agents: [
      "Revenue Assurance Agent",
      "Multicloud FinOps Agentic Solution",
      "Mobile Attach Agent",
      "Venue Revenue Optimizer Agentic Solution",
    ],
  },
  {
    name: "CIO Operations Suite",
    tone: "blue",
    blurb: "Run IT and network operations with agentic incident and cost intelligence.",
    agents: [
      "Enterprise IT Copilot",
      "Multicloud FinOps Agentic Solution",
      "Network Engineering Copilot",
      "Network Guardian Agentic Solution",
    ],
  },
  {
    name: "Growth Suite",
    tone: "cyan",
    blurb: "Drive attach, retention and territory growth across consumer and SMB.",
    agents: [
      "Mobile Attach Agent",
      "Life Events Agent",
      "Growth Planning Agentic Solution",
      "SMB Inside Sales Agentic Solution",
    ],
  },
  {
    name: "Media Monetization Suite",
    tone: "amber",
    blurb: "Turn rights, venues and sponsorship inventory into measurable yield.",
    agents: [
      "Media Rights Agentic Solution",
      "Venue Revenue Optimizer Agentic Solution",
      "Venue Sponsorship Agentic Solution",
    ],
  },
  {
    name: "Governance and Risk Suite",
    tone: "red",
    blurb: "Keep the agent estate compliant, auditable and financially controlled.",
    agents: [
      "Regulatory Compliance Agent",
      "Contracts Copilot",
      "Enterprise IT Copilot",
      "Revenue Assurance Agent",
    ],
  },
];

export type Scenario = {
  id: string;
  title: string;
  trigger: string;
  narrative: string;
  agents: string[];
  signals: { from: string; to: string; message: string }[];
  recommendations: { title: string; detail: string; impact: string; tone: string }[];
};

export const scenarios: Scenario[] = [
  {
    id: "outage",
    title: "Network outage creates revenue and customer risk",
    trigger: "Service degradation detected in the metro access ring",
    narrative:
      "Network agents detect service degradation. Customer agents identify churn risk. Revenue Assurance estimates billing credits and revenue exposure. IT Copilot manages internal incident response. Executive Mission Control summarizes customer, revenue, and operational impact.",
    agents: [
      "Network Guardian Agentic Solution",
      "Network Engineering Copilot",
      "Churn Reduction Agent Assist",
      "Revenue Assurance Agent",
      "Enterprise IT Copilot",
    ],
    signals: [
      {
        from: "Network Guardian Agentic Solution",
        to: "Network Engineering Copilot",
        message: "Degradation signature on 42 nodes — request root cause correlation",
      },
      {
        from: "Network Engineering Copilot",
        to: "Enterprise IT Copilot",
        message: "Probable transport fault — open Sev-1 and mobilize incident bridge",
      },
      {
        from: "Network Guardian Agentic Solution",
        to: "Churn Reduction Agent Assist",
        message: "18,400 impacted households — score retention risk",
      },
      {
        from: "Churn Reduction Agent Assist",
        to: "Revenue Assurance Agent",
        message: "2,110 high-value accounts at risk — quantify credit exposure",
      },
      {
        from: "Revenue Assurance Agent",
        to: "Enterprise IT Copilot",
        message: "$1.9M credit and churn exposure — prioritize restoration sequence",
      },
    ],
    recommendations: [
      {
        title: "Prioritize restoration on 6 high-value routes",
        detail: "Sequencing restoration by revenue exposure reduces credits by an estimated $740K.",
        impact: "$740K protected",
        tone: "green",
      },
      {
        title: "Trigger proactive customer outreach",
        detail: "Churn agent recommends proactive notification for 2,110 high-value accounts.",
        impact: "-3.1 pts churn risk",
        tone: "blue",
      },
      {
        title: "Pre-authorize goodwill credit band",
        detail: "Finance approval unlocks automated credit issuance within policy limits.",
        impact: "Human approval required",
        tone: "amber",
      },
    ],
  },
  {
    id: "event",
    title: "New sports event revenue opportunity",
    trigger: "Playoff series confirmed — 4 home dates added",
    narrative:
      "Media and venue agents identify ticketing and sponsorship opportunities. Consumer agents recommend targeted bundles and mobile attach offers. Media Rights Agent checks rights constraints.",
    agents: [
      "Venue Revenue Optimizer Agentic Solution",
      "Venue Sponsorship Agentic Solution",
      "Media Rights Agentic Solution",
      "Mobile Attach Agent",
      "Life Events Agent",
    ],
    signals: [
      {
        from: "Venue Revenue Optimizer Agentic Solution",
        to: "Venue Sponsorship Agentic Solution",
        message: "Premium inventory modeled — 11 activation slots available",
      },
      {
        from: "Venue Sponsorship Agentic Solution",
        to: "Media Rights Agentic Solution",
        message: "Validate exclusivity for 3 category sponsors",
      },
      {
        from: "Media Rights Agentic Solution",
        to: "Mobile Attach Agent",
        message: "Streaming bundle permitted in-market — proceed with offer design",
      },
      {
        from: "Mobile Attach Agent",
        to: "Life Events Agent",
        message: "Target fan households with convergence propensity > 0.62",
      },
    ],
    recommendations: [
      {
        title: "Launch playoff convergence bundle",
        detail: "Streaming + mobile bundle for 84K fan households cleared by rights constraints.",
        impact: "$6.4M incremental",
        tone: "green",
      },
      {
        title: "Release 11 premium sponsorship slots",
        detail: "Sponsor fit scoring identifies 3 categories with unmet exclusivity demand.",
        impact: "$3.1M sponsorship yield",
        tone: "amber",
      },
      {
        title: "Dynamic premium seating release",
        detail: "Yield model recommends staged release across four home dates.",
        impact: "+9% seat revenue",
        tone: "cyan",
      },
    ],
  },
  {
    id: "governance",
    title: "Enterprise AI cost and governance review",
    trigger: "Quarterly Agent365 portfolio review",
    narrative:
      "FinOps Agent identifies AI workload cost growth. Agent365 governance detects low-ROI agents. Compliance Agent highlights data usage risks. Executive Command Center recommends which agents to scale, govern, or retire.",
    agents: [
      "Multicloud FinOps Agentic Solution",
      "Enterprise IT Copilot",
      "Revenue Assurance Agent",
      "Talent Spark Agentic Solution",
      "Regulatory Compliance Agent",
    ],
    signals: [
      {
        from: "Multicloud FinOps Agentic Solution",
        to: "Enterprise IT Copilot",
        message: "AI inference spend +34% QoQ — isolate top workloads",
      },
      {
        from: "Enterprise IT Copilot",
        to: "Revenue Assurance Agent",
        message: "Attribute agent cost to business outcome ledger",
      },
      {
        from: "Regulatory Compliance Agent",
        to: "Talent Spark Agentic Solution",
        message: "HR data residency check — restrict two source connectors",
      },
      {
        from: "Revenue Assurance Agent",
        to: "Multicloud FinOps Agentic Solution",
        message: "3 agents below ROI floor — recommend consolidation",
      },
    ],
    recommendations: [
      {
        title: "Consolidate 3 low-ROI agents",
        detail: "Portfolio review identifies overlap and recommends retirement or merge.",
        impact: "$2.8M cost avoidance",
        tone: "teal",
      },
      {
        title: "Right-size model tiers",
        detail: "Route 41% of traffic to lower-cost models with no measured quality loss.",
        impact: "-22% inference cost",
        tone: "green",
      },
      {
        title: "Restrict two HR data connectors",
        detail: "Purview policy update required before Talent Spark scales beyond pilot.",
        impact: "Compliance gate",
        tone: "red",
      },
    ],
  },
  {
    id: "smb",
    title: "SMB growth campaign",
    trigger: "Q3 SMB growth target gap of $14M",
    narrative:
      "Growth Planning identifies target territories. SMB Sales Agent generates prospects and outreach. Mobile Attach recommends bundles. Contracts Copilot accelerates legal and procurement review for partner offers.",
    agents: [
      "SMB Inside Sales Agentic Solution",
      "Growth Planning Agentic Solution",
      "Mobile Attach Agent",
      "Contracts Copilot",
    ],
    signals: [
      {
        from: "Growth Planning Agentic Solution",
        to: "SMB Inside Sales Agentic Solution",
        message: "27 underserved territories ranked by opportunity density",
      },
      {
        from: "SMB Inside Sales Agentic Solution",
        to: "Mobile Attach Agent",
        message: "1,940 qualified accounts — recommend convergence bundles",
      },
      {
        from: "Mobile Attach Agent",
        to: "Contracts Copilot",
        message: "Partner offer terms need expedited legal review",
      },
      {
        from: "Contracts Copilot",
        to: "SMB Inside Sales Agentic Solution",
        message: "Standard terms cleared — 2 clauses flagged for counsel",
      },
    ],
    recommendations: [
      {
        title: "Activate 27 priority territories",
        detail: "Channel capacity aligned to highest opportunity density micro-markets.",
        impact: "$8.9M pipeline",
        tone: "blue",
      },
      {
        title: "Expedite partner paper",
        detail: "Contracts Copilot reduces review cycle from 11 days to 3.",
        impact: "-8 days cycle time",
        tone: "teal",
      },
      {
        title: "Bundle-led outreach sequence",
        detail: "Convergence bundle lifts SMB conversion by an estimated 4.2 points.",
        impact: "+4.2 pts conversion",
        tone: "green",
      },
    ],
  },
];

export const roiRows = [
  { room: "Network", lever: "Reliability and MTTR", value: 31, owner: "CTO" },
  {
    room: "IT",
    lever: "Ticket deflection, cloud optimization, employee productivity",
    value: 29,
    owner: "CIO",
  },
  { room: "Media", lever: "Rights, sponsorship, venue revenue", value: 42, owner: "Media / Venue Executive" },
  { room: "HR", lever: "Hiring efficiency and workforce mobility", value: 12, owner: "CHRO" },
  {
    room: "Consumer",
    lever: "Churn reduction, attach growth, personalized offers",
    value: 48,
    owner: "Consumer Business Leader",
  },
  { room: "Business", lever: "SMB sales productivity and pipeline growth", value: 14, owner: "B2B Sales Leader" },
  { room: "Finance", lever: "Revenue assurance and leakage recovery", value: 22, owner: "CFO" },
  {
    room: "Legal / Procurement",
    lever: "Compliance risk and contract productivity",
    value: 8,
    owner: "General Counsel / Procurement Leader",
  },
];

export const valueDimensions = [
  { label: "Revenue growth opportunities", value: "$54M", progress: 78, tone: "green" },
  { label: "Revenue protected", value: "$38M", progress: 71, tone: "teal" },
  { label: "Operating cost reduction", value: "$29M", progress: 66, tone: "blue" },
  { label: "Productivity hours recovered", value: "420,000 hrs", progress: 82, tone: "cyan" },
  { label: "Risk reduction", value: "64 opportunities", progress: 58, tone: "amber" },
  { label: "Customer experience impact", value: "+11 NPS", progress: 74, tone: "green" },
  { label: "Employee experience impact", value: "+16% satisfaction", progress: 69, tone: "violet" },
  { label: "Network reliability impact", value: "-27% MTTR", progress: 80, tone: "blue" },
  { label: "Media monetization impact", value: "+14% yield", progress: 72, tone: "amber" },
  { label: "Cloud cost optimization", value: "-22% AI spend", progress: 64, tone: "teal" },
];

export const architectureLayers = [
  {
    name: "Experience Layer",
    tone: "blue",
    items: [
      "Microsoft Teams",
      "Microsoft 365 Copilot",
      "Power Apps",
      "Copilot Studio",
      "Power BI Embedded",
      "Executive command center experience",
    ],
  },
  {
    name: "Agent Layer",
    tone: "cyan",
    items: [
      "Azure AI Foundry",
      "Azure OpenAI",
      "Copilot Studio agents",
      "Agent orchestration",
      "Agent-to-agent workflows",
      "Prompt and skill management",
    ],
  },
  {
    name: "Data and Intelligence Layer",
    tone: "teal",
    items: [
      "Microsoft Fabric",
      "OneLake",
      "Power BI semantic models",
      "Azure SQL",
      "Dataverse",
      "Azure AI Search",
      "Microsoft Graph connectors",
    ],
  },
  {
    name: "Operational Systems Layer",
    tone: "violet",
    items: [
      "CRM",
      "Billing",
      "OSS / BSS",
      "Network telemetry",
      "ITSM",
      "HR systems",
      "Finance systems",
      "Legal and contract repositories",
      "Media rights systems",
      "Venue systems",
      "Cloud cost systems",
    ],
  },
  {
    name: "Governance and Security Layer",
    tone: "red",
    items: [
      "Agent365",
      "Microsoft Entra ID",
      "Microsoft Purview",
      "Defender",
      "Role-based access",
      "Audit logs",
      "Data loss prevention",
      "Human-in-the-loop controls",
    ],
  },
  {
    name: "Analytics and Value Layer",
    tone: "green",
    items: [
      "Power BI dashboards",
      "Fabric analytics",
      "ROI measurement",
      "Adoption reporting",
      "Usage analytics",
      "Cost attribution",
      "Business value scorecards",
    ],
  },
];

export const governanceControls = [
  { name: "Agent registry", detail: "17 registered agents, single source of truth", tone: "blue" },
  { name: "Agent owner", detail: "Named technical owner for every agent", tone: "blue" },
  { name: "Business sponsor", detail: "Executive sponsor accountable for value", tone: "teal" },
  { name: "Approved data sources", detail: "Purview-labelled sources per agent", tone: "teal" },
  { name: "Approved actions", detail: "Explicit action scopes, deny by default", tone: "cyan" },
  { name: "Human approval requirements", detail: "12 of 17 agents gated on human approval", tone: "amber" },
  { name: "Risk classification", detail: "5 high, 9 medium, 3 low-medium", tone: "red" },
  { name: "Certification status", detail: "11 certified, 4 production candidates, 2 in review", tone: "green" },
  { name: "Usage analytics", detail: "Daily active usage and task success telemetry", tone: "blue" },
  { name: "Audit trail", detail: "Immutable action and prompt audit log", tone: "violet" },
  { name: "Cost attribution", detail: "Per-agent inference and data cost ledger", tone: "teal" },
  { name: "Model usage", detail: "Model tier routing and drift monitoring", tone: "cyan" },
  { name: "Data sensitivity", detail: "Confidential data flows require DLP policy", tone: "red" },
  { name: "Lifecycle status", detail: "Pilot, ramping and live states tracked", tone: "green" },
  { name: "Retirement workflow", detail: "Low-ROI agents routed to retire or merge", tone: "amber" },
];

export const governanceStatement =
  "Agent365 provides the enterprise control plane for agent inventory, ownership, policy, observability, certification, auditability, and lifecycle management. It helps the enterprise prove who owns each agent, what data they touch, what they are allowed to do, and whether they still earn their place.";

export const architectureStatement =
  "Each agentic solution blueprint can be delivered as a Microsoft-native agent experience, while Power BI provides embedded analytics, KPI reporting, adoption tracking, and value realization. The HQ app creates a unified executive operating model across the whole blueprint portfolio.";

export const walkthroughSteps = [
  {
    title: "Welcome to HQ",
    body: "Welcome to the Agentic Telecom & Media Company HQ. This is the executive front door to a governed portfolio of AI agents across the enterprise.",
    to: "/",
  },
  {
    title: "Rooms of the house",
    body: "Each room represents a major business function: Network, IT, Media, HR, Consumer, Business, Finance, and Legal.",
    to: "/rooms",
  },
  {
    title: "Specialized agents",
    body: "Each room holds blueprints for specialized agents your teams can build with Microsoft Frontier Company FDE and Industry support — every one is demonstrable today.",
    to: "/rooms",
  },
  {
    title: "AI Agent Marketplace",
    body: "The AI Agent Marketplace helps employees and leaders discover approved agent blueprints, understand business value, and request access.",
    to: "/marketplace",
  },
  {
    title: "Cross-Agent Mission Control",
    body: "Cross-Agent Mission Control shows how agents communicate across departments during real business scenarios.",
    to: "/mission-control",
  },
  {
    title: "Agent365 governance",
    body: "Agent365 provides governance across every agent: ownership, approved data sources, approved actions, certification, audit, lifecycle, and policy.",
    to: "/governance",
  },
  {
    title: "Microsoft architecture",
    body: "Microsoft architecture powers the ecosystem: Azure AI Foundry, Azure OpenAI, Copilot Studio, Microsoft Fabric, Power BI, Entra, Purview, and Agent365.",
    to: "/architecture",
  },
  {
    title: "Measurable outcomes",
    body: "Executives see measurable outcomes: revenue growth, cost reduction, productivity, customer experience, network reliability, and compliance.",
    to: "/roi",
  },
  {
    title: "Launch any demo",
    body: "Launch any agent demo directly from the HQ to show the underlying experience in detail.",
    to: "/directory",
  },
  {
    title: "An operating model",
    body: "This is not a collection of disconnected AI experiments. This is an enterprise agent operating model.",
    to: "/",
  },
];

export type RoomPersona = { role: string; title: string };
export type RoomMetric = { label: string; value: string };

export const roomPersonas: Record<RoomId, RoomPersona[]> = {
  network: [
    { role: "CTO", title: "Owns network reliability commitments" },
    { role: "NOC Leader", title: "Runs 24/7 incident response" },
    { role: "Field Operations Leader", title: "Dispatch and truck-roll efficiency" },
  ],
  it: [
    { role: "CIO", title: "Enterprise technology productivity" },
    { role: "VP IT Operations", title: "Service reliability and change quality" },
    { role: "Service Desk Leader", title: "Employee support experience" },
  ],
  media: [
    { role: "Media Executive", title: "Content and rights monetization" },
    { role: "Venue Revenue Leader", title: "Event-day revenue per fan" },
    { role: "Sponsorship Leader", title: "Partner yield and renewals" },
  ],
  hr: [
    { role: "CHRO", title: "Workforce capability and experience" },
    { role: "Talent Acquisition Leader", title: "Speed and cost of hiring" },
    { role: "Workforce Planning Leader", title: "Skills supply and internal mobility" },
  ],
  consumer: [
    { role: "Consumer Business Leader", title: "Subscriber growth and value" },
    { role: "CMO", title: "Personalized offers and campaigns" },
    { role: "Chief Customer Officer", title: "Retention and care experience" },
  ],
  business: [
    { role: "B2B Sales Leader", title: "Pipeline and conversion" },
    { role: "SMB Sales Leader", title: "Inside-sales productivity" },
    { role: "Commercial Operations Leader", title: "Quote-to-close velocity" },
  ],
  finance: [
    { role: "CFO", title: "EBITDA protection and controls" },
    { role: "Revenue Assurance Leader", title: "Leakage detection and recovery" },
    { role: "FP&A Leader", title: "Forecast accuracy" },
  ],
  legal: [
    { role: "General Counsel", title: "Regulatory and contractual risk" },
    { role: "Compliance Leader", title: "Obligation tracking and readiness" },
    { role: "Procurement Leader", title: "Vendor governance and cycle time" },
  ],
  executive: [
    { role: "CEO", title: "Enterprise performance and strategy" },
    { role: "COO", title: "Operational execution across the house" },
    { role: "Chief AI Officer", title: "Agent portfolio value and governance" },
  ],
};

export const roomMetrics: Record<RoomId, RoomMetric[]> = {
  network: [
    { label: "MTTR", value: "-34%" },
    { label: "Repeat escalations", value: "-27%" },
    { label: "Network availability", value: "99.98%" },
  ],
  it: [
    { label: "Ticket deflection", value: "41%" },
    { label: "Cloud spend variance", value: "-19%" },
    { label: "Change failure rate", value: "-23%" },
  ],
  media: [
    { label: "Sponsorship yield", value: "+18%" },
    { label: "Revenue per fan", value: "+$11.40" },
    { label: "Rights utilization", value: "87%" },
  ],
  hr: [
    { label: "Time to hire", value: "-22 days" },
    { label: "Cost per hire", value: "-16%" },
    { label: "Internal fill rate", value: "38%" },
  ],
  consumer: [
    { label: "Churn", value: "-2.1 pts" },
    { label: "Mobile attach", value: "+14%" },
    { label: "Offer acceptance", value: "+9 pts" },
  ],
  business: [
    { label: "SMB conversion", value: "+21%" },
    { label: "Quote-to-close", value: "-31%" },
    { label: "Seller selling time", value: "+7 hrs/wk" },
  ],
  finance: [
    { label: "Leakage recovered", value: "$24M" },
    { label: "Billing accuracy", value: "99.4%" },
    { label: "Days sales outstanding", value: "-6 days" },
  ],
  legal: [
    { label: "Contract review time", value: "-58%" },
    { label: "Obligations tracked", value: "12.4K" },
    { label: "Compliance findings", value: "-33%" },
  ],
  executive: [
    { label: "Decision cycle time", value: "-42%" },
    { label: "Value realized", value: "$186M" },
    { label: "Portfolio adoption", value: "78%" },
  ],
};
