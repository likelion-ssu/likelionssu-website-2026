import React, { useState } from "react";
import { Link } from "react-router-dom";
import pmImg from "../assets/PartSection_pm_img.svg";
import deImg from "../assets/PartSection_de_img.svg";
import feImg from "../assets/PartSection_fe_img.svg";
import beImg from "../assets/PartSection_be_img.svg";
import pmText from "../assets/PartSection_pm_text.svg";
import deText from "../assets/PartSection_de_text.svg";
import feText from "../assets/PartSection_fe_text.svg";
import beText from "../assets/PartSection_be_text.svg";
import circle from "../assets/RoadmapSection_circle.svg";

// 파트별 프리코스 영상 URL
const PRECOURSE_URLS = {
  PM: "https://youtube.com/playlist?list=PL0_ZM90TPnbYPazLWsikA0WsChrZLzAIL&si=ZIJax7muWJ8vUehk",
  DE: "https://youtube.com/playlist?list=PLGh_uyBM2dBLUh9HftRzkpCFV57dpLpJR&si=rwxZXz_JHJKJYYti",
  FE: "https://www.youtube.com/watch?v=OGFgdro160I&list=PLomA8CWFV7xygG3Nt0jQQnT6KXQ0bjV77",
  BE: "https://www.youtube.com/playlist?list=PLm25o_YohhFvXRGOXe_9qWx60UGwxgfLu",
};

function PartCard({
  label,
  img,
  textImg,
  textImgClassName = "",
  headerPos = "top", // "top" | "bottom"
  className = "",
  headerClassName = "",
  imgClassName = "",
  showTextOverlay = false, // 모바일 pressed 시 텍스트 이미지 표시
  onImagePress,
}) {
  // 가로 한 줄: [링크 | 타이틀 | 링크]. BE(아래 헤더)일 때만 버튼 위 / BE 아래
  const isBEBottom = label === "BE" && headerPos === "bottom";

  const TitleAndButtons = (
    <div
      className={`flex justify-center w-full px-2 sm:px-2 ${headerClassName}`}
    >
      <div className="flex items-center shrink-0 gap-[2.5rem]">
        <Link
          to={`/part?tab=${label}`}
          className="text-text typo-cardtextk hover:opacity-80 whitespace-nowrap underline hover:text-primarybrand"
        >
          <span className="sm:hidden">← 파트 소개 보기</span>
          <span className="hidden sm:inline">← 파트 소개 보러 가기</span>
        </Link>
        <h3
          className={`text-text typo-title1e whitespace-nowrap ${isBEBottom ? "mt-0" : ""}`}
        >
          {label}
        </h3>
        <a
          href={PRECOURSE_URLS[label]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text typo-cardtextk hover:opacity-80 whitespace-nowrap underline hover:text-primarybrand"
        >
          프리코스 영상 →
        </a>
      </div>
    </div>
  );

  const Image = (
    <div
      role={onImagePress ? "button" : undefined}
      onClick={onImagePress}
      className={`group flex justify-center items-center w-full relative block ${onImagePress ? "cursor-pointer" : "cursor-default"}`}
    >
      <img
        src={img}
        alt={label}
        className={`w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] object-contain ${imgClassName}`}
      />
      {textImg && (
        <img
          src={textImg}
          alt=""
          className={`absolute left-1/2 top-1/2 -translate-y-1/2 w-[180%] min-w-[12rem] max-w-[15rem] h-auto object-contain pointer-events-none transition-all duration-750 ease-in-out ${showTextOverlay ? "opacity-100 -translate-x-1/2" : "opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-1/2"} ${textImgClassName}`}
        />
      )}
    </div>
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {headerPos === "top" ? (
        <>
          {TitleAndButtons}
          <div className="mt-4 sm:mt-3 mb-1">{Image}</div>
        </>
      ) : (
        <>
          {Image}
          <div className="mt-2 sm:mt-3">{TitleAndButtons}</div>
        </>
      )}
    </div>
  );
}

export default function PartSection() {
  const [pressedMobilePart, setPressedMobilePart] = useState(null);

  const handleMobileImagePress = (label) => {
    setPressedMobilePart((prev) => (prev === label ? null : label));
  };

  return (
    <section
      id="part-section"
      className="scroll-mt-[5.9375rem] sm:scroll-mt-[3.5625rem] bg-secondarybrand w-full px-4 sm:px-[3.75rem] py-12 sm:py-16"
    >
      <div className="max-w-[75rem] mx-auto">
        {/* 모바일: 제목 먼저, 그 다음 PM → DE → FE → BE */}
        <div className="sm:hidden flex flex-col gap-10">
          <div className="text-center py-[2.5rem]">
            <h2 className="text-primarybrand typo-subtitlee tracking-wide">
              Built Around Four Forces
            </h2>
          </div>

          <PartCard
            label="PM"
            img={pmImg}
            textImg={pmText}
            textImgClassName="!min-w-[16rem] !max-w-[22rem]"
            imgClassName="!w-[11rem] !h-[11rem] sm:!w-[11rem] sm:!h-[11rem]"
            showTextOverlay={pressedMobilePart === "PM"}
            onImagePress={() => handleMobileImagePress("PM")}
          />
          <PartCard
            label="DE"
            img={deImg}
            textImg={deText}
            showTextOverlay={pressedMobilePart === "DE"}
            onImagePress={() => handleMobileImagePress("DE")}
          />

          <PartCard
            label="FE"
            img={feImg}
            textImg={feText}
            showTextOverlay={pressedMobilePart === "FE"}
            onImagePress={() => handleMobileImagePress("FE")}
          />
          <PartCard
            label="BE"
            img={beImg}
            textImg={beText}
            textImgClassName="!min-w-[22rem]"
            headerPos="top"
            showTextOverlay={pressedMobilePart === "BE"}
            onImagePress={() => handleMobileImagePress("BE")}
          />
        </div>

        {/* 데스크탑(sm~): absolute 배치 */}
        <div className="hidden sm:block relative w-full min-h-[40rem]">
          {/* 중앙 문구 */}
          <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-primarybrand typo-footer2ew tracking-wide">
              Built Around Four Forces
            </h2>
            <img
              src={circle}
              alt=""
              className="mt-2 w-[2.0118rem] h-[2.0118rem] mx-auto"
            />
          </div>

          {/* PM */}
          <PartCard
            label="PM"
            img={pmImg}
            textImg={pmText}
            textImgClassName="!min-w-[14.5rem] !max-w-[19.5rem]"
            imgClassName="!w-[7.5rem] !h-[7.5rem] sm:!w-[11rem] sm:!h-[11rem]"
            headerPos="top"
            className="absolute left-[10%] top-[0%] w-[30%]"
          />

          {/* DE */}
          <PartCard
            label="DE"
            img={deImg}
            textImg={deText}
            headerPos="top"
            className="absolute right-[3%] top-[6%] w-[30%]"
          />

          {/* FE */}
          <PartCard
            label="FE"
            img={feImg}
            textImg={feText}
            headerPos="top"
            className="absolute left-[0%] bottom-[8%] w-[30%]"
          />

          {/* BE - PM과 대각선 대칭 (우하단) */}
          <PartCard
            label="BE"
            img={beImg}
            textImg={beText}
            textImgClassName="!min-w-[16rem] !max-w-[22rem]"
            headerPos="bottom"
            className="absolute right-[20%] bottom-[5%] w-[30%]"
          />
        </div>
      </div>
    </section>
  );
}
