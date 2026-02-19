import React, { useState } from "react";
import recruit from "../../assets/recruit.svg";
import recruithover from "../../assets/recruit-hover.svg";

// <HoverBtn type="managementteam" />

export default function HoverBtn({ type = "default", onClick }) {
  const [isHover, setIsHover] = useState(false);

  const isManagementTeam = type === "managementteam";

  return (
    <div
      className={`relative cursor-pointer ${
        isManagementTeam
          ? "inline-flex items-center flex-row-reverse"
          : "flex items-center"
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      {/* Icon */}
      <div className="flex flex-col items-start p-[0.625rem] gap-[0.125rem]">
        <img
          src={isHover ? recruithover : recruit}
          alt="recruit-icon"
          className="w-[1.0625rem] h-[1.0685rem]"
        />
      </div>

      {/* Text */}
      <p
        className={`transition-colors duration-200 ${
          isHover ? "text-[var(--color-primarybrand)]" : "text-text"
        } ${
          isManagementTeam
            ? "text-right typo-pretitle2e tracking-[0.1225rem]"
            : "text-right font-medium text-[0.875rem] leading-normal tracking-[0.1225rem]"
        }`}
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          color: !isHover ? "var(--Text, #020202)" : undefined,
        }}
      >
        {isManagementTeam ? "Management Team" : "Recruit"}
      </p>

      {/* Underline */}
      <span
        className={`absolute h-[1px] bottom-[0.506rem] transition-colors duration-200 ${
          isHover ? "bg-[var(--color-primarybrand)]" : "bg-text"
        } ${
          isManagementTeam
            ? "w-[10.125rem] right-[0.62rem]"
            : "w-[6.0625rem] left-[0.62rem]"
        }`}
      />
    </div>
  );
}
