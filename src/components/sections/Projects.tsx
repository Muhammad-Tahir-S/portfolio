import { Project } from "@/types";
import tw from "tailwind-styled-components";
import PageSection from "../PageSection";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <PageSection
      className="relative"
      number="03."
      title="Things I've Worked On"
      backgroundElement={<DarkCircleBackground />}
    >
      <ProjectList>
        {projects.map(({ title, description, techStack, url }, i) => (
          <ProjectCard
            key={i}
            title={title}
            description={description}
            techStack={techStack}
            url={url}
          />
        ))}
      </ProjectList>
    </PageSection>
  );
}

const ProjectList = tw.ul`
grid grid-cols-work w-min-[400px]:grid-cols-work-sm 
list-none mt-[24px] gap-[15px] p-0 relative
`;

const DarkCircleBackground = tw.div`
hidden md:block w-[300px] aspect-square 
bg-primary-100 absolute left-0 ml-[-140px] 
top-0 mt-[-70px] rounded-full z-0

`;

const projects: Project[] = [
  {
    title: "Addressable",
    description:
      "A cross between Web2 and Web3. Track audiences from social-media interactions to their on-chain activities.",
    techStack: ["React", "AWS", "Tailwind", "Zustand"],
    url: "https://www.addressable.io/product",
  },
  {
    title: "Bloco v2",
    description: "Book tickets to awesome events worldwide.",
    techStack: ["Next.js", "ThemeUI", "Mobx"],
    url: "https://stagingv2.bloco.co.uk/",
  },
  {
    title: "FirstActive365",
    description: "Hospital management software for FirstActive365.",
    techStack: ["React", "Styled Components", "Redux"],
    url: "https://firstactive365.com/",
  },
  {
    title: "Fay The Fairy.",
    description:
      "Create digital cards—greeting, anniversary, birthday, etc—and attach them to physical gifts. (in development).",
    techStack: ["React", "Tailwind", "XState"],
  },
];
