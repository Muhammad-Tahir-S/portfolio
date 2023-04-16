import PageSection from "../PageSection";
import ProjectCard from "../ProjectCard";

export default function Work() {
  return (
    <PageSection number="03." title="Projects">
      <ul className="grid grid-cols-work list-none mt-[24px] gap-[15px] p-0 relative">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </PageSection>
  );
}
