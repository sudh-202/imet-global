// Navbar

//Menus

export const navbarMenu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Courses", href: "/courses" },
    { name: "Gurupool", href: "/gurupool" },
    { name: "Gallery", href: "/gallery" },
    { name: "In News & Media", href: "/news-media" },
    { name: "Blog", href: "/blog" },
    { name: "#NotToMiss", href: "/not-to-miss" },
    { name: "Contact Us", href: "/contact" },
  ];


// Homepage

// Cards

export const storyData = [
  {
    id: 1,
    imageSrc: "/images/b1.webp", 
    videoSrc: "/videos/section-8.mp4",
  },
  {
    id: 2,
    imageSrc: "/images/b2.webp",
    videoSrc: "/videos/car-model.mp4",
  },
  {
    id: 3,
    imageSrc: "/images/b3.webp",
    videoSrc: "/videos/trained.mp4",
  },
];

// Stats Section

export const sectionData = {
  stats: [
    { count: '30K', label: 'Recruiting Partners', color: '#06B5C5' }, // Blue
    { count: '30K+', label: 'Students', color: '#CC6B49' }, // Orange
    { count: '50+', label: 'Alliances', color: '#E5A632' }, // Yellow
    { count: '100%', label: 'Industry Mentors as Faculty', color: '#981D26' } // Red
  ],
  sections: [
    {
      title: 'Diversity in Delivery',
      description: `Approach for classroom sessions based on learners' as: Freshers | With Work Ex (Entry, Middle & Senior) | Business Owners | Self Employed/ Entrepreneurs`,
      image: '/images/s1.webp',
    },
    {
      title: 'Practitioners as Professionals (PaP)',
      description: `Global interface and Professional Acclimatization with a Guru Pool of Industry Experts and Practitioners as course Facilitators coming from Telecom | IoT | Agency | E-Commerce`,
      image: '/images/s2.webp',
    },
    {
      title: 'Of-For-By Corporates',
      description: `Driven by 100% Corporate Character to impart formal professional education with Office style B-School Campus and Work Stations structured Class Rooms.`,
      image: '/images/s3.webp',
    },
    {
      title: 'UNESCO endorsed alumni status',
      description: `Learners get the alumni status along with UNESCO endorsed student identity card, valid in 125+ countries across the globe.`,
      image: '/images/s4.webp',
    }
  ]
};