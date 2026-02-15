import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import graphic from "../features/Home/assets/home-graphic.svg";
import graphic2 from "../features/Home/assets/home-graphic2.svg";
import graphic3 from "../features/Home/assets/home-graphic3.svg";
import RecruitButton from "../features/Home/components/RecruitButton";
import BottomTabbar from "../features/Home/components/BottomTabbar";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRecruitTransitioning, setIsRecruitTransitioning] = useState(false);
  const navigate = useNavigate();
  const hasNavigatedRef = useRef(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleRecruitTransition = () => {
    if (isRecruitTransitioning) return;

    hasNavigatedRef.current = false;
    setIsRecruitTransitioning(true);
  };

  const handleRecruitTransitionEnd = () => {
    if (hasNavigatedRef.current) return;
    hasNavigatedRef.current = true;
    navigate("/recruit");
  };

  return (
    <div className="bg-secondarybrand min-h-screen relative overflow-hidden">
      <Header
        onMenuClick={toggleSidebar}
        noneSidebar={true}
        hideMobileMenu={true}
        transitionMode={isRecruitTransitioning}
      />

      {/* 화면 정중앙 세로선 */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[0.0625rem] h-screen bg-line z-10" />

      {/* 메인 컨텐츠 (화면 정중앙 정렬) */}
      <div className="h-screen flex justify-center items-center overflow-hidden relative z-20">
        {/* 이미지 + 버튼 */}
        <div className="relative shrink-0">
          <img
            src={graphic}
            alt="home-graphic"
            className="
              w-[37.17188rem] h-[37.17188rem]
              sm:w-[min(49.5625rem,90vh)]
              sm:h-[min(49.5625rem,90vh)]
              shrink-0
            "
          />

          {/* RecruitButton을 이미지 정가운데 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <RecruitButton
              onRecruitClick={handleRecruitTransition}
              disabled={isRecruitTransitioning}
            />
          </div>
        </div>
      </div>

      {/* BottomTabbar: 모바일에서만 + 화면 맨 아래 고정 */}
      <div className="fixed bottom-0 left-0 w-full sm:hidden z-50">
        <BottomTabbar />
      </div>

      {isRecruitTransitioning && (
        <div className="fixed inset-0 z-[120] pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-secondarybrand animate-home-transition-backdrop" />

          <img
            src={graphic2}
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 w-[min(90vw,90vh)] sm:w-[min(62rem,90vh)] animate-home-transition-layer2"
          />

          <img
            src={graphic3}
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 w-[min(90vw,90vh)] sm:w-[min(62rem,90vh)] animate-home-transition-layer3"
            onAnimationEnd={handleRecruitTransitionEnd}
          />
        </div>
      )}

      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
