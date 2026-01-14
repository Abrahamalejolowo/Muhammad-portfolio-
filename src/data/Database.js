import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiNpm,

} from "react-icons/si";
import MohAutos from "../Image/Moh-Autos.png";
import Purity from "../Image/Purity.png"
import listify from "../Image/listify .png"
import Lumina from "../Image/Lumina.png"

export const projects = [
  {
    img: MohAutos,
    title: "MohAutos",
    description:
      "A complete car sales platform that allows users to browse, view, and purchase cars with a clean, modern, and user-friendly interface.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    live: "",
    github: "https://github.com/Abrahamalejolowo/moh-autos.git",
  },
  {
    img: Purity,
    title: "Purity",
    description:
      "A modern and responsive admin dashboard designed to display analytics, manage data, and provide clear insights through a clean UI.",
    tech: ["React", "Tailwind CSS"],
    live: "https://github.com/devsamahd/purity-ui-dashboard",
    github: "https://github.com/devsamahd/purity-ui-dashboard.git",
  },
 {
  img: listify,
  title: "Listify",
  description:
    "A modern task management web app designed to help users organize tasks efficiently with a clean UI and smooth user experience.",
  tech: ["React", "Tailwind CSS"],
  live: "https://listify-gilt.vercel.app",
  github: "https://github.com/Abrahamalejolowo/listify.git",
},
 {
  img: Lumina,
  title: "Lumina",
  description:
    "A modern e-commerce web app designed to provide a seamless shopping experience with a clean UI and intuitive navigation.",
  tech: ["React", "Tailwind CSS"],
  live: "https://lumina-omega.vercel.app",
  github: "https://github.com/Abrahamalejolowo/lumina.git",
},

];





export const frontendSkills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
];

export const backendSkills = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "NPM", icon: SiNpm },
  { name: "Git", icon: FaGitAlt },
 
]
