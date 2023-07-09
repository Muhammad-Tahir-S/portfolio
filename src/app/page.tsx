"use client";

import tw from "tailwind-styled-components";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

import Projects from "@/components/sections/Projects";
import Intro from "@/components/sections/Intro";

const Section = tw.section`
 items-start md:py-[100px] sm:py-[80px] py-[60px]
flex flex-col justify-center 
`;

const sections = [
  {
    to: "about",
    element: <About />,
  },
  {
    to: "experience",
    element: <Experience />,
  },
  {
    to: "work",
    element: <Projects />,
  },
  {
    to: "contact",
    element: <Contact />,
  },
];

export default function Main() {
  return (
    <div className="relative">
      {typeof window === "object" ? <Intro /> : undefined}

      {sections.map((sec) => (
        <Section key={sec.to} id={sec.to}>
          {sec.element}
        </Section>
      ))}
    </div>
  );
}
