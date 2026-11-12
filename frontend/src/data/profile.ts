export interface Profile {
  name: string
  major: string
  minors: string[]
  tagline: string
}

export interface Contact {
  github: string
  linkedin: string
  resume: string
}

export interface Education {
  school: string
  degree: string
  graduation: string
  gpa: string
  honors: string[]
}

export interface Activity {
  role: string
  dates: string
  summary: string
}

export interface Experience {
  title: string
  organization: string
  dates: string
  summary: string
  skills: string[]
  link?: string
}

export const profile: Profile = {
  name: 'John Bauer',
  major: 'Computer Science Major @ Grove City College',
  minors: [
    'AI and Machine Learning',
    'Computer Game Design and Development',
  ],
  tagline: 'I love creating new things with code!',
}

export const contact: Contact = {
  github: 'https://github.com/John-D-Bauer',
  linkedin: 'https://www.linkedin.com/in/john-david-bauer',
  resume: '/john-bauer-resume.pdf',
}

export const education: Education = {
  school: 'Grove City College',
  degree: 'B.S. in Computer Science (ABET Accredited)',
  graduation: 'Expected May 2027',
  gpa: '3.9/4.0',
  honors: [
    "Dean's List with High Distinction (5 semesters)",
    'Omicron Delta Kappa Leadership Honor Society',
    'Mortar Board National Honor Society',
  ],
}

export const activities: Activity[] = [
  {
    role: 'President, Association for Computing Machinery',
    dates: 'Dec. 2024 – Present',
    summary:
      'Organize speakers and events that help computer science students grow their skills and find community. Previously a member and volunteer tutor.',
  },
  {
    role: 'Sprinter, Grove City Varsity Track Team',
    dates: 'Aug. 2024 – Present',
    summary:
      'Team chaplain since 2025, leading prayer groups before practice and delivering weekly devotionals.',
  },
]

export const interests: string[] = ['Soccer', 'Piano', 'Reading good books']

export const skills: string[] = [
  'C# / .NET',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Java',
  'SQL',
  'Scala',
  'C',
  'Git',
  'Linux',
  'Docker',
  'TensorFlow',
  'Spark',
  'Unity',
]

export const internships: Experience[] = [
  {
    title: 'Software Engineering Intern',
    organization: 'WebstaurantStore (Clark Associates)',
    dates: 'May – Aug. 2026',
    summary:
      'Completed 17 backlog items for the My Account area alongside engineers, business analysts, product owners, and QA. Built a warning modal for duplicate auto-reorders that surfaces payment and shipping errors before checkout, and a full-stack feature letting supervisors manage the addresses and credit cards available to their team.',
    skills: ['C#', '.NET', 'React', 'SQL'],
  },
  {
    title: 'Software Engineer Intern',
    organization: 'Armstrong Group of Companies',
    dates: 'May – Aug. 2025',
    summary:
      'Automated the bulk decal shipping process for new customers, used database flags to hide systems that support reps could not access remotely, and built a customer payment page and auto-complete functionality. Worked with testers, system admins, and DBAs to ship to production.',
    skills: ['C#', '.NET Core', 'JavaScript'],
  },
  {
    title: 'Research Participant',
    organization: 'SIL International @ Grove City College',
    dates: 'Sep. – Dec. 2024',
    summary:
      'Supported translation work where off-the-shelf tools failed. Built a hexadecimal encoder/decoder for ASCII characters and a LightGBM decision-tree model to translate runes into Roman characters.',
    skills: ['Python', 'LightGBM'],
  },
  {
    title: 'Software Engineer Intern',
    organization: 'Bridge Fusion Systems',
    dates: 'May – Aug. 2024',
    summary:
      'Combined software from two existing systems to run on a single processor, enabling bidirectional communication in a previously one-way system.',
    skills: ['C', 'Embedded'],
  },
]

export const projects: Experience[] = [
  {
    title: 'Personal Production Platform',
    organization: 'Senior Capstone',
    dates: 'Fall 2026',
    summary:
      'This site! A full-stack portfolio platform built with React and TypeScript, developed through pull requests and deployed with Cloudflare Pages.',
    skills: ['React', 'TypeScript', 'Vite', 'Cloudflare Pages'],
  },
  {
    title: 'Class Scheduler',
    organization: 'Software Engineering, Grove City College',
    dates: 'May 2025',
    summary:
      'An app for searching and filtering classes by keyword, department, professor, and time, with an interactive calendar for building a schedule. Built on a four-person Agile/Scrum team.',
    skills: ['Java', 'TypeScript', 'Scrum'],
  },
  {
    title: 'Website Blocker',
    organization: 'Independent Project',
    dates: 'Mar. 2024',
    summary:
      'A Firefox extension that blocks chosen websites until certain tasks are completed first.',
    skills: ['JavaScript', 'HTML', 'CSS'],
  },
]
