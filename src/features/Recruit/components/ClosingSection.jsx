import React from "react";
import ShortcutBtn from "../../Part/components/ShortcutBtn";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ClosingSection() {
  return (
    <section
      id="closing-section"
      className="bg-secondarybrand w-full px-4 lg:px-[3.75rem]"
    >
      <div className="max-w-[75rem] mx-auto flex flex-row flex-wrap items-center justify-between gap-4">
        <p className="text-text typo-footer1em lg:typo-pretitle1e">
          From Passion to Impact
        </p>
        <ShortcutBtn
          text="맨 위로"
          direction="up"
          onClick={scrollToTop}
        />
      </div>
    </section>
  );
}
