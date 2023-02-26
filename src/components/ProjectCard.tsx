import { BeakerIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
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
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll(`.card`);
    // Add the tails to each card
    cards?.forEach((card) => {
      [`top`, `right`, `bottom`, `left`].forEach((side) => {
        const tail = document.createElement(`div`);
        tail.classList.add(`tail`, side);
        card.appendChild(tail);
      });
    });
  }, []);

  return (
    <li
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="card snake shadow w-full h-full hover:scale-[1.02]  transition-all ease-in duration-200 hover:shadow-2xl"
    >
      <div className="inner">
        <div className="flex justify-between">
          <BeakerIcon className="w-8 h-8 text-secondary-100" />
        </div>

        <a href={"url"} target="_blank" rel="noreferrer">
          <Text
            variant="H3"
            color={isHovering ? "sec-100" : "pri-700"}
            className="transition-colors ease-in duration-200 mt-[35px]"
          >
            {title || "Title"}
          </Text>
        </a>

        <Text
          variant="p1"
          color={isHovering ? "white" : "pri-600"}
          className="mt-[10px] transition-colors ease-in duration-200"
        >
          {description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
        </Text>

        <div className="flex gap-2 mt-[15px]">
          {(techStack || ["React", "CSS", "HTML"])?.map((stack) => (
            <Text
              key={stack}
              variant="p3"
              className="transition-colors ease-in duration-200"
              color={isHovering ? "gray-300" : "pri-700"}
            >
              {stack}
            </Text>
          ))}
        </div>
      </div>
    </li>
  );
}
