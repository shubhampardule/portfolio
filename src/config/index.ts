import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Shubham Pardule — Full Stack Developer",
  author: "Shubham Pardule",
  description:
    "Full Stack Developer building production-ready web apps with modern frontend, robust backend systems, and cloud-ready infrastructure.",
  lang: "en",
  siteLogo: "/400x400.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
    { text: "Game", href: "/game", icon: "gamepad" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/ShubhamPardule" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/shubhampardule/" },
    { text: "Github", href: "https://github.com/shubhampardule" },
  ],
  socialImage: "/Screenshot (162).png",
  canonicalURL: "https://shubhampardule.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Shubham Pardule",
    specialty: "Full Stack Developer",
    summary:
      "I build production-ready, feedback-driven web products using React, Next.js, Express, and cloud-native tooling, with a strong focus on performance and user experience.",
    email: "shubhamp2504@gmail.com",
  },
  experience: [
    {
      company: "Independent Projects",
      position: "Full Stack Developer",
      startDate: "2024",
      endDate: "Present",
      summary: [
        "No formal industry experience yet, but I actively build and ship complete products end-to-end.",
        "Focused on practical engineering: clean UI, scalable backend APIs, and robust testing through real user feedback.",
        "Constantly improving through production deployments, iterative releases, and hands-on debugging.",
      ],
    },
  ],
  projects: [
    {
      name: "TransmitFlow",
      summary:
        "A fast and secure P2P file-sharing web app that uses WebRTC DataChannels, QR-based pairing, and STUN/TURN fallback to transfer files directly between devices without storing data on servers.",
      linkPreview: "https://transmitflow.vercel.app",
      linkSource: "https://github.com/shubhampardule/transmitflow",
      image: "/Screenshot (162).png",
    },
  ],
  about: {
    description: `
      Hi, I’m Shubham Pardule, a Full Stack Developer who loves turning ideas into real, production-ready products. I focus on building clean, practical solutions that users can rely on.

      I am currently focused on deepening my full-stack skills through real-world product development, deployment, and continuous feedback loops.
    `,
    image: "/1000x1200.jpg",
    techStackGroups: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express", "Python", "Go", "MongoDB", "C++", "C"],
      },
      {
        title: "Cloud",
        items: ["AWS", "Google Cloud", "Azure", "Docker"],
      },
      {
        title: "Tools",
        items: ["Git", "GitHub", "Postman"],
      },
    ],
  },
};

// #5755ff
