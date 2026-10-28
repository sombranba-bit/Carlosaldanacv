export const profile = {
  name: 'Carlos Aldana Guillén',
  title: 'Tachograph Compliance Manager',
  tagline: 'Regulatory compliance · Fleet management · Power BI, process automation and AI',
  location: 'Zaragoza, Aragon, Spain',
  phone: '653 860 798',
  phoneHref: '+34653860798',
  email: 'caldanaemployment@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carlos-aldana-guillén-74a372139',
};

export const projects = [
  {
    name: 'Infringement dashboard',
    desc: 'Tracking of driving and rest-time infringements and tachograph download compliance, with indicators, comparisons and a summary per driver.',
    tags: ['HTML', 'JavaScript', 'Excel'],
  },
  {
    name: 'VDO · Webfleet download cross-check',
    desc: 'Comparison of tachograph downloads by driver and by vehicle to check whether the latest dates match.',
    tags: ['HTML', 'JavaScript'],
  },
  {
    name: 'Download tracking',
    desc: 'Monitoring of each driver’s last download, with individual notices.',
    tags: ['HTML', 'Excel'],
  },
];

export const experience = [
  {
    period: '05/2025 – Present',
    role: 'Tachograph Manager',
    company: 'Transportes Ocón',
    bullets: [
      'Full tachograph management for a fleet of 500+ vehicles and 600+ drivers: downloads, data analysis and compliance tracking.',
      'Supervision of driving and rest times (Regulation (EC) 561/2006), with a sustained reduction in repeat serious and very serious infringements.',
      'Design of control dashboards and in-house tools to track infringements and downloads, plus individual notices to drivers.',
      'Management of transport penalties and coordination of transport inspections.',
    ],
  },
  {
    period: '12/2024 – 02/2025',
    role: 'Import and Export Traffic Operator',
    company: 'Transerveto',
    bullets: [
      'Management and control of import and export operations for client Saica, meeting deadlines.',
      'Direct client communication, cost control and incident resolution to meet KPIs.',
    ],
  },
  {
    period: '05/2023 – 11/2024',
    role: 'Tachograph, Toll and Training Technician',
    company: 'Transporte Cooperativo Aragonés',
    bullets: [
      'Coordination of local and remote data downloads, infringement analysis and individual reports.',
      'Toll verification and continuous training for drivers on driving and rest times.',
    ],
  },
  {
    period: '09/2022 – 07/2023',
    role: 'Administrative Manager',
    company: 'Transporte Cooperativo Aragonés',
    bullets: [
      'Management of the driver portfolio, purchase invoicing and payroll.',
      'Individual follow-up of incidents and communication with drivers and loading companies.',
    ],
  },
];

export const education = [
  { title: 'Higher Vocational Diploma in Transport and Logistics', place: 'Centro San Valero, Zaragoza', period: '2021 – 2023' },
  { title: 'Degree in Labour Relations and Human Resources', place: 'University of Zaragoza', period: '2017 – 2020' },
  { title: 'Degree in Business Administration and Management', place: 'University of Zaragoza', period: '2015 – 2016' },
  { title: 'High School Diploma in Social Sciences and Humanities', place: 'IES Miguel de Molinos', period: '2013 – 2015' },
];

export const certs = [
  { title: 'Certificate of Professional Competence (CPC) for Road Freight Transport', place: 'Government of Aragon · 2026' },
  { title: 'Professional English for Transport and Logistics (90h)', place: 'Izquierdo Formación' },
  { title: 'English level C1', place: 'Cambridge English Certificate' },
];

export const skills = [
  'Regulatory compliance',
  'Advanced Excel',
  'Power BI',
  'Process automation',
  'a3ERP and SAP',
  'KPI control',
  'Data analysis',
  'Team training',
];

export const about = [
  'Tachograph manager for a fleet of 500+ vehicles and 600+ drivers. I oversee compliance with driving and rest times (Regulation (EC) 561/2006): downloads, infringement analysis, penalty management and transport inspections. I have achieved a sustained reduction in repeat serious and very serious infringements.',
  'I work with data: I design my own control dashboards in Power BI and automate reports and driver notices, with the support of generative AI. I have advanced Excel skills and work with the a3ERP and SAP ERPs.',
  'At Transporte Cooperativo Aragonés I managed tachographs, tolls and motorway invoicing, the member portfolio and professional diesel fuel refunds, and trained drivers on regulations.',
  'Higher Vocational Diploma in Transport and Logistics, holder of the Certificate of Professional Competence (CPC) for Road Freight Transport, with English C1 (Cambridge).',
];

export const ui = {
  prefix: '/en',
  lang: 'en',
  switchLabel: 'ES',
  switchHref: '/',
  nav1: 'Work', nav2: 'Experience', nav3: 'Education', nav4: 'Contact',
  projects: 'View projects', cv: 'Download CV',
  lead: 'I work on three pillars: prevention, training and awareness. I keep a fleet of 500+ vehicles compliant, train and coach its drivers end to end, and turn tachograph data into decisions that cut repeat infringements.',
  aboutTitle: 'About',
  workTitle: 'Tools I built',
  workSub: 'Tools I have built for the fleet’s day-to-day work.',
  allProjects: 'See all projects',
  experience: 'Experience',
  eduTitle: 'Education and skills',
  education: 'Education',
  certsTitle: 'Certifications and languages',
  skillsTitle: 'Skills',
  contact: 'Contact',
  contactLead: 'Let’s talk. You can write or call me.',
  back: '← Back to home',
  projectsTitle: 'Work',
  projectsLead: 'Systems, dashboards and tools built to track fleet compliance.',
  codeFile: 'profile.config.ts', codeName: 'profile', codeType: 'Profile',
  codeRoleKey: 'role', codeFocusKey: 'focus', codeToolsKey: 'tools',
  codeRole: 'tachograph compliance manager',
  codeFocus: ['regulatory compliance', 'fleet management'],
  codeTools: ['advanced excel', 'power bi', 'a3ERP', 'sap'],
};

export const ext = {
  heroLine1: 'Regulatory compliance',
  heroLine2: 'and fleet management.',
  contactA: "Let's talk.",
  contactB: 'Write or call me.',
  codeLines: [
    '// profile.config.ts',
    'export const profile = {',
    '  role: "tachograph compliance manager",',
    '  focus: ["regulatory compliance", "fleet management"],',
    '  tools: ["advanced excel", "power bi", "a3ERP", "sap"],',
    '} satisfies Profile;',
  ],
  footer: 'Zaragoza, Spain',
};

export const chart = {
  now: 'Now:',
  labels: ['Rest', 'Driving', 'Other work', 'Availability'],
  note: 'Illustrative example · one full day per minute',
  lanes: [
    [[0, 6], [9.5, 10], [13.5, 15], [19, 24]],
    [[6, 9.5], [10, 13.5], [15, 19]],
    [[9.5, 10], [13.5, 14], [19, 19.5]],
    [[14, 15]],
  ],
};

export const stats = [
    { to: 500, prefix: '+', suffix: '', label: 'vehicles in the fleet' },
    { to: 600, prefix: '+', suffix: '', label: 'drivers' },
  ];
