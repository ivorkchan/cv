import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yue Cheng",
  initials: "CY",
  location: "Toronro, Canada",
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
      degree: "BS in Computer Science and Media Studies",
      start: "2023",
      end: "PRESENT",
    },
    {
      school: "Tongji University",
      degree: "BE in Industrial Design",
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
        "Contributed to nationally funded research projects, authored academic papers, and conducted research on rural revitalization, urban renewal, and traditional architecture preservation. Assisted in the conceptual design of urban and rural planning projects.",
    },
    {
      company: "ECOGENICA",
      link: "https://ecogenica.com.au",
      badges: ["Remote"],
      title: "Designer",
      start: "2016",
      end: "2018",
      description:
        "Performed image and video post processing with Adobe suite, created engineering drawings and designs with AutoCAD, and designed and calculated lighting solutions using DIALux.",
    },
  ],
  skills: [
    "HTML/CSS/JS/TS",
    "Tailwind/Sass",
    "React/Next.js",
    "Astro",
    "Python",
    "Java",
    "Git",
    "Shell",
    "Vim",
    "LaTeX",
    "Regular Expressions",
    "Office Suite",
    "Adobe Suite",
    "Figma",
    "Rhino",
    "SketchUp",
    "3ds Max",
    "AutoCAD",
  ],
  projects: [
    {
      title: "NeoDB Showcase",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind"],
      description:
        "A bookshelf website built with shadcn/ui, fetching user data from NeoDB via API.",
      link: {
        label: "github.com",
        href: "https://neodb.not.cy",
      },
    },
    {
      title: "not.cy",
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind",
        "MDX",
        "Contentlayer",
      ],
      description:
        "A static blog blending modern web technologies with a focus on performance and aesthetic design.",
      link: {
        label: "github.com",
        href: "https://not.cy",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Next.js", "TypeScript", "React", "Tailwind"],
      description:
        "An online portfolio showcasing early student work built with nobelium, with content curated in and stored in Notion.",
      link: {
        label: "github.com",
        href: "https://library.not.cy/projects",
      },
    },
  ],
} as const;
