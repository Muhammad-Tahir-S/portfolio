import useWindowDimensions from "@/hooks/useWindowDimension";
import tw from "tailwind-styled-components";
import Button from "../Button";
import Text from "../Text";

export default function Intro() {
  return (
    <Section className="h-[90vh] intro mt-0 md:mt-20 lg:mt-10">
      <div className="flex flex-col pr-6 w-[90%] md:w-[63%]">
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
        <div className="mt-10 flex gap-6 w-full lg:w-[80%]">
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
