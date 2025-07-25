"use client";
import { useRef, useEffect, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, project }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Only run animation after mount to prevent hydration mismatch
  const animatedStyle = hasMounted
      ? {
        scale,
        opacity,
      }
      : {
        scale: 1,
        opacity: 1,
      };

  return (
      <motion.div
          ref={ref}
          style={animatedStyle}
          className="group mb-3 sm:mb-8 last:mb-0"
      >
        <a href={project} target="_blank">
          <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                    <a
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                    >
                      {tag}
                    </a>
                ))}
              </ul>
            </div>

            <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] group-even:-left-40"
            />
          </section>
        </a>
      </motion.div>
  );
}
