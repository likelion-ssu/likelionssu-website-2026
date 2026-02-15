import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../../components/header/Header";
import SideBar from "../../../../components/sidebar/SideBar";
import Footer from "../../../../components/footer/Footer";
import ProjectCardDetailContent from "./ProjectCardDetailContent";
import { PROJECTS } from "../../../../data/projects";

export default function ProjectCardDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const project = PROJECTS.find((p) => p.id === Number(id));

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  if (!project) {
    return (
      <div className="bg-secondarybrand min-h-screen flex items-center justify-center gap-4">
        <p className="typo-body2 text-text">프로젝트를 찾을 수 없습니다.</p>
        <button
          onClick={() => navigate("/project")}
          className="typo-buttontext text-primarybrand underline"
        >
          목록으로
        </button>
      </div>
    );
  }

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-[75rem] mx-auto">
        <div className="flex justify-center">
          <ProjectCardDetailContent project={project} />
        </div>
      </div>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
