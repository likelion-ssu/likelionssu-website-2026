import React from "react";

export default function BottomTab({ text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex w-full h-[8.1875rem] p-[0.625rem] justify-center items-start gap-[0.625rem] border-line border-[0.5px] cursor-pointer"
    >
      <p className="typo-bottomtab">{text}</p>
    </div>
  );
}
