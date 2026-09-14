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
    { to: '/team', label: 'Team' },
    { to: '/community', label: 'Community' },
];

export const connectLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeannie-gandham-52856142/', external: true }, // TODO: Create a company LinkedIn (Low prio)
    { label: 'Email', href: 'mailto:jim@jinmotion.com', external: false }, // TODO: Replace with shared mailbox when active
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
        image: '/nsph/nsph.jpeg',
        heroColors: ['#F9D2BA', '#EEA2A5', '#7E3A65', '#13629B', '#10B981'],
        galleryImages: [
            '/nsph/nsph-1.avif',
            '/nsph/nsph-2.jpg'
        ]
    },
    {
        id: 'dawson-creek',
        title: 'Dawson Creek & District Hospital',
        category: 'Infrastructure',
        year: '2026',
        client: 'Northern Health Authority + Infrastructure BC',
        location: 'Dawson Creek, BC',
        short_description: 'Strategic advisory and roadmap development to guide opening-day readiness for Northern Health Authority and project leadership.',
        long_description: [
            "The new greenfield Dawson Creek District Hospital will accept patients in Spring 2027 and required " +
            "Operational Readiness + Transition Services. Advising both HH Angus and Northern Health Authority " + 
            "project senior project leadership, responsible for roadmap to opening day including creation of detailed "+
            "project deliverables."
        ],
        image: '/dawson/dawson-creek-render.jpg',
        heroColors: ['#F4A261', '#E76F51', '#2A9D8F', '#264653', '#13629B'],
        galleryImages: [
            'dawson/dawson-2.jpg',
            'dawson/dawson-3.jpeg'
        ]
    },
    {
        id: 'bc-childrens',
        title: 'BC Children\'s + Women\'s Hospital Redevelopment',
        category: 'Infrastructure + Advisory',
        year: '2017',
        client: 'Provincial Health Services Authority',
        location: 'Vancouver, BC',
        short_description: 'A 675-million-dollar, 640,000-square-foot pediatric critical care hospital built under a Public-Private Partnership model in Vancouver.',
        long_description: [
            'The Children’s and Women’s Redevelopment was a 675-million-dollar healthcare project completed in October 2017 under a Public-Private Partnership model. The eight-story, 640,000-square-foot critical care hospital provides 350 inpatient rooms in Vancouver. Reporting to the Executive Director and Chief Project Officer, J in Motion developed and applied a collaborative plan for the health authority, building consortium, and subcontractors. We synchronized owner-side projects with the main construction schedule. We also managed review processes, project budgets, and stakeholder communication frameworks to ensure clear project execution.'
        ],
        image: '/bc-childrens/bc-childrens.jpg',
        heroColors: ['#D8B4E2', '#AE759F', '#6B3074', '#13629B', '#10B981'],
        galleryImages: [
            '/bc-childrens/bc-childrens-2.jpeg',
            '/bc-childrens/bc-childrens-3.jpg'
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
        image: '/stanton/stanton-territorial.jpg',
        heroColors: ['#E8A0BF', '#C38D9E', '#85586F', '#13629B', '#34D399'],
        galleryImages: [
            'stanton/stanton-1.avif',
            'stanton/stanton-2.jpg'
        ]
    },
    {
        id: 'bc-cancer',
        title: 'BC Cancer Redevelopments',
        category: 'Advisory',
        year: '2024',
        client: 'Provincial Health Services Authority',
        location: 'Vancouver, BC',
        short_description: '$440 million investment into cancer centres across British Columbia',
        long_description: [
            'BC Cancer plans, coordinates and evaluates cancer care with the health authorities across BC to provide equitable and cost-effective health care for people living with or affected by cancer. In support of the BC Cancer Strategic Plan, over $440million capital invested to expand cancer care teams, research, technology and build new facilities. Reporting to the Executive leadership, provided capital infrastructure advisory for $440M capital expansion and infrastructure planning. Leadership over complex deliverables including delivery of integrated project schedule with construction schedules, design, compliance and subject matter input. '
        ],
        image: 'bc-cancer/cloverdale-2.avif',
        galleryImages:[
            'bc-cancer/cloverdale.webp',
            'bc-cancer/cloverdale-1.jpeg'
        ]
    },
    {
        id: 'surrey',
        title: 'Surrey Memorial Hospital',
        category: 'Advisory',
        year: '2013',
        client: 'Fraser Health Authority',
        location: 'Surrey, BC',
        short_description: 'A 512-million-dollar P3 hospital project providing 151 inpatient beds and a phased opening for acute emergency and critical care services',
        long_description: [
            'SMH Critical Care Tower is a new, state-of-the art acute facility, complete with a new emergency department, perinatal centre, 151 inpatient beds, intensive care unit and academic space. The P3 infrastructure project was $512M and opened successfully summer of 2014. Lead the clinical design of the two inpatient units and also lead the planning and execution of a comprehensive plan for a two phase opening. First to open the new Emergency Department (opened June 2013) and then to move admitted patients from the existing campus into the new Critical Care Tower (opened June 8 2014).'
        ],
        image: '/surrey/surrey.jpg',
        galleryImages:[
            'surrey-1.webp',
            'surrey-2.jpg'
        ]
    }

    //'https://placehold.co/800x500/32231F/1882ce?text=Project+Detail+1',
];

export const homePage = {
    hero: {
        title: 'Vision in motion.',
        subtitle: 'Ambitious direction driven forward through practical roadmaps, disciplined execution and outcomes people can see.',
        btnPrimary: 'Our Work',
        btnSecondary: 'About Us',
        bgImage: '/NSPH-rendering.jpg',
        bgAlt: 'Hero Background'
    },
    clients: {
        heading: 'Our clients',
        items: [
            {
                name: 'Fraser Health Authority',
                logo: '/client-logos/Fraser-Health-Authority.png'
            },
            {
                name: 'BC Cancer',
                logo: '/client-logos/bc-cancer-logo.webp'
            },
            {
                name: 'Provincial Health Services Authority',
                logo: '/client-logos/phsa-logo.png'
            },
            {
                name: 'Providence Health Care',
                logo: '/client-logos/providence-logo.png'
            }
        ]
    },
    approach: {
        eyebrow: 'ABOUT US',
        heading: 'Driving Momentum Across Complex Projects',
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
    methodology: {
        eyebrow: 'THE J IN MOTION METHOD',
        heading: 'From vision to realization.',
        subtitle: 'A clear, connected approach that turns complex ideas into meaningful outcomes.',
        steps: [
            {
                number: '01',
                title: 'Vision',
                description: 'Define the destination and the reason for change.',
                icon: 'target',
                sectionLabel: 'DELIVERABLES',
                items: [
                    'Research and site visits',
                    'Best-practice review',
                    'Stakeholder input',
                    'Project charter'
                ]
            },
            {
                number: '02',
                title: 'Roadmap',
                description: 'Translate the vision into an achievable path.',
                icon: 'trending-up',
                sectionLabel: 'DELIVERABLES',
                items: [
                    'Key deliverables',
                    'Milestones and timeline',
                    'Dependencies',
                    'Decision points'
                ]
            },
            {
                number: '03',
                title: 'Implement',
                description: 'Build the structure required for successful delivery.',
                icon: 'grid',
                sectionLabel: 'DELIVERABLES',
                items: [
                    'Project plan',
                    'Governance and resources',
                    'Budget and risk approach',
                    'Reporting framework'
                ]
            },
            {
                number: '04',
                title: 'Realize',
                description: 'Lead execution and turn plans into outcomes.',
                icon: 'arrow-right',
                sectionLabel: 'DELIVERABLES',
                items: [
                    'Project leadership',
                    'Issue resolution',
                    'Decision support',
                    'Execution'
                ]
            },
            {
                number: '05',
                title: 'Celebrate',
                description: 'Close well and make the value visible.',
                icon: 'star',
                isHighlighted: true,
                sectionLabel: 'DELIVERABLES',
                items: [
                    'Project closeout',
                    'Outcome measurement',
                    'Lessons learned',
                    'Recognition and thanks'
                ]
            }
        ],
        footerSummary: 'Vision → Roadmap → Implement → Realize → Celebrate',
        footerTagline: 'CLARITY. MOMENTUM. OUTCOMES.'
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
        heading: 'Driving Momentum Across Canada',
        paragraphs: [
            'J in Motion delivers infrastructure, enterprise technology, and organizational transformation projects through clear roadmaps, focused execution, and measurable results.',
            // 'J in Motion brings vision to life across infrastructure, enterprise technology and organizational transformation through achievable roadmaps, focused execution, measurable results and outcomes worth celebrating.',
            'With over than 20 years of leadership experience, we have contributed to major public programs that represent more than 40 billion dollars in capital investment across Canada. This experience includes healthcare facility construction, digital modernization, operational readiness, and enterprise system integration. We ensure that organizations put new infrastructure and technology into operation safely within approved scope, budget, and schedule limits.',
            // 'Our core capabilities include capital infrastructure delivery for complex Public-Private Partnership (P3) and Design-Build-Finance projects. We control project schedules, budgets, risk, and regulatory compliance throughout the project lifecycle. In addition, we direct technology and systems integration, which includes the procurement and deployment of enterprise information systems, command centers, and digital networks.',
            'We also prepare organizations for opening day through operational readiness planning and clinical workflow design. We lead structured stakeholder engagement and consult directly with Indigenous Nations, healthcare boards, and government ministries. Through this collaborative approach, we integrate community priorities and build resilient physical and digital environments for public institutions across Canada.'

            // 'Backed by more than 20 years of proven leadership experience, we have contributed to major public-sector programs representing more than $40 billion in capital investment across Canada. This experience spans healthcare redevelopment, digital modernization, operational readiness and the integrated enterprise systems required to bring new futuristic infrastructure and innovation safely into operation within defined scope, budget and timeline.',
            // 'JiM Co works alongside health authorities, provincial governments, municipalities and leadership teams from executives to front line, throughout the project lifecycle. Specializing in early engagement visioning art of the possible, planning and business-case development through procurement, design, implementation, activation and stabilization.',
            // 'The firm is known for stepping into complex environments and moving the work forward with confidence and customization of approach to align with organizational guiding principles and culture. That means establishing clear direction through governance, documenting decisions, aligning people and priorities, resolving issues and maintaining momentum when the pressure is high. The approach is collaborative and grounded in the discipline required to deliver.',
            // 'JiM Co does more than provide advice. The firm works alongside clients embedded in their teams, takes ownership of the path forward and does "whatever it takes" to turn plans into action. Challenges are addressed directly, teams are supported and progress remains visible from vision through realization.'

        ]
    },
    stats: [
        { value: '20+', label: 'Years of Experience' },
        { value: '50+', label: 'Concurrent Projects Directed' },
        { value: '$40B', label: 'Portfolio Value Delivered' },
        { value: '$450M', label: 'Technology Portfolio Led' }
    ],
    guidingPrinciples: {
        heading: 'Guiding Principles',
        principles: [
            {
                title: 'Respect.',
                description: 'Listen carefully, value every contribution and build relationships grounded in trust, honesty and accountability.'
            },
            {
                title: 'Whatever It Takes.',
                description: 'Stay committed, solve problems and step forward wherever leadership is needed to move the work ahead.'
            },
            {
                title: 'Have Fun.',
                description: 'Bring energy, humanity and celebration to demanding work. Strong teams achieve more when people feel connected, valued and proud of what they accomplish together.'
            }
        ],
        closing: 'The result is more than a completed project. It is infrastructure that works, technology that enables people, teams that are ready and lasting value that organizations and communities can see.'
    },
    team: {
        heading: 'Meet the Team',
        subtitle: 'The people behind J in Motion',
        members: [
            {
                id: 'jeannie-gandham',
                name: 'Jeannie Gandham',
                title: 'Principal',
                image: '/profiles/jeannie_headshot.jpeg',
                portrait: '/profiles/jeannie_headshot.jpeg',
                alt: 'Jeannie Gandham',
                headline: 'Strategic Advisory & Project Delivery Leadership',
                bio: [
                    'Jeannie Gandham is the Principal of J in Motion, bringing over 20 years of executive leadership in major healthcare, capital infrastructure, and technology transformation initiatives across Canada.',
                    'With a proven track record directing multi-billion-dollar public-sector portfolios, Jeannie specializes in strategic advisory, P3 capital delivery, operational readiness, and stakeholder alignment across government ministries, health authorities, and Indigenous communities.'
                ],
                profile: [
                    'Jeannie Gandham is an executive project and program leader with more than 20years of experience guiding complex healthcare infrastructure, digital transformation and organizational change.',
                    'She works with executive teams from early strategy and business-case development through delivery, activation, go-live and stabilization. Her strength is turning ambitious direction into executable roadmaps, aligning diverse stakeholders and maintaining focus on the decisions that create forward movement.',
                    'Jeannie is known for an inclusive, direct and outcomes-focused leadership style—and for building the governance, capability and confidence organizations need to sustain results.'
                ],
                expertise: [
                    'Complex program leadership',
                    'Executive advisory & governance',
                    'Hospital redevelopment',
                    'Stakeholder engagement',
                    'Digital-health strategy',
                    'Clinical service design',
                    'Operational readiness & activation',
                    'Change & capability building'
                ],
                experience: [
                    {
                        project: 'Providence Healthcare - New St. Paul\'s Hospital',
                        role: 'Program Director',
                        description: 'Created and led a $450M IM/IT portfolio with 50+ concurrent infrastructure and technology projects.'
                    },
                    {
                        
                        project: 'HH Angus + Northern Health Authority - Dawson Creek & District Hospital',
                        role: 'Advisor',
                        description: 'Advised both HH Angus and Northern Health Authority senior project leadership in their roadmap to opening day including creation of detailed project deliverables.'
                    },
                    {
                        project: 'Provincial Health Services Authority - BC Children\'s & Women\'s Redevelopment',
                        role: 'Senior Consultant',
                        description: 'Created and led approach for collaboration with the Private Public Partnership (P3) construction partner and health authority.'
                    },
                    {
                        project: 'Stanton Territorial Hospital Renewal',
                        role: 'Program Director',
                        description: 'Led a $41M clinical, operational and technology portfolio to operationalize the new Stanton Territorial Hospital'
                    }
                ],
                credentials: [
                    'B.Sc., UBC',
                    'Project Management Certificate, UBC Sauder',
                    'Prosci Change Management',
                    'Value-Based Health Care Training, UT Austin'
                ],
                conferences: [
                    {
                        event: 'Healthcare Infrastructure East',
                        date: 'October 2022',
                        topic: 'Future Proofing Hospitals'
                    },
                    {
                        event: 'Canadian Healthcare Innovation Summit',
                        date: 'October 2023',
                        topic: 'Digital Innovation & Marginalized Populations'
                    },
                    {
                        event: 'Healthcare Infrastructure East',
                        date: 'November 2023',
                        topic: 'Delivering Care in the Future Hospital'
                    }
                ],
                profilePdf: '/resumes/jeannie-resume.pdf'
            }
            /*
             * Gina Pisoni
             */
            ,{
                id: 'gina-pisoni',
                name: 'Gina Pisoni',
                title: 'Digital Solutions Lead',
                image: '/profiles/gina_headshot.jpg',
                portrait: '/profiles/gina_headshot.jpg',
                alt: 'Gina Pisoni',
                bio: [
                    'Gina is a healthcare technology leader with more than 20 years of experience delivering complex digital transformation and major capital redevelopment initiatives within the healthcare sector.',
                    'Throughout her career, Gina has partnered with executive leaders, clinicians, facilities, teams, and technology professionals to translate complex challenges into practical, strategic solutions. She\'s known for building high-performing teams, fostering trusted relationships, and improving healthcare delivery.'
                ],

                expertise: [
                    'Executive leadership & governance',
                    'IMIT strategy & capital planning',
                    'Healthcare infrastructure redevelopment',
                    'Operational readiness',
                    'Clinical technology',
                    'Operational readiness & activation',
                    'Multidisciplinary program delivery',
                ],
                experience: [
                    {
                        project: 'Provincial Health Services Authority - BC Cancer Redevelopment Projects',
                        role: 'Senior Director, Delivery Solutions, Capital Projects',
                        description: 'Digital leadership and governance for four concurrent cancer centre redevelopments across the province, owning a $140M IM/IT capital budget and directing a multidisciplinary Technology Solutions and PMO team. Set digital strategy and capital planning direction while ensuring program-wide risk management and stakeholder alignment across health authority and construction partners. '
                    },
                    {
                        
                        project: 'Provincial Health Services Authority - New St. Paul\'s Hospital',
                        role: 'Director, Facilities and Capital Projects',
                        description: 'Led Design-Build contract management, and cross-functional Integrated Project Delivery (PMO) teams to keep scope, schedule, and budget aligned — driving multidisciplinary program delivery at scale.'
                    },
                    {
                        project: 'Provincial Health Services Authority - BC Children\'s & Women\'s Redevelopment',
                        role: 'Director, IMIT',
                        description: 'Owned IMIT strategy and a $33M capital budget for the redevelopment\'s technology scope and led operational readiness and transition planning through facility activation — guiding the program through opening and handover to clinical operations.'
                    },
                    {
                        project: 'Provincial Health Services Authority - Children\'s and Women\'s Redevelopment',
                        role: 'Senior Manager, Clinical Alignment',
                        description: 'Led P3 (Public-Private Partnership) IM/IT contract execution, serving as the bridge between clinical leadership and construction/technology teams to align clinical requirements with facility design — supporting clinical technology planning and workflow readiness for the new care environment.'
                    }
                ],
                credentials: [
                    'Computer Information Systems Diploma, Langara College',
                    'Healthcare Facilities Planning and Design: Focus on Leadership Certificate, Cornell University',
                ],
                profilePdf: '/resumes/gina-resume.pdf'
            }
            /* Cameron Yee-Ping
            ,{
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
            */
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

export const communityPage = {
    hero: {
        title: 'Community & Impact',
        subtitle: 'Investing in the health, people, and future of the communities where we live and work.',
        bgImage: '/vancouver.webp',
        bgAlt: 'Community Impact Hero'
    },
    intro: {
        eyebrow: 'OUR PURPOSE',
        heading: 'Community-First Infrastructure',
        summary: 'True progress extends beyond capital delivery. We partner with healthcare foundations, regional charities, and youth initiatives to leave a lasting, positive footprint in every community we touch.',
        featuredImage: '/HOSPITAL1.jpg',
        featuredImageAlt: 'Community healthcare in action'
    },
    stats: [
        { value: '15+', label: 'Charities Supported' },
        { value: '500+', label: 'Annual Volunteer Hours' },
        { value: '100%', label: 'Regional Focus' }
    ],
    pillars: [
        {
            id: 'healthcare-foundations',
            title: 'Healthcare & Patient Care',
            icon: 'heart',
            image: '/HOSPITAL1.jpg',
            description: 'Direct support for hospital foundations, specialized pediatric care, and frontline clinical comfort.'
        },
        {
            id: 'indigenous-partnerships',
            title: 'Indigenous Partnerships',
            icon: 'users',
            image: '/vancouver.webp',
            description: 'Collaborating with First Nations to embed cultural wellness, sacred spaces, and health equity.'
        },
        {
            id: 'youth-mentorship',
            title: 'Youth & STEM Mentorship',
            icon: 'graduation-cap',
            image: '/bc-childrens/bc-childrens-2.jpeg',
            description: 'Mentoring next-generation leaders through project management outreach and educational pathways.'
        },
        {
            id: 'social-equity',
            title: 'Regional Relief & Wellness',
            icon: 'building-2',
            image: '/stanton/stanton-territorial.jpg',
            description: 'Supporting local food security, family relief programs, and grassroots community health.'
        }
    ],
    charities: [
        {
            name: 'St. Paul’s Foundation',
            category: 'Hospital Innovation',
            image: '/nsph/nsph.jpeg',
            description: 'Fueling medical research and compassionate patient care at the New St. Paul’s Hospital.',
            link: 'https://helpstpauls.com/'
        },
        {
            name: 'BC Children’s Hospital Foundation',
            category: 'Pediatric Care',
            image: '/bc-childrens/bc-childrens.jpg',
            description: 'Supporting specialized care, pediatric research, and support for families across BC and Yukon.',
            link: 'https://www.bcchf.ca/'
        },
        {
            name: 'BC Cancer Foundation',
            category: 'Cancer Research',
            image: '/bc-cancer/cloverdale.webp',
            description: 'Advancing breakthrough oncology research and expanding access to world-class treatment.',
            link: 'https://bccancerfoundation.com/'
        },
        {
            name: 'Stanton Territorial Hospital Foundation',
            category: 'Northern Health',
            image: '/stanton/stanton-territorial.jpg',
            description: 'Enhancing patient care and medical technology for communities across the Northwest Territories.',
            link: 'https://www.stantonfoundation.ca/'
        },
        {
            name: 'Fraser Health Foundations',
            category: 'Community Hospitals',
            image: '/surrey/surrey.jpg',
            description: 'Empowering regional healthcare teams and clinical equipment across the Fraser Valley.',
            link: 'https://www.fraserhealth.ca/'
        },
        {
            name: 'Regional Food & Relief Programs',
            category: 'Community Aid',
            image: '/dawson/dawson-creek.jpg',
            description: 'Backing local food drives, family relief funds, and emergency community wellness initiatives.',
            link: ''
        }
    ],
    gallery: [
        {
            image: '/bc-childrens/bc-childrens-3.jpg',
            title: 'Pediatric & Child Health',
            caption: 'Fostering nurturing, world-class clinical environments for children.'
        },
        {
            image: '/nsph/nsph-birdseye-toppedout-scaled.jpg',
            title: 'Major Healthcare Redevelopment',
            caption: 'Transforming health infrastructure for generations to come.'
        },
        {
            image: '/stanton/stanton-1.avif',
            title: 'Northern Community Care',
            caption: 'Strengthening regional healthcare access across the North.'
        },
        {
            image: '/bc-cancer/cloverdale-1.jpeg',
            title: 'Innovative Cancer Facilities',
            caption: 'Expanding specialized regional care and supportive therapies.'
        }
    ]
};

