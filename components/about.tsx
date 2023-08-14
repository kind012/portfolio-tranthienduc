"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me </SectionHeading>
      <p className="mb-3">
        After graduating from <span className="font-medium">High school</span>,
        I decided to pursue my passion for programming. I enrolled in a college
        and learned coding and software related things to become{" "}
        <span className="font-medium">front-end developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js, Typescript</span>. I
        also have a small passion for design. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I like listening to
        music and I enjoy it, watching movies, I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
};

export default About;
