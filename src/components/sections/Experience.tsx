import { useState } from "react";
import PageSection from "../PageSection";
import Text from "../Text";
import { usePrevious } from "@/hooks/usePrevious";
import ExperienceTabs from "../ExperienceTabs";
import { useExperienceTransitions } from "@/hooks/gsap/useExperienceTransitions";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Codygo");
  const prevActiveTab = usePrevious(activeTab);

  useExperienceTransitions(activeTab, places, prevActiveTab);

  const activePlace = places.find((p) => p.name === activeTab) || {
    name: "",
    role: "",
    duration: "",
    url: "",
  };
  const { name, role, duration, url, duties } = activePlace;

  return (
    <PageSection number="02." title="Places I've worked" leftOffset>
      <div className="flex flex-col md:flex-row min-h-[300px]">
        <ExperienceTabs
          items={places.map((p) => p?.name)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="active-tab-content flex-1 px-5 pb-1 h-[260px] min-h-[260px]">
          <Text variant="H4" color="pri-700">
            {role} <span className="text-secondary-100"> @ </span>
            <span className="text-secondary-100 relative">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer after:absolute after:w-0 after:top-[100%] after:left-0 after:bg-secondary-100 hover:after:w-full hover:after:h-[1px] hover:after:transition-width after:ease-in hover:after:duration-500"
              >
                {name}
              </a>
            </span>
          </Text>
          <Text variant="p2" color="gray-200" className="italic">
            {duration}
          </Text>
          <ul className="mt-5">
            {duties?.map((duty, i) => (
              <li key={`${duty}_${i}`} className="relative">
                <Text
                  variant="p1"
                  color="gray-200"
                  className="ml-6 before:content-['❃'] before:text-secondary-100 before:text-[21px] before:absolute before:top-[-5px] before:left-0 mb-4"
                >
                  {duty}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}

const places = [
  {
    name: "Codygo",
    role: "Frontend Engineer",
    duration: "Aug 2022 - Present",
    url: "https://codygo.com",
    duties: [
      "Plan application architectures along with backend and devops teams.",
      "Implement pixel-perfect designs to client specification with mordern, scalable code.",
      "Write tests for pages, components, and network requests.",
      "Use a variety of technologies such as React, Next.js, Typescript, Javascript, Chart.js, Cypress, Jest, etc.",
    ],
  },
  {
    name: "Pramie",
    role: "Frontend Developer",
    duration: "Feb 2022 - Jan 2023",
    url: "https://www.linkedin.com/company/pramie-tech/", //change to pramie.xyz once website is back up
  },
  {
    name: "CodingBlindspots",
    role: "Frontend Developer Intern",
    duration: "Sep 2021 - Dec 2021",
  },
  {
    name: "YK-Networks",
    role: "Frontend Developer Intern",
    duration: "Apr 2021 - Mar 2022",
  },
];
