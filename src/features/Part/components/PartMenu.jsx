import React from "react";

export default function PartMenu({
  mobileText = "DE",
  webText = "Product Designer",
  isActive = false,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        border border-line flex justify-center items-center
        py-2.5 px-1 gap-[0.5625rem] w-full
        
        sm:w-[14rem] sm:h-[2rem] sm:px-[3.0625rem] sm:py-0 sm:gap-[0.625rem]
        sm:rounded-tr-[0.0625rem] sm:rounded-br-[0.0625rem]
        sm:border-b-[0.7px] sm:border-b-line sm:border-t-0 sm:border-l-0 sm:border-r-0

        cursor-pointer
        ${isActive ? "bg-white" : "bg-secondarybrand"}
      `}
    >
    
      <p
        className={`
          typo-buttontext text-center
          ${isActive ? "text-primarybrand" : "text-subtext"}
          sm:hidden
        `}
      >
        {mobileText}
      </p>

      <p
        className={`
          hidden sm:block text-center whitespace-nowrap
          typo-bodye1 tracking-wide
          ${isActive ? "text-primarybrand typo-bolde" : "text-text hover:text-primarybrand"}
        `}
      >
        {webText}
      </p>
    </div>
  );
}
