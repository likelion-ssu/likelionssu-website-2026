import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import TitleSection from "../features/Project/components/TitleSection";
import FilterSection from "../features/Project/components/FilterSection";
import ProjectCardList from "../features/Project/components/ProjectCard/ProjectCardList";
import ProjectCardDetailContent from "../features/Project/components/ProjectCard/ProjectCardDetailContent";
import { PROJECTS } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("전체");

  // sticky 상태(필터가 헤더에 붙은 상태인지)
  const [isStuck, setIsStuck] = useState(false);

  // 필터 위치 감지
  const filterSentinelRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const project = id ? PROJECTS.find((p) => p.id === Number(id)) : null;

  useEffect(() => {
    if (project) return;
    const el = filterSentinelRef.current;
    if (!el) return;

    const makeObserver = () => {
      const isMobile = window.innerWidth < 640;
      const headerHeight = isMobile ? 95 : 57;
      const topOffset = headerHeight + 1;

      // sentinel이 헤더 아래로 들어가면=안 보이면 붙었다고 판단하게
      const observer = new IntersectionObserver(
        ([entry]) => setIsStuck(!entry.isIntersecting),
        { threshold: 0, rootMargin: `-${topOffset}px 0px 0px 0px` },
      );

      observer.observe(el);
      return observer;
    };

    let observer = makeObserver();

    const handleResize = () => {
      observer.disconnect();
      observer = makeObserver();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [project]);

  return (
    <div className="bg-secondarybrand min-h-screen relative flex flex-col">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex-1 flex flex-col pt-[5.9375rem] sm:pt-[3.5625rem] min-h-0">
        {project ? (
          <main className="flex-1 flex flex-col lg:flex-row min-h-0 bg-secondarybrand">
            <div className="flex-1 overflow-auto lg:hidden flex flex-col w-full min-h-0">
              <ProjectCardDetailContent project={project} variant="mobile" />
            </div>
            <div
              className="hidden lg:fixed lg:inset-0 lg:z-[170] lg:flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 cursor-pointer bg-black/50"
              onClick={() => navigate("/project")}
              role="dialog"
              aria-modal="true"
              aria-label="프로젝트 상세"
            >
              <div className="flex justify-center w-full max-w-[51.6875rem]">
                <ProjectCardDetailContent project={project} />
              </div>
            </div>
          </main>
        ) : (
          <>
            <TitleSection />

            <div className="relative">
              <span
                ref={filterSentinelRef}
                className="absolute left-0 right-0 top-0 h-px pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <div
              className={`
                sticky z-40
                top-[5.9375rem] sm:top-[3.5625rem]
                bg-transparent
              `}
            >
              <FilterSection
                selectedTab={selectedFilter}
                onTabChange={setSelectedFilter}
                variant={isStuck ? "sticky" : "normal"}
              />
            </div>

            <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
              <ProjectCardList
                projects={PROJECTS}
                selectedFilter={selectedFilter}
              />
            </div>
          </>
        )}

        <Footer />
      </div>
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
