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
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
];

export const connectLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { label: 'Email', href: 'mailto:hello@jinmotion.com', external: false },
];

export const ctaBanner = {
    label: "Let's talk.",
    buttonText: 'Get in touch',
};

export const projects = [
    {
        id: 'st-pauls',
        title: 'New St. Paul\'s Hospital',
        category: 'Category 1',
        year: '2024',
        client: 'Providence Health Care',
        location: 'Vancouver, BC',
        short_description: 'Western Canada\'s largest hospital redevelopment project.',
        long_description: [
            'The New St. Paul’s Hospital redevelopment is the largest healthcare infrastructure project in Western Canada. The project includes a 2.2-billion-dollar investment to construct a 1.7-million-square-foot facility with more than 600 beds. As Program Director, J in Motion manages a 450-million-dollar technology portfolio and oversees more than 50 concurrent projects, including command centers, security networks, and IT systems. We lead cross-functional teams, coordinate with government and construction partners, and integrate Indigenous design principles into the facility plan. We provide continuous executive reporting on project scope, schedule, budget, and risk to ensure opening in early 2027.'
        ],
        image: 'https://placehold.co/800x600/32231F/13629B?text=Project+1',
        heroColors: ['#F9D2BA', '#EEA2A5', '#7E3A65', '#13629B', '#10B981'],
        galleryImages: [
            'https://placehold.co/800x500/231815/10B981?text=Project+Detail+1',
            'https://placehold.co/800x500/2A1D1A/1882ce?text=Project+Detail+2'
        ]
    },
    {
        id: 'dawson-creek',
        title: 'Dawson Creek & District Hospital',
        category: 'Category 3',
        year: '2023',
        client: 'HH Angus + Northern Health Authority + Infrastructure BC',
        location: 'Dawson Creek, BC',
        short_description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        long_description: [
            "The new greenfield Dawson Creek District Hospital will accept patients in Spring 2027 and required " +
            "Operational Readiness + Transition Services. Advising both HH Angus and Northern Health Authority " + 
            "project senior project leadership, responsible for roadmap to opening day including creation of detailed "+
            "project deliverables."
        ],
        image: 'https://placehold.co/800x600/231815/10B981?text=Project+3',
        heroColors: ['#F4A261', '#E76F51', '#2A9D8F', '#264653', '#13629B'],
        galleryImages: [
            'https://placehold.co/800x500/32231F/1882ce?text=Project+Detail+1',
            'https://placehold.co/800x500/231815/10B981?text=Project+Detail+2'
        ]
    },
    {
        id: 'stanton',
        title: 'Stanton Territorial Hospital Renewal',
        category: 'Infrastructure',
        year: '2019',
        client: 'Government of Northwest Territories',
        location: 'Yellowknife, NT',
        short_description: 'A $350 million greenfield regional acute hospital delivery project under a P3 model.',
        long_description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.',
            'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat.',
            'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada.'
        ],
        image: 'https://placehold.co/800x600/2A1D1A/1882ce?text=Project+2',
        heroColors: ['#E8A0BF', '#C38D9E', '#85586F', '#13629B', '#34D399'],
        galleryImages: [
            'https://placehold.co/800x500/231815/34D399?text=Project+Detail+1',
            'https://placehold.co/800x500/2A1D1A/10B981?text=Project+Detail+2'
        ]
    },
    {
        id: 'luminous-installation',
        title: 'Project Title 4',
        category: 'Category 4',
        year: '2023',
        client: 'Client Name',
        location: 'Location City',
        short_description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        long_description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.',
            'Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit.',
            'Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.'
        ],
        image: 'https://placehold.co/800x600/32231F/34D399?text=Project+4',
        heroColors: ['#D8B4E2', '#AE759F', '#6B3074', '#13629B', '#10B981'],
        galleryImages: [
            'https://placehold.co/800x500/231815/10B981?text=Project+Detail+1',
            'https://placehold.co/800x500/32231F/34D399?text=Project+Detail+2'
        ]
    }
];

export const homePage = {
    hero: {
        title: 'Precision Execution for Billion-Dollar Infrastructure.',
        subtitle: 'Strategic advisory, operational excellence, and digital transformation for Canada’s most critical infrastructure initiatives.',
        btnPrimary: 'View Projects',
        btnSecondary: 'About Us',
        bgImage: 'NSPH-rendering.jpg',
        bgAlt: 'Hero Background'
    },
    approach: {
        eyebrow: 'ABOUT US',
        heading: 'Building Tomorrow’s Critical Infrastructure',
        paragraphs: [
            'We are a strategic advisory firm with a proven track record of managing over $2.2B+ in capital infrastructure and enterprise technology portfolios across Canada.',
            'For over 20 years, we\'ve worked closely with health authorities, municipal bodies, and provincial governments, delivering clarity and momentum to complex infrastructure landscapes.',
        ],
        image: 'HOSPITAL1.jpg',
        imageAlt: 'Studio Approach'
    },
    values: {
        heading: 'Our Values',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        cards: [
            {
                title: 'Thoughtful Design',
                paragraphs: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
                    'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.'
                ]
            },
            {
                title: 'Kinetic Experience',
                paragraphs: [
                    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.',
                    'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.'
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
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        bgImage: 'https://placehold.co/1920x1080/3d5a3e/6b8f6e?text=+',
        bgAlt: 'About Background'
    },
    content: {
        heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
        ]
    },
    stats: [
        { value: '20+', label: 'Lorem Ipsum' },
        { value: '50+', label: 'Dolor Sit' },
        { value: '15', label: 'Amet Consectetur' },
        { value: '8+', label: 'Adipiscing Elit' }
    ],
    team: {
        heading: 'Team Members',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        members: [
            {
                name: 'Jeannie Gandham',
                title: 'Principal',
                image: 'https://placehold.co/500x350/231815/13629B?text=Jeannie+Gandham',
                alt: 'Jeannie Gandham',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                name: 'Cameron Yee-Ping',
                title: 'Title',
                image: 'https://placehold.co/500x350/231815/13629B?text=Cameron+Yee-Ping',
                alt: 'Cameron Yee-Ping',
                bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        ]
    }
};

export const projectDatabase = Object.fromEntries(projects.map((p) => [p.id, p]));

export const projectsPage = {
    hero: {
        title: 'Projects',
        subtitle: 'Two Decades of Proven Delivery',
        bgImage: 'https://placehold.co/1920x800/3d5a3e/6b8f6e?text=+',
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
