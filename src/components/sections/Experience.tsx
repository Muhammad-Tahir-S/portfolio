import { useState } from "react";
import PageSection from "../PageSection";
import Text from "../Text";
import { usePrevious } from "@/hooks/usePrevious";
import ExperienceTabs from "../ExperienceTabs";
import { useExperienceTransitions } from "@/hooks/gsap/useExperienceTransitions";
import tw from "tailwind-styled-components";
import useWindowDimensions from "@/hooks/useWindowDimension";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Codygo");
  const prevActiveTab = usePrevious(activeTab);

  useExperienceTransitions(activeTab, places, prevActiveTab);

  const activePlace = places.find((p) => p.name === activeTab) || {
    name: "",
    role: "",
    duration: "",
    url: "",
    duties: undefined,
  };
  const { name, role, duration, url, duties } = activePlace;

  const vw = useWindowDimensions();
  const experienceSectionEl = document.querySelector("#experience");
  const leftBackgroundWidth =
    experienceSectionEl && vw.width > 1279
      ? vw.width * 0.6 - 150 - (vw.width - 300) * 0.15
      : experienceSectionEl && vw.width > 1023
      ? vw.width * 0.6 - 150 - (vw.width - 300) * 0.1
      : experienceSectionEl && vw.width > 767
      ? vw.width * 0.6 - 100
      : 0;
  //60% of viewport width - left body padding - (10% or 15% of section width)
  return (
    <PageSection
      className="md:bg-primary-200 md:p-5 md:rounded-md md:drop-shadow-2xl"
      number="02."
      title="Places I've worked."
      leftOffset
      backgroundElement={
        <DarkBackgroundPattern
          style={{
            width: leftBackgroundWidth,
          }}
        />
      }
    >
      <div className="flex flex-col md:flex-row min-h-[300px] ">
        <ExperienceTabs
          items={places.map((p) => p?.name)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <DutyContainer className="">
          <Text variant="H4" color="pri-700">
            {role} <span className="text-secondary-100"> @ </span>
            <span className="relative">
              <UnderlinedLink href={url} target="_blank" rel="noreferrer">
                {name}
              </UnderlinedLink>
            </span>
          </Text>

          <Text variant="p2" color="gray-200" className="italic">
            {duration}
          </Text>

          <ul className="mt-5">
            {duties?.map((duty, i) => {
              let formattedDuty: string | string[] = "";
              if (typeof duty === "string") {
                formattedDuty = duty;
              } else {
                const text = duty.text;
                formattedDuty = text.split("__");
              }
              const [startOfText, hyperlink, remainingText] = formattedDuty;

              return (
                <li key={`${duty}_${i}`} className="relative">
                  <Text
                    variant="p1"
                    color="gray-200"
                    className="ml-6 before:content-['❃'] before:text-secondary-100 before:text-[21px] before:absolute before:top-[-5px] before:left-0 mb-4"
                  >
                    {typeof duty !== "string" ? (
                      <span>
                        {startOfText}
                        <span className="relative">
                          <UnderlinedLink
                            href={duty.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {hyperlink}
                          </UnderlinedLink>
                        </span>
                        {remainingText}
                      </span>
                    ) : (
                      duty
                    )}
                  </Text>
                </li>
              );
            })}
          </ul>
        </DutyContainer>
      </div>
    </PageSection>
  );
}

const DutyContainer = tw.div`
active-tab-content flex-1 px-5 pb-1 
h-[260px] min-h-[260px] max-w-[620px]`;

const UnderlinedLink = tw.a`
cursor-pointer after:absolute after:w-0 
after:top-[100%] after:left-0 after:bg-secondary-100 
hover:after:w-full hover:after:h-[1px] 
hover:after:transition-width after:ease-in 
hover:after:duration-500 text-secondary-100
`;

const DarkBackgroundPattern = tw.div`
hidden md:block absolute h-full bg-primary-100 
left-0 top-0 z-0  rounded-l-md
`;

const places = [
  {
    name: "Codygo",
    role: "Software Engineer",
    duration: "Aug 2022 - Present",
    url: "https://codygo.com",
    duties: [
      "Plan application architectures along with devops team.",
      "Implement pixel-perfect designs to client specification with mordern, scalable code.",
      "Mock implementation of architectural options to determine best fit.",
      "Use a variety of technologies such as React, Next.js, Typescript, AWS Lambda, Node, Express, Chart.js, Cypress, Jest, etc.",
    ],
  },
  {
    name: "Pramie",
    role: "Frontend Developer",
    duration: "Feb 2022 - Jan 2023",
    url: "https://www.linkedin.com/company/pramie-tech/", //change to pramie.xyz once website is back up
    duties: [
      {
        text: "Implemented upgrade to __Bloco v2__.",
        link: "https://stagingv2.bloco.co.uk/",
      },
      {
        text: "Maintained __FirstActive365's__ internal management software.",
        link: "https://firstactive365.com/",
      },
      "Built first version of Virtual Office.",
      "Peer reviewed teammate's code.",
    ],
  },
  {
    name: "CodingBlindspots",
    role: "Frontend Developer Intern",
    duration: "Sep 2021 - Dec 2021",
    duties: ["Implemented feature requests."],
  },
];
