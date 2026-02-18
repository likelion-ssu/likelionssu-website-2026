import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import PartMenuTab from "../features/Part/components/PartMenuTab";

import PM from "../features/Part/components/Layout/ProductManager";
import DE from "../features/Part/components/Layout/ProductDesigner";
import FE from "../features/Part/components/Layout/FrontEnd";
import BE from "../features/Part/components/Layout/BackEnd";
import { warmPartAssets } from "../features/Part/hooks/usePartAssetWarmup";

const VALID_PARTS = new Set(["PM", "DE", "FE", "BE"]);

export default function PartPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramPart = searchParams.get("tab");
  const activePart = VALID_PARTS.has(paramPart) ? paramPart : "PM";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mountedParts, setMountedParts] = useState({
    PM: activePart === "PM",
    DE: activePart === "DE",
    FE: activePart === "FE",
    BE: activePart === "BE",
  });

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handlePartChange = (part) => {
    setMountedParts((prev) =>
      prev[part] ? prev : { ...prev, [part]: true },
    );
    setSearchParams({ tab: part });
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePart]);

  useEffect(() => {
    return warmPartAssets(activePart);
  }, [activePart]);

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <div className="pt-[6.3rem] sm:pt-[7.3125rem]">
        <PartMenuTab activePart={activePart} setActivePart={handlePartChange} />

        {/* 레이아웃 들어올 자리 */}
        <div>
          <div className={activePart === "PM" ? "block" : "hidden"}>
            {(mountedParts.PM || activePart === "PM") && <PM />}
          </div>
          <div className={activePart === "DE" ? "block" : "hidden"}>
            {(mountedParts.DE || activePart === "DE") && <DE />}
          </div>
          <div className={activePart === "FE" ? "block" : "hidden"}>
            {(mountedParts.FE || activePart === "FE") && <FE />}
          </div>
          <div className={activePart === "BE" ? "block" : "hidden"}>
            {(mountedParts.BE || activePart === "BE") && <BE />}
          </div>
        </div>
      </div>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
