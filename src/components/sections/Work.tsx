import PageSection from "../PageSection";
import ProjectCard from "../ProjectCard";
import Text from "../Text";

export default function About() {
  return (
    <PageSection number="03." title="Work">
      <ul className="grid grid-cols-work list-none mt-[50px] gap-[15px] p-0 relative">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </PageSection>
  );
}
