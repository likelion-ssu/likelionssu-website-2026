import React, { useEffect, useRef, useState } from "react";
import PartMenu from "./PartMenu";

export default function PartMenuTab({ activePart, setActivePart }) {
  const [isStuck, setIsStuck] = useState(false);
  const tabRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!tabRef.current) return;

      const rect = tabRef.current.getBoundingClientRect();
      setIsStuck(rect.top <= 95);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={tabRef}
      className={`
        fixed 
        sm:sticky
        top-[5.9375rem] sm:top-[3.5625rem]
        z-40 
        w-full
        flex flex-col items-center
        bg-secondarybrand
      `}
    >

      <div className="flex items-center w-full justify-between sm:w-fit sm:justify-center sm:mx-auto">
        <PartMenu
          mobileText="PM"
          webText="Product Manager"
          isActive={activePart === "PM"}
          onClick={() => setActivePart("PM")}
        />
        <PartMenu
          mobileText="DE"
          webText="Product Designer"
          isActive={activePart === "DE"}
          onClick={() => setActivePart("DE")}
        />
        <PartMenu
          mobileText="FE"
          webText="Frontend Developer"
          isActive={activePart === "FE"}
          onClick={() => setActivePart("FE")}
        />
        <PartMenu
          mobileText="BE"
          webText="Backend Developer"
          isActive={activePart === "BE"}
          onClick={() => setActivePart("BE")}
          mobileRightBorder = {true}
        />
      </div>

      {!isStuck && (
        <div className="w-full border-b-[0.63px] border-line sm:hidden" />
      )}
    </div>
  );
}
