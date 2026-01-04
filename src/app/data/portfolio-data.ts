// ========================================
// PORTFOLIO DATA - EDIT THIS FILE TO UPDATE CONTENT
// ========================================
// 
// INSTRUCTIONS FOR UPDATING YOUR CASEBOOK:
// 
// 1. UPDATE YOUR POSITIONING STATEMENT:
//    Edit the 'positioning' variable below with your personal statement
// 
// 2. UPDATE YOUR CORE COMPETENCIES:
//    Edit the 'coreCompetencies' array (exactly 3 competencies recommended)
//    Format: { title: "Competency Name", description: "Brief description" }
// 
// 3. ADD/EDIT CASE STUDIES:
//    Edit the 'caseStudies' array - each case study is one page
//    Add as many case studies as you want by copying the structure
// 
// 4. CUSTOMIZE CHARTS AND TABLES:
//    - chartData: Array of { name: string, value: number }
//    - tableData: Array of { category, before, after, improvement }
// 
// ========================================

export interface CoreCompetency {
  title: string;
  description: string;
}

export interface CaseStudy {
  year: string;
  company: string;
  topic: string;
  details: string;
  challenge: string;
  approach: string[];
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  chartData?: {
    name: string;
    value: number;
  }[];
  tableData?: {
    category: string;
    before: string;
    after: string;
    improvement: string;
  }[];
}

export const positioning = "From pre-boarding to post-exit, I carry out a wide range of HR functions to optimize the Employee Experience, utilizing data dashboards to support data-driven decision-making regarding culture, turnover, and Recruitment channel.";

export const coreCompetencies: CoreCompetency[] = [
  {
    title: "HR Planning & Labor Relations",
    description: "Led compensation restructuring and re-designed job grading/title systems. Managed strategic workforce allocation, including internal transfers and promotions. Actively participated in Labor-Management Councils and collective bargaining agreements (CBA). Experienced in handling internal grievances and ethics reporting compliance."
  },
  {
    title: "Organizational Culture & Learning and Development",
    description: "Analyzed the impact of external corporate reputation on internal employee engagement and developed mitigation strategies. Conducted organizational health diagnostics using frameworks like CVF and BIE, followed by actionable post-survey initiatives. Designed and facilitated diverse training programs ranging from mandatory compliance and onboarding to cutting-edge AI/LLM integration workshops."
  },
  {
    title: "Talent Acquisition",
    description: "Managed full-cycle recruitment across various employment types, including permanent, contract, outsourced, and executive search. Utilized diverse sourcing channels such as open recruitment, direct sourcing, career fairs, and search firms. Proficient in optimizing Applicant Tracking Systems (ATS) like NineHire and proprietary in-house platforms to streamline the hiring process."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    year: "2024",
    company: "Global Retail Corporation",
    topic: "Omnichannel Digital Transformation & Customer Experience Optimization",
    details: "Led comprehensive digital transformation initiative to integrate online and offline channels, resulting in enhanced customer experience and operational efficiency.",
    challenge: "The client faced declining market share due to fragmented customer experience across multiple channels, inefficient inventory management, and lack of real-time data integration.",
    approach: [
      "Conducted extensive customer journey mapping across all touchpoints",
      "Designed unified data architecture integrating POS, e-commerce, and mobile platforms",
      "Implemented AI-driven personalization engine for targeted marketing",
      "Developed agile delivery framework with cross-functional teams",
      "Created comprehensive change management program for 5,000+ employees"
    ],
    impact: [
      {
        metric: "Revenue Growth",
        value: "+32%",
        description: "YoY increase in online sales"
      },
      {
        metric: "Customer Satisfaction",
        value: "4.7/5.0",
        description: "NPS score improvement"
      },
      {
        metric: "Operational Efficiency",
        value: "-28%",
        description: "Reduction in inventory costs"
      }
    ],
    chartData: [
      { name: "Q1", value: 65 },
      { name: "Q2", value: 78 },
      { name: "Q3", value: 89 },
      { name: "Q4", value: 95 }
    ],
    tableData: [
      {
        category: "Order Fulfillment Time",
        before: "5.2 days",
        after: "2.1 days",
        improvement: "60%"
      },
      {
        category: "Customer Retention",
        before: "68%",
        after: "87%",
        improvement: "28%"
      },
      {
        category: "Cart Abandonment",
        before: "42%",
        after: "18%",
        improvement: "57%"
      }
    ]
  },
  {
    year: "2023",
    company: "Financial Services Enterprise",
    topic: "Risk Management Framework Modernization & Regulatory Compliance",
    details: "Redesigned enterprise risk management framework to meet evolving regulatory requirements while improving operational agility and decision-making capabilities.",
    challenge: "Legacy risk systems unable to provide real-time insights, increasing compliance costs by 40% annually and creating operational bottlenecks across business units.",
    approach: [
      "Assessed current state risk infrastructure and compliance gaps",
      "Designed integrated risk management platform with real-time monitoring",
      "Implemented automated regulatory reporting mechanisms",
      "Established risk governance model with clear accountability",
      "Trained 200+ risk professionals on new frameworks and tools"
    ],
    impact: [
      {
        metric: "Compliance Cost",
        value: "-45%",
        description: "Annual compliance expense reduction"
      },
      {
        metric: "Processing Time",
        value: "-65%",
        description: "Risk assessment cycle time"
      },
      {
        metric: "Accuracy",
        value: "99.2%",
        description: "Regulatory reporting accuracy"
      }
    ],
    chartData: [
      { name: "Baseline", value: 100 },
      { name: "Phase 1", value: 82 },
      { name: "Phase 2", value: 64 },
      { name: "Phase 3", value: 55 }
    ],
    tableData: [
      {
        category: "Risk Identification",
        before: "Manual process",
        after: "Automated alerts",
        improvement: "Real-time"
      },
      {
        category: "Reporting Frequency",
        before: "Monthly",
        after: "Daily",
        improvement: "30x faster"
      },
      {
        category: "Data Quality",
        before: "76%",
        after: "99.2%",
        improvement: "30%"
      }
    ]
  },
  {
    year: "2023",
    company: "Manufacturing Conglomerate",
    topic: "Supply Chain Resilience & Sustainability Initiative",
    details: "Transformed global supply chain operations to enhance resilience, reduce carbon footprint, and optimize costs through advanced analytics and strategic partnerships.",
    challenge: "Supply chain disruptions causing $120M annual losses, increasing pressure for sustainability, and growing complexity in multi-tier supplier network across 40+ countries.",
    approach: [
      "Mapped end-to-end supply chain with risk assessment for critical nodes",
      "Developed predictive analytics model for demand forecasting",
      "Redesigned supplier network with focus on sustainability and redundancy",
      "Implemented blockchain-based traceability system",
      "Created sustainability scorecard integrated into procurement decisions"
    ],
    impact: [
      {
        metric: "Cost Savings",
        value: "$85M",
        description: "Annual operational cost reduction"
      },
      {
        metric: "Carbon Reduction",
        value: "-38%",
        description: "Supply chain emissions"
      },
      {
        metric: "Resilience",
        value: "95%",
        description: "On-time delivery reliability"
      }
    ],
    chartData: [
      { name: "Materials", value: 35 },
      { name: "Transport", value: 28 },
      { name: "Operations", value: 22 },
      { name: "Packaging", value: 15 }
    ],
    tableData: [
      {
        category: "Supplier Diversity",
        before: "12 suppliers",
        after: "34 suppliers",
        improvement: "183%"
      },
      {
        category: "Lead Time",
        before: "45 days",
        after: "28 days",
        improvement: "38%"
      },
      {
        category: "Waste Reduction",
        before: "18% waste",
        after: "6% waste",
        improvement: "67%"
      }
    ]
  }
];
