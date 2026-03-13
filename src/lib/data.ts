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

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
