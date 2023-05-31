import PageSection from "../PageSection";
import ProjectCard from "../ProjectCard";
import Text from "../Text";

export default function About() {
  return (
    <PageSection number="01." title="About">
      <div className="flex justify-between px-10 w-full aspect-square mx-auto">
        {/* <div className="w-[50%]">
          <div className="h-[50%] border-b border-r rounded-sm border-secondary-300 w-full">
            <Text variant="p2" color="pri-700">
              I began my first web-dev course in the beginning of 2020
            </Text>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-end">
          <div className="h-[50%]  border-secondary-300 w-full "></div>
        </div> */}
      </div>
    </PageSection>
  );
}
