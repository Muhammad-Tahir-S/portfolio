import PageSection from "../PageSection";
import Text from "../Text";

export default function About() {
  return (
    <PageSection number="01." title="About." className="relative min-h-[300px]">
      <div className="md:block hidden absolute group md:right-[-40px] lg:right-0 xl:right-[10%] top-4">
        <div className="relative p-2 w-[260px] h-[260px] transition-all">
          <div className="w-[250px] aspect-square border-2 border-secondary-150 right-0 top-0 rounded-md group-hover:ml-[8px] group-hover:mt-[-8px] transition-all"></div>
          <div className="md:block hidden absolute w-[250px] aspect-square bg-secondary-150 right-4 top-5 rounded-md"></div>
        </div>
      </div>
      <div className="flex justify-between md:w-[60%] w-full">
        <div>
          <Text variant="H4" color="sec-100">
            My first foray into code of any kind happened in 2016; an initial,
            shallow delve into Javascript. Now—after two internships, a couple
            of freelancing gigs, and having worked full time at two Software
            Development companies in Pramie Technologies and Codygo—I can say it
            was a great decision.
          </Text>
          <Text variant="H4" color="sec-100" className="mt-5">
            I love frontend development. I implement pixel-perfect designs
            through modular code that aids maintainabilty and extensibility.
          </Text>
          <Text variant="H4" color="sec-100" className="mt-5">
            Currently dipping my toes in serverside waters, so expect me to be
            able to meet your fullstack needs soon!
          </Text>
        </div>
      </div>
    </PageSection>
  );
}
