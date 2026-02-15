import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuTextRecruit from "../../../components/menu_text/MenuTextRecruit";
import ellipsem from "../assets/ellipse-m.svg";
import ellipsew from "../assets/ellipse-w.svg";

export default function RecruitButton({ onRecruitClick, disabled = false }) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;
    if (onRecruitClick) {
      onRecruitClick();
      return;
    }
    navigate("/recruit");
  };

  return (
    <div
      className="relative flex justify-center items-center cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
    >
      {/* 모바일 ellipse */}
      <img src={ellipsem} className="block sm:hidden" alt="ellipse-mobile" />

      {/* 웹 ellipse */}
      <img src={ellipsew} className="hidden sm:block" alt="ellipse-web" />

      {/* 텍스트 (ellipse 정중앙에 위치) */}
      <div className="absolute flex flex-col justify-center items-center gap-[0.5625rem]">
        <MenuTextRecruit variant="white" isHover={isHover} />

        {/* 모바일 버전 */}
        <p
          className="typo-small1 sm:hidden"
          style={{
            color: isHover ? "var(--color-primarybrand)" : "#FFF",
          }}
        >
          14기 지원하러 가기
        </p>

        {/* 웹 버전 */}
        <p
          className="hidden sm:block"
          style={{
            color: isHover ? "var(--color-primarybrand)" : "#FFF",
            textAlign: "center",
            fontFamily: "Interop",
            fontSize: "0.9375rem",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "1.6875rem",
            letterSpacing: "0.09375rem",
          }}
        >
          14기 지원하러 가기
        </p>
      </div>
    </div>
  );
}
