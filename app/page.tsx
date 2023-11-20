import { Intro, About, Projects, Skills, Qualification } from "@/sections";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Qualification />
    </main>
  );
}
