"use client";

import tw from "tailwind-styled-components";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

import Text from "@/components/Text";
import Projects from "@/components/sections/Projects";

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
      <Section className="h-[90vh]">
        <div className="flex flex-col">
          <Text variant="L2" color="sec-100">
            Muhammad-Tahir Sanuth.
          </Text>

          <Text variant="L1" color="white">
            Software Developer.
          </Text>
          <Text variant="H5" color="pri-700" className="mt-5">
            I build fullstack, highly performant, accessible applications.
          </Text>
        </div>
      </Section>

      {sections.map((sec) => (
        <Section key={sec.to} id={sec.to}>
          {sec.element}
        </Section>
      ))}
    </div>
  );
}
