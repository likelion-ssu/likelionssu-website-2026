import React, { useState } from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import TitleSection from "../features/Project/components/TitleSection";
import FilterSection from "../features/Project/components/FilterSection";
import ProjectCardList from "../features/Project/components/ProjectCard/ProjectCardList";
import { PROJECTS } from "../data/projects";

export default function ProjectPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("전체");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <TitleSection />
      <FilterSection
        selectedTab={selectedFilter}
        onTabChange={setSelectedFilter}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <ProjectCardList projects={PROJECTS} selectedFilter={selectedFilter} />
      </div>
      <Footer />

      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
