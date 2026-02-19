import React, { useRef } from "react";
import PmIntro from "../Pm/PmIntro";
import Lineup from "../Lineup";
import PmContent from "../Pm/PmContent";
import SessionSection from "../SessionSection";
import ShortcutBtn from "../ShortcutBtn";
import ImageSlider from "../ImageSlider";

export default function ProductManager() {
  const topRef = useRef(null);
  const pmContentRef = useRef(null);
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

      <div className="pb-[3.375rem] sm:pb-[3.87rem] px-[1.19rem] sm:px-0">
        <PmIntro />

        <Lineup
          onScrollToPmContent={() => scrollToSection(pmContentRef)}
          onScrollToSession={() => scrollToSection(sessionRef)}
        />
      </div>


      <div
        ref={pmContentRef}
        className="w-full sm:w-screen sm:pt-[0rem]  sm:pb-[0rem]
        scroll-mt-[5.7rem] sm:scroll-mt-[5.56rem]"
      >
        <PmContent />
      </div>


      <div
        ref={sessionRef}
        className="w-full sm:w-[63.4375rem] scroll-mt-[5.7rem] sm:scroll-mt-[2.74rem]"
      >
        <SessionSection />
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

      <ImageSlider />
    </div>
  );
}
