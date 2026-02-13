import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideBar from "../components/sidebar/SideBar";
import ActivityVisual from "../features/About/components/ActivityVisual";
import AboutContent from "../features/About/components/AboutContent";

export default function AboutUsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeActivity, setActiveActivity] = useState(0);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-secondarybrand min-h-screen">
      <Header onMenuClick={toggleSidebar} />

      {/* 메인: 모바일 단일 컬럼 / 데스크톱 왼쪽 고정 비주얼 + 오른쪽 스크롤 */}
      <div className="flex w-full min-h-screen pt-[5.9375rem] sm:pt-[3.5625rem]">
        {/* 왼쪽 고정 영역 - 모바일에서 숨김 */}
        <div className="hidden sm:block w-1/2 h-screen sticky top-[5.9375rem] sm:top-[3.5625rem] shrink-0 overflow-hidden">
          <ActivityVisual activeIndex={activeActivity} />
        </div>

        {/* 오른쪽 스크롤 영역 - 모바일 전체 너비 */}
        <div className="w-full sm:w-1/2 shrink-0">
          <AboutContent
            activeIndex={activeActivity}
            onSectionEnter={setActiveActivity}
          />
        </div>
      </div>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
