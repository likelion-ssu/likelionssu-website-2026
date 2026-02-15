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

      <div className="pt-[5.9375rem] sm:pt-0">
        <IntroSection />
      </div>

      <div className="animate-recruit-content-enter">
        <ValueSection />
        <PartSection />
        <RoadmapSection />
        <TimelineSection />
        <FaqSection />
        <Footer />
      </div>
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
