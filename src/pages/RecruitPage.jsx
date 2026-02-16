import React, { useState } from "react";
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

export default function RecruitPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

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
          <TimelineSection />
          <FaqSection />
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
