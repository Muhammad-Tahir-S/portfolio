// import { Inter } from '@next/font/google';
import tw from "tailwind-styled-components";

// const inter = Inter({ subsets: ['latin'] });

const Section = tw.section`
bg-red-500 h-[100vh] flex flex-col justify-center
`;

export default function Home() {
  return (
    <>
      <Section id="about">About Section</Section>
      <Section id="experience">Experience</Section>
      <Section id="work">Work</Section>
      <Section id="contact">Contact</Section>
    </>
  );
}
