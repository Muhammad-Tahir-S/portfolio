import { useEffect, useState } from "react";
import Text from "./Text";
type Project = {
  title?: string;
  description?: string;
  techStack?: string[];
};
export default function ProjectCard({
  title,
  description,
  techStack,
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
      className="card snake shadow w-full h-full hover:translate-y-[-3px]  transition-all ease-in duration-500 hover:shadow-2xl"
    >
      <div className="inner">
        <Text variant="H3" color={isHovering ? "sec-100" : "pri-700"}>
          {title || "Title"}
        </Text>
      </div>
    </li>
  );
}
