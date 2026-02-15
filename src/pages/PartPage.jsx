import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import PartMenuTab from "../features/Part/components/PartMenuTab";

import PM from "../features/Part/components/Layout/ProductManager";
import DE from "../features/Part/components/Layout/ProductDesigner";
import FE from "../features/Part/components/Layout/FrontEnd";
import BE from "../features/Part/components/Layout/BackEnd";

const VALID_PARTS = new Set(["PM", "DE", "FE", "BE"]);

export default function PartPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramPart = searchParams.get("tab");
  const activePart = VALID_PARTS.has(paramPart) ? paramPart : "PM";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handlePartChange = (part) => {
    setSearchParams({ tab: part });
  };

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <div className="pt-[7.8775rem] sm:pt-[7.3125rem]">
        <PartMenuTab activePart={activePart} setActivePart={handlePartChange} />

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
