export const personalInfo = {
  name: "Abdulkadir Koc",
  title: "Applied Computer Science Student",
  tagline: "Passionate about learning and building software",
  email: "abdulkadir1308@gmail.com",
  phone: "+47 939 91 424",
  location: "Oslo, Norway",
  linkedin: "https://linkedin.com/in/abdlkdr-koc",
  github: "https://github.com/akadrkoc",
  website: "",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/avatar.jpg",
};

export const about = {
  summary:
    "Applied Computer Science student at OsloMet with a passion for building software and solving real-world problems. Eager to learn new technologies and grow as a developer.",
  background:
    "I started my journey in software development through curiosity and a love for problem-solving. As a student, I'm constantly learning and working on projects that help me sharpen my skills and explore different areas of computer science.",
  focus:
    "Currently focused on web development, learning modern frameworks and tools, and building projects that strengthen my understanding of software engineering principles.",
  valueProposition:
    "I'm a fast learner with a strong drive to improve. I enjoy collaborating with others and am always looking for opportunities to apply what I learn in real-world settings.",
};

export const skills = {
  technical: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 90 },
    { name: "Python", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "REST APIs", level: 95 },
  ],
  tools: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Git",
    "CI/CD",
    "Terraform",
    "Redis",
    "Nginx",
    "Figma",
    "Jira",
    "Linux",
    "VS Code",
  ],
  soft: [
    "Team Leadership",
    "Problem Solving",
    "Communication",
    "Agile/Scrum",
    "Mentoring",
    "Technical Writing",
  ],
};

export const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led development of a microservices platform serving 100K+ daily active users",
      "Reduced API response times by 40% through query optimization and caching strategies",
      "Mentored a team of 4 junior developers, conducting code reviews and pair programming sessions",
      "Architected a real-time notification system using WebSockets and Redis Pub/Sub",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: [
      "Built the customer-facing dashboard from scratch using React, TypeScript, and Tailwind CSS",
      "Designed and implemented RESTful APIs handling 50K+ requests/day with Node.js and Express",
      "Integrated third-party services including Stripe, SendGrid, and AWS S3",
      "Improved test coverage from 45% to 85% using Jest and React Testing Library",
    ],
  },
  {
    title: "Junior Developer",
    company: "WebAgency Co.",
    location: "New York, NY",
    startDate: "Aug 2018",
    endDate: "May 2020",
    description: [
      "Developed responsive websites and web applications for 15+ clients across various industries",
      "Collaborated with designers to translate Figma mockups into pixel-perfect implementations",
      "Maintained and updated legacy PHP applications while migrating features to modern React stack",
      "Participated in daily standups, sprint planning, and retrospectives in an Agile environment",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard. Built for scalability with microservices architecture.",
    image: "/images/project-1.jpg",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    github: "https://github.com/johndoe/ecommerce",
    live: "https://ecommerce-demo.johndoe.dev",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop boards, and team analytics. Supports Kanban and Scrum workflows.",
    image: "/images/project-2.jpg",
    stack: ["React", "TypeScript", "GraphQL", "MongoDB", "Socket.io"],
    github: "https://github.com/johndoe/taskmanager",
    live: "https://tasks-demo.johndoe.dev",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps marketers create blog posts, social media content, and email campaigns using natural language processing.",
    image: "/images/project-3.jpg",
    stack: ["Next.js", "Python", "FastAPI", "OpenAI", "Tailwind CSS"],
    github: "https://github.com/johndoe/ai-content",
    live: "https://ai-content.johndoe.dev",
    featured: true,
  },
  {
    title: "DevOps Dashboard",
    description:
      "A monitoring dashboard that aggregates metrics from multiple cloud services, providing real-time alerts and performance insights.",
    image: "/images/project-4.jpg",
    stack: ["React", "D3.js", "Node.js", "Docker", "AWS"],
    github: "https://github.com/johndoe/devops-dash",
    featured: false,
  },
];

export const education = [
  {
    degree: "Bachelor in Applied Computer Science",
    institution: "OsloMet — Oslo Metropolitan University",
    startDate: "2023",
    endDate: "Present",
    description:
      "Studying Applied Computer Science with focus on software development and engineering.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
  },
  {
    name: "Meta Front-End Developer Certificate",
    issuer: "Meta / Coursera",
    date: "2021",
  },
];

export const testimonials = [
  {
    quote:
      "John is one of the most talented developers I've worked with. His ability to break down complex problems and deliver clean, maintainable solutions is exceptional.",
    name: "Sarah Chen",
    title: "Engineering Manager at TechCorp",
    avatar: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Working with John was a game-changer for our startup. He didn't just build features — he helped us think through the architecture and make decisions that scaled with our growth.",
    name: "Michael Rodriguez",
    title: "CTO at StartupXYZ",
    avatar: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "John's technical skills are matched only by his communication and teamwork. He elevated our entire team's capabilities through mentoring and knowledge sharing.",
    name: "Emily Watson",
    title: "Senior Developer at WebAgency",
    avatar: "/images/testimonial-3.jpg",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
