import { Project } from "@/types";
import { AddProjectCardTails } from "@/utils/funcs/addProjectCardTails";
import { BeakerIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Text from "./Text";

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
      <a href={url} target="_blank" rel="noreferrer">
        <div className="inner">
          <div className="flex justify-between">
            <BeakerIcon className="w-8 h-8 text-secondary-100" />
          </div>

          <Title variant="H3" color={isHovering ? "sec-100" : "pri-700"}>
            {title || "Title"}
          </Title>

          <Description variant="p1" color={isHovering ? "white" : "pri-600"}>
            {description}
          </Description>

          <div className="flex gap-2 mt-[15px]">
            {techStack?.map((stack) => (
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
      </a>
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
h-[110px] overflow-auto
`;
