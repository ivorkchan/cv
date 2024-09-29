import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yue Cheng",
  initials: "CY",
  location: "Toronto, Canada",
  locationLink: "https://www.google.com/maps/place/Toronto",
  about:
    "Student at University of Toronto, pursuing a Bachelor's degree in Computer Science.",
  summary:
    "With professional design and research skills and a strong passion for computer science, she is seeking career opportunities that combine these strengths to create user-friendly, robust, versatile, and aesthetically pleasing products.",
  avatarUrl: "https://avatars.githubusercontent.com/u/19368630?v=4",
  personalWebsiteUrl: "https://not.cy",
  contact: {
    email: "ivork.cheng@mail.utoronto.ca",
    tel: "+1 (437) 419-6710",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ivorkchan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ivork/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Toronto",
      degree: "Bachelor of Science in Computer Science; GPA: 3.90/4.0",
      start: "2023",
      end: "PRESENT",
    },
    {
      school: "Tongji University",
      degree: "Bachelor of Engineering in Industrial Design",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Chongqing University",
      link: "https://english.cqu.edu.cn",
      badges: [],
      title: "Research Assistant",
      start: "2021",
      end: "2022",
      description:
        "Contributed to 2 nationally funded research projects, co-authored 5 academic papers, and assisted in the conceptual design of 3 design projects.",
    },
  ],
  skills: [
    "Python",
    "Java",
    "C/C++",
    "HTML/CSS",
    "JavaScript/TypeScript",
    "SQL",
    "React",
    "Next.js",
    "Tailwind",
    "Node.js",
    "GraphQL",
    "MongoDB",
    "Git",
    "Docker",
    "Terraform",
    "AWS/Azure",
    "Shell",
    "Vim",
    "Regular Expression",
  ],
  projects: [
    {
      title: "not.cy",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      description:
        "A static blog blending modern web technologies with a focus on performance and aesthetic design.",
      link: {
        label: "github.com",
        href: "https://not.cy",
      },
    },
    {
      title: "NeoDB Showcase",
      techStack: ["Next.js", "TypeScript", "Tailwind"],
      description:
        "A bookshelf website built with shadcn/ui, utilizing NeoDB API.",
      link: {
        label: "github.com",
        href: "https://neodb.not.cy",
      },
    },
  ],
} as const;
