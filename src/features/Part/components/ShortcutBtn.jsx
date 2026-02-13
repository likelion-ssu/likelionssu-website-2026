import React from "react";
import down from "../assets/down.svg";
import up from "../assets/up.svg";

export default function ShortcutBtn({
  text = "파트장의 말",
  direction = "down",
  onClick,
}) {
  const icon = direction === "up" ? up : down;

  return (
    <button
      onClick={onClick}
      className="group flex border-[0.7px] border-text w-[7.625rem] gap-[0.3125rem] justify-center items-center p-[0.625rem]"
    >
      <p className="typo-small1 text-text">{text}</p>

      <img
        src={icon}
        alt={direction}
        className="w-[0.625rem] h-[0.6875rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
    </button>
  );
}

{/* <ShortcutBtn text="세션 소개" direction="up" />
<ShortcutBtn text="파트장의 말" direction="down" /> */}
