import { AddProjectCardTails } from "@/utils/funcs/addProjectCardTails";
import { BeakerIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Text from "./Text";
type Project = {
  title?: string;
  description?: string;
  techStack?: string[];
  url?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  url,
}: Project) {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    AddProjectCardTails();
  }, []);

  return (
    <Tail
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="inner">
        <div className="flex justify-between">
          <BeakerIcon className="w-8 h-8 text-secondary-100" />
        </div>

        <a href={"url"} target="_blank" rel="noreferrer">
          <Title variant="H3" color={isHovering ? "sec-100" : "pri-700"}>
            {title || "Title"}
          </Title>
        </a>

        {/* <div className="h-full flex flex-col justify-between"> */}
        <Description variant="p1" color={isHovering ? "white" : "pri-600"}>
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
        </Description>

        <div className="flex gap-2 mt-[15px]">
          {(techStack || ["React", "CSS", "HTML"])?.map((stack) => (
            <Text
              key={stack}
              variant="p3"
              className="transition-colors ease-in duration-200"
              color={isHovering ? "gray-300" : "gray-200"}
            >
              {stack}
            </Text>
          ))}
        </div>
      </div>
      {/* </div> */}
    </Tail>
  );
}

const Tail = tw.li`
card snake shadow w-full h-full hover:scale-[1.02]  
transition-all ease-in duration-200 hover:shadow-2xl
`;

const Title = tw(Text)`
transition-colors ease-in duration-200 mt-4 
md:mt-[35px]`;

const Description = tw(Text)`
mt-[10px] transition-colors ease-in duration-200
h-[140px] overflow-auto
`;
