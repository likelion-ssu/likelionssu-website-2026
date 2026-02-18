import React from "react";

export default function BottomTab({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group flex w-full h-[5.6875rem] p-[0.625rem]
        justify-center items-start gap-[0.625rem]
        border-line border-[0.5px] cursor-pointer
        hover:bg-secondarybrand transition-colors duration-200

        active:bg-secondarybrand
        transform transition-transform duration-150
      "
    >
      <p
        className="
          typo-bottomtab !text-text
          group-hover:!text-primarybrand
          group-active:!text-primarybrand
          transition-colors duration-200
        "
      >
        {text}
      </p>
    </div>
  );
}
