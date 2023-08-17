"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { qualificationData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTheme } from "@/context/theme-context";

const Qualification = () => {
  const { ref } = useSectionInView("Qualification");
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      id="qualification"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Qualification</SectionHeading>
      <VerticalTimeline lineColor="">
        {qualificationData.map((qualificationData, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={qualificationData.date}
              icon={qualificationData.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">
                {qualificationData.title}
              </h3>

              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {qualificationData.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Qualification;
