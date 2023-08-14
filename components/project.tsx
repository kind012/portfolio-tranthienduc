"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  linkrepo,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className=" group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-200 transition sm: group-even:even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] mb-5">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p
            className="mt-1 leading-relaxed text-gray-700 dark:text-white/70 
          "
          >
            {description}
            <a href={linkrepo}>
              Github.
              <BsGithub />
            </a>
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-normal text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Link href="">
          <Image
            src={imageUrl}
            alt="project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl  group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
          
          transition group-hover:scale-[1.04] 
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2 

          group-even:-right-[initial] group-even:-left-40 
        "
          />
        </Link>
      </section>
    </motion.div>
  );
};

export default Project;
