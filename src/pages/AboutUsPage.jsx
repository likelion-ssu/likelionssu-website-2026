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
  const [isLeftAtEnd, setIsLeftAtEnd] = useState(false);
  
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

  const handleLeftReachEnd = (isAtEnd) => {
    setIsLeftAtEnd(isAtEnd);
  };

  return (
    <div className="bg-secondarybrand min-h-screen">
      <Header onMenuClick={toggleSidebar} />

      {/* 메인: 모바일 단일 컬럼 / 데스크톱 왼쪽 고정 비주얼 + 오른쪽 스크롤 */}
      <div className="flex w-full min-h-screen pt-[5.9375rem] sm:pt-[3.5625rem]">
        {/* 왼쪽 고정 영역 - fixed로 스크롤해도 항상 화면에 고정 */}
        <div 
          className="hidden sm:block fixed left-0 w-1/2 overflow-hidden z-0"
          style={{
            top: '3.5625rem',
            height: 'calc(100vh - 3.5625rem)',
          }}
        >
          <ActivityVisual 
            activeIndex={activeIndex}
            scrollToIndex={scrollToIndex}
            onScrollChange={handleLeftScrollChange}
            onReachEnd={handleLeftReachEnd}
          />
        </div>
        <div 
          className="hidden sm:block fixed left-[50%] w-[0.7px] bg-line z-0 -translate-x-px"
          style={{
            top: '3.5625rem',
            height: 'calc(100vh - 3.5625rem)',
          }}
          aria-hidden
        />

        {/* 오른쪽 스크롤 영역 - margin으로 왼쪽 영역만큼 비움 */}
        <div className="w-full sm:w-1/2 sm:ml-[50%] shrink-0 relative z-10 min-h-screen">
          <AboutContent
            activeIndex={activeIndex}
            onActivityClick={handleActivityClick}
          />
        </div>
      </div>

      {/* 푸터 - 왼쪽이 끝까지 스크롤되면 부드럽게 나타나고 사라짐 */}
      <div className="relative z-10 sm:hidden">
        <Footer />
      </div>
      <div
        className="hidden sm:block relative z-10 transition-all duration-500 ease-out"
        style={{
          maxHeight: isLeftAtEnd ? '1000px' : '0',
          opacity: isLeftAtEnd ? 1 : 0,
          overflow: 'hidden',
          pointerEvents: isLeftAtEnd ? 'auto' : 'none',
        }}
      >
        <Footer />
      </div>
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
