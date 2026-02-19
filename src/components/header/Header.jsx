import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import HoverBtn from "./HoverBtn";
import menu from "../../assets/menu.svg";
import MenuTab from "./MenuTab";

// 사이드바O -> <Header onMenuClick={toggleSidebar} />
// home, recruit 페이지 -> <Header noneSidebar={true} onMenuClick={toggleSidebar}/>
// 모바일 메뉴 숨김 -> <Header hideMobileMenu={true} />

export default function Header({
  onMenuClick,
  noneSidebar = false,
  hideMobileMenu = false,
  hideCenterLine = false,
  transitionMode = false,
}) {
  const navigate = useNavigate();

  return (
    <div
      data-app-header="true"
      className={`fixed top-0 left-0 w-full ${
        transitionMode
          ? "z-[150] bg-transparent border-transparent"
          : "z-[150] bg-secondarybrand border-b-[0.7px] border-line"
      }
                  flex flex-col items-center 
                  h-[3.875rem] sm:h-[3.5625rem] sm:pt-[0.625rem] sm:pb-[0.0625rem] gap-[0.5565rem]
                  ${noneSidebar && !transitionMode ? "sm:border-b-0" : ""}`}
    >
      <div
        className={`flex w-full justify-between items-center relative 
                   sm:w-[83.40625rem] sm:justify-between sm:items-center sm:h-[3.5625rem]
                   ${transitionMode ? "z-[150]" : ""}`}
      >
        {/* 헤더 가운데 세로선 */}
        {noneSidebar && !hideCenterLine && !transitionMode && (
          <div className="hidden sm:block absolute left-1/2 sm:top-[-0.625rem] -translate-x-1/2 w-[0.0625rem] sm:h-[3.5625rem] bg-line" />
        )}

        {/* Logo */}
        <div className="absolute z-[160] top-[2.1rem] left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:top-0 sm:left-0">
          <Logo onClick={() => navigate("/")} />
        </div>

        {/* 웹에서 noneSidebar일 때 MenuTab */}
        <div className="hidden sm:flex z-[160]">
          {noneSidebar && <MenuTab />}
        </div>

        {/* 오른쪽 컨텐츠 */}
        <div
          className={`${
            noneSidebar ? "sm:hidden" : "flex"
          } items-center justify-end gap-[2.5rem] sm:gap-[2.5rem] z-[160]`}
        >
          {/* Recruit - 웹에서만 */}
          <div className="hidden sm:flex">
            <HoverBtn onClick={() => navigate("/recruit")} />
          </div>

          {/* Menu 아이콘 */}
          {!hideMobileMenu && (
            <div
              className="absolute top-[2.4em] right-[1.22rem] sm:static sm:top-0 sm:right-0 flex items-center justify-center cursor-pointer"
              onClick={onMenuClick}
            >
              <img src={menu} className="w-[1.2375rem] h-[0.9375rem]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
