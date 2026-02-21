import React from "react";
import linePc from "../assets/TimelineSection_line_pc.svg";
import lineMo from "../assets/TimelineSection_line_mo.svg";

const TIMELINE_ITEMS = [
  { title: "지원서 제출", date: "2.23(월) - 3.6(금)" },
  { title: "서류 결과", date: "3.8(일)" },
  { title: "프리코스 시청", date: "3.8(일) - 3.13(금)" },
  { title: "면접 평가", date: "3.11(수) - 3.13(금)" },
  { title: "최종 결과 발표", date: "3.15(일)" },
];

// 모바일 SVG 기준 마커 y 위치
// 모바일의 경우, 점 위치와 비슷해야 할 필요가 있어서 좌표로 추출
const MO_MARKER_POSITIONS = [15, 116, 216, 317, 419];

export default function TimelineSection() {
  return (
    <section
      id="timeline-section"
      className="scroll-mt-[5.9375rem] lg:scroll-mt-[3.5625rem] bg-secondarybrand w-full px-4 lg:px-[3.75rem]"
    >
      {/* 타이틀 - 모바일 subtitlee / PC pretitle1e */}
      <h2 className="text-center text-primarybrand mb-12 lg:mb-[6.25rem]">
        <span className="typo-subtitlee lg:hidden">Application Timeline</span>
        <span className="hidden lg:block typo-pretitle1e">
          Application Timeline
        </span>
      </h2>

      {/* PC: 가로 타임라인 */}
      <div className="hidden lg:block w-full max-w-[47.5625rem] mx-auto">
        <div className="flex flex-col">
          {/* 텍스트 라인 */}
          <div className="px-1 py-1">
            <div className="flex justify-between text-center">
              {TIMELINE_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                  flex flex-col items-center gap-0.5
      ${index === TIMELINE_ITEMS.length - 1 ? "translate-x-2" : ""}
      ${index === 2 ? "translate-x-4" : ""}
        ${index === 1 ? "translate-x-3" : ""}
    `}
                >
                  <span className="typo-subtitlek text-text font-medium">
                    {item.title}
                  </span>
                  <span className="typo-bodyk1 text-text">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-10">
            <img src={linePc} alt="" className="w-full h-auto block" />
          </div>
        </div>
      </div>

      {/* 모바일: 세로 타임라인 */}
      <div className="lg:hidden flex justify-center -ml-20">
        <div className="relative inline-block h-[27.75rem]">
          <div className="flex gap-10">
            <img
              src={lineMo}
              alt=""
              className="h-[27.75rem] w-8 object-contain flex-shrink-0"
            />
            <div
              className="relative flex-shrink-0"
              style={{ width: "max-content" }}
            >
              {TIMELINE_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  className="absolute flex flex-col justify-center"
                  style={{
                    top: `${(MO_MARKER_POSITIONS[index] / 443) * 100}%`,
                    transform: "translateY(-35%)",
                  }}
                >
                  <span className="typo-cardtextk text-text font-medium whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="typo-bodyk1 text-text whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
