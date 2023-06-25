"use client";
import "./globals.css";
import { Open_Sans } from "@next/font/google";

import React, { ReactNode, useRef, useState } from "react";
import LayoutHeader from "@/components/Header";
import Logo from "@/assets/icons/load-logo.svg";
import Mail from "@/assets/icons/mail.svg";
import Github from "@/assets/icons/github.svg";
import LinkedIn from "@/assets/icons/linked-in.svg";
import FloweryLink from "@/assets/icons/flowery-link.svg";
import tw from "tailwind-styled-components";
import { useHeaderTransitions } from "@/hooks/gsap/useHeaderTransitions";
import clsx from "clsx";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

const GITHUB_LINK = "https://github.com/Muhammad-Tahir-S";
const LINKEDIN_LINK =
  "https://www.linkedin.com/in/muhammad-tahir-sanuth-560566104/";
const EMAIL_LINK = "mailto:mtz5prif@gmail.com";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bodyRef = useRef<HTMLBodyElement>(null);

  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }

  useHeaderTransitions(bodyRef);

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <html lang="en">
      <head />
      <Body className={clsx("relative", openSans.className)} ref={bodyRef}>
        <LayoutHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <CenterLoadLogo />

        <FixedContactSection>
          <ContactSemiCircle>
            <ContactLink href={GITHUB_LINK} target="_blank">
              <GithubSvg />
            </ContactLink>
            <ContactLink href={LINKEDIN_LINK} target="_blank">
              <LinkedInSvg />
            </ContactLink>
            <ContactLink href={EMAIL_LINK} target="_blank">
              <MailSvg />
            </ContactLink>
          </ContactSemiCircle>
        </FixedContactSection>

        <ScrollToTopBtn onClick={scrollToTop}>
          <FloweryLinkSvg />
        </ScrollToTopBtn>

        <LayoutBody $sidebarOpen={sidebarOpen}>{children}</LayoutBody>
      </Body>
    </html>
  );
}

const Body = tw.body`
bg-primary-150 overflow-x-hidden
`;

const CenterLoadLogo = tw(Logo)`
hidden absolute left-[calc(50%_-_21px)] 
top-[calc(50%_-_21px)] center-load-logo 
stroke-secondary-100 
fill-primary-200 ease-in
transition-colors duration-150`;

const ScrollToTopBtn = tw.button`
hidden md:block bottom-[20px]
right-4 fixed layout-svg 
cursor-pointer z-[999]
`;

const FixedContactSection = tw.div`
fixed hidden lg:block left-[32px] bottom-7 h-fit z-[999]
w-fit 
`;

const ContactSemiCircle = tw.div`
relative w-[80px] h-[40px] rounded-t-full 
border-2 border-primary-250 pointer-events-none 
hover:border-primary-400 transition-colors 
duration-300
`;

const ContactLink = tw.a`
w-fit h-fit
`;

const FloweryLinkSvg = tw(FloweryLink)`
aspect-square md:w-[50px] lg:w-[72px] 
hover:scale-125 
transition-all` as typeof FloweryLink;

const LinkedInSvg = tw(LinkedIn)`
top-[calc(0%_-_18px)] right-[calc(50%_-_12px)]  
contact-semi-circle-icon
` as typeof Github;

const MailSvg = tw(Mail)`
right-[calc(0%_-_12px)] top-[calc(100%_-_12px)]   
contact-semi-circle-icon
` as typeof Mail;

const GithubSvg = tw(Github)`
left-[calc(0%_-_12px)] top-[calc(100%_-_12px)]  
contact-semi-circle-icon
` as typeof LinkedIn;

const LayoutBody = tw.div<{ $sidebarOpen: boolean }>`
main pt-10 sm:pt-0 overflow-x-hidden  px-[30px] sm:px-[80px] md:px-[100px] lg:px-[150px]  
bg-inherit h-full 
${({ $sidebarOpen }) =>
  $sidebarOpen
    ? "blur-sm md:blur-none transition-all md:transition-none pointer-events-none select-none"
    : ""}
`;
