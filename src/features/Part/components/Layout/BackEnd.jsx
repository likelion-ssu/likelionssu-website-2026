import React, { useRef } from "react";
import BeIntro from "../Be/BeIntro";
import Lineup from "../Lineup";
import BeContent from "../Be/BeContent";
import SessionSection from "../SessionSection";
import ShortcutBtn from "../ShortcutBtn";
import ImageSlider from "../ImageSlider";

export default function BackEnd() {
  const topRef = useRef(null);
  const beContentRef = useRef(null);
  const sessionRef = useRef(null);

  const scrollToSection = (ref) => {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div
        ref={topRef}
        className="scroll-mt-[8rem] sm:scroll-mt-[10rem]"
      ></div>

      {/* Intro 영역 (가운데 정렬) */}
      <div className="w-full flex flex-col items-center pb-[3.75rem] sm:pb-[3.94rem] px-[1.19rem] sm:px-0">
        <BeIntro />

        <Lineup
          onScrollToPmContent={() => scrollToSection(beContentRef)}
          onScrollToSession={() => scrollToSection(sessionRef)}
          version="be"
        />
      </div>

      {/* Content 영역 (viewport 기준 absolute 요소 살리기 위해 center 강제 X) */}
      <div
        ref={beContentRef}
        className="w-full scroll-mt-[5.7rem] sm:scroll-mt-[5.56rem]"
      >
        <BeContent />
      </div>

      {/* Session 영역 (가운데 정렬) */}
      <div className="w-full flex justify-center">
        <div
          ref={sessionRef}
          className="w-full sm:w-[63.4375rem] scroll-mt-[5.7rem] sm:scroll-mt-[2.74rem]"
        >
          <SessionSection version="be" />
        </div>
      </div>

      {/* Footer 영역 (가운데 정렬) */}
      <div className="w-full flex justify-center">
        <div className="mb-[0.81rem] sm:mb-[1.37rem] flex flex-col items-end sm:flex-row sm:justify-between sm:items-end w-full mt-[6.19rem] px-[1.25rem] sm:px-0 sm:mt-[10.69rem] sm:w-[75.8125rem]">
          <p className="hidden sm:block typo-footer-custom text-text">
            Beautiful moments we will create together
          </p>

          <ShortcutBtn
            text="맨 위로"
            direction="up"
            onClick={() => scrollToSection(topRef)}
          />

          <p className="sm:hidden w-full mt-[1.88rem] typo-footer-custom text-text">
            Beautiful moments we will create together
          </p>
        </div>
      </div>

      <ImageSlider version="be" />
    </div>
  );
}
