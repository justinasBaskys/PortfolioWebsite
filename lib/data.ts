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
  /*{
    title: "Full-Stack Development",
    location: "",
    description:
        "Right now I am mastering industry standard tools that reinforce my web development skills and then I am looking to possibly go into full-stack development professionally whether it will be at a company or freelancer work",
    icon: React.createElement(FaReact),
    date: "December 2024 - Present",
  },*/
  {
    title: "Intern Unity Developer",
    location: "Chark Studio, Kaunas",
    description:
        "Game mechanics and shader creation using Unity, Shader Graph and HLSL. During my time at Chark Studio I was creating prototypes based on the director's ideas and feedback. I was tasked with creating a unique shader/game mechanic which we didn't know if it would be possible to create at the time and I managed to come up with a great result",
    icon: React.createElement(FaReact),
    date: "November 2024 - January 2025",
  },
  {
    title: "Bsc (Hons) Computer Games Development",
    location: "University of Westminster, London, UK",
    description:
      "I worked with languages and engines such as Unity & C#, Unreal Engine 4 & C++. The projects I worked on ranged from 3D and 2D side-scroller games to Augmented Reality and VR giving me quite a versatile skillset for software development. Additionally I've worked on 3D & 2D assets with Maya, 3DS Max, Photoshop, Aseprite, SwiftUI for iOS applications as well as putting into action important concepts like Methodologies, AI, Physics, Graphics Programming, Game Networking, Market Analysis and many more...",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "BTEC IT, Creative Media & Game Design",
    location: "Evesham College WCG, UK",
    description:
      "During my time at WCG I gained foundation knowledge about programming, computers, networking as well as creating simple games & their designs, writing documents and became proficient in a multitude of platforms for creating apps and websites. Additionally I learned about types of information, organizational security & acts regarding handling of information by organizations",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2019",
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
    project: "https://developershowcase.online/"
  },
] as const;

export const gameSkillsData = [
  "Unity",
  "Unreal Engine 4",
  "C#",
  "C++",
  "MonoGame",
  "Aseprite",
] as const;

export const webSkillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "PHP",
  "SQL",
  "Tailwind",
  "Framer Motion",
  "HTML",
  "CSS",
] as const;

export const generalSkillsData = [
  "Git",
  "Photoshop",
  "Maya",
  "Blender",
  "Python",
] as const;