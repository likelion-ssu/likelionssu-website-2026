import React, { useState } from "react";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Footer from "../../components/footer/Footer";
import TitleSection from "./TitleSection";
import FilterSection from "./FilterSection";

export default function ProjectPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <TitleSection />
      <FilterSection />
      <Footer />

      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
