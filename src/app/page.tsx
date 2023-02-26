"use client";

import tw from "tailwind-styled-components";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

import Text from "@/components/Text";

const Section = tw.section`
h-[100vh] min-h-[100vh] items-start 
flex flex-col justify-center py-[100px]
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
    element: <Work />,
  },
  {
    to: "contact",
    element: <Contact />,
  },
];

export default function Home() {
  return (
    <>
      <Section>
        <div className="flex flex-col">
          <Text variant="L2" color="sec-100">
            Muhammad-Tahir Sanuth.
          </Text>

          <Text variant="L1" color="white">
            React Web Developer.
          </Text>
          <Text variant="H5" color="pri-700" className="mt-5">
            I build user interfaces into highly performant, accessible
            applications.
          </Text>
        </div>
      </Section>

      {sections.map((sec) => (
        <Section key={sec.to} id={sec.to}>
          {sec.element}
        </Section>
      ))}
    </>
  );
}
