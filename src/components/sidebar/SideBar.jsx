import React from 'react';
import MenuText from '../menu_text/MenuText';
import MenuTextBold from '../menu_text/MenuTextBold';
import MenuTextRecruit from '../menu_text/MenuTextRecruit';
import closebtn from "../../assets/close-btn.svg";

export default function SideBar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[18.625rem] bg-secondarybrand z-50 transform transition-transform duration-300
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    h-screen
`}
      >
        {/* Close Button Image */}
        <img
          src={closebtn}
          alt="close button"
          className="absolute top-[3.14rem] right-[1.34rem] w-[2.28123rem] cursor-pointer"
          onClick={onClose}
        />

        {/* Sidebar Content */}
        <div className="flex flex-col ml-[2.69rem] mt-[7.19rem] w-[12.375rem] gap-[2.5rem] sm:gap-[1.88rem]">
          {/* ABOUT US */}
          <div className='flex flex-col items-start gap-[1.25rem]'>
            <MenuTextBold>ABOUT US</MenuTextBold>
            <div className='flex flex-col items-start gap-[0.625rem] px-[1.25rem]'>
              <MenuText>RoadMap</MenuText>
              <MenuText>Management Team</MenuText>
            </div>
          </div>

          {/* PART */}
          <div className='flex flex-col items-start gap-[1.25rem]'>
            <MenuTextBold>PART</MenuTextBold>
            <div className='flex flex-col items-start gap-[0.625rem] px-[1.25rem]'>
              <MenuText>Product Manager</MenuText>
              <MenuText>Product Designer</MenuText>
              <MenuText>Frontend Developer</MenuText>
              <MenuText>Backend Developer</MenuText>
            </div>
          </div>

          {/* PROJECT */}
          <MenuTextBold>PROJECT</MenuTextBold>
          <MenuTextRecruit/>
        </div>
      </div>
    </>
  );
}
