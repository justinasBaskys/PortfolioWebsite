"use client";
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");


  return ( 
  
  <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-lg"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
  id="about"
  >
    <SectionHeading>About Me</SectionHeading>
    
     {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
    </p>  */}

    <p className="mb-5">
      <span className="italic">After graduating with a degree </span> in{" "}
      <span className="font-medium">Computer Games Development</span> I have been self-teaching{" "}
      <span className="font-medium">Full-Stack Web Development</span>{" "}
      and have taken a keen interest in mastering industry standard languages, libraries and frameworks. During this time I have found myself really enjoying the work-flow of web development all the way through. In my academic life I've built websites/databases and now I've picked up React, Next.js as well as many other tools like Tailwind CSS and Framer Motion which I've really enjoyed using and have seen great results from.
    </p>

    <p className="mb-5">During my journey as a <span className="font-bold">game developer</span> I have worked as a programmer, artist and a designer which has given me a very versatile skillset in all areas of the development lifecycle enhanced by my ability for problem-solving, creativity and independent way of working.
    </p>

    {/* <p className="mb-3">
      <span className="italic">During my journey as a <span className="font-medium">Game Developer</span></span> I worked with languages and engines such as <span className="font-medium">Unity</span> & <span className="font-medium">C#</span>, <span className="font-medium">Unreal Engine 4</span> and <span className="font-medium">C++</span>. The projects I worked on ranged from 3D and 2D side-scroller games to Augmented Reality and VR giving me quite a versatile skillset for software development. Additionally I've worked on 3D & 2D assets with Maya, 3DS Max, Photoshop, Aseprite, SwiftUI for iOS applications as well as putting into action important concepts like <span className="font-medium">Methodologies, AI, Physics, Graphics Programming, Game Networking, Market Analysis and many more...</span>
    </p> */}

    <p className="mb-3">
    <span className="italic">In my free time I enjoy</span> gaming, working out, cooking and more recently resin 3D printing - some models I create in Blender, others find online and then print them and colour them with acrylic paint also I love learning about programming, technology, health and history.
    </p>

    <p className="mb-3">
    <span className="italic">Currently I am looking for a </span><span className="font-bold">full-time position</span> as a <span className="font-bold">software developer</span> 
    </p>

    {/* <p className="mb-3">
      <span className="italic">When I'm not coding</span>, I enjoy playing
      video games, watching movies, and playing with my dog. I also enjoy{" "}
      <span className="font-medium">learning new things</span>. I am currently
      learning about{" "}
      <span className="font-medium">history and philosophy</span>. I'm also
      learning how to play the guitar.
    </p> */}

  </motion.section>
  
  
)}
