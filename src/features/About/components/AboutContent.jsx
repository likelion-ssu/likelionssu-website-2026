import React from "react";
import {
  ROADMAP_SECTIONS,
  ABOUT_INTRO,
  YEONHHEOK_ITEMS,
  CORE_VALUES,
} from "../../../data/about";
import activityCheckIcon from "../../../assets/activity-check.svg";

/**
 * 오른쪽 스크롤 텍스트 영역.
 * onSectionEnter는 스크롤 감지(Intersection Observer) 후 다음 단계에서 연결 예정.
 */
// eslint-disable-next-line no-unused-vars -- 다음 단계에서 Scroll Spy / 클릭 스크롤 연결 시 사용
export default function AboutContent({ activeIndex, onSectionEnter }) {
  return (
    <div className="min-h-screen py-12 px-8 sm:px-12 text-color-text">
      {/* ABOUT US - 중앙 정렬 */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="typo-title1e mb-6">ABOUT US</h1>
        <p className="typo-bodyk1 text-left">{ABOUT_INTRO}</p>
      </section>

      {/* 세로로 반 나눔: 왼쪽 ROADMAP / 오른쪽 YeonHheok, Core Values, Management Team */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-12">
        {/* 왼쪽: ROADMAP */}
        <section className="flex-1 min-w-0">
          <h2 className="typo-pretitle2e mb-6">ROADMAP</h2>
          <div className="space-y-8">
            {ROADMAP_SECTIONS.map((section) => (
              <div key={section.id}>
                <h3 className="typo-boldk mb-4">{section.title}</h3>
                <ul className="typo-bodyk1 space-y-2">
                  {section.activities.map((activity) => (
                    <li key={activity.id}>
                      <span className="inline-flex items-center gap-1">
                        {activity.label}
                        {activity.isKeyEvent && (
                          <img
                            src={activityCheckIcon}
                            alt=""
                            width={13}
                            height={13}
                            className="shrink-0"
                            aria-hidden
                          />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 오른쪽: YeonHheok, Core Values, Management Team */}
        <div className="flex-1 min-w-0 flex flex-col gap-10 sm:gap-12">
          <section>
            <h2 className="typo-pretitle2e mb-6">YeonHheok</h2>
            <ul className="typo-bodyk1 space-y-2">
              {YEONHHEOK_ITEMS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="typo-pretitle2e mb-6">Core Values</h2>
            <p className="typo-bodyk1">{CORE_VALUES.join(", ")}</p>
          </section>

          <section>
            <a
              href="#"
              className="typo-pretitle2e text-primarybrand underline inline-flex items-center gap-2"
            >
              Management Team
              <span aria-hidden>↗</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
