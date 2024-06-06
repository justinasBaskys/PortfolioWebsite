"use client";
import { webSkillsData, gameSkillsData, generalSkillsData } from '@/lib/data';
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
};

type SkillItem = {
    skill: string;
    type: 'Web' | 'Game' | 'General';
};

type HeaderItem = {
    type: 'header';
    text: string;
};

type CombinedItem = SkillItem | HeaderItem;

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    // Combine all skills into one array with headers
    const allSkillsWithHeaders: CombinedItem[] = [
        { type: 'header', text: 'Web' },
        ...webSkillsData.map(skill => ({ skill, type: 'Web' } as SkillItem)),
        { type: 'header', text: 'Game' },
        ...gameSkillsData.map(skill => ({ skill, type: 'Game' } as SkillItem)),
        { type: 'header', text: 'Other' },
        ...generalSkillsData.map(skill => ({ skill, type: 'General' } as SkillItem)),
    ];

    return (
        <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>My skills</SectionHeading>

            <ul className="flex flex-wrap justify-center mb-2 mt-2 gap-2 text-lg text-gray-800">
                {
                    allSkillsWithHeaders.map((item, index) => (
                        item.type === 'header' ? (
                            <li key={index} className="w-full">
                                <p className="text-xl font-medium capitalize mb-1 mt-1 text-center font-style: italic dark:text-white">{item.text}</p>
                            </li>
                        ) : (
                            <motion.li
                                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                {item.skill}
                            </motion.li>
                        )
                    ))
                }
            </ul>
        </section>
    );
}
