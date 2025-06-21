import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Prathviraj Chouhan — Frontend - Web Developer",
  author: "Prathvi Portfolio",
  description:
    "I’m Prathviraj, a Software Developer at Digiprima Technologies, focusing on Frontend Development. I bring creative designs to life with clean, functional code — and after hours, I enjoy developing my own side projects.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/prathviraj-chouhan-b15644257/" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Prathviraj Chouhan",
    specialty: "Frontend - Web Developer",
    summary:
      "Software Developer at Digiprima Technologies, focusing on Frontend Development. I bring creative designs to life with clean, functional code — and after hours, I enjoy developing my own side projects.",
    email: "chouhanprathviraj650@gmail.com",
  },
  skills: [
    {
      name: "React.js",
      linkPreview: "https://react.dev/",
      image: "/reactjs.svg",
      description: "Framework for building UI with components.",
    },
    {
      name: "Next.js",
      linkPreview: "https://nextjs.org/",
      image: "/nextjs.png",
      description: "Full-stack framework with routing and server-side rendering.",
    },
    {
      name: "Javascript",
      linkPreview: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image: "/javascript.png",
      description: "The scripting language for adding interactive functionality.",
    },
    {
      name: "Angular",
      linkPreview: "https://angular.io/",
      image: "/angular.png",
      description: "Platform for building scalable enterprise applications.",
    },
    {
      name: "Tailwind CSS",
      linkPreview: "https://tailwindcss.com/",
      image: "/tailwind.png",
      description: "A utility-first CSS framework for faster UI styling.",
    },
    {
      name: "Bootstrap",
      linkPreview: "https://getbootstrap.com/",
      image: "/bootstrap.png",
      description: "Framework for designing responsive, mobile-first sites.",
    },
    {
      name: "HTML",
      linkPreview: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      image: "/html.png",
      description: "The standard markup language for creating web pages.",
    },
    {
      name: "CSS",
      linkPreview: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      image: "/css.png",
      description: "Cascading Style Sheets for designing UI.",
    },
    {
      name: "Git / GitHub",
      linkPreview: "https://git-scm.com/",
      image: "/git.png",
      description: "Version control and collaborative platform for code.",
    },
    {
      name: "Bitbucket",
      linkPreview: "https://bitbucket.org/",
      image: "/bitbucket.jpg",
      description: "Source code repository and team collaboration tool.",
    },
    {
      name: "Vercel",
      linkPreview: "https://vercel.com/",
      image: "/vercel.png",
      description: "Platform for frontend frameworks and static sites.",
    },
    {
      name: "Jira Board",
      linkPreview: "https://www.atlassian.com/software/jira",
      image: "/bitbucket.jpg",
      description: "Project management tool for team collaboration.",
    },
  ],


  experience: [
    {
      company: "Digiprima Technologies",
      position: "Frontend - Web Developer",
      startDate: "June 2023",
      endDate: "Present",
      companyDescription: "Digiprima is a service-based IT company that focuses on delivering innovative and scalable digital solutions for a wide range of clients.",
      summary: [
        "Designed and developed scalable, high-performance user interfaces using React.js, Next.js, and other modern frontend technologies, ensuring an interactive and smooth user experience.",
        "Optimized application performance by employing best practices and fine-tuning code, resulting in faster load times and a more responsive UI, while seamlessly integrating with backend services through well-structured API endpoints.",
        "Implemented responsive design and accessibility best practices to provide an enjoyable experience across all devices and for all users.",
        "Worked closely with UI/UX designers and backend engineers to translate business requirements into functional, visually-appealing, and user-centric products.",
        "Mentored junior developers, fostered a collaborative team culture, and provided technical guidance, code reviews, and support to aid their professional growth, following Agile methodologies.",
        "Managed project builds, deployments, and CI/CD pipelines to enable automated, reliable, and efficient delivery of new features and bug fixes.",
        "Collaborative team experience includes both frontend and backend components — I’m also familiar with Python (Django Rest Framework) — allowing me to contribute effectively across the stack when needed."
      ],
    },
  ],
  projects: [
    {
      name: "AlgoSparks",
      summary: "A trading automation platform enabling traders to execute strategies seamlessly through third-party broker integrations. Clients canselect brokers and trade with custom strategies via an intuitive user interface.",
      linkPreview: "https://sparks.algoview.in/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/algo-sparks.png",
    },
    {
      name: "Pearl Streets",
      summary: "Pearl Streets connects users with professionals offering a range of services, from food and travel to relaxation, art, and more — with roles for Super Admin, merchants, and customers to keep everything running smoothly.",
      linkPreview: "http://23.23.88.239:7002/reels",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/pearl-streets-user.png",
    },
    {
      name: "Labrador AI",
      summary: "Labrador AI is a digital transformation platform for small and medium-sized businesses — especially restaurants — offering websites, digital ordering, SMS marketing, VOIP, POS systems, and easy integration with tools like DoorDash and Google Maps.",
      linkPreview: "https://www.labrador.ai/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/labradorAI.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Prathviraj, Results-oriented Frontend Developer with 2+ years of experience in designing and developing dynamic, interactive, and responsive user interfaces using React.js, Next.js, and modern frontend technologies. Skilled in optimizing application performance and integrating RESTful APIs to enable seamless functionality across platforms. Collaborative team player with a strong ability to work alongside cross-functional stakeholders to deliver high-caliber UI solutions that align with business goals. Passionate about writing clean, maintainable code, following industry best practices, and continually enhancing technical skills to keep up with evolving technologies and contribute to innovative and scalable digital products.
    `,
    image: "/alejandro-big.jpg",
  },
};

