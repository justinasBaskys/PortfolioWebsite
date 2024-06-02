import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import AD999 from "@/public/999AD.png";
import PlightOfIcarus from "@/public/PlightOfIcarus.png";
import GPT3 from "@/public/GPT3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IT, Creative Media & Game Design",
    location: "Evesham College WCG, UK",
    description:
      "During my time at WCG I got my foundations set in programming, computers, networking as well as creating simple games, writing documents and becoming proficient in a multitude of platforms for creating apps/websites.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Bsc (Hons) Computer Games Development",
    location: "University of Westminster, London, UK",
    description:
      "During my time at Westminster it was some of the most fulfilling years academically as well as personally - the course is heavily programming focused while giving opportunities to shine in other areas of development too in forms of group projects and optional modules.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full-Stack Development",
    location: "",
    description:
      "Right now I am mastering industry standard tools that reinforce my web development skills and then I am looking to possibly go into full-stack development professionally whether it will be at a company or freelancer work",
    icon: React.createElement(FaReact),
    date: "December 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "999 AD",
    description:
      "During this group project at university I worked on the GUI, level design, sound effects as well as the blog & documentation parts of the development",
    tags: ["MonoGame", "C#", "OOP", "GitHub", "WordPress"],
    imageUrl: AD999,
    project: "https://ivanpalazzo.itch.io/999ad"
  },
  {
    title: "Plight Of Icarus",
    description:
      "My friend Sam and I participated in a game jam with the theme 'Carpe Diem' where I created the art & UI and he was the programmer",
    tags: ["Unity", "C#", "Aseprite", "Photoshop",],
    imageUrl: PlightOfIcarus,
    project: "https://justinasb.itch.io/plight-of-icarus"
  },
  {
    title: "GPT-3 Theme Website",
    description:
      "This project is one of the more polished websites I've made in terms of front-end design and it was a great challenge learning React and CSS has been used in creative ways",
    tags: ["React", "HTML", "CSS", "Figma"],
    imageUrl: GPT3,
    project: "developershowcase.online"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "C#",
  "C++",
  "Python",
  "Unity",
  "UE4",
  "MonoGame",
  "Maya",
  "Blender",
  "Aseprite",
  "Photoshop",

] as const;