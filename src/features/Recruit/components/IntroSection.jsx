import React from "react";
import backgroundImg from "../assets/IntroSection_bg.svg";
import button from "../assets/IntroSection_button.svg";
import hoverButton from "../assets/IntroSection_hoverButton.svg";

export default function IntroSection() {
  return (
    <div className="relative w-full min-h-screen bg-secondarybrand flex justify-center items-center px-4 sm:px-[3.75rem] pb-8 pt-0 sm:pt-[3.5625rem]">
      {/* 좌측 상단 텍스트 - absolute로 그래픽 위치에 영향 없게 수정 */}
      <div className="absolute left-4 sm:left-[3.75rem] top-[1rem] sm:top-[3.5625rem] flex flex-col z-10 animate-recruit-content-enter">
        <h1 className="typo-recruit-title text-primarybrand">POSSIBILLITY</h1>
        <h1 className="typo-recruit-title text-primarybrand">TO</h1>
        <h1 className="typo-recruit-title text-primarybrand">REALITY</h1>
        <p className="typo-recruit-subtitle text-primarybrand mt-4">
          숭실대학교 멋쟁이사자처럼 14기 모집
        </p>
      </div>

      {/* 중앙 그래픽 - Home과 동일한 중앙 기준으로 배치 */}
      <div className="absolute left-1/2 top-[calc(50vh-5.9375rem)] -translate-x-1/2 -translate-y-1/2 sm:top-1/2 flex justify-center items-center">
        <div className="relative shrink-0">
          {/* 배경 이미지 */}
          <img
            src={backgroundImg}
            alt=""
            className="
              w-[28rem] h-[18rem]
              sm:w-[min(28rem,70vw)]
              sm:h-[min(18rem,45vh)]
              object-contain
            "
          />

          {/* 아이콘 (중앙 고정) - 호버 시 hoverButton 표시, 클릭 시 ValueSection으로 스크롤, 모바일 짧은 높이에서 축소 */}
          <div
            className="group absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-[min(3.5rem,10vh)] h-[min(3.5rem,10vh)] sm:w-[4.9841rem] sm:h-[4.9841rem] cursor-pointer animate-recruit-content-enter"
            onClick={() =>
              document.getElementById("value-section")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <img
              src={button}
              alt=""
              className="absolute inset-0 w-full h-full transition-opacity duration-200 group-hover:opacity-0"
            />
            <img
              src={hoverButton}
              alt=""
              className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            />
          </div>

          {/* 텍스트 (아이콘 오른쪽) */}
          <p
            className="
              absolute
              left-1/2
              top-[48%]
              -translate-y-1/2
              translate-x-[2.5rem] sm:translate-x-[5rem]
              typo-recruit-scroll text-text max-w-[8rem] sm:max-w-none whitespace-normal sm:whitespace-nowrap leading-tight animate-recruit-content-enter
            "
          >
            모집 상세 보러 가기
          </p>
        </div>
      </div>
    </div>
  );
}
