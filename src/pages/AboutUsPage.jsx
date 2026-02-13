import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideBar from "../components/sidebar/SideBar";
import ActivityVisual from "../features/About/components/ActivityVisual";
import AboutContent from "../features/About/components/AboutContent";
import { useAboutScroll } from "../features/About/hooks/useAboutScroll";

export default function AboutUsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollToIndex, setScrollToIndex] = useState(null);
  
  // 스크롤 인터랙션 훅
  const { activeIndex, setActiveIndex } = useAboutScroll();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleActivityClick = (index) => {
    setActiveIndex(index);
    setScrollToIndex(index);
  };

  const handleLeftScrollChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-secondarybrand min-h-screen">
      <Header onMenuClick={toggleSidebar} />

      {/* 메인: 모바일 단일 컬럼 / 데스크톱 왼쪽 고정 비주얼 + 오른쪽 스크롤 */}
      <div className="flex w-full min-h-screen pt-[5.9375rem] sm:pt-[3.5625rem]">
        {/* 왼쪽 고정 영역 - 모바일에서 숨김 */}
        <div className="hidden sm:block w-1/2 h-screen sticky top-[5.9375rem] sm:top-[3.5625rem] shrink-0 overflow-hidden">
          <ActivityVisual 
            activeIndex={activeIndex}
            scrollToIndex={scrollToIndex}
            onScrollChange={handleLeftScrollChange}
          />
        </div>

        {/* 세로 구분선 - Header 하단 border와 동일 스타일 (0.7px, border-line) */}
        <div className="hidden sm:block w-[0.7px] min-h-screen bg-line shrink-0 self-stretch" />

        {/* 오른쪽 스크롤 영역 - 모바일 전체 너비 */}
        <div className="w-full sm:w-1/2 shrink-0">
          <AboutContent
            activeIndex={activeIndex}
            onActivityClick={handleActivityClick}
          />
        </div>
      </div>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
