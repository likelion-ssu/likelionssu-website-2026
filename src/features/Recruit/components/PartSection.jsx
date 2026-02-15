import React from "react";
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

const PRECOURSE_URL = "#"; // 프리코스 영상 링크로 교체

function PartCard({
  label,
  img,
  textImg,
  textImgClassName = "",
  headerPos = "top", // "top" | "bottom"
  className = "",
  headerClassName = "",
  imgClassName = "",
}) {
  // 가로 한 줄: [링크 | 타이틀 | 링크]. BE(아래 헤더)일 때만 버튼 위 / BE 아래
  const isBEBottom = label === "BE" && headerPos === "bottom";

  const TitleAndButtons = (
    <div
      className={`grid grid-cols-[1fr_auto_1fr] items-start w-full px-2 sm:px-2 ${headerClassName}`}
    >
      <Link
        to="/part"
        className="text-text typo-cardtextk hover:opacity-80 whitespace-nowrap underline justify-self-start pr-4 hover:text-primarybrand"
      >
        ← 파트 소개 보러 가기
      </Link>

      <h3
        className={`text-text typo-title1e whitespace-nowrap justify-self-center ${isBEBottom ? "mt-2 sm:mt-3" : "self-start -mt-10"}`}
      >
        {label}
      </h3>

      <Link
        to={PRECOURSE_URL}
        className="text-text typo-cardtextk hover:opacity-80 whitespace-nowrap underline justify-self-end pl-4 hover:text-primarybrand"
      >
        프리코스 영상 →
      </Link>
    </div>
  );

  const Image = (
    <div className="group flex justify-center relative block cursor-default">
      <img
        src={img}
        alt={label}
        className={`w-full max-w-[10rem] sm:max-w-[14rem] h-auto object-contain group-hover:scale-105 transition-transform duration-300 ${imgClassName}`}
      />
      {textImg && (
        <img
          src={textImg}
          alt=""
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] min-w-[12rem] max-w-[15rem] h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${textImgClassName}`}
        />
      )}
    </div>
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {headerPos === "top" ? (
        <>
          {TitleAndButtons}
          <div className="mt-2 sm:mt-3 mb-1">{Image}</div>
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
  return (
    <section
      id="part-section"
      className="scroll-mt-[5.9375rem] sm:scroll-mt-[3.5625rem] bg-secondarybrand w-full px-4 sm:px-[3.75rem] py-12 sm:py-16"
    >
      <div className="max-w-[75rem] mx-auto">
        {/* 모바일: 세로 스택 */}
        <div className="sm:hidden flex flex-col gap-10">
          <PartCard
            label="PM"
            img={pmImg}
            textImg={pmText}
            textImgClassName="!min-w-[16rem] !max-w-[22rem]"
          />
          <PartCard label="DE" img={deImg} textImg={deText} />

          <div className="text-center py-2">
            <h2 className="text-primarybrand typo-footer2ew tracking-wide">
              Built Around Four Forces
            </h2>
            <img
              src={circle}
              alt=""
              className="mt-7 w-[2rem] h-[2rem] mx-auto"
            />
          </div>

          <PartCard label="FE" img={feImg} textImg={feText} />
          <PartCard
            label="BE"
            img={beImg}
            textImg={beText}
            textImgClassName="!min-w-[16rem] !max-w-[22rem]"
            headerPos="bottom"
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
            textImgClassName="!min-w-[16rem] !max-w-[22rem]"
            headerPos="top"
            className="absolute left-[4%] top-[0%] w-[30%]"
          />

          {/* DE */}
          <PartCard
            label="DE"
            img={deImg}
            textImg={deText}
            headerPos="top"
            className="absolute right-[4%] top-[6%] w-[30%]"
          />

          {/* FE */}
          <PartCard
            label="FE"
            img={feImg}
            textImg={feText}
            headerPos="top"
            className="absolute left-[0%] bottom-[8%] w-[30%]"
          />

          {/* BE (헤더 아래) */}
          <PartCard
            label="BE"
            img={beImg}
            textImg={beText}
            textImgClassName="!min-w-[16rem] !max-w-[22rem]"
            headerPos="bottom"
            className="absolute left-[50%] top-[45%] w-[28%]"
            imgClassName="sm:max-w-[13rem]"
          />
        </div>
      </div>
    </section>
  );
}
