import { ServiceItem, ProjectItem, SkillCategory, ProcessStep, FAQItem } from '../types';

export const BRAND_INFO = {
  brandName: 'Muthukumar',
  subtitle: 'Freelance Software Developer',
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
  copyright: '© 2026 Muthukumar. All Rights Reserved.'
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
  // ONGOING PROJECTS (2)
  {
    id: 'social-media-management-tool',
    title: 'Social Media Management Tool',
    status: 'ongoing',
    category: 'Social Media Management SaaS / Web Application',
    description: 'A centralized web-based social media management platform designed to help organizations and brands manage their social media activities from a single workspace. The platform is currently under development and is intended to provide a unified workflow for connecting social accounts, creating content, scheduling posts, managing approvals, and viewing social media-related information.',
    shortDescription: 'A centralized web-based social media management platform designed to help organizations and brands manage social media activities, scheduling, and approvals from a single workspace.',
    fullDescription: 'A centralized web-based social media management platform designed to help organizations and brands manage their social media activities from a single workspace. The platform is currently under development and is intended to provide a unified workflow for connecting social accounts, creating content, scheduling posts, managing approvals, and viewing social media-related information.',
    phaseScope: ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'YouTube'],
    productStructure: 'Organization → Brand/Workspace → Social Accounts → Content → Calendar → Publishing → Analytics / Approvals',
    statusNote: 'ONGOING — Currently in Development',
    isLive: false,
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Workspace Architecture',
      'Post Scheduling Engine',
      'Content Approvals',
      'Analytics Dashboard'
    ],
    features: [
      'Authentication',
      'Organization/workspace management',
      'Brand/workspace structure',
      'Social account management',
      'Dashboard',
      'Content Composer',
      'Media Library',
      'Post creation',
      'Scheduling',
      'Publishing workflow',
      'Calendar',
      'Content approvals',
      'Team collaboration',
      'Role-based access',
      'Analytics dashboard structure',
      'Responsive web interface'
    ],
    keyHighlights: [
      'Multi-tenant Organization & Brand/Workspace hierarchical management',
      'Phase 1 Social Integration: Instagram, Facebook, LinkedIn, TikTok & YouTube',
      'Rich Content Composer with integrated Media Library & post creation tools',
      'Visual Calendar-based content planning and scheduled publishing engine',
      'Collaborative content approval workflows with role-based access control',
      'Modern, clean white-background SaaS interface with full tablet & mobile responsiveness'
    ]
  },
  {
    id: 'aadharsh-workhub-crm',
    title: 'Aadharsh WorkHub – CRM',
    status: 'ongoing',
    category: 'CRM / Work Management / Business Operations Platform',
    description: 'An ongoing CRM and work-management platform designed to centralize business operations, staff workdays, client jobs, daily activities, dispatch, enquiries, expenses, reminders, and email follow-ups through a unified workspace.',
    shortDescription: 'An ongoing CRM and work-management platform designed to centralize business operations, staff workdays, client jobs, daily activities, dispatch, enquiries, expenses, reminders, and email follow-ups through a unified workspace.',
    fullDescription: 'An ongoing CRM and work-management platform designed to centralize business operations, staff workdays, client jobs, daily activities, dispatch, enquiries, expenses, reminders, and email follow-ups through a unified workspace. It empowers businesses with end-to-end operational visibility, structured workday accountability, and smooth communication pipelines.',
    statusNote: 'ONGOING — Currently in Development',
    isLive: false,
    technologies: [
      'CRM',
      'Work Management',
      'Business Operations',
      'Staff Management',
      'Client Jobs',
      'Enquiries',
      'Dispatch',
      'Attendance',
      'Workflow Management'
    ],
    features: [
      'Overview',
      'My Workday',
      'Reminders',
      'Client Jobs',
      'Daily Work',
      'Dispatch',
      'Enquiries',
      'Staff Expenses',
      'Email Follow-ups',
      'Staff Access',
      'Attendance/workday tracking',
      'Daily reporting',
      'Sending daily reports to Admin and HR'
    ],
    keyHighlights: [
      'Centralized operations dashboard unifying client jobs, enquiries, and dispatch workflows',
      'Workday & attendance tracking with structured daily reporting to Admin and HR',
      'Client job pipeline tracking from initial enquiry through delivery and dispatch',
      'Staff expense tracking, automated milestone reminders, and email follow-up queues',
      'Granular staff access management tailored for diverse operational departments'
    ]
  },

  // COMPLETED PROJECTS (2)
  {
    id: 'rethika-enterprises',
    title: 'Rethika Enterprises – Corporate Gifting Platform',
    status: 'completed',
    category: 'Corporate Gifting / Business Platform',
    client: 'Rethika Enterprises',
    description: 'A corporate gifting platform that allows customers to browse and select products, customize branding, submit enquiries, and receive quotations. The platform also includes supplier management, RFQ/quotation workflows, and an admin portal for managing products, suppliers, enquiries, and orders.',
    shortDescription: 'A corporate gifting platform enabling product browsing, branding customization, RFQ quotation workflows, supplier coordination, and comprehensive back-office administration.',
    fullDescription: 'A corporate gifting platform that allows customers to browse and select products, customize branding, submit enquiries, and receive quotations. The platform also includes supplier management, RFQ/quotation workflows, and an admin portal for managing products, suppliers, enquiries, and orders.',
    isLive: true,
    liveUrl: 'https://rethikaenterprises.com',
    liveUrlText: 'View Live Website',
    statusNote: 'COMPLETED',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Vinext / Next.js',
      'Tailwind CSS',
      'Cloudflare',
      'Cloudflare D1',
      'Cloudflare R2',
      'Drizzle ORM',
      'SQL',
      'Excel Import',
      'WhatsApp Click-to-Chat'
    ],
    features: [
      'Product browsing',
      'Product selection',
      'Product customization',
      'Branding/customization options',
      'Customer enquiries',
      'Quotation workflow',
      'Supplier management',
      'RFQ workflow',
      'Order management',
      'Admin portal',
      'Product management',
      'Supplier management',
      'Enquiry management',
      'Excel import',
      'WhatsApp Click-to-Chat'
    ],
    keyHighlights: [
      'Dynamic product catalogue with custom branding enquiry and preview workflows',
      'Supplier management module & RFQ (Request for Quotation) tracking system',
      'Secure back-office administration portal for orders, catalogue & lead management',
      'Bulk data processing with Excel Import integration',
      'Instant communication via WhatsApp Click-to-Chat integration',
      'Edge-deployed serverless architecture with Cloudflare D1 SQL and R2 storage'
    ]
  },
  {
    id: 'roots-education-mile',
    title: 'ROOTS – The Education Mile',
    status: 'completed',
    category: 'Education / Event / Social Impact',
    client: 'Vidhya Vidhai Foundation',
    description: 'A website created for the ROOTS Education Conclave by Vidhya Vidhai Foundation. The website provides information about: Conclave, ROOTS journey, Participants, Testimonials, Videos, Gallery, Registration, Event information.',
    shortDescription: 'Official website for the ROOTS Education Conclave by Vidhya Vidhai Foundation, featuring conclave agenda, journey archives, delegate registration, and keynote galleries.',
    fullDescription: 'A website created for the ROOTS Education Conclave by Vidhya Vidhai Foundation. The website provides information about: Conclave, ROOTS journey, Participants, Testimonials, Videos, Gallery, Registration, Event information.',
    isLive: true,
    liveUrl: 'https://vidhyavidhai.org/index.php/roots/',
    liveUrlText: 'View Live Website',
    statusNote: 'Note: The live website represents the 2025 ROOTS website. The 2026 website is a separate development effort and must not be represented as the completed live version.',
    technologies: [
      'React.js',
      'TypeScript',
      'HTML',
      'CSS',
      'Node.js'
    ],
    features: [
      'Conclave Overview',
      'ROOTS Journey Showcase',
      'Participant & Speaker Directory',
      'Testimonials',
      'Video Archives',
      'Multimedia Gallery',
      'Delegate Registration',
      'Event Information'
    ],
    keyHighlights: [
      'Comprehensive event agenda, speaker showcases, and keynote schedules',
      'Interactive multimedia gallery and archived video presentations',
      'Seamless attendee and delegate registration workflows',
      'Lightweight, high-accessibility UI optimized for diverse mobile devices',
      'Dedicated journey showcase detailing the grassroots impact of Vidhya Vidhai Foundation'
    ]
  },

  // UPCOMING PROJECTS (1)
  {
    id: 'raghul-brand-website',
    title: 'Raghul — Brand Website & Product Management System',
    status: 'upcoming',
    category: 'Brand Website + Product Management System',
    client: 'Raghul',
    description: 'An upcoming brand website project for Raghul, focused on creating a professional digital presence with dedicated Home, About, Products, Why Choose Us, and Contact sections. The planned solution will include direct email and WhatsApp communication, an enquiry form with email notifications, and a backend-powered product management system with an admin portal for updating product information.',
    shortDescription: 'An upcoming brand website project for Raghul, focused on creating a professional digital presence with dedicated Home, About, Products, Why Choose Us, and Contact sections.',
    fullDescription: 'An upcoming brand website project for Raghul, focused on creating a professional digital presence with dedicated Home, About, Products, Why Choose Us, and Contact sections. The planned solution will include direct email and WhatsApp communication, an enquiry form with email notifications, and a backend-powered product management system with an admin portal for updating product information.',
    statusNote: 'UPCOMING',
    isLive: false,
    technologies: [
      'Brand Website Architecture',
      'Product Management System',
      'Admin Portal',
      'Email Notifications',
      'WhatsApp Direct Messaging',
      'Enquiry Form Workflow'
    ],
    features: [
      'Home page',
      'About Us',
      'Product section/page',
      'Contact Us',
      'Why Choose Us',
      'Direct email communication',
      'WhatsApp direct messaging',
      'Contact enquiry form',
      'Direct email notification after form submission',
      'Backend-powered product management',
      'Admin portal',
      'Product updates through the backend'
    ],
    keyHighlights: [
      'Dedicated brand sections: Home, About Us, Products, Why Choose Us, and Contact Us',
      'Direct customer communication channels via integrated Email and WhatsApp messaging',
      'Contact enquiry form with instant automated direct email notification upon submission',
      'Backend-powered product management system with a secure admin portal for live product updates'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Building clean, reactive, and accessible user interfaces with modern toolchains.',
    icon: 'Layout',
    skills: ['React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Next.js']
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
    question: 'How can I start a project with Muthukumar?',
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
    answer: 'You can scroll to the Contact section below, fill in your contact details, select the service you need, and provide a short summary of your requirements. Alternatively, you can directly email muthukumar41.dev@gmail.com or call +91 99433 98882.'
  }
];
