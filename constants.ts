import { RoleType, ProfessionalProfile } from './types';
import { Code, BarChart3, Megaphone, TrendingUp, Database, Layout, PieChart, Users } from 'lucide-react';

// Color Mapping
export const COLORS = {
  [RoleType.WEB_DESIGNER]: { main: 'text-cyan-400', bg: 'bg-cyan-500', border: 'border-cyan-500/50', shadow: 'shadow-cyan-500/20', hex: '#06b6d4' },
  [RoleType.DATA_ANALYST]: { main: 'text-emerald-400', bg: 'bg-emerald-500', border: 'border-emerald-500/50', shadow: 'shadow-emerald-500/20', hex: '#10b981' },
  [RoleType.MARKETING_PLANNER]: { main: 'text-rose-400', bg: 'bg-rose-500', border: 'border-rose-500/50', shadow: 'shadow-rose-500/20', hex: '#f43f5e' },
  [RoleType.SALES_ANALYST]: { main: 'text-amber-400', bg: 'bg-amber-500', border: 'border-amber-500/50', shadow: 'shadow-amber-500/20', hex: '#f59e0b' },
};

export const PROFILES: Record<RoleType, ProfessionalProfile> = {
  [RoleType.WEB_DESIGNER]: {
    id: RoleType.WEB_DESIGNER,
    title: "Web Designer & Frontend Engineer",
    shortTitle: "Web Design",
    tagline: "Crafting immersive digital experiences with code.",
    description: "Specializing in React, TypeScript, and 3D web interactions. I bridge the gap between aesthetic design and technical implementation to build performant, accessible, and beautiful interfaces.",
    color: COLORS[RoleType.WEB_DESIGNER].hex,
    accentColor: 'cyan',
    icon: Code,
    stats: [
      { label: 'Projects Shipped', value: '45+' },
      { label: 'UI Components', value: '200+' },
      { label: 'Avg Performance', value: '98/100' },
    ],
    skills: [
      { name: 'React/Next.js', level: 95, category: 'technical' },
      { name: 'TypeScript', level: 90, category: 'technical' },
      { name: 'Tailwind CSS', level: 98, category: 'technical' },
      { name: 'Figma', level: 85, category: 'tool' },
      { name: '3D/Three.js', level: 75, category: 'technical' },
      { name: 'UI/UX Design', level: 88, category: 'soft' },
    ],
    projects: [
      {
        id: 'p1',
        title: 'Nexus Portfolio',
        description: 'A 3D interactive portfolio engine built with React and Framer Motion.',
        tags: ['React', 'TypeScript', 'Framer Motion'],
        metric: '100% Lighthouse Score'
      },
      {
        id: 'p2',
        title: 'E-Commerce Dashboard',
        description: 'Responsive admin panel for managing large-scale inventory and analytics.',
        tags: ['Next.js', 'Tailwind', 'Recharts'],
        metric: '-30% Load Time'
      },
      {
        id: 'p3',
        title: 'SaaS Landing Page',
        description: 'High-conversion landing page with complex scroll animations.',
        tags: ['React', 'GSAP'],
        metric: '12% Conv. Rate'
      }
    ],
    experience: [
      { role: 'Senior Frontend Dev', company: 'TechFlow Solutions', period: '2021 - Present', description: 'Leading the frontend architecture migration to Next.js.' },
      { role: 'UI Developer', company: 'Creative Agency', period: '2019 - 2021', description: 'Developed award-winning marketing sites for Fortune 500 clients.' }
    ]
  },
  [RoleType.DATA_ANALYST]: {
    id: RoleType.DATA_ANALYST,
    title: "Data Analyst & Insight Specialist",
    shortTitle: "Data Analytics",
    tagline: "Turning raw data into actionable business intelligence.",
    description: "Expert in SQL, Python, and visualization tools. I uncover hidden patterns in complex datasets to drive strategic decision-making and optimize operational efficiency.",
    color: COLORS[RoleType.DATA_ANALYST].hex,
    accentColor: 'emerald',
    icon: Database,
    stats: [
      { label: 'Rows Processed', value: '50M+' },
      { label: 'Reports Autom.', value: '120+' },
      { label: 'Accuracy Rate', value: '99.9%' },
    ],
    skills: [
      { name: 'Python (Pandas)', level: 92, category: 'technical' },
      { name: 'SQL (PostgreSQL)', level: 95, category: 'technical' },
      { name: 'Tableau/PowerBI', level: 88, category: 'tool' },
      { name: 'Machine Learning', level: 70, category: 'technical' },
      { name: 'Statistical Modeling', level: 85, category: 'technical' },
    ],
    projects: [
      {
        id: 'da1',
        title: 'Customer Churn Predictor',
        description: 'Machine learning model identifying at-risk customers with 85% accuracy.',
        tags: ['Python', 'Scikit-learn', 'SQL'],
        metric: '85% Accuracy'
      },
      {
        id: 'da2',
        title: 'Supply Chain Optimizer',
        description: 'Real-time dashboard tracking logistics and inventory bottlenecks.',
        tags: ['Tableau', 'SQL', 'ETL'],
        metric: '15% Cost Savings'
      },
      {
        id: 'da3',
        title: 'Market Basket Analysis',
        description: 'Association rule mining to suggest product bundles.',
        tags: ['R', 'Data Mining'],
        metric: '+8% Avg Order Val'
      }
    ],
    experience: [
      { role: 'Data Analyst', company: 'FinTech Corp', period: '2022 - Present', description: 'Spearheaded the migration to a modern data warehouse stack.' },
      { role: 'Junior Analyst', company: 'Retail Giant', period: '2020 - 2022', description: 'Maintained weekly sales reporting pipelines.' }
    ]
  },
  [RoleType.MARKETING_PLANNER]: {
    id: RoleType.MARKETING_PLANNER,
    title: "Marketing Planner & Strategist",
    shortTitle: "Marketing",
    tagline: "Designing campaigns that resonate and convert.",
    description: "Combining creative vision with data-driven strategy. I plan and execute multi-channel marketing campaigns that build brand equity and drive sustainable growth.",
    color: COLORS[RoleType.MARKETING_PLANNER].hex,
    accentColor: 'rose',
    icon: Megaphone,
    stats: [
      { label: 'Ad Spend Mgmt', value: '$500k+' },
      { label: 'Campaigns', value: '60+' },
      { label: 'ROI Average', value: '3.5x' },
    ],
    skills: [
      { name: 'SEO/SEM', level: 90, category: 'technical' },
      { name: 'Content Strategy', level: 95, category: 'soft' },
      { name: 'Google Analytics', level: 88, category: 'tool' },
      { name: 'Social Media Mgmt', level: 85, category: 'technical' },
      { name: 'Copywriting', level: 80, category: 'soft' },
    ],
    projects: [
      {
        id: 'm1',
        title: 'Q4 Global Campaign',
        description: 'Omnichannel strategy launching a new product line across 3 regions.',
        tags: ['Strategy', 'PPC', 'Social'],
        metric: '3.2M Impressions'
      },
      {
        id: 'm2',
        title: 'SEO Overhaul',
        description: 'Technical and content SEO audit and restructuring for SaaS blog.',
        tags: ['SEO', 'Ahrefs', 'Content'],
        metric: '+150% Organic Traffic'
      },
      {
        id: 'm3',
        title: 'Email Automation',
        description: 'Drip campaign sequences for user onboarding and retention.',
        tags: ['HubSpot', 'Copywriting'],
        metric: '22% Open Rate'
      }
    ],
    experience: [
      { role: 'Marketing Manager', company: 'Growth Startup', period: '2021 - Present', description: 'Overseeing all digital acquisition channels.' },
      { role: 'Content Planner', company: 'Media House', period: '2018 - 2021', description: 'Managed editorial calendar and freelancer teams.' }
    ]
  },
  [RoleType.SALES_ANALYST]: {
    id: RoleType.SALES_ANALYST,
    title: "Sales Analyst & RevOps",
    shortTitle: "Sales Analyst",
    tagline: "Optimizing pipelines and accelerating revenue.",
    description: "Focused on sales performance, forecasting, and CRM hygiene. I provide the sales team with the insights and tools they need to exceed quotas.",
    color: COLORS[RoleType.SALES_ANALYST].hex,
    accentColor: 'amber',
    icon: TrendingUp,
    stats: [
      { label: 'Revenue Tracked', value: '$10M+' },
      { label: 'Forecast Accuracy', value: '94%' },
      { label: 'Deals Analyzed', value: '1.5k+' },
    ],
    skills: [
      { name: 'CRM (Salesforce)', level: 95, category: 'tool' },
      { name: 'Revenue Modeling', level: 90, category: 'technical' },
      { name: 'Excel/Sheets Expert', level: 98, category: 'technical' },
      { name: 'Communication', level: 85, category: 'soft' },
      { name: 'Negotiation Support', level: 75, category: 'soft' },
    ],
    projects: [
      {
        id: 's1',
        title: 'Territory Realignment',
        description: 'Data-driven restructuring of sales territories to balance rep workload.',
        tags: ['Mapping', 'Analysis'],
        metric: '+12% Efficiency'
      },
      {
        id: 's2',
        title: 'Pipeline Health Dashboard',
        description: 'Executive view of deal stages, velocity, and conversion rates.',
        tags: ['Salesforce', 'Dashboard'],
        metric: 'Real-time Vis.'
      },
      {
        id: 's3',
        title: 'Compensation Model',
        description: 'Designing a new commission structure to incentivize multi-year deals.',
        tags: ['Finance', 'Modeling'],
        metric: 'High Adoption'
      }
    ],
    experience: [
      { role: 'Sales Ops Analyst', company: 'Enterprise Software', period: '2020 - Present', description: 'Supporting a team of 50+ Account Executives.' },
      { role: 'SDR Team Lead', company: 'Cloud Services', period: '2018 - 2020', description: 'Top performer turned team trainer.' }
    ]
  }
};
