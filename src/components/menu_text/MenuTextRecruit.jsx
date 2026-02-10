import React from "react";
import recruit from "../../assets/recruit.svg";
import recruithover from "../../assets/recruit-hover.svg";
import recruitwhite from "../../assets/recruit-white.svg";

export default function MenuTextRecruit({ variant = "default", isHover = false }) {
  const isWhite = variant === "white";

  return (
    <div className="relative gap-[0.75rem]">

      {/* 화이트 모바일용: 글자+아이콘+선 가운데 정렬 */}
      {isWhite && (
        <div className="sm:hidden flex flex-col items-center justify-center gap-[0.09rem]">
          <div className="flex items-end justify-center gap-[0.56rem]">
            {/* Text */}
            <p
              className="typo-cardtexte"
              style={{ color: isHover ? "var(--color-primarybrand)" : "#FFF" }}
            >
              RECRUIT
            </p>

            {/* Icon */}
            <img
              src={isHover ? recruithover : recruitwhite}
              alt="recruit-icon"
              className="h-[1.13131rem] mb-[0.12rem]"
            />
          </div>

          {/* Underline */}
          <span
            className="h-[1px] w-[6.46875rem]"
            style={{
              backgroundColor: isHover ? "var(--color-primarybrand)" : "#FFF",
            }}
          />
        </div>
      )}

      {/* 화이트 웹용: 글자 + 아이콘 */}
      {isWhite && (
        <div className="hidden sm:flex items-center gap-[0.75rem]">
          <p
            style={{
              color: isHover ? "var(--color-primarybrand)" : "#FFF",
              textAlign: "right",
              fontFamily: '"JetBrains Mono"',
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "1.875rem",
            }}
          >
            RECRUIT
          </p>

          {/* 웹 아이콘 */}
          <img
            src={isHover ? recruithover : recruitwhite}
            alt="recruit-icon"
            className="w-[1.59375rem] h-[1.60275rem]"
          />
        </div>
      )}

      {/* 기본(default) 버전 */}
      {!isWhite && (
        <div className="flex items-center gap-[0.5rem]">
          <p
            className="typo-cardtexte"
            style={{
              color: isHover ? "var(--color-primarybrand)" : "var(--color-text)",
            }}
          >
            RECRUIT
          </p>

          <img
            src={isHover ? recruithover : recruit}
            alt="recruit-icon"
            className="w-[1.0625rem] h-[1.0685rem]"
          />

          {/* 기본 underline */}
          <span
            className="absolute h-[1px] bottom-[-0.07rem]"
            style={{
              width: "5.75rem",
              backgroundColor: isHover ? "var(--color-primarybrand)" : "var(--color-text)",
            }}
          />
        </div>
      )}

      {/* 화이트 웹용 선 */}
      {isWhite && (
        <span
          className="absolute h-[1px] bottom-[-0.07rem] hidden sm:block"
          style={{
            width: "8.625rem",
            backgroundColor: isHover ? "var(--color-primarybrand)" : "#FFF",
          }}
        />
      )}
    </div>
  );
}
