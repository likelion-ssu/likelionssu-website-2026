import React, { useState } from "react";
import { ROADMAP_SECTIONS } from "../../../data/about";
import activityCheckIcon from "../../../assets/activity-check.svg";

/** 사진 크기 1: 102×128 (홀수번째 활동: 1번·3번 슬롯) */
const IMG_SIZE_1_CLASS = "w-[102px] h-[128px]";
/** 사진 크기 2: 102×76 (홀수번째 활동: 2번 슬롯 / 짝수번째: 1번·3번 슬롯) */
const IMG_SIZE_2_CLASS = "w-[102px] h-[76px]";

/**
 * 모바일 전용 ROADMAP.
 * 활동 이름 클릭 시 바로 아래에 해당 활동의 이미지 3장을 펼쳐서 표시.
 * 홀수번째 활동: [크기1, 크기2, 크기1], 짝수번째 활동: [크기2, 크기1, 크기2].
 * 원본 비율과 관계없이 지정 크기로 잘라서 표시(object-fit: cover).
 */
export default function RoadmapMobile() {
  const [expandedId, setExpandedId] = useState(null);
  /** 클릭된 이미지: { activityId, imageIndex } | null → 해당 이미지 위에 오버레이+캡션 표시 */
  const [selectedImage, setSelectedImage] = useState(null);

  const toggle = (activityId) => {
    setExpandedId((prev) => (prev === activityId ? null : activityId));
    setSelectedImage(null);
  };

  const toggleImageSelection = (activityId, imageIndex) => {
    setSelectedImage((prev) =>
      prev?.activityId === activityId && prev?.imageIndex === imageIndex
        ? null
        : { activityId, imageIndex }
    );
  };

  return (
    <section className="flex-1 min-w-0 sm:hidden">
      <h2 className="typo-pretitle2e mb-5 mt-7.5">ROADMAP</h2>
      <div className="space-y-4">
        {ROADMAP_SECTIONS.map((section, sectionIndex) => {
          const activitiesBefore = ROADMAP_SECTIONS.slice(0, sectionIndex).reduce(
            (acc, s) => acc + s.activities.length,
            0
          );
          return (
            <div key={section.id}>
              <h3 className="typo-boldk mb-1 text-center">{section.title}</h3>
              <ul className="typo-bodyk1 space-y-0">
                {section.activities.map((activity, activityIndex) => {
                  const globalIndex = activitiesBefore + activityIndex;
                  const isOddActivity = globalIndex % 2 === 0; // 1번째(0), 3번째(2), … → 크기 [1, 2, 1]
                  const sizeClasses = isOddActivity
                    ? [IMG_SIZE_1_CLASS, IMG_SIZE_2_CLASS, IMG_SIZE_1_CLASS]
                    : [IMG_SIZE_2_CLASS, IMG_SIZE_1_CLASS, IMG_SIZE_2_CLASS];

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
                          className="flex justify-between items-center py-4 w-full"
                        >
                          {activity.images.slice(0, 3).map((src, i) => {
                            const isSelected =
                              selectedImage?.activityId === activity.id &&
                              selectedImage?.imageIndex === i;
                            const caption =
                              activity.imageCaptions?.[i] ?? "";
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() =>
                                  toggleImageSelection(activity.id, i)
                                }
                                className={`relative overflow-hidden bg-emptyimg shrink-0 ${sizeClasses[i]}`}
                              >
                                <img
                                  src={src}
                                  alt=""
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                  decoding="async"
                                  fetchPriority="low"
                                />
                                {isSelected && (
                                  <span className="absolute inset-0 flex items-center justify-center p-2 bg-hoverimg">
                                    <span className="typo-small2 text-light text-center break-keep whitespace-pre-line">
                                      {caption}
                                    </span>
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
