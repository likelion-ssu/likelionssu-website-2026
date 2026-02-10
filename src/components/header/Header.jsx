import React from "react";
import Logo from "./Logo";
import HoverBtn from "./HoverBtn";
import menu from "../../assets/menu.svg";
import MenuTab from "./MenuTab";

// 사이드바O -> <Header onMenuClick={toggleSidebar} />
// home, recruit 페이지 -> <Header noneSidebar={true} />

// position:fixed 로 수정
// 페이지 적용시 pt-[5.9375rem] sm:pt-[3.5625rem]

export default function Header({ onMenuClick, noneSidebar = false }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-secondarybrand
                  flex flex-col items-center 
                  h-[5.9375rem] sm:h-[3.5625rem] sm:pt-[0.625rem] sm:pb-[0.0625rem] gap-[0.5565rem]
                  border-b-[0.7px] border-line
                  ${noneSidebar ? "sm:border-b-[0.7px]" : ""}`}
    >
      <div
        className="flex w-full justify-between items-center relative 
                   sm:w-[83.40625rem] sm:justify-between sm:items-center sm:h-[3.5625rem]"
      >
        {/* Logo */}
        <div className="absolute top-[3.56rem] left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:top-0 sm:left-0">
          <Logo />
        </div>

        {/* 웹에서 noneSidebar일 때 MenuTab */}
        <div className="hidden sm:flex">
          {noneSidebar && <MenuTab />}
        </div>

        {/* 오른쪽 컨텐츠 (모바일에서는 항상 유지 / 웹에서는 noneSidebar가 false일 때만) */}
        <div
          className={`${
            noneSidebar ? "sm:hidden" : "flex"
          } items-center justify-end gap-[2.5rem] sm:gap-[2.5rem]`}
        >
          {/* Recruit - 웹에서만 */}
          <div className="hidden sm:flex">
            <HoverBtn />
          </div>

          {/* Menu */}
          <div
            className="absolute top-[3.63rem] right-[1.22rem] sm:static sm:top-0 sm:right-0 flex items-center justify-center cursor-pointer"
            onClick={onMenuClick}
          >
            <img src={menu} className="w-[1.2375rem] h-[0.9375rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
