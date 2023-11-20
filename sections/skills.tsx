"use client";
import React from "react";
import SectionHeading from "../components/section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/animation";

const Skills = () => {
  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white boderBlack rounded-xl py-3 px-5
            dark:bg-white/10 dark:text-white/80
            "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
