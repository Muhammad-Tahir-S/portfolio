import useWindowDimensions from "@/hooks/useWindowDimension";
import tw from "tailwind-styled-components";
import Button from "../Button";
import Text from "../Text";

export default function Intro() {
  const vw = useWindowDimensions();
  const IntroSectionEl = document.querySelector(".intro");
  const leftBackgroundWidth =
    IntroSectionEl && vw.width > 1279
      ? vw.width * 0.6 - 150
      : IntroSectionEl && vw.width > 1023
      ? vw.width * 0.6 - 150
      : IntroSectionEl && vw.width > 767
      ? vw.width * 0.6 - 100
      : "90%";

  return (
    <Section className="h-[90vh] intro">
      <div
        style={{ width: leftBackgroundWidth }}
        className="flex flex-col pr-6"
      >
        <Text variant="L2" color="sec-100">
          Muhammad-Tahir Sanuth.
        </Text>

        <Text variant="L1" color="white">
          Software Developer.
        </Text>
        <Text variant="H5" color="pri-700" className="mt-5">
          I build fullstack, highly performant, accessible applications.
          Presently working on the Addressable product at Codygo.
        </Text>
        <div className="mt-10 flex gap-6 w-full">
          <a href="#contact" className="w-[50%]">
            <Button variant="secondary" className="w-full py-5">
              Contact
            </Button>
          </a>
          <a href="#experience" className="w-[50%]">
            <Button className="w-full py-5">Experience</Button>
          </a>
        </div>
      </div>
    </Section>
  );
}

const Section = tw.section`
 items-start md:py-[100px] sm:py-[80px] py-[60px]
flex flex-col justify-center 
`;
