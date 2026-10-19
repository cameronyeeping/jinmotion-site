// ============================================================
// J IN MOTION — SITE CONTENT
// Edit this file to update all text, images, and data across the site.
// ============================================================

export const siteMeta = {
    brandName: 'J in Motion',
    logoText: 'JiM',
    tagline: 'Infrastructure | Enterprise Technology | Leadership',
    copyright: '© 2026 J in Motion. All rights reserved.',
};

export const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/team', label: 'Team' },
    // { to: '/community', label: 'Community' },
];

export const connectLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeannie-gandham-52856142/', external: true }, // TODO: Create a company LinkedIn (Low prio)
    { label: 'Email', href: 'mailto:jim@jinmotion.com', external: false }, // TODO: Replace with shared mailbox when active
];

export const ctaBanner = {
    label: "Let's talk.",
    buttonText: 'Get in touch',
};

export const projectCategories = [
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'digital', label: 'Digital' },
    { id: 'advisory', label: 'Advisory' }
];

export const getProjectCategory = (id) => projectCategories.find((category) => category.id === id);

// Assign one or more category IDs from projectCategories to each project.
// Highlighted methodology stage IDs: vision, roadmap, implement, realize, celebrate.
// An empty list leaves all stages grey until participation is configured.
export const projects = [
    {
        id: 'st-pauls',
        methodologyStages: ['vision', 'roadmap', 'implement', 'realize'],
        title: 'New St. Paul\'s Hospital',
        categories: ['infrastructure', 'digital', 'advisory'],
        year: '2027',
        client: 'Providence Health Care',
        city: 'Vancouver',
        country: 'Canada',
        short_description: 'Western Canada\'s largest hospital redevelopment project.',
        long_description: [
            'The New St. Paul\'s Hospital is the largest healthcare infrastructure project under construction in Western Canada. This $2.2 billion investment will deliver a 1.7-million-square-foot facility with more than 600 beds, scheduled to open in early 2027.',
            'J in Motion serves as Program Director for the project\'s $450 million technology portfolio, overseeing more than 50 concurrent projects that include command centres, security networks, and enterprise IT systems. We lead cross-functional teams, coordinate closely with government and construction partners, and help integrate Indigenous design principles into the facility plan. Through ongoing executive reporting on scope, schedule, budget, and risk, we give leadership the visibility needed to keep the program on track for opening.'
        ],

        image: '/nsph/nsph.jpeg',
        galleryImages: [
            '/nsph/nsph-1.avif',
            '/nsph/nsph-2.jpg'
        ],
        features: [
            '1.7 million ft2',
            '$2.2B budget',
            '558 inpatient beds',
            'Single patient rooms',
            'Command centre',
            'Opening 2027'

        ],
        scopeElements: [
            'Command centre',
            'Security networks',
            'IT systems'
        ]
    },
    {
        id: 'dawson-creek',
        methodologyStages: [],
        title: 'Dawson Creek & District Hospital',
        categories: ['infrastructure'],
        year: '2027',
        client: 'Northern Health Authority + Infrastructure BC',
        city: 'Dawson Creek',
        country: 'Canada',
        short_description: 'Strategic advisory and roadmap development to guide opening-day readiness for Northern Health Authority and project leadership.',
        long_description: [
            "The new greenfield Dawson Creek District Hospital will accept patients in Spring 2027 and required " +
            "Operational Readiness + Transition Services. Advising both HH Angus and Northern Health Authority " +
            "project senior project leadership, responsible for roadmap to opening day including creation of detailed "+
            'project deliverables.'
        ],
        image: '/dawson/dawson-creek-render.jpg',
        galleryImages: [
            '/dawson/dawson-2.jpg',
            '/dawson/dawson-3.jpeg'
        ],
        features: [
            'Greenfield hospital',
            'Opening spring 2027'
        ],
        scopeElements: [
            'Operational readiness',
            'Transition services',
            'Opening-day roadmap',
            'Detailed project deliverables',
            'Advisory to HH Angus and Northern Health leadership'
        ]
    },
    {
        id: 'bc-childrens',
        methodologyStages: [],
        title: 'BC Children\'s + Women\'s Hospital Redevelopment',
        categories: ['infrastructure', 'advisory'],
        year: '2017',
        client: 'Provincial Health Services Authority',
        city: 'Vancouver',
        country: 'Canada',
        short_description: 'A 675-million-dollar, 640,000-square-foot pediatric critical care hospital built under a Public-Private Partnership model in Vancouver.',
        long_description: [
            'The Children\'s and Women\'s Redevelopment was a $675 million healthcare project delivered under a Public-Private Partnership (P3) model and completed in October 2017. The project delivered an eight-storey, 640,000-square-foot critical care hospital in Vancouver with 350 inpatient rooms.',

            'Reporting to the Executive Director and Chief Project Officer, J in Motion served as transition and delivery lead, managing the $33 million technology capital budget and leading the owner\'s scope for P3 technology execution. We developed and implemented a collaboration plan that aligned the health authority, building consortium, and subcontractors, and synchronized owner-side projects with the main construction schedule. As the key connector between clinical and operational leaders and the technical and construction teams, we translated clinical requirements into actionable technology deliverables, led workflow redesign for future-state operations, and managed review processes and stakeholder communication throughout.',

            'We led the IMIT transition, operational readiness, and facility activation for the opening of the new BC Children\'s & Women\'s Hospital. This mission-critical portfolio included staff training coordination, technology readiness, and go-live support, and it ensured clinical operations were supported from opening day through handover to operations.'
        ],
        image: '/bc-childrens/bc-childrens.jpg',
        galleryImages: [
            '/bc-childrens/bc-childrens-2.jpeg',
            '/bc-childrens/bc-childrens-3.jpg'
        ],
        features: [
            '640,000-square-foot facility',
            '$675M redevelopment',
            '350 inpatient rooms',
            'Eight-storey critical care hospital',
            'P3 delivery model',
            'Completed October 2017'
        ],
        scopeElements: [
            '$33M technology capital budget',
            'Owner-side P3 technology execution',
            'Clinical and technology alignment',
            'Workflow redesign',
            'IMIT transition and operational readiness',
            'Staff training, activation and go-live support'
        ]
    },
    {
        id: 'stanton',
        methodologyStages: [],
        title: 'Stanton Territorial Hospital Renewal',
        categories: ['infrastructure', 'advisory'],
        year: '2019',
        client: 'Government of Northwest Territories',
        city: 'Yellowknife',
        country: 'Canada',
        short_description: 'A $350 million greenfield regional acute hospital delivery project under a P3 model.',
        long_description: [
            'The Stanton Territorial Hospital Renewal was a 350-million-dollar greenfield hospital project completed in 2019 under a Public-Private Partnership model. The regional facility contains 100 inpatient beds to serve the Northwest Territories. As clinical program lead reporting to the Assistant Deputy Minister and hospital Chief Executive Officer, J in Motion managed a 41-million-dollar capital and operational budget. We led project teams to design and operationalize the facility with new healthcare models. We also conducted stakeholder consultations with Indigenous communities and clinical staff to integrate culturally sensitive care practices into the building design.'
        ],
        image: '/stanton/stanton-territorial.jpg',
        galleryImages: [
            '/stanton/stanton-1.avif',
            '/stanton/stanton-2.jpg'
        ],
        features: [
            'Greenfield regional hospital',
            '$350M redevelopment',
            '100 inpatient beds',
            'P3 delivery model',
            'Completed 2019'
        ],
        scopeElements: [
            '$41M capital and operational budget',
            'Clinical program leadership',
            'Facility design and operationalization',
            'New healthcare models',
            'Indigenous community and clinical consultation',
            'Culturally sensitive care planning'
        ]
    },
    {
        id: 'bc-cancer',
        methodologyStages: [],
        title: 'BC Cancer Redevelopments',
        categories: ['advisory'],
        year: '2024',
        client: 'Provincial Health Services Authority',
        city: 'British Columbia',
        country: 'Canada',
        short_description: '$440 million investment into cancer centres across British Columbia',
        long_description: [
            'BC Cancer plans, coordinates and evaluates cancer care with the health authorities across BC to provide equitable and cost-effective health care for people living with or affected by cancer. In support of the BC Cancer Strategic Plan, over $440million capital invested to expand cancer care teams, research, technology and build new facilities. Reporting to the Executive leadership, provided capital infrastructure advisory for $440M capital expansion and infrastructure planning. Leadership over complex deliverables including delivery of integrated project schedule with construction schedules, design, compliance and subject matter input. '
        ],
        image: '/bc-cancer/cloverdale-2.avif',
        galleryImages: [
            '/bc-cancer/cloverdale.webp',
            '/bc-cancer/cloverdale-1.jpeg'
        ],
        features: [
            '$440M capital investment',
            'Cancer centres across British Columbia',
            'Expanded care teams and research',
            'New technology and facilities'
        ],
        scopeElements: [
            'Capital infrastructure advisory',
            'Expansion and infrastructure planning',
            'Integrated project and construction schedules',
            'Design and compliance coordination',
            'Subject matter input'
        ]
    },
    {
        id: 'surrey',
        methodologyStages: [],
        title: 'Surrey Memorial Hospital',
        categories: ['advisory'],
        year: '2014',
        client: 'Fraser Health Authority',
        city: 'Surrey',
        country: 'Canada',
        short_description: 'A 512-million-dollar P3 hospital project providing 151 inpatient beds and a phased opening for acute emergency and critical care services',
        long_description: [
            'SMH Critical Care Tower is a new, state-of-the art acute facility, complete with a new emergency department, perinatal centre, 151 inpatient beds, intensive care unit and academic space. The P3 infrastructure project was $512M and opened successfully summer of 2014. Lead the clinical design of the two inpatient units and also lead the planning and execution of a comprehensive plan for a two phase opening. First to open the new Emergency Department (opened June 2013) and then to move admitted patients from the existing campus into the new Critical Care Tower (opened June 8 2014).'
        ],
        image: '/surrey/surrey.jpg',
        galleryImages: [
            '/surrey/surrey-1.webp',
            '/surrey/surrey-2.jpg'
        ],
        features: [
            '$512M infrastructure project',
            '151 inpatient beds',
            'New emergency department',
            'Perinatal centre and intensive care unit',
            'Academic space',
            'P3 delivery model'
        ],
        scopeElements: [
            'Clinical design of two inpatient units',
            'Two-phase opening plan',
            'Emergency department opening in June 2013',
            'Patient transfer to the new tower',
            'Critical Care Tower opening on June 8, 2014'
        ]
    },
    {
        id: 'bc-hydro-it-governance',
        methodologyStages: ['vision', 'roadmap', 'implement', 'realize'],
        title: 'BC Hydro: IT Governance Platform',
        categories: ['digital', 'advisory'],
        client: 'BC Hydro',
        country: 'Canada',
        short_description: 'An IT Governance platform aligning technology project demand, approvals, and delivery with business goals.',
        long_description: [
            'BC Hydro implemented an IT Governance (ITG) platform to manage demand and intake for its technology projects and align IT operations with business goals. The system governed each project from initial intake through planning, approval, and procurement to operational handover, automating policy tracking, reviews, and risk management along the way. Shared dashboards gave more than 100 users, including technology VPs, directors, managers, and project managers, clear visibility into the status of approvals and projects.',
            'As a key lead across the full development lifecycle, from requirements through deployment, we managed multiple concurrent technology projects aligned with BC Hydro\'s business objectives, requirements, and milestones. As primary liaison between operational leadership and technical teams, we built consensus on project vision, requirements, and delivery priorities, and led a team of four business analysts and developers throughout delivery.'
        ],
        image: '/bc-hydro/bc-hydro-logo.webp',
        galleryImages: [
            '/bc-hydro/ITG.jpeg',
            '/bc-hydro/it-governance-software.webp'
        ],
        features: [
            'IT Governance platform',
            'More than 100 users',
            'Demand and project intake management',
            'Automated policy tracking and risk management',
            'Shared approval and project dashboards'
        ],
        scopeElements: [
            'Requirements through deployment',
            'Concurrent technology project delivery',
            'Operational and technical team liaison',
            'Consensus on vision and delivery priorities',
            'Leadership of four business analysts and developers'
        ]
    }

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
        eyebrow: 'WORKING TOGETHER',
        heading: 'Our partners',
        items: [
            {
                name: 'Fraser Health Authority',
                logo: '/client-logos/Fraser-Health-Authority.png',
                logoScale: 1.15
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
            },
            {
                name: 'Vancouver Coastal Health',
                logo: '/client-logos/vancouver-coastal-health-logo.png'
            },
            {
                name: 'Northern Health',
                logo: '/client-logos/nh-logo.png'
            },
            {
                name: 'Interior Health',
                logo: '/client-logos/interior-health-logo.avif'
            },
            {
                name: 'Infrastructure BC',
                logo: '/client-logos/infrastructure-bc.png'
            },
            {
                name: 'British Columbia Ministry of Health',
                logo: '/client-logos/ministry-of-health.png',
                logoScale: 1.2
            },
            {
                name: 'Government of Northwest Territories',
                logo: '/client-logos/govt-northwest-territories.png'
            },
            {
                name: 'Government of Manitoba',
                logo: '/client-logos/manitoba.jpeg'
            },
            {
                name: 'Humber River Hospital',
                logo: '/client-logos/humber-river.png',
                logoScale: 1.35
            },
            {
                name: 'London Health Sciences Centre',
                logo: '/client-logos/lhsc-logo.png'
            },
            {
                name: 'HH Angus',
                logo: '/client-logos/hh-angus.png',
                logoScale: 1.9
            },
            {
                name: 'Arcadis',
                logo: '/client-logos/arcadis-logo.webp'
            },
        ]
    },
    approach: {
        eyebrow: 'ABOUT US',
        heading: 'Driving Momentum Across Complex Projects',
        paragraphs: [
            'We are an infrastructure and technology advising firm with a proven track record, contributing to major public-sector programs representing more than $40B in capital infrastructure and enterprise technology portfolios across Canada.',
            'For over 20 years, we\'ve worked closely with health authorities, municipal bodies, and provincial governments, delivering clarity and momentum to infrastructure, enterprise technology, and organizational transformation landscapes.',
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
                id: 'vision',
                title: 'Vision',
                description: 'Define the destination and the reason for change.',
                icon: 'target',
                items: [
                    'Research and site visits',
                    'Best-practice review',
                    'Industry Leadership Insights',
                    'Executive Brief'
                ]
            },
            {
                number: '02',
                id: 'roadmap',
                title: 'Roadmap',
                description: 'Translate the vision into an achievable path.',
                icon: 'trending-up',
                items: [
                    'Timeline',
                    'Milestones',
                    'Critical Path',
                    'Decision points'
                ]
            },
            {
                number: '03',
                id: 'implement',
                title: 'Implement',
                description: 'Build the structure required for successful delivery.',
                icon: 'grid',
                items: [
                    'Project plan',
                    'Governance and resources',
                    'Budget and risk approach',
                    'Reporting framework'
                ]
            },
            {
                number: '04',
                id: 'realize',
                title: 'Realize',
                description: 'Lead execution and turn plans into outcomes.',
                icon: 'arrow-right',
                items: [
                    'Project leadership',
                    'Issue resolution',
                    'Decision support',
                    'Execution'
                ]
            },
            {
                number: '05',
                id: 'celebrate',
                title: 'Celebrate',
                description: 'Close well and make the value visible.',
                icon: 'star',
                items: [
                    'Project closeout',
                    'Outcome measurement',
                    'Lessons learned',
                    'Recognition and thanks'
                ]
            }
        ],
    },
    portfolio: {
        eyebrow: 'OUR WORK',
        heading: 'Selected Projects',
        viewMoreText: 'View more projects',
        projects
    }
};

export const aboutPage = {
    hero: {
        title: 'About Us',
        subtitle: 'Our Mission and Experience',
        bgImage: '/vancouver.webp',
        bgAlt: 'About Background'
    },
    content: {
        heading: 'Driving Momentum Across Canada',
        paragraphs: [
        'We bring vision to life across infrastructure, enterprise technology and organizational transformation through achievable roadmaps, focused execution, measurable results and outcomes worth celebrating.',
        'Backed by more than 20 years of proven leadership experience, we have contributed to major public-sector programs representing more than $40 billion in capital investment across Canada. The firm works alongside health authorities, governments and leadership teams to advance complex initiatives from early vision and planning through implementation, activation and stabilization.',
        'Known for stepping into complex environments and moving the work forward, we establish clear direction, strengthen governance, align people and priorities, resolve issues and maintain momentum when the pressure is high.',
        ]
    },
    stats: [
        { value: '20+', label: 'Years of Leadership Experience' },
        { value: '50+', label: 'Concurrent Projects Led within One Integrated Portfolio' },
        { value: '$40B+', label: 'in Major Programs Contributed To' },
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
                alt: 'Jeannie Gandham',
                bio: [
                    'Jeannie Gandham is the Principal of J in Motion, bringing over 20 years of executive leadership in major healthcare, capital infrastructure, and technology transformation initiatives across Canada.',
                    'With a proven track record directing multi-billion-dollar public-sector portfolios, Jeannie specializes in strategic advisory, P3 capital delivery, operational readiness, and stakeholder alignment across government ministries, health authorities, and Indigenous communities.'
                ],
                profile: [
                    'Jeannie Gandham is an executive project and program leader with more than 20 years of experience guiding complex healthcare infrastructure, digital transformation and organizational change.',
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
                        projectId: 'st-pauls',
                        description: 'Created and led a $450M IM/IT portfolio with 50+ concurrent infrastructure and technology projects.'
                    },
                    {

                        projectId: 'dawson-creek',
                        description: 'Advised senior project leaders from HH Angus and Northern Health on the roadmap to opening'
                    },
                    {
                        projectId: 'bc-childrens',
                        description: 'Created and led approach for collaboration with the Public-Private Partnership (P3) construction partner and health authority.'
                    },
                    {
                        projectId: 'stanton',
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
            },
            {
                id: 'gina-pisoni',
                name: 'Gina Pisoni',
                title: 'Digital Solutions Lead',
                image: '/profiles/gina_headshot_bg_change.jpg',
                alt: 'Gina Pisoni',
                bio: [
                    'Gina Pisoni is an executive technology and capital projects leader with more than 15 years of experience delivering major healthcare infrastructure redevelopment and digital transformation initiatives.',
                    'She partners with health authority executives, clinicians, and delivery teams from early business-case development through design, construction, activation, and handover to operations by translating ambitious capital investments into technology and facilities that are ready to deliver care.',
                    'Gina is known for building high-performing teams, aligning diverse stakeholders around a common delivery plan, and building governance and team structure to bring large, complex programs through to their full intended vision.',

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
                        projectId: 'bc-cancer',
                        description: 'Digital leadership and governance for four concurrent cancer centre redevelopments across the province, owning a $140M IM/IT capital budget and directing a multidisciplinary Technology Solutions and PMO team. Set digital strategy and capital planning direction while ensuring program-wide risk management and stakeholder alignment across health authority and construction partners. '
                    },
                    {

                        projectId: 'st-pauls',
                        description: 'Led Design-Build contract management and cross-functional Integrated Project Delivery (PMO) teams to keep scope, schedule, and budget aligned — driving multidisciplinary program delivery at scale.'
                    },
                    {
                        projectId: 'bc-childrens',
                        description: 'Owned IMIT strategy and a $33M capital budget for the redevelopment\'s technology scope and led operational readiness and transition planning through facility activation — guiding the program through opening and handover to clinical operations.'
                    },
                    {
                        projectId: 'bc-childrens',
                        description: 'Led P3 (Public-Private Partnership) IM/IT contract execution, serving as the bridge between clinical leadership and construction/technology teams to align clinical requirements with facility design — supporting clinical technology planning and workflow readiness for the new care environment.'
                    }
                ],
                credentials: [
                    'Computer Information Systems Diploma, Langara College',
                    'Healthcare Facilities Planning and Design: Focus on Leadership Certificate, Cornell University',
                ],
                profilePdf: '/resumes/gina-resume.pdf'
            },
            {
                id: 'cameron-yee-ping',
                name: 'Cameron Yee-Ping',
                title: 'Project Leader',
                image: '/profiles/cam_profile_edited.png',
                alt: 'Cameron Yee-Ping',
                bio: [
                    'Cameron Yee-Ping provides project delivery, strategic analysis, and systems integration support for complex infrastructure and transformation initiatives.',
                    'Working alongside project leadership, Cameron focuses on digital roadmaps, operational planning, and seamless project execution.'
                ],
                credentials: [
                    'B.Sc., SFU'
                ]
            }

        ]
    }
};

const teamDatabase = new Map(aboutPage.team.members.map((member) => [member.id, member]));

export const getTeamMember = (id) => teamDatabase.get(id);

const projectDatabase = new Map(projects.map((project) => [project.id, project]));

export const getProjectsByCategory = (categoryId) => getProjectCategory(categoryId)
    ? projects.filter((project) => project.categories.includes(categoryId))
    : projects;

export const projectsPage = {
    hero: {
        title: 'Projects',
        subtitle: 'Two Decades of Proven Delivery',
        bgImage: '/vancouver.webp',
        bgAlt: 'Projects Hero'
    },
    projects
};

export const getProjectData = (id) => projectDatabase.get(id);

export const servicesPage = {
    hero: {
        title: 'Our Services',
        subtitle: 'Embedded leadership that moves complex infrastructure, enterprise technology and organizational transformation initiatives from vision through delivery.',
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
            description: 'We lead complex capital and infrastructure initiatives from early vision and planning through design, implementation, operational readiness, activation and stabilization. Our work connects people, decisions and delivery requirements to maintain momentum across the complete project lifecycle.',
            servicesIncludeLabel: 'Our infrastructure services include:',
            items: [
                'Visioning and master planning',
                'Project definition and business cases',
                'Governance and integrated project planning',
                'Design, construction and operational integration',
                'Clinical and operational planning',
                'Operational readiness, activation and transition',
                'Opening, stabilization and project closeout'
            ]
        },
        {
            id: 'digital',
            title: 'Digital',
            icon: 'cpu',
            description: 'We lead enterprise technology and digital modernization programs that connect infrastructure, operations and the people who rely on them. Systems, workflows, equipment and readiness activities are integrated into one executable path toward implementation and go-live.',
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
            description: 'We provide experience at critical moments, defining the vision, mobilizing delivery, resolving complexity and recovering initiatives that have lost momentum. We help leaders define the vision, understand the challenges and establish a practical path from strategy to implementation.',
            servicesIncludeLabel: 'Our advisory services include:',
            items: [
                'Executive, program and project planning',
                'Visioning and organizational planning',
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

// Retained community draft content; the current community page uses its own copy.
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
