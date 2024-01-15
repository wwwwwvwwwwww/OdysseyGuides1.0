export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create Event',
    route: '/events/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}

export const NavLinks = [
  { href: '/', key: 'Inspiration', text: 'Inspiration' },
  { href: '/', key: 'Find Projects', text: 'Find Projects' },
  { href: '/', key: 'Learn Development', text: 'Learn Development' },
  { href: '/', key: 'Career Advancement', text: 'Career Advancement' },
  { href: '/', key: 'Hire Developers', text: 'Hire Developers' }
];

export const categoryFilters = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "Mobile",
  "UI/UX",
  "Game Dev",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "E-commerce",
  "Chatbots"
]

export const footerLinks = [
  {
    title: 'For Travelers',
    links: [
      'Plan Your Trip',
      'Explore Destinations',
      'Travel Blog',
      'Travel Podcast',
      'Travel Tips',
      'Refer a Friend',
      'Travelers Code of Conduct',
    ],
  },
  {
    title: 'Hosts and Guides',
    links: [
      'List Your Property',
      'Offer Your Guide Services',
      'Connect with Travelers',
    ],
  },
  {
    title: 'Partnerships',
    links: [
      'Advertise with Us',
    ],
  },
  {
    title: 'Company',
    links: [
      'About Us',
      'Careers',
      'Customer Support',
      'Media Kit',
      'Client Testimonials',
      'API Integration',
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
    ],
  },
  {
    title: 'Directories',
    links: [
      'Travel Jobs',
      'Guides for Hire',
      'Freelance Hosts for Hire',
      'Destinations',
      'Popular Places',
    ],
  },
  {
    title: 'Travel Assets',
    links: [
      'Travel Marketplace',
      'Local Experience Marketplace',
      'Tourism Registry',
      'Attraction Reviews',
    ],
  },
  {
    title: 'Travel Resources',
    links: [
      'Freelance Guiding',
      'Travel Hiring',
      'Travel Portfolio',
      'Travel Education',
      'Adventure Planning',
      'Travel Industry Trends',
    ],
  },
];


