import About from "@/components/About";
import tw from "tailwind-styled-components";
import Text from "@/components/Text";

const Section = tw.section`
h-[100vh] min-h-[100vh] items-start 
flex flex-col justify-center
`;

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
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">Experience</Section>
      <Section id="work">Work</Section>
      <Section id="contact">Contact</Section>
    </>
  );
}
