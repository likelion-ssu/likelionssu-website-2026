import React from "react";

export default function FilterSection({
  selectedTab,
  onTabChange,
  variant = "normal",
}) {
  const isSticky = variant === "sticky";
  const FILTER_TABS = ["전체", "아이디어톤", "해커톤", "겨울잠"];
  return (
    <div className={`relative w-full ${isSticky ? "pb-0" : ""}`}>
      {/* 모바일 */}
      <div
        className={`sm:hidden flex w-full border border-line bg-secondarybrand ${isSticky ? "border-x-0 border-t-0" : "bg-light rounded-none"}`}
      >
        {FILTER_TABS.map((tab, index) => {
          const isSelected = selectedTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`
                flex-1 py-3 typo-buttontext transition-colors
                ${index < FILTER_TABS.length - 1 ? "border-r border-line" : ""}
                ${isSelected ? "bg-light text-primarybrand typo-buttontextbold" : "text-subtext"}
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* PC - 모바일처럼 간격 없이, 보더 겹침 방지 */}
      <div className="hidden sm:flex relative flex-wrap justify-center">
        {FILTER_TABS.map((tab, index) => {
          const isSelected = selectedTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`
                min-w-[5.5rem] sm:min-w-[7rem] px-[0.63rem] py-[0.63rem] border border-line typo-buttontext transition-colors cursor-pointer
                ${index > 0 ? "-ml-px" : ""}
                ${isSticky ? "border-t-0" : ""}
                ${
                  isSelected
                    ? "bg-light text-primarybrand typo-buttontextbold"
                    : "bg-accent text-subtext hover:text-primarybrand"
                }
              `}
            >
              {tab}
            </button>
          );
        })}

        {!isSticky && (
          <div
            className="absolute bottom-0 left-0 right-0 h-px bg-line"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
