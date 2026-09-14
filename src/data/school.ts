export interface NavItem {
  label: string;
  href: string;
  actionId?: string;
  isActive?: boolean;
}

export interface StatItem {
  value: string;
  numValue: number;
  suffix: string;
  label: string;
  icon: 'calendar' | 'users' | 'award' | 'trophy';
}

export interface ShortcutItem {
  id: string;
  title: string;
  description: string;
  bgClass: string;
  accentColor: string;
  iconType: 'admission' | 'portal' | 'payment' | 'bus';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  actionId: string;
  accentColor: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  time?: string;
  location?: string;
  description?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  fullStory?: string;
}

export const SCHOOL_DATA = {
  identity: {
    name: 'SANKALP PUBLIC SCHOOL',
    tagline: 'Learn with Purpose. Lead with Confidence.',
    affiliation: 'A CBSE AFFILIATED SENIOR SECONDARY SCHOOL',
    address: 'Near Civil Lines, Raipur, Chhattisgarh – 492001',
    phone: '+91 771 234 5678',
    email: 'info@sankalppublicschool.in',
    copyrightYear: '2024',
    copyrightText: '© 2024 Sankalp Public School. All rights reserved.',
    leafSlogan: 'A Kinder\nBrighter Tomorrow\nTogether',
  },

  announcement: {
    parts: [
      'Empowering young minds for a brighter tomorrow',
      'Admissions Open for 2027–28',
      'Schedule a campus visit today!',
    ],
    quickLinks: [
      { label: 'Academic Calendar', actionId: 'quick-calendar' },
      { label: 'Mandatory Disclosure', actionId: 'quick-disclosure' },
      { label: 'CBSE Affiliation Docs', actionId: 'quick-affiliation' },
      { label: 'Transfer Certificate (TC)', actionId: 'quick-tc' },
      { label: 'Uniform & Books Guidelines', actionId: 'quick-uniform' },
    ],
    utilities: [
      { label: 'Quick Links', actionId: 'disclosure' },
      { label: 'Career', actionId: 'career' },
      { label: 'Alumni', actionId: 'alumni' },
      { label: 'FAQ', actionId: 'faq' },
      { label: 'Contact', actionId: 'contact' },
    ],
    socials: [
      { name: 'Facebook', url: '#', icon: 'facebook' },
      { name: 'Instagram', url: '#', icon: 'instagram' },
      { name: 'YouTube', url: '#', icon: 'youtube' },
      { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    ],
  },

  navigation: [
    { label: 'Home', href: '#hero', actionId: 'hero', isActive: true },
    { label: 'About Us', href: '#about', actionId: 'about' },
    { label: 'Academics', href: '#features', actionId: 'academics' },
    { label: 'Life at SPS', href: '#features', actionId: 'life-at-sps' },
    { label: 'Admissions', href: '#admission-dialog', actionId: 'admission' },
    { label: 'News & Events', href: '#community', actionId: 'news-events' },
    { label: 'Contact', href: '#footer', actionId: 'contact' },
  ],

  hero: {
    eyebrow: 'A CBSE AFFILIATED SENIOR SECONDARY SCHOOL',
    titleNavy: 'Learn with Purpose.',
    titleTeal: 'Lead with Confidence.',
    description:
      'At Sankalp Public School, we nurture curious minds, compassionate hearts and confident leaders for a brighter, kinder tomorrow.',
    ctaPrimary: 'Apply for Admission',
    ctaSecondary: 'Book a Campus Visit',
    badge: {
      headline: 'Admissions Open',
      subline: '2027–28',
      tagline: 'New Dreams. Brighter Futures.',
    },
    stats: [
      { value: '25+', numValue: 25, suffix: '+', label: 'Years of Excellence', icon: 'calendar' },
      { value: '2000+', numValue: 2000, suffix: '+', label: 'Happy Students', icon: 'users' },
      { value: '120+', numValue: 120, suffix: '+', label: 'Dedicated Faculty', icon: 'award' },
      { value: '100+', numValue: 100, suffix: '+', label: 'Awards & Recognitions', icon: 'trophy' },
    ] as StatItem[],
  },

  shortcuts: [
    {
      id: 'online-admission',
      title: 'Online Admission',
      description: 'Start your child’s journey with SPS today.',
      bgClass: 'bg-[#EDF9F7]',
      accentColor: '#008697',
      iconType: 'admission',
    },
    {
      id: 'parent-portal',
      title: 'Parent Portal',
      description: 'Stay connected. Track progress. Be involved.',
      bgClass: 'bg-[#EDF7FE]',
      accentColor: '#1A6AB2',
      iconType: 'portal',
    },
    {
      id: 'fee-payment',
      title: 'Fee Payment',
      description: 'Simple, secure and convenient online payment.',
      bgClass: 'bg-[#FEF5F0]',
      accentColor: '#E65D24',
      iconType: 'payment',
    },
    {
      id: 'bus-tracking',
      title: 'Bus Tracking',
      description: 'Live tracking for your child’s safety and peace of mind.',
      bgClass: 'bg-[#EAF9F0]',
      accentColor: '#2B8A46',
      iconType: 'bus',
    },
  ] as ShortcutItem[],

  features: [
    {
      id: 'academic-excellence',
      title: 'Academic Excellence',
      description:
        'A strong CBSE-based curriculum with a focus on conceptual learning, critical thinking and real-world skills.',
      actionLabel: 'Know More →',
      actionId: 'academic-more',
      accentColor: '#FFAF24',
      imageSrc: '/images/academic-lab.webp',
      imageAlt: 'SPS students conducting science experiment using microscopes in laboratory',
      objectPosition: 'right center',
    },
    {
      id: 'beyond-classroom',
      title: 'Beyond the Classroom',
      description:
        'Sports, arts, leadership, community service and more — because every child’s potential deserves a platform.',
      actionLabel: 'Explore Life at SPS →',
      actionId: 'life-more',
      accentColor: '#28A745',
      imageSrc: '/images/student-basketball.webp',
      imageAlt: 'SPS student practicing basketball on sports court',
      objectPosition: 'right center',
    },
    {
      id: 'nurturing-campus',
      title: 'A Nurturing Campus',
      description:
        'Modern infrastructure, safe & green campus, smart classrooms and spaces to grow, explore and belong.',
      actionLabel: 'Take a Virtual Tour →',
      actionId: 'tour-more',
      accentColor: '#008697',
      imageSrc: '/images/campus.webp',
      imageAlt: 'Green landscaped campus grounds and modern architecture of Sankalp Public School',
      objectPosition: 'right center',
    },
  ] as FeatureItem[],

  events: {
    title: 'Upcoming Events',
    actionLabel: 'View All →',
    items: [
      {
        id: 'event-1',
        day: '15',
        month: 'Nov',
        title: 'Children’s Day Celebration',
        subtitle: 'Fun | Talent | Togetherness',
        badgeColor: '#1A6AB2',
        time: '9:00 AM - 1:00 PM',
        location: 'School Main Auditorium',
        description:
          'A vibrant day packed with cultural performances, games, fun activities, and sweet surprises dedicated entirely to our beloved students.',
      },
      {
        id: 'event-2',
        day: '28',
        month: 'Nov',
        title: 'Annual Sports Day',
        subtitle: 'Stronger Minds, Healthier Futures',
        badgeColor: '#008697',
        time: '8:00 AM - 3:30 PM',
        location: 'SPS Sports Complex & Athletic Ground',
        description:
          'Cheering our student houses in track and field, relays, march-past, and championship tournaments celebrating team spirit and fitness.',
      },
      {
        id: 'event-3',
        day: '10',
        month: 'Dec',
        title: 'Inter-School Science Fest',
        subtitle: 'Ideas for a Better Tomorrow',
        badgeColor: '#E65D24',
        time: '10:00 AM - 4:00 PM',
        location: 'SPS STEM Labs & Exhibition Hall',
        description:
          'Welcoming over 30 participating regional schools displaying robotics, AI projects, renewable energy prototypes, and science models.',
      },
    ] as EventItem[],
  },

  testimonial: {
    title: 'What Parents Say',
    actionLabel: 'View All →',
    quote:
      '“Sankalp Public School has given my child not just academic knowledge, but a world of values, confidence and a sense of responsibility. We are truly grateful for the caring teachers and the positive environment.”',
    author: 'Mrs. Priya Sharma',
    authorRole: 'Parent of Class VIII Student',
    rating: 5,
    avatarSrc: '/images/parent-priya.webp',
    avatarAlt: 'Portrait of Mrs. Priya Sharma, smiling parent of Sankalp Public School student',
    items: [
      {
        id: 'parent-1',
        author: 'Mrs. Priya Sharma',
        authorRole: 'Parent of Class VIII Student',
        quote:
          '“Sankalp Public School has given my child not just academic knowledge, but a world of values, confidence and a sense of responsibility. We are truly grateful for the caring teachers and positive environment.”',
        rating: 5,
        avatarSrc: '/images/parent-priya.webp',
        avatarAlt: 'Portrait of Mrs. Priya Sharma, parent of Class VIII student',
      },
      {
        id: 'parent-2',
        author: 'Dr. Arvind Kumar',
        authorRole: 'Parent of Class X Student',
        quote:
          '“The individual attention and academic mentorship here have shaped my child’s confidence immensely. The STEM labs, robotics facilities, and sports arenas are truly second to none.”',
        rating: 5,
        avatarSrc: '/images/parent-arvind.webp',
        avatarAlt: 'Portrait of Dr. Arvind Kumar, parent of Class X student',
      },
      {
        id: 'parent-3',
        author: 'Mrs. Sunita Verma',
        authorRole: 'Parent of Class IV Student',
        quote:
          '“The teachers create such a nurturing, encouraging space for young minds to bloom. My daughter looks forward to school every single morning with genuine excitement.”',
        rating: 5,
        avatarSrc: '/images/parent-sunita.webp',
        avatarAlt: 'Portrait of Mrs. Sunita Verma, parent of Class IV student',
      },
    ],
  },

  news: {
    title: 'Latest News',
    actionLabel: 'View All →',
    items: [
      {
        id: 'news-1',
        title: 'SPS students excel in Zonal Science Exhibition',
        subtitle: 'Our young innovators bring home top honours.',
        date: '12 Oct 2024',
        imageSrc: '/images/news-science.webp',
        imageAlt: 'SPS science exhibition winners displaying trophies and certificates',
        category: 'Academics & STEM',
        fullStory:
          'Our young innovators bagged 1st place in Robotics and 2nd in Environmental Solutions at the Zonal Science Exhibition held in Raipur.',
      },
      {
        id: 'news-2',
        title: 'Green Campus Initiative Launched',
        subtitle: 'Students pledge for a cleaner, greener tomorrow.',
        date: '02 Oct 2024',
        imageSrc: '/images/news-green-campus.webp',
        imageAlt: 'Students and faculty planting saplings in school garden',
        category: 'Environment',
        fullStory:
          'Over 500 indigenous tree saplings were planted as students inaugurated our zero-plastic and solar-powered campus awareness mission.',
      },
      {
        id: 'news-3',
        title: 'SPS Felicitates Board Toppers',
        subtitle: 'Hard work. Humility. Higher Goals.',
        date: '15 Sep 2024',
        imageSrc: '/images/news-toppers.webp',
        imageAlt: 'Board exam top achievers on stage with the Principal and Director',
        category: 'Excellence',
        fullStory:
          'Sankalp Public School celebrated outstanding 100% CBSE Class X and XII results, awarding scholarships to the top 15 rank holders.',
      },
    ] as NewsItem[],
  },

  footerLinks: [
    { label: 'Home', href: '#hero', actionId: 'hero' },
    { label: 'About', href: '#about', actionId: 'about' },
    { label: 'Admissions', href: '#admission-dialog', actionId: 'admission' },
    { label: 'News & Events', href: '#community', actionId: 'news-events' },
    { label: 'Privacy Policy', href: '#privacy', actionId: 'privacy' },
    { label: 'Terms', href: '#terms', actionId: 'terms' },
  ],
};
