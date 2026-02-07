import React from 'react';
import Logo from './Logo';
import HoverBtn from './HoverBtn';
import menu from "../../assets/menu.svg";

export default function Header({ onMenuClick }) {
  return (
    <div className="border-b-[0.7px] border-line bg-secondarybrand flex flex-col items-center 
                    h-[5.9375rem] sm:h-[3.5625rem] sm:pt-[0.625rem] sm:pb-[0.0625rem] gap-[0.5565rem]">
      
      <div className="flex w-full justify-between items-center relative 
                      sm:w-[83.40625rem] sm:justify-between sm:items-center sm:h-[3.5625rem]">
        
        {/* Logo */}
        <div className="absolute top-[3.56rem] left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:top-0 sm:left-0">
          <Logo />
        </div>

        {/* 오른쪽 컨텐츠 */}
        <div className="flex items-center justify-end gap-[2.5rem] sm:gap-[2.5rem] sm:flex">
          {/* Recruit - 웹에서만 */}
          <div className="hidden sm:flex">
            <HoverBtn/>
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
