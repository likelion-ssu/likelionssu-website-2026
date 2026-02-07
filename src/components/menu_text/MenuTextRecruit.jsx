import React, { useState } from "react";
import recruit from "../../assets/recruit.svg";
import recruithover from "../../assets/recruit-hover.svg"

export default function Recruit() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative flex items-center cursor-pointer gap-[0.5rem]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p
        className={`text-right typo-cardtexte ${isHover ? "text-primarybrand" : "text-text"}`}
        style={{ fontFamily: '"JetBrains Mono", monospace' }}
      >
        RECRUIT
      </p>

      <img
        src={isHover ? recruithover : recruit}
        alt="recruit-icon"
        className="w-[1.0625rem] h-[1.0685rem]"
      />

      <span
        className={`absolute w-[5.75rem] h-[1px] bottom-[-0.07rem] transition-colors duration-200 ${
          isHover ? "bg-[var(--color-primarybrand)]" : "bg-text"
        }`}
      />
    </div>
  );
}
