// ============================================================
// J IN MOTION — SITE CONTENT
// Edit this file to update all text, images, and data across the site.
// ============================================================

export const siteMeta = {
    brandName: 'J in Motion',
    logoText: 'JiM',
    tagline: 'Infrastructure | Advisory | Digital',
    copyright: '© 2026 J in Motion. All rights reserved.',
};

export const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/team', label: 'Team' },
    { to: '/engagements', label: 'Engagements' },
    // { to: '/community', label: 'Community' },
];

export const connectLinks = [
    { label: 'jim@jinmotion.co', href: 'mailto:jim@jinmotion.co', external: false }, // TODO: Replace with shared mailbox when active
    { label: '604-506-8638', href: 'tel:+16045068638', external: false },
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
        methodologyStages: ['vision', 'roadmap', 'implement', 'realize', 'celebrate'],
        title: 'New St. Paul\'s Hospital',
        categories: ['infrastructure', 'digital', 'advisory'],
        year: '2027',
        client: 'Providence Health Care',
        city: 'Vancouver',
        country: 'Canada',
        short_description: 'Owner-side leadership from business case and DBF procurement through project delivery, technology integration and opening-day readiness.',
        long_description: [
            "The New St. Paul's Hospital and Health Campus replaces Providence Health Care's St. Paul's Hospital with a 548-bed, $2.17 billion facility in Vancouver's False Creek Flats, on the traditional, ancestral and unceded territories of the Musqueam, Squamish and Tsleil-Waututh Nations. Procured as a Design-Build-Finance (DBF) project and built around an ambitious digital vision, it is scheduled to welcome its first patients in 2027.",
            "J in Motion consultants held senior leadership roles on the owner's team, representing the project's interests from the earliest stages through delivery.",
            "**Business case:** developed the owner's business case through to government approval.",
            "**DBF procurement:**\n- **Procurement readiness:** defined the owner's requirements, risk allocation and evaluation framework before going to market\n- **Request for Qualifications:** ran market engagement, evaluated submissions and shortlisted qualified teams\n- **Request for Proposals:** issued the RFP and draft Project Agreement, led collaborative meetings with proponents, and reviewed their designs against the owner's requirements\n- **Evaluation and selection:** led technical and financial evaluations, under the oversight of an independent fairness advisor, to select the preferred proponent\n- **Negotiations, legal and finance:** negotiated the Project Agreement, coordinated legal review, security and insurance, and supported financing and lenders' due diligence\n- **Financial close:** secured final approvals, executed the agreements and handed over to the delivery team",
            "**Project management:** led Integrated Project Delivery (the PMO) portfolio, and reported to executives on governance, scope, schedule, budget and risk.",
            "**IMIT leadership:** $450 million technology portfolio, overseeing more than 50 concurrent projects, including command centres, security networks, enterprise IT and the Cerner EHR, and leading activation and go-live readiness for opening day.",
            "*Our team's experience on New St. Paul's reflects what we do best: helping owners see large, complex capital programs through to their full intended vision.*"
        ],

        image: '/nsph/nsph.jpeg',
        galleryImages: [
            '/nsph/nsph-1.avif',
            '/nsph/nsph-2.jpg'
        ],
        features: [
            '1.7 million ft2',
            '$2.17B budget',
            '548 inpatient beds',
            'Design-Build-Finance delivery',
            'Single patient rooms',
            'Command centre',
            'Opening 2027'

        ],
        scopeElements: [
            'Business case and government approval',
            'DBF procurement through financial close',
            'Owner-side project and PMO leadership',
            '$450M IMIT portfolio with 50+ projects',
            'Activation and go-live readiness'
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
            'The new Dawson Creek & District Hospital will replace the existing hospital with a 263,000-square-foot, three-storey facility on a greenfield site. Scheduled to welcome patients in spring 2027, the hospital will be built to meet LEED Gold certification.',
            'The facility will include an emergency department with 15 treatment spaces and 70 inpatient beds supporting medical, surgical, maternity, high-acuity and mental health services. It will also provide two operating rooms, a procedure room, diagnostic imaging, a chemotherapy area, a perinatal unit with labour, delivery, recovery and post-partum rooms, a nursery, a mental health department, academic and teaching space, and pharmacy services.',
            'J in Motion advises senior project leaders at HH Angus and Northern Health Authority on operational readiness and transition services. Our work includes developing the roadmap to opening day and defining detailed project deliverables to support a coordinated transition into the new hospital.'
        ],
        image: '/dawson/dawson-creek-render.jpg',
        galleryImages: [
            '/dawson/dawson-2.jpg',
            '/dawson/dawson-3.jpeg'
        ],
        features: [
            'Greenfield hospital',
            '263,000 sq. ft. across three storeys',
            '70 inpatient beds',
            '15 emergency treatment spaces',
            'Two operating rooms and a procedure room',
            'Designed to meet LEED Gold certification',
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
        methodologyStages: ['vision', 'roadmap', 'implement', 'realize', 'celebrate'],
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
        short_description: 'A $350 million fast-track P3 hospital project serving the Northwest Territories and the Kitikmeot Region of Nunavut.',
        long_description: [
            'Completed in 2019, the Stanton Territorial Hospital Renewal was a $350 million greenfield hospital project delivered through a fast-track Public-Private Partnership (P3) model. The project addressed the increasing healthcare needs of residents of the Northwest Territories and the Kitikmeot Region of Nunavut.',
            'The new 27,270-square-metre structural steel facility consists of a two-storey podium and a three-storey inpatient tower. A freestanding mass timber entrance, wooden cladding and other wood elements create a welcoming atmosphere.',
            'The hospital provides outpatient services and 105 inpatient beds, with departments including medical imaging, dialysis, obstetrics, pediatrics, cardiology and mental health. The design also includes an expanded emergency department with two trauma bays, along with day procedure and surgery suites.',
            'As clinical program lead reporting to the Assistant Deputy Minister and hospital Chief Executive Officer, J in Motion managed a $41 million capital and operational budget. We led project teams to design and operationalize the facility with new healthcare models, and consulted Indigenous communities and clinical staff to integrate culturally sensitive care practices into the building design.'
        ],
        image: '/stanton/stanton-territorial.jpg',
        galleryImages: [
            '/stanton/stanton-1.avif',
            '/stanton/stanton-2.jpg'
        ],
        features: [
            'Greenfield regional hospital',
            '$350M redevelopment',
            '27,270 m² facility',
            '105 inpatient beds',
            'Two-storey podium and three-storey inpatient tower',
            'Mass timber entrance and wooden cladding',
            'Expanded emergency department with two trauma bays',
            'Fast-track P3 delivery model',
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
        "id": "kamloops-cancer-centre",
        "methodologyStages": [
            "vision",
            "roadmap"
        ],
        "title": "Kamloops Cancer Centre",
        "categories": [
            "infrastructure"
        ],
        "year": "2028",
        "client": "Provincial Health Services Authority",
        "city": "Kamloops",
        "country": "Canada",
        "short_description": "A new BC Cancer centre at Royal Inland Hospital, bringing radiation treatment closer to home for Kamloops and surrounding communities.",
        "long_description": [
            "Targeted to open in 2028, the new BC Cancer centre at the Royal Inland Hospital campus will bring radiation treatment closer to home for people in Kamloops and surrounding areas.",
            "Alongside the new cancer centre, upgrades to the community oncology clinic will modernize and increase the number of cancer treatment spaces and exam rooms at Royal Inland Hospital. Renovation and expansion of the existing pharmacy will improve functionality, with improved dispensing facilities, an automated dispensing replenishment area and storage.",
            "The centre is part of BC’s 10-Year Cancer Action Plan, which outlines immediate steps to prevent, detect and treat cancer. The plan aims to improve care for people facing cancer today while preparing for growing future needs.",
            "J in Motion provided strategic leadership for the Kamloops Cancer Centre, translating regional cancer care needs into a clear project vision and infrastructure plan. We guided concept development, business planning and design management, defined the scope, budget and schedule, and secured the executive and government approvals needed to advance the project."
        ],
        "image": "/bc-cancer/kamloops.png",
        "galleryImages": [
            "/bc-cancer/kamloops2.png",
            "/bc-cancer/kamloops3.png"
        ],
        "features": [
            "Royal Inland Hospital campus",
            "Radiation treatment closer to home",
            "Modernized oncology treatment spaces and exam rooms",
            "Expanded pharmacy and improved dispensing facilities",
            "Part of BC’s 10-Year Cancer Action Plan",
            "Targeted opening 2028"
        ],
        "scopeElements": [
            "Project vision and regional care needs",
            "Concept development and business planning",
            "Scope, budget and schedule development",
            "Design management",
            "Executive and government approvals"
        ]
    },
    {
        "id": "nanaimo-cancer-centre",
        "methodologyStages": [
            "vision",
            "roadmap"
        ],
        "title": "Nanaimo Cancer Centre",
        "categories": [
            "infrastructure"
        ],
        "year": "2028",
        "client": "Provincial Health Services Authority",
        "city": "Nanaimo",
        "country": "Canada",
        "short_description": "Planning and development of a new cancer centre in Nanaimo, aligning regional care needs with safe, purpose-built infrastructure.",
        "long_description": [
            "The new Nanaimo Cancer Centre will be designed to meet the needs of the public while adhering to radiation safety requirements that protect patients, staff and the surrounding community.",
            "The centre is part of B.C.’s 10-Year Cancer Action Plan, which sets out immediate steps to prevent, detect and treat cancer. It will help improve care for people facing cancer today while preparing for growing future needs.",
            "J in Motion directed project planning and development, aligning regional service delivery objectives with the facility’s infrastructure requirements. We led business case and facility concept development, defined the project scope, capital budget and schedule, and guided design management and the executive and government approval processes."
        ],
        "image": "/bc-cancer/nanaimo.jpg",
        "galleryImages": [
            "/bc-cancer/nanaimo2.jpg",
            "/bc-cancer/nanaimo3.jpg"
        ],
        "features": [
            "Purpose-built cancer care facility",
            "Radiation safety for patients, staff and the community",
            "Part of B.C.’s 10-Year Cancer Action Plan"
        ],
        "scopeElements": [
            "Regional service and infrastructure planning",
            "Business case and facility concept development",
            "Project scope, capital budget and schedule",
            "Design management",
            "Executive and government approvals"
        ]
    },
    {
        "id": "surrey-cancer-centre",
        "methodologyStages": [
            "vision",
            "roadmap"
        ],
        "title": "Surrey Cancer Centre",
        "categories": [
            "infrastructure"
        ],
        "year": "2028",
        "client": "Provincial Health Services Authority",
        "city": "Surrey",
        "country": "Canada",
        "short_description": "A comprehensive, integrated cancer centre at the new Surrey hospital, expanding access to treatment and support for a growing community.",
        "long_description": [
            "BC Cancer and the Provincial Health Services Authority, in partnership with Fraser Health Authority, are building a comprehensive, integrated cancer centre as part of the new Surrey hospital.",
            "Complementing the hospital’s services, the centre will provide radiation and systemic treatment, molecular imaging and therapy, supportive care, research and education. Innovative technologies, including virtual health, will support the delivery of care.",
            "The new site is expected to accommodate 105,000 ambulatory oncology care visits, 50,000 radiation therapy visits and 22,000 chemotherapy visits each year, helping meet the needs of Surrey’s growing community.",
            "J in Motion led planning and business development, shaping the strategic vision and infrastructure approach to support growing regional cancer care demands. We defined the project scope, developed the concept and business plans, established the capital budget and schedule, managed design development, and secured executive and government approvals."
        ],
        "image": "/bc-cancer/cloverdale-2.avif",
        "galleryImages": [
            "/bc-cancer/cloverdale.webp",
            "/bc-cancer/cloverdale-1.jpeg"
        ],
        "features": [
            "Integrated with the new Surrey hospital",
            "Radiation and systemic treatment",
            "Molecular imaging and therapy",
            "Supportive care, research and education",
            "Virtual health technologies",
            "105,000 ambulatory oncology visits annually (projected)",
            "50,000 radiation therapy visits annually (projected)",
            "22,000 chemotherapy visits annually (projected)"
        ],
        "scopeElements": [
            "Strategic vision and infrastructure planning",
            "Project scope, concept and business plans",
            "Capital budget and schedule development",
            "Design management",
            "Executive and government approvals"
        ]
    },
    {
        "id": "burnaby-cancer-centre",
        "methodologyStages": [
            "vision",
            "roadmap"
        ],
        "title": "Burnaby Cancer Centre",
        "categories": [
            "infrastructure"
        ],
        "year": "Re-paced",
        "client": "Provincial Health Services Authority",
        "city": "Burnaby",
        "country": "Canada",
        "short_description": "Strategic and project leadership for an integrated BC Cancer centre within phase two of the Burnaby Hospital redevelopment.",
        "long_description": [
            "Burnaby Hospital is a community hospital providing acute, emergency and critical care, general and internal medicine, surgery, neonatal intensive care, palliative care, adult mental health and substance use services, ambulatory care and other outpatient services.",
            "A multi-phase redevelopment will transform the hospital into a modernized medical and surgical healthcare campus. Phase two includes a new 160-bed inpatient tower, an integrated BC Cancer centre and a new medical imaging department.",
            "The phase-two scope also includes a spiritual care suite, education spaces, staff facilities, an equipment depot, a morgue and autopsy suite, and parking. Renovations to the emergency and endoscopy departments and demolition of the West Wing building form part of the wider redevelopment work.",
            "J in Motion provided strategic and project leadership for the BC Cancer Burnaby initiative, guiding development from the initial vision through formal project approvals and design. We led business and concept planning, investment and budget development, scope definition, scheduling and design management, keeping the initiative aligned with organizational priorities and provincial healthcare objectives."
        ],
        "image": "/bc-cancer/burnaby.avif",
        "galleryImages": [],
        "features": [
            "Integrated BC Cancer centre",
            "Part of Burnaby Hospital redevelopment phase two",
            "New 160-bed inpatient tower within phase two",
            "New medical imaging department",
            "Spiritual care, education and staff spaces",
            "Emergency and endoscopy department renovations",
            "Parking and support facilities",
            "West Wing demolition"
        ],
        "scopeElements": [
            "Strategic vision and project leadership",
            "Business and concept planning",
            "Investment and budget development",
            "Scope definition and scheduling",
            "Design management and project approvals",
            "Alignment with provincial healthcare objectives"
        ]
    },
    {
        id: 'provincial-radiology-pacs',
        methodologyStages: ['vision', 'roadmap', 'implement', 'realize', 'celebrate'],
        title: 'Provincial Radiology Imaging',
        categories: ['digital'],
        year: '2019',
        client: 'Provincial Health Services Authority\nVancouver Coastal Health Authority\nProvidence Healthcare',
        city: 'Vancouver',
        country: 'Canada',
        short_description: 'Restoring control, transparency and momentum across two at-risk radiology technology programs.',
        long_description: [
            'The Provincial Radiology Imaging PACS Connecting DI initiative was a province-wide program delivered in partnership with the Ministry of Health and Canada Health Infoway. Its mandate was to replace critical radiology software across Vancouver-area health regions and implement a Provincial Diagnostic Imaging Repository.',
            'Running concurrently, the PACS Stabilization Program upgraded legacy Intelerad, Agfa and Philips software and supporting hardware across seven acute-care hospitals representing more than 2,100 beds.',
            'The programs involved complex technology integration across clinical and enterprise systems, medical imaging equipment, hospital infrastructure and multiple vendor platforms. Delivery also required careful coordination with radiologists and clinical teams to protect physician workflows and maintain the availability of systems essential to patient diagnosis and care.',
            'With both programs escalated and at risk of failure, J in Motion provided the leadership and delivery structure required to restore control, transparency and momentum.'
        ],
        image: '/radiology/radiology-service.jpg',
        features: [
            'Province-wide diagnostic imaging initiative',
            'Provincial Diagnostic Imaging Repository',
            'Seven acute-care hospitals',
            'More than 2,100 beds',
            'Intelerad, Agfa and Philips platforms',
            'Clinical and enterprise technology integration'
        ],
        scopeElements: [
            'Reporting on risks and decisions',
            'Funding approvals',
            'Specialist recruitment',
            'Radiology roadmap and health-region Board approval',
            'Oversight of mission-critical system stability and readiness'
        ],
        galleryLayout: 'logos',
        galleryImages: [
            '/radiology/intelerad-logo.png',
            '/radiology/960px-Agfa_logo.svg.webp',
            '/radiology/philips-logo.png'
        ],
        galleryImageAlts: ['Intelerad', 'Agfa', 'Philips']
    },
    {
        id: 'csrc',
        methodologyStages: ['vision', 'roadmap'],
        title: 'Clinical Support and Research Centre',
        categories: ['infrastructure', 'advisory'],
        client: 'Providence Health Care',
        city: 'Vancouver',
        country: 'Canada',
        short_description: 'Strategic planning and project leadership for a new hub connecting research, clinical services and innovation on the Jim Pattison Medical Campus.',
        long_description: [
            'Providence Health Care is developing the Clinical Support and Research Centre (CSRC), a state-of-the-art research, technology and medical complex beside the new St. Paul’s Hospital on the Jim Pattison Medical Campus in Vancouver. The 12-storey facility will span 34,400 square metres (370,000 square feet) and connect directly to the hospital by skybridge.',
            'At its heart will be an Innovation Centre, with a floor dedicated to collaboration, invention and dynamic events. The CSRC will bring together specialty medical services, physician workspace and exam rooms; extensive research facilities, including wet labs, dry labs and biobanks; corporate services; and a 49-space childcare centre.',
            'The centre will connect patients, physicians, researchers and academic partners to develop sustainable solutions to global health and well-being challenges. Infrastructure for emerging technologies, including 3D bioprinting, research data and analytics, will support medical discovery and attract leading care providers, scientists and industry partners to B.C.’s life sciences community.',
            'J in Motion provided strategic planning and project leadership, leading the development of the Development Plan, Concept Plan and Business Plan. This work established the strategic vision, project scope, functional requirements and business rationale to advance the initiative.',
            'We translated Providence’s clinical, research and innovation objectives into an integrated facility concept, aligned stakeholder needs with organizational priorities, and developed the planning and business framework to support project approval and implementation. This foundation supports closer integration of research, innovation and patient care.'
        ],
        // Replace with a CSRC project image when available.
        image: '/CSRC/CSRC-wide.jpeg',
        galleryImages: ['/CSRC/CSRC-day.jpg', '/CSRC/CSRC.jpg'],
        features: [
            '12-storey research, technology and medical complex',
            '34,400 m² / 370,000 sq. ft.',
            'Direct skybridge to St. Paul’s Hospital',
            'Innovation Centre and collaboration space',
            'Specialty medical services and physician workspace',
            'Wet labs, dry labs and biobanks',
            'Corporate services space',
            '49-space childcare centre'
        ],
        scopeElements: [
            'Vision',
            'Scope',
            'Funding strategies',
            'City engagement'
        ]
    },
    {
        id: 'electronic-medical-record',
        methodologyStages: ['vision', 'roadmap', 'implement', 'realize', 'celebrate'],
        title: 'Electronic Medical Record',
        categories: ['digital'],
        year: '2011',
        client: 'Fraser Health Authority',
        country: 'Canada',
        short_description: 'Digital project and change leadership for the transition from paper charts to an integrated electronic medical record at the Jim Pattison Outpatient Care and Surgery Centre.',
        long_description: [
            "The Jim Pattison Outpatient Care and Surgery Centre was the first facility of its kind in Fraser Health and opened in summer 2011. The centre brought together a comprehensive range of scheduled outpatient services, including day surgery, diagnostic services and specialized health clinics.",
            "As part of the facility opening, clinical programs transitioned from paper medical charts to a fully electronic medical record integrated with the hospital Admission, Discharge and Transfer system. This significant clinical and operational change required thoughtful leadership and collaboration across technology, physician workflows, patient care processes, new facility design and organizational readiness.",
            "J in Motion provided digital project and change leadership from early planning through implementation, supporting clinical teams as they prepared for a fully electronic medical record at their new clinic and a new way of delivering care.",
            "**Project and change leadership included:**\n- In collaboration with physician, facility and technology leadership, developed the end-to-end approach for technology implementation, including stakeholder engagement, requirements gathering, business case development, planning, testing, training, piloting and go-live.\n- Led complex project delivery and managed an integrated schedule connecting technology, clinical operations, facility readiness, training and implementation activities.\n- Designed and led patient and provider journey mapping to identify workflow challenges, dependencies and opportunities in collaboration with clinical leaders and key stakeholders.\n- Directed the transition from paper medical charts to a fully electronic medical record integrated with the hospital Admission, Discharge and Transfer system.\n- Applied structured project and change management methods to assess operational impacts, evaluate readiness, identify key stakeholders and support adoption across clinical programs.\n- Partnered with leadership to build visible sponsorship, strengthen staff engagement and prepare teams for new technology, workflows and models of care."
        ],
        image: '/emr/emr.jpg',
        // galleryImages: [
        //     '/emr/emr-2.jpg',
        //     '/emr/emr-3.svg'
        // ],
        features: [],
        scopeElements: [
            'Electronic Medical Record',
            'Complex Integrations',
            'Patient Journey Mapping'
        ]
    },
    {
        id: 'provincial-emr-identity-management',
        methodologyStages: ['vision', 'roadmap', 'implement', 'realize', 'celebrate'],
        title: 'Provincial Electronic Medical Record and Identity Management',
        categories: ['digital'],
        year: '2012',
        client: 'Provincial Health Services Authority',
        country: 'Canada',
        short_description: 'Provincial project leadership for electronic medical record implementation and a single, reliable source of user identity across hospital and ambulatory clinical records.',
        long_description: [
            "Provincial Health Services Authority prioritized the digitization of clinical records to improve the quality, consistency and safety of care across its hospitals, clinics and specialized programs.",
            "The organization selected Oracle Cerner as its electronic medical record platform. Successful implementation required a single, reliable source of user identity to provide secure and consistent access across hospital health records and ambulatory clinic medical records.",
            "J in Motion provided project leadership to establish the provincial approach and implementation structure for this complex technology initiative.",
            "**Project leadership included:**\n- Reported to the Chief Information Officer and Technology Directors, providing leadership and direction throughout planning and delivery.\n- Developed the end-to-end implementation approach, including stakeholder engagement, requirements gathering, business case development, planning, testing, training, piloting and implementation.\n- Led complex project delivery and managed an integrated schedule connecting technology, clinical operations, security, identity management, training and organizational readiness.\n- Established a provincial approach for EMR implementation, creating consistency across sites while addressing the operational requirements of diverse clinical programs.\n- Coordinated the development of a single source of technical user identity to support secure access across hospital and ambulatory clinical records.\n- Aligned clinical, operational and technology stakeholders around shared requirements, key decisions and implementation priorities."
        ],
        image: '/emr/emr-2.jpg',
        galleryImages: [],
        features: [],
        scopeElements: [
            'Electronic Medical Record',
            'Hospital Medical Record',
            'Complex Integrations',
            'Patient Journey Mapping'
        ]
    },
    /* Temporarily hidden from the site. Uncomment to restore BC Hydro.
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
    */

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
        heading: 'Our Partners',
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
        heading: 'Driving Momentum Across Complex Projects',
        paragraphs: [
            'J in Motion is an infrastructure and technology advising firm with a proven track record, contributing to major public-sector programs representing more than $40B in capital infrastructure and enterprise technology portfolios across Canada.',
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
        heading: 'From vision to realization.',
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
        "heading": "Driving Momentum Across Canada",
        "paragraphs": [
            "J in Motion is a collective of senior consultants who work on the owner’s side of complex capital projects. We help health authorities, governments and public-sector organizations move from first idea to opening day: shaping the vision and early plans, building the business case, leading procurement, managing delivery, and preparing people, technology and facilities to open.",
            "Our consultants have held senior roles on owner teams for some of Western Canada’s largest healthcare redevelopments, including the New St. Paul’s Hospital, Women’s and Children’s Hospital, and four BC Cancer facilities. Together, we bring expertise across the full project lifecycle:"
        ],
        "lifecycle": [
            {
                "title": "Early planning",
                "description": "Service and capacity planning, facility needs assessments, master planning and concept plans"
            },
            {
                "title": "Business case",
                "description": "Options analysis, cost and risk, and government approval"
            },
            {
                "title": "Procurement",
                "description": "Design-build, alliance, contract management, P3 — from readiness to financial close"
            },
            {
                "title": "Delivery",
                "description": "Contract management, project management and PMO leadership"
            },
            {
                "title": "Technology",
                "description": "IMIT strategy and leadership, from early digital planning through implementation"
            },
            {
                "title": "Opening",
                "description": "Activation, go-live readiness and handover to operations"
            }
        ],
        "closing": "Because we have been the owner, we understand what’s at stake. We establish clear direction, strengthen governance, align people and priorities, resolve issues and maintain momentum when the pressure is high, and we give owners the full picture along the way."
    },
    stats: [
        { value: '20+', label: 'Years of Leadership Experience' },
        { value: '50+', label: 'Concurrent Projects Led within One Integrated Portfolio' },
        { value: '$40B+', label: 'in Major Programs Contributed To' },
        { value: '$450M', label: 'Technology Portfolio Led' }
    ],
    guidingPrinciples: {
        "heading": "Guiding Principles",
        "principles": [
            {
                "title": "Lead with Honesty.",
                "description": "We give owners the full picture, good news and bad, as soon as we know it. Honest advice and open reporting are how we earn trust and keep projects on course."
            },
            {
                "title": "Drive It Together.",
                "description": "We bring energy and persistence to complex work, side by side with our clients, partners and project teams. Progress comes from shared ownership, not working in silos."
            },
            {
                "title": "Be Kind. Celebrate Often.",
                "description": "We treat people with care, especially when the pressure is on. Major projects take years, we recognize the people and milestones along the way, right through to opening day."
            }
        ],
        "closing": "The result is owners who trust what they’re told, teams that pull together, and projects that reach their full intended vision, with people proud of what they built together."
    },
    team: {
        heading: 'Meet the Team',
        subtitle: 'The people behind J in Motion',
        members: [
            {
                id: 'jeannie-gandham',
                name: 'Jeannie Gandham',
                email: 'jeannie.gandham@jinmotion.co',
                title: 'Consultant',
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
                    },
                    {

                        projectId: 'dawson-creek',
                    },
                    {
                        projectId: 'bc-childrens',
                    },
                    {
                        projectId: 'stanton',
                    }
                ],
                credentials: [
                    'B.Sc., UBC',
                    'Project Management Certificate, UBC Sauder',
                    'Prosci Change Management',
                    'Value-Based Health Care Training, UT Austin'
                ],
                profilePdf: '/resumes/jeannie-resume.pdf'
            },
            {
                id: 'gina-pisoni',
                name: 'Gina Pisoni',
                email: 'gina.pisoni@jinmotion.co',
                title: 'Consultant',
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
                        projectId: 'kamloops-cancer-centre'
                    },
                    {
                        projectId: 'nanaimo-cancer-centre'
                    },
                    {

                        projectId: 'st-pauls',
                    },
                    {
                        projectId: 'bc-childrens',
                    },
                ],
                credentials: [
                    'Computer Information Systems Diploma, Langara College',
                    'Healthcare Facilities Planning and Design: Focus on Leadership Certificate, Cornell University',
                ],
                profilePdf: '/resumes/gina-resume.pdf'
            },
            {
                id: 'eleanor-lee',
                name: 'Eleanor Lee',
                email: 'eleanor.lee@jinmotion.co',
                title: 'Consultant',
                image: '/elee.jpg',
                alt: 'Eleanor Lee',
                bio: [
                    'Eleanor Lee is an infrastructure development and healthcare leader with more than 20 years of experience developing concept plans and business cases, creating and leading governance structures, and guiding the financing, procurement, and delivery of large, complex public capital programs, including several of BC’s most significant infrastructure investments.',
                    'Her work spans major delivery and procurement models used in Canada, including Design/Build, Design/Build/Finance, Alliance, Construction Management, and Public-Private Partnership.',
                    'A former health sector executive, Eleanor now provides strategic and executive-level advisory services in infrastructure development from concept through to completion.'
                ],
                expertise: [
                    'Executive advisory & governance',
                    'Concept and business plans',
                    'Master planning and zoning analysis',
                    'Design management',
                    'Contract negotiations and contract management',
                    'Procurement procedures and analysis',
                    'Project implementation',
                    'Operational readiness'
                ],
                experience: [
                    {
                        projectId: 'nanaimo-cancer-centre'
                    },
                    {
                        projectId: 'burnaby-cancer-centre'
                    },
                    {
                        projectId: 'st-pauls',
                    },
                    {
                        projectId: 'csrc',
                    },
                    {
                        projectId: 'bc-childrens',
                    }
                ],
                profilePdf: 'resumes/eleanor-resume.pdf',
                credentials: [
                    'Registered Architect (Retired), Architectural Institute of BC',
                    'Leadership in Energy and Environmental Design (LEED), Canada Green Building Council',
                    'Evidence Based Design Accreditation and Certification (EDAC), The Center for Health Design',
                    'Project Management Professional (PMP), education complete; eligible for PMP designation',
                    'San’yas Indigenous Cultural Safety Training, Core and Advanced, Provincial Health Services Authority',
                    'Bachelor of Architecture (post-graduate professional program), University of British Columbia',
                    'Bachelor of Commerce, International Business and Marketing, McGill University, Montreal',
                    'Prosci Change Management'
                ]
            },
            /* Temporarily hidden from the site. Uncomment to restore Cameron's profile.
            {
                id: 'cameron-yee-ping',
                name: 'Cameron Yee-Ping',
                email: 'cameron.yee-ping@jinmotion.co',
                title: 'Consultant',
                image: '/profiles/cam_profile_edited.png',
                alt: 'Cameron Yee-Ping',
                bio: [
                    'Cameron Yee-Ping is a systems and technology associate with a background in computing science, data optimization, and complex technical workflows.',
                    'He supports project delivery teams by translating technical and operational requirements into streamlined, data-driven solutions by analyzing workflows, resolving system bottlenecks, and ensuring tools and processes are built for peak operational performance.',
                    'Cameron is known for a rigorous analytical approach, clear technical communication, and a proactive mindset for turning complex data and system challenges into reliable, well-structured outcomes.'
                ],
                expertise: [
                    'Requirements Gathering',
                    'Technical Training',
                    'Technical Analysis',
                    'Full-Stack Development',
                    'Systems Architecture',
                    'Cross-Functional Technical Collaboration',
                    'Troubleshooting, QA, & Visual Debugging',
                    'Data Modeling'
                ],
                experience: [
                    {
                        project: '3D Interactive Scene Viewer',
                    },
                    {
                        project: 'Reinforcement Learning Software Developer',
                    },
                    {
                        project: 'Computer Science Teaching Assistant',
                    },
                    {
                        project: 'Activity and Fitness Tracker',
                    }

                ],
                credentials: [
                    'B.Sc., SFU'
                ]
            }
            */

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
// List conferences, workshops, presentations, etc.
export const outreachPage = {
    hero: {
        title: 'Engagements',
        subtitle: 'Workshops and ideas shared with our professional community.',
        bgImage: '/vancouver.webp',
        bgAlt: 'Vancouver cityscape'
    },
    // Each workshop opens at /outreach/:id. Add description paragraphs below.
    workshops: [
        {
            id: 'icat',
            title: 'From Vision to Roadmap: Planning ICAT for Healthcare Infrastructure',
            image: '/outreach/infrastructure.jpeg',
            imageAlt: 'Jeannie Gandham and Nancy Nguyen',
            description: [
                'Join Jeannie Gandham and Nancy Nguyen of Providence Health Care for an interactive workshop using the New St. Paul’s Hospital journey as a real-world example.',
                'Bring a technology idea, use case or goal from your own organization and begin transforming it into a clear vision and agile roadmap you can take back to your team.'
            ],
            registration: {
                text: 'To add this to your conference experience,',
                label: 'register here',
                href: 'https://lnkd.in/gZqSXs6W'
            }
        },
        {
            id: 'women-in-healthcare-infrastructure',
            title: 'Women in Healthcare Infrastructure Insight Series: Leadership & Networking Reception',
            image: '/outreach/women-in-leadership.jpeg',
            imageAlt: 'Women in Healthcare Infrastructure leadership and networking reception',
            description: [
                'Levelling Up, Leading Change and Building High-Performing Healthcare Organizations for the Future. An evening of connection with fellow women leaders in healthcare infrastructure to exchange ideas, foster collaboration, and shape the future of healthcare facilities in Canada.',
                'Featuring Nadine Bernard, Denise Flemming, Eleanor Lee, Rebecca Repa, and Kristine Jarvi, RN, BNSc, MBA, CHE.',
                'Pre-registration required online.'
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
