import React, { useState } from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import PartMenuTab from "../features/Part/components/PartMenuTab";

import PM from "../features/Part/components/Layout/ProductManager";
import DE from "../features/Part/components/Layout/ProductDesigner";
import FE from "../features/Part/components/Layout/FrontEnd";
import BE from "../features/Part/components/Layout/BackEnd";

export default function PartPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePart, setActivePart] = useState("PM");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <div className="pt-[7.8775rem] sm:pt-[7.3125rem]">
        <PartMenuTab activePart={activePart} setActivePart={setActivePart} />

        {/* 레이아웃 들어올 자리 */}
        <div>
          {activePart === "PM" && <PM />}
          {activePart === "DE" && <DE />}
          {activePart === "FE" && <FE />}
          {activePart === "BE" && <BE />}
        </div>
      </div>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
