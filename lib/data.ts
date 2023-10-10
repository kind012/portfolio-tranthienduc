import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import PortfolioPicture from "@/public/MyPortfolioPic.png";
import Blog from "@/public/blog.png";
import TodoApp from "@/public/TodoApp.png";

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
    name: "Qualification",
    hash: "#qualification",
  },
] as const;

export const qualificationData = [
  {
    title: "Can Tho Vocational College",
    description:
      "I graduated after 2 years and 6 months of studying. I learned front-end stuff here like HTML, CSS, JS.",
    icon: React.createElement(LuGraduationCap),
    date: "10/2020 - 4/2023",
  },
  {
    title: "F8, Evondev, Eeasy FrontEnd",
    description:
      "I've been learning great things about ReactJS, NextJS, Typescript and Redux on these channels, combining basic to advanced exercises and digging deeper into the Docs of these frameworks' websites.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio",
    description:
      "I worked as a full-stack developer on this startup project for 2 week. This is my personal portfolio, mainly this project I use NextJS, Typescript and style with TailwindCSS  and Framer Motion to animate. Check my ",
    tags: ["Next.js", "Framer Motion", "TailwindCSS", "Typescript"],
    imageUrl: PortfolioPicture,
    linkapp: "https://github.com/kind012/portfolio-tranthienduc",
  },
  {
    title: "Mini Blog",
    description:
      "  This is my basic blog, mainly this project I use ReactJS and style with Tailwind , store data on Firebase , hooks in ReactJS, this is simply show newly created blogs, blogger creation page with tags, and a detail blog page. Check my ",
    tags: ["React", "TailwindCSS", "Firebase"],
    imageUrl: Blog,
    linkapp: "https://blog-duc.netlify.app/",
  },
  {
    title: "Todo App",
    description:
      "A public web application for creating to-do lists, the web application includes features such as create todo, change task, and delete task. Check my ",
    tags: ["Next.js", "MongoDB", "TailwindCSS"],
    imageUrl: TodoApp,
    linkapp: "https://todoapp-duc-new.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "MUI",
  "TailwindCSS",
  "NODEJS",
  "WORDPRESS",
  "SASS",
  "SQL",
] as const;
