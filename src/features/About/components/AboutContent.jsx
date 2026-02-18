import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ROADMAP_SECTIONS,
  ABOUT_INTRO,
  YEONHHEOK_ITEMS,
  CORE_VALUES,
} from "../../../data/about";
import activityCheckIcon from "../../../assets/activity-check.svg";
import RoadmapMobile from "./RoadmapMobile";
import HoverBtn from "../../../components/header/HoverBtn";

/**
 * 오른쪽 스크롤 텍스트 영역.
 */
export default function AboutContent({ 
  activeIndex, 
  onActivityClick
}) {
  const navigate = useNavigate();
  const activityItemRefs = useRef([]);

  // 전체 활동 인덱스 계산
  const getGlobalIndex = (sectionIndex, activityIndex) => {
    let globalIndex = 0;
    for (let i = 0; i < sectionIndex; i++) {
      globalIndex += ROADMAP_SECTIONS[i].activities.length;
    }
    return globalIndex + activityIndex;
  };

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 640) return;

    const activeItem = activityItemRefs.current[activeIndex];
    if (!activeItem) return;

    const SAFE_MARGIN = 8;
    const headerElement = document.querySelector('[data-app-header="true"]');
    const headerBottom = headerElement
      ? headerElement.getBoundingClientRect().bottom
      : 0;
    const rect = activeItem.getBoundingClientRect();
    const viewportTop = Math.max(SAFE_MARGIN, headerBottom + SAFE_MARGIN);
    const viewportBottom = window.innerHeight - SAFE_MARGIN;
    let delta = 0;

    if (rect.top < viewportTop) {
      delta = rect.top - viewportTop;
    } else if (rect.bottom > viewportBottom) {
      delta = rect.bottom - viewportBottom;
    }

    if (delta !== 0) {
      window.scrollBy({ top: delta, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen py-9 px-5 sm:px-12 text-color-text">
      {/* ABOUT US - 중앙 정렬 */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="typo-title1e mb-6">ABOUT US</h1>
        <p className="typo-bodyk1 text-left">{ABOUT_INTRO}</p>
      </section>

      {/* 세로로 반 나눔: 왼쪽 ROADMAP / 오른쪽 YeonHheok, Core Values, Management Team */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 sm:pl-4">
        {/* 왼쪽: ROADMAP - 데스크톱은 클릭 가능한 리스트, 모바일은 클릭 시 이미지 3장 펼침 */}
        <section className="flex-1 min-w-0 hidden sm:block overflow-visible">
          <h2 className="typo-pretitle2e mb-5">ROADMAP</h2>
          <div className="space-y-8 overflow-visible">
            {ROADMAP_SECTIONS.map((section, sectionIndex) => (
              <div key={section.id} className="overflow-visible">
                <h3 className="typo-boldk mb-2.5">{section.title}</h3>
                <ul className="typo-bodyk1 overflow-visible">
                  {section.activities.map((activity, activityIndex) => {
                    const globalIndex = getGlobalIndex(sectionIndex, activityIndex);
                    const isActive = activeIndex === globalIndex;
                    
                    return (
                      <li
                        key={activity.id}
                        ref={(el) => {
                          activityItemRefs.current[globalIndex] = el;
                        }}
                        className={`relative flex items-center justify-between w-42 pl-3.5 pr-2 py-1 cursor-pointer transition-all duration-200 ${
                          isActive
                            ? "text-primarybrand before:content-[''] before:absolute before:inset-y-0 before:right-0 before:bg-light before:-left-5 before:sm:-left-[4rem] before:z-0"
                            : "hover:bg-accent"
                        }`}
                        onClick={() => onActivityClick && onActivityClick(globalIndex)}
                      >
                        <span className={`relative z-10 ${isActive ? "typo-boldk" : ""}`}>
                          {activity.label}
                        </span>
                        {activity.isKeyEvent && (
                          <img
                            src={activityCheckIcon}
                            alt=""
                            width={13}
                            height={13}
                            className="shrink-0 relative z-10"
                            aria-hidden
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <div className="order-2 sm:order-none">
          <RoadmapMobile />
        </div>

        {/* 오른쪽: 연혁, Core Values, Management Team - 모바일에서 먼저 표시 */}
        <div className="flex-1 min-w-0 flex flex-col gap-10 order-1 sm:order-none">
          <section>
            <h2 className="typo-pretitle2e mb-6">YeonHheok</h2>
            <ul className="typo-bodyk1 space-y-1">
              {YEONHHEOK_ITEMS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="typo-pretitle2e mb-6">Core Values</h2>
            <p className="typo-bodyk1 flex flex-wrap items-center gap-x-10 gap-y-1">
            {CORE_VALUES.map((value, i) => (
              <span key={i}>{value}</span>
            ))}
          </p>
          </section>

          <section>
            <div className="pt-7.5">
              <HoverBtn
                type="managementteam"
                onClick={() => navigate("/team")}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
