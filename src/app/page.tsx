// import { Inter } from '@next/font/google';
import tw from "tailwind-styled-components";

// const inter = Inter({ subsets: ['latin'] });

const Main = tw.div`
bg-red-500 h-[100vh] flex flex-col justify-center
`;

export default function Home() {
  return (
    <>
      <Main>About Section</Main>
      <Main>Experience</Main>
      <Main>Work</Main>
      <Main>Contact</Main>
    </>
  );
}
