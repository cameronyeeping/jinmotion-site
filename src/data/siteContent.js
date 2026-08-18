// ============================================================
// J IN MOTION — SITE CONTENT
// Edit this file to update all text, images, and data across the site.
// ============================================================

export const siteMeta = {
    brandName: 'J in Motion',
    logoText: 'JiM',
    tagline: 'Tech and Infrastructure Consulting',
    copyright: '© 2026 J in Motion. All rights reserved.',
};

export const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
];

export const connectLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeannie-gandham-52856142/', external: true }, // TODO: Create a company LinkedIn (Low prio)
    { label: 'Email', href: 'mailto:jeannie.gandham@jinmotion.com', external: false }, // TODO: Replace with shared mailbox when active
];

export const ctaBanner = {
    label: "Let's talk.",
    buttonText: 'Get in touch',
};

export const projects = [
    {
        id: 'st-pauls',
        title: 'New St. Paul\'s Hospital',
        category: 'Infrastructure + Digital',
        year: '2026',
        client: 'Providence Health Care',
        location: 'Vancouver, BC',
        short_description: 'Western Canada\'s largest hospital redevelopment project.',
        long_description: [
            'The New St. Paul’s Hospital redevelopment is the largest healthcare infrastructure project in Western Canada. The project includes a 2.2-billion-dollar investment to construct a 1.7-million-square-foot facility with more than 600 beds. As Program Director, J in Motion manages a 450-million-dollar technology portfolio and oversees more than 50 concurrent projects, including command centers, security networks, and IT systems. We lead cross-functional teams, coordinate with government and construction partners, and integrate Indigenous design principles into the facility plan. We provide continuous executive reporting on project scope, schedule, budget, and risk to ensure opening in early 2027.'
        ],
        image: '/nsph.jpeg',
        heroColors: ['#F9D2BA', '#EEA2A5', '#7E3A65', '#13629B', '#10B981'],
        galleryImages: [
            '/nsph-1.avif',
            '/nsph-2.jpg'
        ]
    },
    {
        id: 'dawson-creek',
        title: 'Dawson Creek & District Hospital',
        category: 'Infrastructure',
        year: '2026',
        client: 'HH Angus + Northern Health Authority + Infrastructure BC',
        location: 'Dawson Creek, BC',
        short_description: 'Strategic advisory and roadmap development to guide opening-day readiness for Northern Health Authority and project leadership.',
        long_description: [
            "The new greenfield Dawson Creek District Hospital will accept patients in Spring 2027 and required " +
            "Operational Readiness + Transition Services. Advising both HH Angus and Northern Health Authority " + 
            "project senior project leadership, responsible for roadmap to opening day including creation of detailed "+
            "project deliverables."
        ],
        image: '/dawson-creek.jpg',
        heroColors: ['#F4A261', '#E76F51', '#2A9D8F', '#264653', '#13629B'],
        galleryImages: [
            'https://placehold.co/800x500/32231F/1882ce?text=Project+Detail+1',
            'https://placehold.co/800x500/231815/10B981?text=Project+Detail+2'
        ]
    },
    {
        id: 'bc-childrens',
        title: 'BC Children\'s + Women\'s Hospital Redevelopment',
        category: 'Infrastructure + Advisory',
        year: '2017',
        client: 'Client Name',
        location: 'Vancouver, BC',
        short_description: 'A 675-million-dollar, 640,000-square-foot pediatric critical care hospital built under a Public-Private Partnership model in Vancouver.',
        long_description: [
            'The Children’s and Women’s Redevelopment was a 675-million-dollar healthcare project completed in October 2017 under a Public-Private Partnership model. The eight-story, 640,000-square-foot critical care hospital provides 350 inpatient rooms in Vancouver. Reporting to the Executive Director and Chief Project Officer, J in Motion developed and applied a collaborative plan for the health authority, building consortium, and subcontractors. We synchronized owner-side projects with the main construction schedule. We also managed review processes, project budgets, and stakeholder communication frameworks to ensure clear project execution.'
        ],
        image: '/bc-childrens.jpg',
        heroColors: ['#D8B4E2', '#AE759F', '#6B3074', '#13629B', '#10B981'],
        galleryImages: [
            'https://placehold.co/800x500/231815/10B981?text=Project+Detail+1',
            'https://placehold.co/800x500/32231F/34D399?text=Project+Detail+2'
        ]
    },
    {
        id: 'stanton',
        title: 'Stanton Territorial Hospital Renewal',
        category: 'Infrastructure + Advisory',
        year: '2023',
        client: 'Government of Northwest Territories',
        location: 'Yellowknife, NT',
        short_description: 'A $350 million greenfield regional acute hospital delivery project under a P3 model.',
        long_description: [
            'The Stanton Territorial Hospital Renewal was a 350-million-dollar greenfield hospital project completed in 2019 under a Public-Private Partnership model. The regional facility contains 100 inpatient beds to serve the Northwest Territories. As clinical program lead reporting to the Assistant Deputy Minister and hospital Chief Executive Officer, J in Motion managed a 41-million-dollar capital and operational budget. We led project teams to design and operationalize the facility with new healthcare models. We also conducted stakeholder consultations with Indigenous communities and clinical staff to integrate culturally sensitive care practices into the building design.'
        ],
        image: '/stanton-territorial.jpg',
        heroColors: ['#E8A0BF', '#C38D9E', '#85586F', '#13629B', '#34D399'],
        galleryImages: [
            'https://placehold.co/800x500/231815/34D399?text=Project+Detail+1',
            'https://placehold.co/800x500/2A1D1A/10B981?text=Project+Detail+2'
        ]
    }
];

export const homePage = {
    hero: {
        title: 'Building Tomorrow\'s Critical Infrastructure',
        subtitle: 'Strategic advisory, operational excellence, and digital transformation for Canada’s most critical infrastructure initiatives.',
        btnPrimary: 'View Projects',
        btnSecondary: 'About Us',
        bgImage: '/NSPH-rendering.jpg',
        bgAlt: 'Hero Background'
    },
    approach: {
        eyebrow: 'ABOUT US',
        heading: 'Building Tomorrow’s Critical Infrastructure',
        paragraphs: [
            'We are a strategic advisory firm with a proven track record of managing over $40B in capital infrastructure and enterprise technology portfolios across Canada.',
            'For over 20 years, we\'ve worked closely with health authorities, municipal bodies, and provincial governments, delivering clarity and momentum to complex infrastructure landscapes.',
        ],
        image: '/HOSPITAL1.jpg',
        imageAlt: 'Studio Approach'
    },
    values: {
        heading: 'Our Commitments',
        cards: [
            {
                title: 'Clarity in Complexity',
                paragraphs: [
                    'We take the time to understand the complete picture, identify what matters most and turn complexity into a clear path forward. Our clients receive practical advice, transparent communication and plans that support confident decisions.'
                ]
            },
            {
                title: 'Momentum with Purpose',
                paragraphs: [
                    'We believe progress should be thoughtful, measurable and connected to meaningful outcomes. We stay engaged from vision through realization, helping teams maintain momentum, resolve challenges and carry the work through to completion.'
                ]
            }
        ]
    },
    portfolio: {
        eyebrow: 'OUR WORK',
        heading: 'Selected Projects',
        projects: projects
    }
};

export const aboutPage = {
    hero: {
        title: 'About Us',
        subtitle: 'Our Mission and Experience',
        bgImage: 'vancouver.webp',
        bgAlt: 'About Background'
    },
    content: {
        heading: 'Advisory & Execution Excellence Across Canada',
        paragraphs: [
            'J in Motion is a Canadian strategic advisory and project delivery firm. We lead large-scale capital infrastructure, technology integration, and operational readiness projects. With more than 20 years of experience, we direct complex public-sector portfolios from initial planning to final facility commissioning. Our track record includes executive leadership on multi-billion-dollar developments across Canada and project portfolios that exceed 40 billion dollars.',
            'Our core capabilities include capital infrastructure delivery for complex Public-Private Partnership (P3) and Design-Build-Finance projects. We control project schedules, budgets, risk, and regulatory compliance throughout the project lifecycle. In addition, we direct technology and systems integration, which includes the procurement and deployment of enterprise information systems, command centers, and digital networks.',
            'We also prepare organizations for opening day through operational readiness planning and clinical workflow design. We lead structured stakeholder engagement and consult directly with Indigenous Nations, healthcare boards, and government ministries. Through this collaborative approach, we integrate community priorities and build resilient physical and digital environments for public institutions across Canada.'


        ]
    },
    stats: [
        { value: '20+', label: 'Years of Experience' },
        { value: '50+', label: 'Concurrent Projects Directed' },
        { value: '$40B', label: 'Portfolio Value Delivered' },
        { value: '$450M', label: 'Technology Portfolio Led' }
    ],
    team: {
        heading: 'Meet the Team',
        subtitle: 'The people behind J in Motion',
        members: [
            {
                id: 'jeannie-gandham',
                name: 'Jeannie Gandham',
                title: 'Principal',
                image: 'https://placehold.co/500x350/231815/13629B?text=Jeannie+Gandham',
                alt: 'Jeannie Gandham',
                bio: [
                    'Jeannie Gandham is the Principal of J in Motion, bringing over 20 years of executive leadership in major healthcare, capital infrastructure, and technology transformation initiatives across Canada.',
                    'With a proven track record directing multi-billion-dollar public-sector portfolios, Jeannie specializes in strategic advisory, P3 capital delivery, operational readiness, and stakeholder alignment across government ministries, health authorities, and Indigenous communities.'
                ]
            },
            {
                id: 'cameron-yee-ping',
                name: 'Cameron Yee-Ping',
                title: 'Project Leader',
                image: 'https://placehold.co/500x350/231815/13629B?text=Cameron+Yee-Ping',
                alt: 'Cameron Yee-Ping',
                bio: [
                    'Cameron Yee-Ping provides project delivery, strategic analysis, and systems integration support for complex infrastructure and transformation initiatives.',
                    'Working alongside project leadership, Cameron focuses on digital roadmaps, operational planning, and seamless project execution.'
                ]
            }
        ]
    }
};

export const teamDatabase = Object.fromEntries(aboutPage.team.members.map((m) => [m.id, m]));

export const getTeamMember = (id) => {
    if (teamDatabase[id]) return teamDatabase[id];
    const member = aboutPage.team.members.find((m) => m.id === id);
    if (member) return member;
    return {
        id,
        name: id ? id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Team Member',
        title: 'Team Member',
        image: `https://placehold.co/600x750/231815/13629B?text=${id || 'Member'}`,
        alt: id || 'Team Member',
        bio: ['Biography details for this team member.']
    };
};

export const projectDatabase = Object.fromEntries(projects.map((p) => [p.id, p]));

export const projectsPage = {
    hero: {
        title: 'Projects',
        subtitle: 'Two Decades of Proven Delivery',
        bgImage: '/vancouver.webp',
        bgAlt: 'Projects Hero'
    },
    projects
};

export const getProjectData = (id) => {
    if (projectDatabase[id]) return projectDatabase[id];

    const num = id.replace('project-', '');
    return {
        id,
        title: `Project Title ${num || id}`,
        category: 'CATEGORY / LOREM IPSUM',
        year: '2024',
        client: 'Client Name',
        location: 'Location City',
        short_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        long_description: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Project ${num || id} description details.`,
            `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.`,
            `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.`
        ],
        image: `https://placehold.co/800x600/32231F/10B981?text=Project+${num}`,
        heroColors: ['#F9D2BA', '#E8A0BF', '#7E3A65', '#13629B', '#10B981'],
        galleryImages: [
            `https://placehold.co/800x500/32231F/10B981?text=Project+${num}+Detail+1`,
            `https://placehold.co/800x500/2A1D1A/1882ce?text=Project+${num}+Detail+2`
        ]
    };
};

export const servicesPage = {
    hero: {
        title: 'Our Services',
        subtitle: 'Comprehensive strategic consulting and delivery leadership for complex capital, digital, and advisory initiatives.',
        bgImage: '/vancouver.webp',
        bgAlt: 'Services Background'
    },
    intro: {
        heading: 'What We Do',
        description: 'We turn complex strategic visions into high-performing physical and digital reality, bringing over two decades of capital delivery leadership to every stage of your project.'
    },
    categories: [
        {
            id: 'infrastructure',
            title: 'Infrastructure',
            icon: 'building',
            description: 'We provide strategic leadership for complex capital and infrastructure projects, from early planning and design through construction, operational readiness, activation and opening. We bring together the people, plans and decisions required to move a project forward with clarity and confidence.',
            servicesIncludeLabel: 'Our infrastructure services include:',
            items: [
                'Strategic and master planning',
                'Project definition and business cases',
                'Governance and integrated project planning',
                'Design and construction coordination',
                'Clinical and operational planning',
                'Operational readiness, activation and transition',
                'Opening, stabilization and project closeout'
            ]
        },
        {
            id: 'digital',
            title: 'Digital',
            icon: 'cpu',
            description: 'We help organizations plan and deliver digital transformation that is connected to infrastructure, operations and the people who will use it. Our approach considers technology as part of the complete environment, ensuring systems are practical, integrated and ready for implementation.',
            servicesIncludeLabel: 'Our digital services include:',
            items: [
                'Digital and technology strategy',
                'Technology portfolio and program leadership',
                'Smart hospital and smart-building planning',
                'Requirements development and procurement',
                'Implementation planning',
                'Testing, training and readiness',
                'Go-live, command-centre and stabilization planning',
                'Transition and handover to operations'
            ]
        },
        {
            id: 'advisory',
            title: 'Advisory',
            icon: 'compass',
            description: 'We provide senior guidance to organizations navigating complex decisions, major transformation or critical stages of project delivery. We help leaders define the vision, understand the challenges and establish a practical path from strategy to implementation.',
            servicesIncludeLabel: 'Our advisory services include:',
            items: [
                'Executive and project advisory',
                'Visioning and strategic planning',
                'Research and best-practice review',
                'Program roadmaps and mobilization',
                'Governance and delivery models',
                'Project recovery and issue resolution',
                'Stakeholder engagement and alignment',
                'Change leadership and outcome measurement'
            ]
        }
    ]
};
