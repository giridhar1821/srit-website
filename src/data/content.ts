export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string; desc?: string }[];
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About SRIT', to: '/about', desc: 'Our story & vision' },
      { label: 'Vision & Mission', to: '/about#vision', desc: 'Guiding principles' },
      { label: 'Management', to: '/about#management', desc: 'Leadership team' },
      { label: 'Principal Message', to: '/about#principal', desc: 'From the principal' },
      { label: 'Accreditations', to: '/about#accreditation', desc: 'NBA, NAAC & more' },
      { label: 'Awards & Rankings', to: '/about#awards', desc: 'Recognitions' },
    ],
  },
  {
    label: 'Departments',
    to: '/departments',
    children: [
      { label: 'Computer Science & Engg', to: '/departments#cse', desc: 'AI, ML & core CS' },
      { label: 'Electronics & Comm', to: '/departments#ece', desc: 'VLSI, IoT & embedded' },
      { label: 'Electrical & Electronics', to: '/departments#eee', desc: 'Power & control systems' },
      { label: 'Mechanical Engineering', to: '/departments#mech', desc: 'Thermal & design' },
      { label: 'Civil Engineering', to: '/departments#civil', desc: 'Structures & environment' },
      { label: 'MBA', to: '/departments#mba', desc: 'Business administration' },
    ],
  },
  {
    label: 'Admissions',
    to: '/admissions',
    children: [
      { label: 'Apply Online', to: '/admissions#apply', desc: 'Quick & secure' },
      { label: 'Courses Offered', to: '/admissions#courses', desc: 'UG & PG programs' },
      { label: 'Eligibility', to: '/admissions#eligibility', desc: 'Criteria & requirements' },
      { label: 'Fee Structure', to: '/admissions#fees', desc: 'Transparent pricing' },
      { label: 'Scholarships', to: '/admissions#scholarships', desc: 'Merit & need-based' },
      { label: 'Hostel & Transport', to: '/admissions#facilities', desc: 'Accommodation' },
    ],
  },
  {
    label: 'Academics',
    to: '/academics',
    children: [
      { label: 'Academic Calendar', to: '/academics#calendar', desc: 'Year schedule' },
      { label: 'Curriculum & Syllabus', to: '/academics#syllabus', desc: 'Course details' },
      { label: 'Examination Section', to: '/examination', desc: 'Hall tickets & results' },
      { label: 'Digital Library', to: '/academics#library', desc: 'E-resources' },
      { label: 'Timetables', to: '/academics#timetable', desc: 'Class schedules' },
    ],
  },
  {
    label: 'Placements',
    to: '/placements',
    children: [
      { label: 'Placement Statistics', to: '/placements#stats', desc: 'Yearly records' },
      { label: 'Top Recruiters', to: '/placements#recruiters', desc: 'Hiring partners' },
      { label: 'Training & Development', to: '/placements#training', desc: 'Soft & technical skills' },
      { label: 'Internship Portal', to: '/placements#internships', desc: 'Industry exposure' },
      { label: 'Placement Portal', to: '/placements#portal', desc: 'Student login' },
    ],
  },
  {
    label: 'Research',
    to: '/research',
    children: [
      { label: 'Research Centers', to: '/research#centers', desc: 'Specialized labs' },
      { label: 'Publications', to: '/research#publications', desc: 'Faculty research' },
      { label: 'Funded Projects', to: '/research#projects', desc: 'Grants & funding' },
      { label: 'Innovation & Incubation', to: '/research#incubation', desc: 'Startup support' },
      { label: 'Collaborations', to: '/research#collaborations', desc: 'Industry & academia' },
    ],
  },
  {
    label: 'Campus Life',
    to: '/campus-life',
    children: [
      { label: 'Campus Tour', to: '/campus-life#tour', desc: 'Virtual tour' },
      { label: 'Hostels', to: '/campus-life#hostels', desc: 'Living spaces' },
      { label: 'Sports & Fitness', to: '/campus-life#sports', desc: 'Athletics & wellness' },
      { label: 'Clubs & Activities', to: '/campus-life#clubs', desc: 'Student clubs' },
      { label: 'Events & Festivals', to: '/events', desc: 'Cultural & technical' },
      { label: 'Gallery', to: '/gallery', desc: 'Photos & videos' },
    ],
  },
  {
  label: "Bus Tracking",
  to: "/bus-tracking",
  },
  {
    label: 'Portals',
    to: '#',
    children: [
      { label: 'Student Portal', to: '/student-portal', desc: 'Attendance, results & more' },
      { label: 'Faculty Portal', to: '/faculty-portal', desc: 'Grades, classes & resources' },
      { label: 'Parent Portal', to: '/parent-portal', desc: 'Track your child' },
      { label: 'Alumni Portal', to: '/alumni', desc: 'Connect & network' },
      { label: 'Examination Cell', to: '/examination', desc: 'Hall tickets & results' },
    ],
  },
  {
    label: 'More',
    to: '#',
    children: [
      { label: 'Events', to: '/events', desc: 'Upcoming happenings' },
      { label: 'Gallery', to: '/gallery', desc: 'Photos & videos' },
      { label: 'News', to: '/news', desc: 'Latest updates' },
      { label: 'Contact', to: '/contact', desc: 'Reach us' },
      { label: 'FAQs', to: '/#faq', desc: 'Common questions' },
    ],
  },
];

export interface Department {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  hod: string;
  established: string;
  students: number;
  faculty: number;
  labs: number;
  description: string;
  vision: string;
  placements: number;
}

export const departments: Department[] = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    icon: 'Cpu',
    hod: 'Dr. R. Saravanan, Ph.D.',
    established: '2008',
    students: 480,
    faculty: 24,
    labs: 12,
    description: 'Pioneering education in algorithms, AI, ML, cloud computing, and full-stack development with industry-aligned curriculum.',
    vision: 'To produce globally competent computer science professionals with ethical values and innovative spirit.',
    placements: 92,
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    icon: 'Radio',
    hod: 'Dr. K. Lavanya, Ph.D.',
    established: '2008',
    students: 360,
    faculty: 18,
    labs: 10,
    description: 'Excellence in VLSI design, IoT, embedded systems, signal processing, and 5G communication technologies.',
    vision: 'To be a center of excellence in electronics education and research for societal impact.',
    placements: 88,
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics Engineering',
    shortName: 'EEE',
    icon: 'Zap',
    hod: 'Dr. S. Venkateswarlu, Ph.D.',
    established: '2009',
    students: 280,
    faculty: 15,
    labs: 8,
    description: 'Focused on power systems, renewable energy, control systems, and smart grid technologies.',
    vision: 'To empower students with cutting-edge electrical engineering knowledge and skills.',
    placements: 85,
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    icon: 'Cog',
    hod: 'Dr. M. Bhaskar, Ph.D.',
    established: '2008',
    students: 300,
    faculty: 16,
    labs: 9,
    description: 'Comprehensive programs in thermal engineering, design, manufacturing, and robotics.',
    vision: 'To nurture innovative mechanical engineers for industry 4.0 and beyond.',
    placements: 80,
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'CIVIL',
    icon: 'Building2',
    hod: 'Dr. P. Anjanehya, Ph.D.',
    established: '2010',
    students: 240,
    faculty: 14,
    labs: 7,
    description: 'Building the future with structural, geotechnical, transportation, and environmental engineering.',
    vision: 'To develop sustainable infrastructure solutions through quality education.',
    placements: 78,
  },
  {
    id: 'mba',
    name: 'Master of Business Administration',
    shortName: 'MBA',
    icon: 'Briefcase',
    hod: 'Dr. N. Ramadevi, Ph.D.',
    established: '2012',
    students: 120,
    faculty: 10,
    labs: 3,
    description: 'Transforming graduates into leaders with finance, marketing, HR, and analytics specialization.',
    vision: 'To develop future-ready management professionals with entrepreneurial mindset.',
    placements: 90,
  },
];

export interface NewsTickerItem {
  id: number;
  text: string;
  category: string;
}

export const newsTicker: NewsTickerItem[] = [
  { id: 1, text: 'Admissions Open for 2026-27 Batch — Apply Now!', category: 'Admissions' },
  { id: 2, text: 'SRIT achieves 92% placement record for 2025 graduating class', category: 'Placements' },
  { id: 3, text: 'TechFest 2026 scheduled for March 15-17 — Register now', category: 'Events' },
  { id: 4, text: 'CSE Department secures NBA accreditation', category: 'Accreditation' },
  { id: 5, text: '18 students placed in TCS Digital with ₹7 LPA package', category: 'Placements' },
  { id: 6, text: 'Research paper accepted at IEEE International Conference', category: 'Research' },
  { id: 7, text: 'Smart India Hackathon: SRIT team reaches national finals', category: 'Achievement' },
  { id: 8, text: 'New AI & ML Research Center inaugurated', category: 'Innovation' },
];

export interface PlacementStat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export const placementStats: PlacementStat[] = [
  { label: 'Placement Rate', value: 92, suffix: '%', icon: 'TrendingUp' },
  { label: 'Highest Package', value: 24, suffix: ' LPA', icon: 'IndianRupee' },
  { label: 'Average Package', value: 5.8, suffix: ' LPA', icon: 'BarChart3' },
  { label: 'Recruiters Visited', value: 85, suffix: '+', icon: 'Building2' },
  { label: 'Students Placed', value: 642, suffix: '+', icon: 'Users' },
  { label: 'Internships Secured', value: 320, suffix: '+', icon: 'Award' },
];

export const recruiters = [
  'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'Capgemini',
  'Tech Mahindra', 'HCL', 'L&T', 'Amazon', 'Microsoft', 'Google',
  'IBM', 'Oracle', 'SAP', 'Deloitte', 'EY', 'JP Morgan',
  'Hyundai', 'Bosch', 'Siemens', 'Schneider Electric', 'Mahindra', 'BHEL',
];

export interface Testimonial {
  id: number;
  name: string;
  batch: string;
  company: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'A. Sandeep Reddy',
    batch: '2023',
    company: 'Amazon',
    role: 'Software Engineer',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote: 'SRIT gave me the perfect platform to launch my career. The faculty mentorship and placement training were instrumental in securing my dream job at Amazon.',
  },
  {
    id: 2,
    name: 'B. Divya Lakshmi',
    batch: '2022',
    company: 'TCS Digital',
    role: 'Systems Engineer',
    image: 'https://images.pexels.com/photos/5212302/pexels-photo-5212302.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote: 'The hands-on lab sessions and industry projects at SRIT prepared me for real-world challenges. Forever grateful to my professors!',
  },
  {
    id: 3,
    name: 'C. Karthik Raja',
    batch: '2023',
    company: 'Infosys',
    role: 'Power Programmer',
    image: 'https://images.pexels.com/users/avatars/5212302/abc.jpg',
    rating: 5,
    quote: 'From coding competitions to hackathons, SRIT encouraged me to push my limits. The innovation cell helped me build my first startup prototype.',
  },
  {
    id: 4,
    name: 'D. Swathi',
    batch: '2022',
    company: 'Wipro',
    role: 'Project Engineer',
    image: 'https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    quote: 'The supportive environment at SRIT helped me grow both technically and personally. The soft skills training gave me the confidence to ace interviews.',
  },
];

export interface EventItem {
  id: number;
  title: string;
  date: string;
  dateStr: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export const events: EventItem[] = [
  {
    id: 1,
    title: 'TechFest 2026 — Innovation Unleashed',
    date: '2026-03-15',
    dateStr: 'March 15-17, 2026',
    location: 'Main Auditorium, SRIT',
    category: 'Technical',
    image: 'https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'A 3-day technical extravaganza featuring hackathons, robotics competitions, paper presentations, and tech talks from industry leaders.',
  },
  {
    id: 2,
    title: 'Annual Cultural Fest — Srinivasa Spandana',
    date: '2026-02-20',
    dateStr: 'February 20-22, 2026',
    location: 'Open Air Theatre',
    category: 'Cultural',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Celebrate art, music, dance, and drama. Three days of vibrant cultural performances, food stalls, and celebrity nights.',
  },
  {
    id: 3,
    title: 'Smart India Hackathon 2026',
    date: '2026-04-05',
    dateStr: 'April 5-6, 2026',
    location: 'Innovation Lab',
    category: 'Hackathon',
    image: 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: '36-hour nationwide hackathon. Solve real-world problem statements from government ministries and win exciting prizes.',
  },
  {
    id: 4,
    title: 'International Conference on AI & IoT',
    date: '2026-05-10',
    dateStr: 'May 10-11, 2026',
    location: 'Conference Hall',
    category: 'Conference',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'ICAIoT 2026 brings together researchers, academicians, and industry experts to discuss advancements in AI and IoT.',
  },
];

export interface FacultyHighlight {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  expertise: string;
  image: string;
}

export const facultyHighlights: FacultyHighlight[] = [
  {
    id: 1,
    name: 'Dr. R. Saravanan',
    designation: 'Professor & HOD, CSE',
    qualification: 'Ph.D., IIT Madras',
    expertise: 'Machine Learning, Data Science',
    image: 'https://images.pexels.com/photos/5212719/pexels-photo-5212719.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    name: 'Dr. K. Lavanya',
    designation: 'Professor & HOD, ECE',
    qualification: 'Ph.D., IIT Bombay',
    expertise: 'VLSI Design, Signal Processing',
    image: 'https://images.pexels.com/photos/5212696/pexels-photo-5212696.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    name: 'Dr. S. Venkateswarlu',
    designation: 'Professor & HOD, EEE',
    qualification: 'Ph.D., NIT Warangal',
    expertise: 'Power Systems, Renewable Energy',
    image: 'https://images.pexels.com/photos/5212729/pexels-photo-5212729.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 4,
    name: 'Dr. N. Ramadevi',
    designation: 'Professor & HOD, MBA',
    qualification: 'Ph.D., IIM Bangalore',
    expertise: 'Strategic Management, Finance',
    image: 'https://images.pexels.com/photos/5212702/pexels-photo-5212702.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: 'What programs does SRIT offer?',
    a: 'SRIT offers B.Tech in CSE, ECE, EEE, Mechanical, and Civil Engineering, along with M.Tech and MBA programs. All programs are approved by AICTE and affiliated to JNTU Anantapur.',
  },
  {
    q: 'How do I apply for admission?',
    a: 'You can apply online through our admissions portal. Admissions are based on EAMCET/ECET ranks for B.Tech and GATE/PGECET for M.Tech. Management quota seats are also available.',
  },
  {
    q: 'What is the fee structure?',
    a: 'The fee structure varies by program and category. Government concessional seats follow JNTU norms. Management quota seats have a separate fee structure. Detailed information is available on the Admissions page.',
  },
  {
    q: 'Does SRIT provide hostel facilities?',
    a: 'Yes, separate hostels are available for boys and girls with wifi, mess, gym, and 24/7 security. Hostel allocation is based on availability and distance from college.',
  },
  {
    q: 'How are placements at SRIT?',
    a: 'SRIT boasts a 92% placement rate with top recruiters like TCS, Infosys, Wipro, Amazon, and Microsoft visiting campus. The highest package for 2025 was ₹24 LPA.',
  },
  {
    q: 'Are scholarships available?',
    a: 'Yes, merit-based, need-based, and government scholarships are available. We also offer special scholarships for girl students and economically weaker sections.',
  },
  {
    q: 'Does SRIT have industry collaborations?',
    a: 'SRIT has MoUs with TCS iON, AWS Academy, Microsoft Learn, Infosys Springboard, and many others for curriculum support, internships, and certifications.',
  },
  {
    q: 'How can I access the student portal?',
    a: 'Students can login to the portal using their registered credentials. The portal provides access to attendance, results, timetables, fee payment, and digital library resources.',
  },
];

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'SRIT Signs MoU with AWS Academy for Cloud Computing Certification',
    date: 'Jan 15, 2026',
    category: 'Partnership',
    excerpt: 'Students can now access AWS cloud labs and earn industry-recognized certifications at no cost.',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'CSE Department Achieves NBA Accreditation for 3 Years',
    date: 'Jan 10, 2026',
    category: 'Accreditation',
    excerpt: 'The National Board of Accreditation has granted Tier-I accreditation to CSE department.',
    image: 'https://images.pexels.com/photos/2076623/pexels-photo-2076623.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'SRIT Team Wins Smart India Hackathon Grand Finale',
    date: 'Jan 05, 2026',
    category: 'Achievement',
    excerpt: 'Six students from CSE developed an AI-powered disaster management system winning ₹1 Lakh prize.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
