import React, { useRef } from "react";
import DeIntro from "../De/DeIntro";
import Lineup from "../Lineup";
import DeContent from "../De/DeContent";
import SessionSection from "../SessionSection";
import ShortcutBtn from "../ShortcutBtn";
import ImageSlider from "../ImageSlider";

export default function ProductDesigner() {
  const topRef = useRef(null);
  const deContentRef = useRef(null);
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

      <div className="pb-[3.75rem] sm:pb-[3.94rem] px-[1.19rem] sm:px-0">
        <DeIntro />

        <Lineup
          onScrollToPmContent={() => scrollToSection(deContentRef)}
          onScrollToSession={() => scrollToSection(sessionRef)}
          version="de"
        />
      </div>
  

      <div
        ref={deContentRef}
        className="w-full sm:w-[90rem]  sm:pt-[0rem]  sm:pb-[0rem]
        scroll-mt-[4.515rem] sm:scroll-mt-[5.56rem]"
      >
        <DeContent />
      </div>


      <div
        ref={sessionRef}
        className="w-full sm:w-[63.4375rem] scroll-mt-[7.515rem] sm:scroll-mt-[2.74rem]"
      >
        <SessionSection version = "de"/>
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

      <ImageSlider version = "de" />
    </div>
  );
}
