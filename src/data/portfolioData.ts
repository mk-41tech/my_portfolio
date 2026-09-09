import { ServiceItem, ProjectItem, SkillCategory, ProcessStep, FAQItem } from '../types';

export const BRAND_INFO = {
  brandName: 'MK Technology & Services',
  owner: 'Muthukumar',
  role: 'Full Stack Developer | AI & Data Solutions',
  tagline: 'Developing Solutions with minimal cost',
  headline: 'Building Digital Solutions That Fit Your Needs and Budget',
  heroDescription: 'I build custom websites, mobile apps, AI chatbots, and smart automations tailored to your needs — delivered fast and at minimal cost.',
  availability: 'Available for Freelance Projects',
  location: 'Tirunelveli, Tamil Nadu, India',
  email: 'muthukumar41.dev@gmail.com',
  phone: '9943398882',
  phoneDisplay: '+91 99433 98882',
  linkedin: 'https://www.linkedin.com/in/namuthukumar/',
  github: 'https://github.com/muthukumar41-dev',
  profileImage: '/assets/Muthukumar Photo.jpg',
  pricingStatement: 'Contact me for a quote',
  copyright: '© 2026 MK Technology & Services. All Rights Reserved.'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Website Development',
    description: 'Modern, ultra-responsive, and high-performance websites engineered for businesses, organizations, events, and personal brands.',
    icon: 'Globe',
    capabilities: [
      'Responsive & Mobile-First Design',
      'Corporate & Business Websites',
      'Portfolio & Showcase Platforms',
      'Custom Web Applications',
      'Modern UI/UX & Clean Typography',
      'SEO & Performance Optimization'
    ]
  },
  {
    id: 'ai-chatbots',
    number: '02',
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents and custom chatbot solutions that automate customer support, capture qualified leads, and engage users 24/7.',
    icon: 'Bot',
    capabilities: [
      'Conversational AI Agents',
      'Customer Support Automation',
      'Intelligent FAQ Handlers',
      'Lead Qualification Bots',
      'Multi-Platform Integrations',
      'Knowledge Base Embeddings'
    ]
  },
  {
    id: 'mobile-apps',
    number: '03',
    title: 'Mobile App Development',
    description: 'Bespoke mobile applications crafted with intuitive user experiences, robust performance, and scalable application architectures.',
    icon: 'Smartphone',
    capabilities: [
      'Customized Mobile Applications',
      'Intuitive User-Friendly Interfaces',
      'Business-Oriented Feature Sets',
      'Scalable & Maintainable Architecture',
      'API Integration & Sync',
      'Cross-Platform Usability'
    ]
  },
  {
    id: 'ai-automation',
    number: '04',
    title: 'AI Automation',
    description: 'Automated workflow pipelines and intelligent system integrations that eliminate repetitive tasks, saving time and operational overhead.',
    icon: 'Workflow',
    capabilities: [
      'n8n Workflow Automation',
      'Zobot Conversational Flows',
      'AI API Integrations',
      'Data Sync & Excel / Webhook Pipelines',
      'Operational Task Automation',
      'Custom Business Logic Scripts'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'rethika-enterprises',
    title: 'Rethika Enterprises – Corporate Gifting Platform',
    category: 'Corporate / E-commerce / Business Platform',
    shortDescription: 'A complete corporate gifting platform enabling catalogue browsing, custom branding enquiries, RFQ quotation workflows, supplier coordination, and comprehensive back-office administration.',
    fullDescription: 'Rethika Enterprises required a scalable, end-to-end digital ecosystem for corporate gifting. The platform allows clients to explore extensive corporate gifting catalogues, configure branding preferences, and request tailored bulk quotations. On the operations side, an administrative dashboard empowers management of supplier relationships, product inventories, Excel imports, quotation lifecycles, and direct client correspondence.',
    keyHighlights: [
      'Dynamic product catalogue with custom branding enquiry workflows',
      'Supplier management module & RFQ (Request for Quotation) tracking',
      'Secure back-office administration for orders, catalogue & lead management',
      'Bulk data processing with Excel Import integration',
      'Instant communication via WhatsApp Click-to-Chat integration',
      'Edge-deployed serverless architecture for blazing fast global access'
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Vinext / Next.js',
      'Tailwind CSS',
      'Cloudflare',
      'Cloudflare D1 (SQL)',
      'Cloudflare R2 Storage',
      'Drizzle ORM',
      'Excel Import',
      'WhatsApp Click-to-Chat'
    ],
    liveUrl: 'https://rethikaenterprises.com',
    liveUrlText: 'Visit Rethika Enterprises',
    client: 'Rethika Enterprises'
  },
  {
    id: 'roots-education-mile',
    title: 'ROOTS – The Education Mile',
    category: 'Education / Social Impact / Event',
    shortDescription: 'Official web platform for the prestigious ROOTS Education Conclave by Vidhya Vidhai Foundation, spotlighting grassroots educational journeys, keynotes, multimedia galleries, and participant registration.',
    fullDescription: 'ROOTS is an impactful annual education conclave organized by the Vidhya Vidhai Foundation. The platform serves as the primary digital gateway for the conclave, communicating the mission, spotlighting education leaders, displaying video archives and gallery exhibits, and handling registrations for educators, students, and community changemakers across the state.',
    keyHighlights: [
      'Comprehensive event agenda, speaker showcases, and keynote schedules',
      'Interactive multimedia gallery and archived video presentations',
      'Seamless attendee and delegate registration workflows',
      'Lightweight, high-accessibility UI optimized for diverse mobile devices',
      'Dedicated journey showcase detailing the grassroots impact of Vidhya Vidhai Foundation'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Node.js'
    ],
    liveUrl: 'https://vidhyavidhai.org/Roots/',
    liveUrlText: 'View ROOTS 2025 Website',
    statusNote: 'Note: Showcasing the ROOTS 2025 Edition. The 2026 ROOTS platform is currently under active development.',
    client: 'Vidhya Vidhai Foundation'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Building clean, reactive, and accessible user interfaces with modern toolchains.',
    icon: 'Layout',
    skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend & APIs',
    description: 'Developing reliable server-side services, RESTful endpoints, and backend business logic.',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', '.NET', 'Python']
  },
  {
    category: 'Databases & Storage',
    description: 'Designing structured schemas, relational queries, and optimized data persistence.',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server / SSMS']
  },
  {
    category: 'AI & Automation',
    description: 'Integrating intelligent models, conversational chatbots, and automated workflows.',
    icon: 'Cpu',
    skills: ['Zobot', 'n8n Automation']
  },
  {
    category: 'Version Control & Tools',
    description: 'Maintaining codebase integrity, disciplined branching, and collaboration standards.',
    icon: 'GitBranch',
    skills: ['Git']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discuss',
    description: 'Understand the client’s core requirements, business goals, target audience, budget boundaries, and timeline expectations.',
    details: ['Requirement gathering', 'Scope definition', 'Budget alignment', 'Initial technical consultation'],
    icon: 'MessagesSquare'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create the initial UI/UX architecture, layout mockups, and solution blueprint tailored to your brand identity.',
    details: ['Information architecture', 'Visual structure & layouts', 'User experience flow', 'Design prototyping'],
    icon: 'Palette'
  },
  {
    number: '03',
    title: 'Discuss the Design',
    description: 'Present the proposed design to the client, collect collaborative feedback, make refinements, and finalize direction.',
    details: ['Design walkthrough', 'Client feedback & adjustments', 'Component approval', 'Finalizing roadmap'],
    icon: 'MessageCircleCheck'
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build the solution using clean, modern, maintainable code, robust database architectures, and best industry practices.',
    details: ['Clean TypeScript / React code', 'Backend & API integration', 'Database configuration', 'Mobile responsiveness'],
    icon: 'Code2'
  },
  {
    number: '05',
    title: 'Review',
    description: 'Rigorous end-to-end testing across devices and browsers, collecting client review feedback, and polishing details.',
    details: ['Cross-browser testing', 'Performance tuning', 'Bug fixes & refinements', 'Client validation'],
    icon: 'CheckCircle2'
  },
  {
    number: '06',
    title: 'Deliver',
    description: 'Deploy the finished product to production, configure custom domains, and hand over deliverables with complete documentation.',
    details: ['Production deployment', 'Domain & DNS setup', 'Source code & asset handover', 'Admin walkthrough'],
    icon: 'Rocket'
  },
  {
    number: '07',
    title: '24/7 Contact Support',
    description: 'Provide continued responsiveness and dedicated communication channels following project launch for peace of mind.',
    details: ['Direct phone & email support', 'Prompt emergency assistance', 'Deployment checks', 'Dedicated response time'],
    icon: 'Headphones'
  },
  {
    number: '08',
    title: 'Maintenance Support',
    description: 'Post-delivery maintenance, software updates, security fixes, new feature additions, and ongoing technical guidance.',
    details: ['Security patches & dependencies', 'Content & UI adjustments', 'Feature enhancements', 'Performance monitoring'],
    icon: 'Wrench'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services do you provide?',
    answer: 'I provide four core services: Modern Website Development (responsive business, portfolio, and web apps), AI Chatbots (intelligent automated customer interactions), Mobile App Development (customized business-friendly mobile apps), and AI & Workflow Automation (using n8n, Zobot, and custom integrations).'
  },
  {
    id: 'faq-2',
    question: 'How can I start a project with MK Technology & Services?',
    answer: 'Starting a project is simple: reach out via the Contact Form on this page or email me directly at muthukumar41.dev@gmail.com with your project idea or requirements. We will schedule a discussion to understand your goals, define the scope, and prepare a tailored quote.'
  },
  {
    id: 'faq-3',
    question: 'Do you provide customized solutions?',
    answer: 'Yes, 100%. Every solution is built specifically according to your business needs, branding, and technical requirements. I do not use rigid pre-made templates that limit your flexibility; everything is crafted to fit your exact goals.'
  },
  {
    id: 'faq-4',
    question: 'How long does a typical project take?',
    answer: 'Project timelines depend on complexity and scope. A standard responsive business website typically takes 1 to 2 weeks, while larger full-stack applications, custom mobile apps, or extensive automation workflows may take 3 to 6 weeks. A clear delivery timeline is always agreed upon before development begins.'
  },
  {
    id: 'faq-5',
    question: 'Do you provide support after project delivery?',
    answer: 'Yes! Client satisfaction and long-term reliability are top priorities. I provide dedicated post-delivery support to ensure your application runs smoothly, answer questions, and address any immediate concerns after launch.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide ongoing maintenance after delivery?',
    answer: 'Yes. I offer ongoing maintenance support, including periodic updates, performance checks, security enhancements, and incremental feature updates based on your business growth.'
  },
  {
    id: 'faq-7',
    question: 'What technologies and frameworks do you use?',
    answer: 'I use modern, reliable industry stacks: React, TypeScript, Next.js, and Tailwind CSS for frontend; Node.js, Express.js, .NET, and Python for backend; PostgreSQL, MySQL, and SQL Server for databases; and Zobot and n8n for AI and workflow automation.'
  },
  {
    id: 'faq-8',
    question: 'How is project pricing decided?',
    answer: 'Project pricing depends on the specific requirements, scope of work, features, and technology involved. I focus on developing high-quality solutions with minimal cost. Contact me to discuss your project and receive a transparent, customized quote.'
  },
  {
    id: 'faq-9',
    question: 'Can you work on or improve an existing website or application?',
    answer: 'Yes. In addition to building greenfield projects from scratch, I can analyze, refactor, redesign, upgrade, or add new features and automations to your existing codebase.'
  },
  {
    id: 'faq-10',
    question: 'How can I request a quote?',
    answer: 'You can scroll to the Contact section below, fill in your contact details, select the service you need, and provide a short summary of your requirements. Alternatively, you can directly email muthukumar41.dev@gmail.com or call 9943398882.'
  }
];
