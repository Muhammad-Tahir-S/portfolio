import { useLayoutEffect, useState } from "react";
import PageSection from "../PageSection";
import Text from "../Text";
import gsap from "gsap";
import { usePrevious } from "@/hooks/usePrevious";
import ExperienceTabs from "../ExperienceTabs";

export default function About() {
  const [activeTab, setActiveTab] = useState("Codygo");
  const prevActiveTab = usePrevious(activeTab);

  useLayoutEffect(() => {
    //hacky to just animate the left highlight border. find better soln
    const TAB_HEIGHT = 40;
    const prevTabPosition =
      (places.findIndex((p) => p === prevActiveTab) + 1) * TAB_HEIGHT;
    const currentTabPosition =
      (places.findIndex((p) => p === activeTab) + 1) * TAB_HEIGHT;

    gsap.from(".active-tab-border", {
      ease: "power3",
      duration: 0.5,
      y: prevTabPosition ? prevTabPosition - currentTabPosition : undefined,
    });
  }, [activeTab, prevActiveTab]);

  return (
    <PageSection number="02." title="Places I've worked">
      <div className="flex">
        <ExperienceTabs
          items={places}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="flex-1 border border-secondary-100 "></div>
      </div>
    </PageSection>
  );
}

const places = [
  "Codygo",
  "Pramie Technologies",
  "CodingBlindspots",
  "YK-Networks",
];
