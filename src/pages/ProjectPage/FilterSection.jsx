import React from "react";

const FILTER_TABS = ["전체", "아이디어톤", "해커톤", "겨울잠"];

export default function FilterSection({ selectedTab, onTabChange }) {
  return (
    <div className="relative w-full pb-4">
      <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3">
        {FILTER_TABS.map((tab) => {
          const isSelected = selectedTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`
              min-w-[5.5rem] sm:min-w-[7rem] px-3 py-2 sm:px-5 sm:py-3 border typo-buttontext transition-colors
              ${
                isSelected
                  ? "bg-light text-primarybrand border-primarybrand"
                  : "bg-accent text-subtext border-line hover:bg-light hover:text-primarybrand hover:border-line"
              }
            `}
            >
              {tab}
            </button>
          );
        })}
        {/* 구분선 - 버튼 하단과 겹치게 (버튼 row 맨 아래에 위치) */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-line" aria-hidden="true" />
      </div>
    </div>
  );
}
