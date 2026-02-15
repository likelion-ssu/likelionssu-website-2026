import React from "react";
import upButton from "../assets/ClosingSection_up_button.svg";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ClosingSection() {
  return (
    <section
      id="closing-section"
      className="bg-secondarybrand w-full px-4 sm:px-[3.75rem]"
    >
      <div className="max-w-[75rem] mx-auto flex flex-row flex-wrap items-center justify-between gap-4">
        <p className="text-text typo-footer1em sm:typo-pretitle1e">
          From Passion to Impact
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center justify-center gap-[0.38rem] cursor-pointer border border-black bg-secondarybrand text-text typo-small1 px-[1.94rem] py-[0.62rem] transition-opacity hover:opacity-80 active:opacity-70"
          aria-label="맨 위로"
        >
          <span>맨 위로</span>
          <img
            src={upButton}
            alt=""
            className="w-[0.75rem] h-[0.625rem] shrink-0"
          />
        </button>
      </div>
    </section>
  );
}
