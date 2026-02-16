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
      className="
        group flex border-[0.7px] border-text w-[7.625rem] gap-[0.3125rem]
        justify-center items-center p-[0.625rem]
        transition-all duration-150
        active:scale-[0.97]
        active:bg-black/7
      "
    >
      <p className="typo-small1 text-text">{text}</p>

      <img
        src={icon}
        alt={direction}
        className="
          w-[0.625rem] h-[0.6875rem] 
          opacity-100
          md:opacity-0 md:group-hover:opacity-100
          transition-opacity duration-200
        "
      />
    </button>
  );
}
