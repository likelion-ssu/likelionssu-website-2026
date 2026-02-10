import React, { useState } from "react";
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

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const project = id ? PROJECTS.find((p) => p.id === Number(id)) : null;

  return (
    <div className="bg-secondarybrand min-h-screen relative flex flex-col">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex-1 flex flex-col pt-[5.9375rem] sm:pt-[3.5625rem] min-h-0">
      {project ? (
        <main className="flex-1 flex flex-col lg:flex-row min-h-0 bg-secondarybrand">
          {/* 모바일: 풀페이지 느낌 — 꽉 차게, 목록으로 없음 (브라우저 뒤로가기 등) */}
          <div className="flex-1 overflow-auto lg:hidden flex flex-col w-full min-h-0">
            <ProjectCardDetailContent project={project} variant="mobile" />
          </div>
          {/* PC: 모달 느낌 — 가운데 정렬, 배경 클릭 시 /project */}
          <div
            className="hidden lg:flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8 py-8 cursor-pointer"
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
          <FilterSection
            selectedTab={selectedFilter}
            onTabChange={setSelectedFilter}
          />
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
