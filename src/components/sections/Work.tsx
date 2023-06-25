import PageSection from "../PageSection";
import ProjectCard from "../ProjectCard";

export default function Work() {
  return (
    <PageSection number="03." title="Projects">
      <ul className="grid grid-cols-work w-min-[400px]:grid-cols-work-sm list-none mt-[24px] gap-[15px] p-0 relative">
        <ProjectCard />
        <ProjectCard description="kshjbd" />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </PageSection>
  );
}
