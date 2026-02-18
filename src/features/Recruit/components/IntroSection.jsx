import React, { useCallback, useEffect, useRef, useState } from "react";
import backgroundImg from "../assets/IntroSection_bg.svg";
import introStar from "../assets/IntroSection_button_star.svg";
import introHoverStar from "../assets/IntroSection_hoverButton_star.svg";
import introArrow from "../assets/IntroSection_button_arrow.svg";
import introHoverArrow from "../assets/IntroSection_hoverButton_arrow.svg";

const STAR_SIZE_REM = 3.25843;
const EPSILON = 0.0005;
const COMPLETION_SCROLL_RATIO = 0.90;
const CLICK_SCROLL_DURATION_MS = 1900;
const MOBILE_GAP_REM = 0.5;
const DESKTOP_GAP_REM = 2;
const LG_BREAKPOINT_PX = 1024;

export default function IntroSection() {
  const buttonRef = useRef(null);
  const metricsRef = useRef(null);
  const startScrollRef = useRef(null);
  const frameRef = useRef(0);
  const scrollRafRef = useRef(0);

  const [motion, setMotion] = useState({
    scrollProgress: 0,
    travelProgress: 0,
    top: 0,
    left: 0,
    ready: false,
  });

  const updateMotion = useCallback(() => {
    const metrics = metricsRef.current;
    if (!metrics) return;

    const scrollY = window.scrollY;
    const rawProgress =
      (scrollY - metrics.startScrollY) /
      (metrics.endScrollY - metrics.startScrollY);
    const scrollProgress = Math.min(1, Math.max(0, rawProgress));
    const travelProgress = scrollProgress;

    const starTopDoc =
      metrics.startTopDoc +
      (metrics.targetTopDoc - metrics.startTopDoc) * travelProgress;
    const nextTop = starTopDoc - scrollY;
    const nextLeft = metrics.startLeftDoc - window.scrollX;

    setMotion((prev) => {
      const sameScrollProgress =
        Math.abs(prev.scrollProgress - scrollProgress) < 0.001;
      const sameTravelProgress =
        Math.abs(prev.travelProgress - travelProgress) < 0.001;
      const sameTop = Math.abs(prev.top - nextTop) < 0.5;
      const sameLeft = Math.abs(prev.left - nextLeft) < 0.5;
      if (
        prev.ready &&
        sameScrollProgress &&
        sameTravelProgress &&
        sameTop &&
        sameLeft
      ) {
        return prev;
      }
      return {
        scrollProgress,
        travelProgress,
        top: nextTop,
        left: nextLeft,
        ready: true,
      };
    });
  }, []);

  const recalcMetrics = useCallback(() => {
    const buttonEl = buttonRef.current;
    const valueSectionEl = document.getElementById("value-section");
    const valueTitleEls = document.querySelectorAll("[data-value-title='true']");
    const valueTitleEl = Array.from(valueTitleEls).find((el) => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        el.getClientRects().length > 0
      );
    });

    if (!buttonEl || !valueSectionEl || !valueTitleEl) return;

    const remPx =
      parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
    const gapRem =
      window.innerWidth >= LG_BREAKPOINT_PX ? DESKTOP_GAP_REM : MOBILE_GAP_REM;
    const scrollY = window.scrollY;
    const buttonRect = buttonEl.getBoundingClientRect();
    const valueSectionRect = valueSectionEl.getBoundingClientRect();
    const valueTitleRect = valueTitleEl.getBoundingClientRect();
    const valueSectionStyles = window.getComputedStyle(valueSectionEl);

    if (startScrollRef.current === null) {
      startScrollRef.current = scrollY;
    }

    const startScrollY = startScrollRef.current;
    const valueSectionTopDoc = valueSectionRect.top + scrollY;
    const scrollMarginTopPx = parseFloat(valueSectionStyles.scrollMarginTop) || 0;
    const baseEndScrollY = valueSectionTopDoc - scrollMarginTopPx;
    const endScrollY = Math.max(
      startScrollY + (baseEndScrollY - startScrollY) * COMPLETION_SCROLL_RATIO,
      startScrollY + 1,
    );

    metricsRef.current = {
      startTopDoc: buttonRect.top + scrollY,
      startLeftDoc: buttonRect.left + window.scrollX,
      targetTopDoc:
        valueTitleRect.top + scrollY - gapRem * remPx - STAR_SIZE_REM * remPx,
      startScrollY,
      endScrollY,
    };

    updateMotion();
  }, [updateMotion]);

  useEffect(() => {
    const scheduleMotionUpdate = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = 0;
        updateMotion();
      });
    };

    const handleScroll = () => {
      scheduleMotionUpdate();
    };

    const handleResize = () => {
      recalcMetrics();
      scheduleMotionUpdate();
    };

    recalcMetrics();
    scheduleMotionUpdate();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("load", handleResize);

    const timeoutId = window.setTimeout(handleResize, 320);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("load", handleResize);
      window.clearTimeout(timeoutId);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
      if (scrollRafRef.current) {
        window.cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = 0;
      }
    };
  }, [recalcMetrics, updateMotion]);

  const isStarMoving = motion.travelProgress > EPSILON;
  const hasScrolled = motion.scrollProgress > EPSILON;
  const staticStarOpacity = isStarMoving ? 0 : 1;
  const staticArrowOpacity = hasScrolled ? 0 : 1;
  const movingStarOrangeOpacity = Math.min(1, Math.max(0, motion.travelProgress));
  const movingStarBaseOpacity = 1 - movingStarOrangeOpacity;
  const movingStarRotationDeg = motion.travelProgress * 360;
  const lineFadeIn = Math.min(1, Math.max(0, motion.travelProgress / 0.12));
  const lineFadeOut = Math.min(1, Math.max(0, (1 - motion.travelProgress) / 0.2));
  const fallingLineOpacity = isStarMoving ? lineFadeIn * lineFadeOut : 0;

  const handleScrollToValue = useCallback(() => {
    recalcMetrics();

    let targetY = metricsRef.current ? Math.max(0, metricsRef.current.endScrollY) : 0;
    if (!metricsRef.current) {
      const valueSectionEl = document.getElementById("value-section");
      if (!valueSectionEl) return;
      const valueSectionStyles = window.getComputedStyle(valueSectionEl);
      const scrollMarginTopPx = parseFloat(valueSectionStyles.scrollMarginTop) || 0;
      targetY = Math.max(
        0,
        valueSectionEl.getBoundingClientRect().top +
          window.scrollY -
          scrollMarginTopPx,
      );
    }

    if (scrollRafRef.current) {
      window.cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = 0;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      window.scrollTo({ top: targetY });
      return;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 1) return;

    const startTime = performance.now();
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / CLICK_SCROLL_DURATION_MS);
      const eased = easeInOutCubic(t);
      window.scrollTo({ top: startY + distance * eased });
      if (t < 1) {
        scrollRafRef.current = window.requestAnimationFrame(step);
      } else {
        scrollRafRef.current = 0;
      }
    };

    scrollRafRef.current = window.requestAnimationFrame(step);
  }, [recalcMetrics]);

  return (
    <div className="relative w-full min-h-screen bg-secondarybrand flex justify-center items-center px-4 lg:px-[3.75rem] pb-0 pt-0 lg:pt-[3.5625rem]">
      {/* 좌측 상단 텍스트 - absolute로 그래픽 위치에 영향 없게 수정 */}
      <div className="absolute left-4 lg:left-[3.75rem] top-[1rem] lg:top-[3.5625rem] flex flex-col z-10 animate-recruit-content-enter">
        <h1 className="typo-recruit-title text-primarybrand">POSSIBILLITY</h1>
        <h1 className="typo-recruit-title text-primarybrand">TO</h1>
        <h1 className="typo-recruit-title text-primarybrand">REALITY</h1>
        <p className="typo-recruit-subtitle text-primarybrand mt-4">
          숭실대학교 멋쟁이사자처럼 14기 모집
        </p>
      </div>

      {/* 중앙 그래픽 - Home과 동일한 중앙 기준으로 배치 */}
      <div className="absolute left-1/2 top-[calc(50vh-5.9375rem)] -translate-x-1/2 -translate-y-1/2 lg:top-1/2 flex justify-center items-center">
        <div className="relative shrink-0">
          {/* 배경 이미지 */}
          <img
            src={backgroundImg}
            alt=""
            className="
              w-[28rem] h-[18rem]
              lg:w-[min(28rem,70vw)]
              lg:h-[min(18rem,45vh)]
              object-contain
            "
          />

          {/* 아이콘 (중앙 고정): 클릭/스크롤 시 star 이동, 화살표 즉시 페이드아웃 */}
          <div
            ref={buttonRef}
            className="group absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 h-[5.05619rem] w-[3.25843rem] cursor-pointer animate-recruit-content-enter"
            onClick={handleScrollToValue}
          >
            <div
              className={`relative size-full transition-transform duration-200 ${
                isStarMoving ? "" : "group-hover:scale-[0.95]"
              }`}
            >
              <div className="absolute inset-0 flex flex-col items-center">
                <div
                  className="relative h-[3.25843rem] w-[3.25843rem] transition-opacity duration-100"
                  style={{ opacity: staticStarOpacity }}
                >
                  <img
                    src={introStar}
                    alt=""
                    className="absolute inset-0 size-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                  />
                  <img
                    src={introHoverStar}
                    alt=""
                    className="absolute inset-0 size-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>
                <div
                  className="relative -mt-[0.50562rem] h-[2.30338rem] w-[3.25843rem] transition-opacity duration-150"
                  style={{ opacity: staticArrowOpacity }}
                >
                  <img
                    src={introArrow}
                    alt=""
                    className="absolute inset-0 size-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                  />
                  <img
                    src={introHoverArrow}
                    alt=""
                    className="absolute inset-0 size-full object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 텍스트 (아이콘 오른쪽) */}
          <p
            className="
              absolute
              left-1/2
              top-[48%]
              -translate-y-1/2
              translate-x-[2.5rem] lg:translate-x-[5rem]
              typo-recruit-scroll text-text max-w-[8rem] lg:max-w-none whitespace-normal lg:whitespace-nowrap leading-tight animate-recruit-content-enter
            "
          >
            모집 상세 보러 가기
          </p>
        </div>
      </div>

      {/* 이동 중 star (스크롤 진행률 기반 위치 + 색상 점진 전환) */}
      {motion.ready && (
        <div
          className={`pointer-events-none fixed z-[120] transition-opacity duration-100 ${
            isStarMoving ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: `${motion.top}px`, left: `${motion.left}px` }}
        >
          <div className="relative h-[3.25843rem] w-[3.25843rem]">
            <div className="pointer-events-none absolute left-[calc(100%-0.5rem)] bottom-[calc(100%-0.48rem)] mb-0 flex items-start gap-[0.1rem]">
              <span
                className="block mt-[0.4rem] h-[1.9rem] w-[0.12rem] bg-[#FF5202]"
                style={{ opacity: fallingLineOpacity }}
              />
              <span
                className="block mt-0 h-[1.9rem] w-[0.12rem] bg-[#FF5202]"
                style={{ opacity: fallingLineOpacity }}
              />
              <span
                className="block mt-[0.2rem] h-[1.9rem] w-[0.12rem] bg-[#FF5202]"
                style={{ opacity: fallingLineOpacity }}
              />
            </div>
            <div
              className="absolute inset-0"
              style={{ transform: `rotate(${movingStarRotationDeg}deg)` }}
            >
              <img
                src={introStar}
                alt=""
                className="absolute inset-0 size-full object-contain"
                style={{ opacity: movingStarBaseOpacity }}
              />
              <img
                src={introHoverStar}
                alt=""
                className="absolute inset-0 size-full object-contain"
                style={{ opacity: movingStarOrangeOpacity }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
