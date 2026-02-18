import React, { useState } from "react";
import { Link } from "react-router-dom";
import pmImg from "../assets/PartSection_pm_img.svg";
import deImg from "../assets/PartSection_de_img.svg";
import feImg from "../assets/PartSection_fe_img.svg";
import beImg from "../assets/PartSection_be_img.svg";
import circle from "../assets/RoadmapSection_circle.svg";
import { RECRUIT_PART_TEXTS } from "../../../data/recruitPartText";

// 파트별 프리코스 영상 URL
const PRECOURSE_URLS = {
  PM: "https://youtube.com/playlist?list=PL0_ZM90TPnbYPazLWsikA0WsChrZLzAIL&si=ZIJax7muWJ8vUehk",
  DE: "https://youtube.com/playlist?list=PLGh_uyBM2dBLUh9HftRzkpCFV57dpLpJR&si=rwxZXz_JHJKJYYti",
  FE: "https://youtube.com/playlist?list=PLomA8CWFV7xygG3Nt0jQQnT6KXQ0bjV77&si=PV0ESnFxvAMvMoPt",
  BE: "https://www.youtube.com/playlist?list=PLm25o_YohhFvXRGOXe_9qWx60UGwxgfLu",
};

function PartCard({
  label,
  img,
  textLines,
  textLinesClassName = "",
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
          className="text-text hover:opacity-80 whitespace-nowrap underline hover:text-primarybrand active:text-primarybrand"
        >
          <span className="typo-buttontextbold sm:hidden">
            ← 파트 소개 보기
          </span>
          <span className="hidden sm:inline typo-cardtextk">
            ← 파트 소개 보러 가기
          </span>
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
          className="text-text hover:opacity-80 whitespace-nowrap underline hover:text-primarybrand active:text-primarybrand"
        >
          <span className="typo-buttontextbold sm:hidden">프리코스 영상 →</span>
          <span className="hidden sm:inline typo-cardtextk">
            프리코스 영상 →
          </span>
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
      {textLines?.lines?.length > 0 && (
        <div
          style={{
            aspectRatio: `${textLines.baseSize.width} / ${textLines.baseSize.height}`,
            left: "calc(50% + var(--part-mobile-x-shift))",
          }}
          className={`recruit-part-text-overlay absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] min-w-[12rem] max-w-[15rem] h-auto pointer-events-none ${textLinesClassName}`}
        >
          {textLines.lines.map((line, index) => (
            <div
              key={`${label}-${index}`}
              style={{
                left: `${(line.x / textLines.baseSize.width) * 100}%`,
                top: `calc(${index} * (var(--part-line-box-height) + var(--part-line-gap)))`,
              }}
              className="absolute"
            >
              <p
                style={{
                transitionDelay: `${index * 120}ms`,
                }}
                className={`bg-[rgba(255,255,255,0.95)] px-[0.625rem] py-[0.5rem] whitespace-nowrap typo-recruit-parttext text-[rgba(0,0,0,0.7)] transition-all duration-700 ease-out ${showTextOverlay ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"}`}
              >
                {line.text}
              </p>
            </div>
          ))}
        </div>
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
          <div className="text-center py-[2.5rem] flex flex-col items-center">
            <img
              src={circle}
              alt=""
              className="w-[1.6095rem] h-[1.6095rem] mb-[2.5rem] mx-auto"
            />
            <h2 className="text-primarybrand typo-subtitlee tracking-wide">
              Built Around Four Forces
            </h2>
          </div>

          <PartCard
            label="PM"
            img={pmImg}
            textLines={RECRUIT_PART_TEXTS.PM}
            showTextOverlay={pressedMobilePart === "PM"}
            onImagePress={() => handleMobileImagePress("PM")}
          />
          <PartCard
            label="DE"
            img={deImg}
            textLines={RECRUIT_PART_TEXTS.DE}
            showTextOverlay={pressedMobilePart === "DE"}
            onImagePress={() => handleMobileImagePress("DE")}
          />

          <PartCard
            label="FE"
            img={feImg}
            textLines={RECRUIT_PART_TEXTS.FE}
            showTextOverlay={pressedMobilePart === "FE"}
            onImagePress={() => handleMobileImagePress("FE")}
          />
          <PartCard
            label="BE"
            img={beImg}
            textLines={RECRUIT_PART_TEXTS.BE}
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
            textLines={RECRUIT_PART_TEXTS.PM}
            textLinesClassName="!min-w-[14.5rem] !max-w-[19.5rem]"
            imgClassName="!w-[7.5rem] !h-[7.5rem] sm:!w-[11rem] sm:!h-[11rem]"
            headerPos="top"
            className="absolute left-[10%] top-[0%] w-[30%]"
          />

          {/* DE */}
          <PartCard
            label="DE"
            img={deImg}
            textLines={RECRUIT_PART_TEXTS.DE}
            headerPos="top"
            className="absolute right-[3%] top-[6%] w-[30%]"
          />

          {/* FE */}
          <PartCard
            label="FE"
            img={feImg}
            textLines={RECRUIT_PART_TEXTS.FE}
            headerPos="top"
            className="absolute left-[0%] bottom-[8%] w-[30%]"
          />

          {/* BE - PM과 대각선 대칭 (우하단) */}
          <PartCard
            label="BE"
            img={beImg}
            textLines={RECRUIT_PART_TEXTS.BE}
            textLinesClassName="!min-w-[14.5rem] !max-w-[19.5rem]"
            headerPos="bottom"
            className="absolute right-[20%] bottom-[5%] w-[30%]"
          />
        </div>
      </div>
    </section>
  );
}
