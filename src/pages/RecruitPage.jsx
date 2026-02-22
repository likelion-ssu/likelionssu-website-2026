import React, { useLayoutEffect, useState } from "react";
import { useNavigationType } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";

import IntroSection from "../features/Recruit/components/IntroSection";
import ValueSection from "../features/Recruit/components/ValueSection";
import PartSection from "../features/Recruit/components/PartSection";
import RoadmapSection from "../features/Recruit/components/RoadmapSection";
import TimelineSection from "../features/Recruit/components/TimelineSection";
import FaqSection from "../features/Recruit/components/FaqSection";
import ClosingSection from "../features/Recruit/components/ClosingSection";
import {
  clearRecruitPartScroll,
  getRecruitPartScroll,
  setRecruitScrollRestoreLock,
} from "../features/Recruit/recruitScrollRestore";

export default function RecruitPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigationType = useNavigationType();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  useLayoutEffect(() => {
    if (navigationType !== "POP") {
      setRecruitScrollRestoreLock(false);
      clearRecruitPartScroll();
      return undefined;
    }

    const savedScroll = getRecruitPartScroll();
    if (savedScroll === null || savedScroll <= 0) {
      setRecruitScrollRestoreLock(false);
      if (savedScroll !== null) clearRecruitPartScroll();
      return undefined;
    }

    setRecruitScrollRestoreLock(true);

    let attempt = 0;
    const maxAttempts = 12;
    let frameId = null;

    const restoreScroll = () => {
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const targetScroll = Math.min(savedScroll, maxScroll);

      window.scrollTo({ top: targetScroll, left: 0, behavior: "auto" });

      attempt += 1;
      const reachedTarget = Math.abs(window.scrollY - targetScroll) <= 2;

      if (!reachedTarget && attempt < maxAttempts) {
        frameId = window.requestAnimationFrame(restoreScroll);
        return;
      }

      setRecruitScrollRestoreLock(false);
      clearRecruitPartScroll();
    };

    frameId = window.requestAnimationFrame(restoreScroll);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      setRecruitScrollRestoreLock(false);
    };
  }, [navigationType]);

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header
        noneSidebar={true}
        hideCenterLine={true}
        onMenuClick={toggleSidebar}
      />

      <div className="overflow-x-hidden flex flex-col gap-[6.88rem] lg:gap-[16rem]">
        <div className="pt-[5.9375rem] lg:pt-0">
          <IntroSection />
        </div>

        <div className="animate-recruit-content-enter flex flex-col gap-[6.88rem] lg:gap-[16rem]">
          <ValueSection />
          <PartSection />
          <RoadmapSection />
          <div className="-mt-[2rem] lg:-mt-[4.5rem]">
            <TimelineSection />
          </div>
          <div className="mt-[2.25rem] lg:mt-[5rem]">
            <FaqSection />
          </div>
          <div className="flex flex-col">
            <ClosingSection />
            <Footer />
          </div>
        </div>
      </div>
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
