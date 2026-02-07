import React, { useState } from "react";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import PartMenu from "../features/Part/components/PartMenu";

export default function PartPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePart, setActivePart] = useState("PM");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} />

      <div className="mt-[2.19rem] flex flex-col items-center w-full">

  <div className="w-full flex justify-center">
    <div className="flex items-center gap-[0.625rem] sm:gap-0">
      <PartMenu
        mobileText="PM"
        webText="Product Manager"
        isActive={activePart === "PM"}
        onClick={() => setActivePart("PM")}
      />
      <PartMenu
        mobileText="DE"
        webText="Product Designer"
        isActive={activePart === "DE"}
        onClick={() => setActivePart("DE")}
      />
      <PartMenu
        mobileText="FE"
        webText="Frontend Developer"
        isActive={activePart === "FE"}
        onClick={() => setActivePart("FE")}
      />
      <PartMenu
        mobileText="BE"
        webText="Backend Developer"
        isActive={activePart === "BE"}
        onClick={() => setActivePart("BE")}
      />
    </div>
  </div>

  <hr className="-mt-[0.06rem] w-full border-t border-line sm:hidden" />
</div>

      <div className="mt-[2.69rem] h-[20rem]">PartPage</div>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
