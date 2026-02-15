import React from "react";
import { useNavigate } from "react-router-dom";
import MenuText from "../menu_text/MenuText";
import MenuTextBold from "../menu_text/MenuTextBold";
import MenuTextRecruit from "../menu_text/MenuTextRecruit";
import closebtn from "../../assets/close-btn.svg";

export default function SideBar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const moveTo = (path) => {
    navigate(path);
    onClose?.();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[18.625rem] bg-secondarybrand z-50 transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
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
          <div className="flex flex-col items-start gap-[1.25rem]">
            <button
              type="button"
              className="bg-transparent border-0 p-0 text-left"
              onClick={() => moveTo("/about")}
            >
              <MenuTextBold>ABOUT US</MenuTextBold>
            </button>
            <div className="flex flex-col items-start gap-[0.625rem] px-[1.25rem]">
              <button
                type="button"
                className="bg-transparent border-0 p-0 text-left"
                onClick={() => moveTo("/about")}
              >
                <MenuText>RoadMap</MenuText>
              </button>
              <button
                type="button"
                className="bg-transparent border-0 p-0 text-left"
                onClick={() => moveTo("/about")}
              >
                <MenuText>Management Team</MenuText>
              </button>
            </div>
          </div>

          {/* PART */}
          <div className="flex flex-col items-start gap-[1.25rem]">
            <button
              type="button"
              className="bg-transparent border-0 p-0 text-left"
              onClick={() => moveTo("/part")}
            >
              <MenuTextBold>PART</MenuTextBold>
            </button>
            <div className="flex flex-col items-start gap-[0.625rem] px-[1.25rem]">
              <button
                type="button"
                className="bg-transparent border-0 p-0 text-left"
                onClick={() => moveTo("/part?tab=PM")}
              >
                <MenuText>Product Manager</MenuText>
              </button>
              <button
                type="button"
                className="bg-transparent border-0 p-0 text-left"
                onClick={() => moveTo("/part?tab=DE")}
              >
                <MenuText>Product Designer</MenuText>
              </button>
              <button
                type="button"
                className="bg-transparent border-0 p-0 text-left"
                onClick={() => moveTo("/part?tab=FE")}
              >
                <MenuText>Frontend Developer</MenuText>
              </button>
              <button
                type="button"
                className="bg-transparent border-0 p-0 text-left"
                onClick={() => moveTo("/part?tab=BE")}
              >
                <MenuText>Backend Developer</MenuText>
              </button>
            </div>
          </div>

          {/* PROJECT */}
          <button
            type="button"
            className="bg-transparent border-0 p-0 text-left"
            onClick={() => moveTo("/project")}
          >
            <MenuTextBold>PROJECT</MenuTextBold>
          </button>
          <MenuTextRecruit onClick={() => moveTo("/recruit")} />
        </div>
      </div>
    </>
  );
}
