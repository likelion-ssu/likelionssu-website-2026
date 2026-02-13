import React, { useState } from "react";
import { ROADMAP_SECTIONS } from "../../../data/about";
import activityCheckIcon from "../../../assets/activity-check.svg";

/**
 * 모바일 전용 ROADMAP.
 * 활동 이름 클릭 시 바로 아래에 해당 활동의 이미지 3장을 펼쳐서 표시.
 * 피그마 모바일 뷰 (node 420-3310) 기준.
 */
export default function RoadmapMobile() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (activityId) => {
    setExpandedId((prev) => (prev === activityId ? null : activityId));
  };

  return (
    <section className="flex-1 min-w-0 sm:hidden">
      <h2 className="typo-pretitle2e mb-5">ROADMAP</h2>
      <div className="space-y-4">
        {ROADMAP_SECTIONS.map((section) => (
          <div key={section.id}>
            <h3 className="typo-boldk mb-1 text-center">{section.title}</h3>
            <ul className="typo-bodyk1 space-y-0">
              {section.activities.map((activity) => {
                const isExpanded = expandedId === activity.id;
                return (
                  <li key={activity.id} className="flex flex-col items-center w-full">
                    <div className={`flex justify-center ${isExpanded ? "bg-light w-[calc(100%_+_2.5rem)] -ml-5 -mr-5 px-5" : "w-full"}`}>
                      <button
                        type="button"
                        onClick={() => toggle(activity.id)}
                        className={`w-[269px] relative flex items-center justify-center text-center transition-colors ${
                          isExpanded ? "text-primarybrand" : "text-color-text"
                        }`}
                        aria-expanded={isExpanded}
                        aria-controls={`roadmap-images-${activity.id}`}
                        id={`roadmap-trigger-${activity.id}`}
                      >
                        <span className={isExpanded ? "typo-boldk" : ""}>
                          {activity.label}
                        </span>
                        {activity.isKeyEvent && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2">
                            <img
                              src={activityCheckIcon}
                              alt=""
                              width={13}
                              height={13}
                              className="shrink-0"
                              aria-hidden
                            />
                          </span>
                        )}
                      </button>
                    </div>
                    {isExpanded && activity.images?.length > 0 && (
                      <div
                        id={`roadmap-images-${activity.id}`}
                        role="region"
                        aria-labelledby={`roadmap-trigger-${activity.id}`}
                        className="flex justify-between py-4 w-full"
                      >
                        {activity.images.slice(0, 3).map((src, i) => (
                          <div
                            key={i}
                            className="w-[100px] rounded overflow-hidden bg-emptyimg"
                          >
                            <img
                              src={src}
                              alt=""
                              className="w-full h-auto"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
