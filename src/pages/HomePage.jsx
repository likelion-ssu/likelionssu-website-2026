import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HoverBtn from "../components/header/HoverBtn";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const menuItems = [
    { label: "P A R T", path: "/part" },
    { label: "A B O U T U S", path: "/about" },
    { label: "P R O J E C T", path: "/project" },
  ];

  return (
    <div className="bg-secondarybrand min-h-screen relative">
      <Header onMenuClick={toggleSidebar} noneSidebar={true}/>

      <div className="mt-[2.19rem] flex flex-col items-center w-full px-10 gap-6">
        <div className="typo-pretitle1k text-primarybrand">HomePage</div>

        <nav className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="typo-pretitle2e text-line hover:text-text transition underline underline-offset-8 decoration-transparent hover:decoration-text"
            >
              {item.label}
            </button>
          ))}

          <HoverBtn />
        </nav>
      </div>

      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
