"use client";

import Image from 'next/image'
import React from 'react'
import Photo from "@/public/JustinasBaskysPhoto.png"
import LT from "@/public/LT.png";
import UK from "@/public/UK.png";
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin, } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext();


  return (
    <section ref={ref} 
    id="home" 
    className="mb-28 max-w-[48rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className=" flex items-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image src= {Photo} 
                        alt="Justinas Portrait"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
                    />
                </motion.div>
                <motion.span className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition= {{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                }}
                >
                    👋
                </motion.span>
            </div>
        
        </div>
        <motion.h1 className="mb-10 mt-9 px-4 text-2xl font-medium !leading=[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        >
        
        Hello, I'm Justinas. I'm a{" "}
        <span className="italic">full-stack and game developer.</span> I studied at University of Westminster graduating in{" "}
        <span className="font-bold">Bsc (Hons) Computer Games Development.</span> My focus is{" "}
        <span className="underline underline-offset-8">React (Next.js) & Unity</span>.
        

        </motion.h1>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition ={{
            delay: 0.1,
        }}>
            <Link href="#contact" className="group  bg-gray-900 text-white px-7 borderBlack py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:border-white/20">Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"
            onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}
            /> </Link>
            
            {/* <a className="group flex flex-col items-center bg-white px-3 py-1.5 gap-1 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80 text-sm" href="/JustinasBaskysCV.pdf" download={true}>
            <div className="mb-1 translate-y-1.5">
                Download CV
            </div>
            <div className="flex space-x-2">
                <a className="group p-0 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack opacity-50 dark:bg-white/10 dark:text-white/80 text-sm overflow-hidden hover:opacity-100" href="/JustinasBaskysCV.pdf" download={true} style={{ width: '32px', height: '32px' }}>
                <Image src={LT} alt="LT Image" width={32} height={32} className="object-cover rounded-full scale-150 " />
                </a>
                <a className="group p-0 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack opacity-50 dark:bg-white/10 dark:text-white/80 text-sm overflow-hidden hover:opacity-100" href="/JustinasBaskysCV.pdf" download={true} style={{ width: '32px', height: '32px' }}>
                <Image src={UK} alt="UK Image" width={32} height={32} className="object-cover rounded-full scale-200 opacity-70" />
                </a>
            </div>
            </a> */}
            
            {/* <button className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full bg-opacity-0 outline-none borderBlack dark:bg-white/0 dark:text-white/100 dark:border-white/20">Download CV <HiDownload className='opacity-60 group-hover:translate-y-0.5 transition dark:text-white'/>
            <a className="group flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack opacity-50 dark:bg-white/10 dark:text-white/80 text-sm overflow-hidden hover:opacity-100" href="/JustinasBaskysCVLT.pdf" download={true} style={{ width: '32px', height: '32px' }}>
                <Image src={LT} alt="LT Image" width={32} height={32} className="object-cover rounded-full scale-150 " />
                </a>
                <a className="group flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack opacity-50 dark:bg-white/10 dark:text-white/80 text-sm overflow-hidden hover:opacity-100" href="/JustinasBaskysCV.pdf" download={true} style={{ width: '32px', height: '32px' }}>
                <Image src={UK} alt="UK Image" width={32} height={32} className="object-cover rounded-full scale-200 opacity-70" />
                </a>
            </button> */}

            <button className="group relative bg-white px-7 py-1 flex flex-col items-center gap-1 rounded-full bg-opacity-0 outline-none borderBlack dark:bg-white/0 dark:text-white/100 dark:border-white/20" >
                <span className="translate-y-1">Download CV</span>
                <MdKeyboardDoubleArrowDown className='opacity-60 group-hover:translate-y-0.5 transition dark:text-white'/>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 p-3 mt-1 shadow-md scale-y-0 group-hover:scale-y-100 origin-top duration-200 flex flex-row bg-white rounded-full dark:bg-white/10 dark:bg-opacity-20">
                    <a className="flex items-center rounded-full outline-none mr-2 focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack opacity-50 dark:bg-white/10 dark:text-white/80 text-sm overflow-hidden hover:opacity-100" href="/JustinasBaskysCVLT.pdf" download={true} style={{ width: '32px', height: '32px' }}>
                        <Image src={LT} alt="LT Image" width={32} height={32} className="object-cover rounded-full scale-150 " />
                    </a>
                    <a className="flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack opacity-50 dark:bg-white/10 dark:text-white/80 text-sm overflow-hidden hover:opacity-100" href="/JustinasBaskysCV.pdf" download={true} style={{ width: '32px', height: '32px' }}>
                        <Image src={UK} alt="UK Image" width={32} height={32} className="object-cover rounded-full scale-200 opacity-70" />
                    </a>
                </div>
            </button>
            

            <a className="bg-white px-7 py-3 flex text-gray-700 items-center gap-2 rounded-full text-[1.85rem] focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80" href="https://www.linkedin.com/in/justinas-baskys-a14060171/" target="_blank">
                <BsLinkedin />
            </a>

            <a className="bg-white px-7 py-3 flex text-gray-700 items-center gap-2 rounded-full text-[2rem] focus:scale-105 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80" href="https://github.com/justinasBaskys" target="_blank">
                <FaGithubSquare />
            </a>

        </motion.div>
    </section>
  )
}
