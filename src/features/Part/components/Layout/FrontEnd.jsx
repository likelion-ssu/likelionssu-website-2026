import React, { useRef } from "react";
import FeIntro from "../Fe/FeIntro";
import Lineup from "../Lineup";
import FeContent from "../Fe/FeContent";
import SessionSection from "../SessionSection";
import ShortcutBtn from "../ShortcutBtn";
import ImageSlider from "../ImageSlider";

export default function FrontEnd() {
  const topRef = useRef(null);
  const feContentRef = useRef(null);
  const sessionRef = useRef(null);

  const scrollToSection = (ref) => {
    if (!ref.current) return;

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">

      <div
        ref={topRef}
        className="scroll-mt-[8rem] sm:scroll-mt-[10rem]"
      ></div>

      <div className="pb-[3.375rem] sm:pb-[2.27rem] px-[1.19rem] sm:px-0">
        <FeIntro />

        <Lineup
          onScrollToPmContent={() => scrollToSection(feContentRef)}
          onScrollToSession={() => scrollToSection(sessionRef)}
          version="fe"
        />
      </div>


      <div
        ref={feContentRef}
        className="w-full sm:w-[90rem] sm:pt-[0rem]  sm:pb-[0rem]
        scroll-mt-[5.7rem] sm:scroll-mt-[3.96rem]"
      >
        <FeContent />
      </div>


      <div
        ref={sessionRef}
        className="w-full sm:w-[63.4375rem] scroll-mt-[5.7rem] sm:scroll-mt-[2.74rem]"
      >
        <SessionSection version="fe"/>
      </div>


      <div className=" mb-[0.81rem] sm:mb-[1.37rem] flex flex-col items-end sm:flex-row sm:justify-between sm:items-end w-full mt-[6.19rem] px-[1.25rem] sm:px-0 sm:mt-[10.69rem] sm:w-[75.8125rem]">
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

      <ImageSlider version="fe" />
    </div>
  );
}
