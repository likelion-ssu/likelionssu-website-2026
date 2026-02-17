import React, { useState, useEffect, useRef } from "react";
import instagramIcon from "../../assets/instagram_icon.svg";
import playIcon from "../../assets/playIcon.svg";
import pauseIcon from "../../assets/pauseIcon.svg";

const SLIDE_INTERVAL_MS = 3500;
const ICON_FEEDBACK_HOLD_MS = 420;
const ICON_FEEDBACK_FADE_MS = 260;

/** 프로젝트 상세 카드 본문만 (PC는 모달/모바일은 페이지로 분기). variant="mobile" 시 가로 꽉 참 */
export default function ProjectCardDetailContent({ project, variant }) {
  const isMobile = variant === "mobile";
  const isIdeathon = project.category === "아이디어톤";

  // 표지(coverImage)를 맨 앞에 두고, 나머지 images 이어붙임 (표지와 중복 시 제외)
  const rawImages = project.images ?? [];
  const imageList =
    project.coverImage && rawImages.length > 0
      ? [project.coverImage, ...rawImages.filter((img) => img !== project.coverImage)]
      : project.coverImage
        ? [project.coverImage]
        : rawImages.length > 0
          ? rawImages
          : [];
  const initialTrackIndex = imageList.length > 1 ? 1 : 0;

  const [trackIndex, setTrackIndex] = useState(initialTrackIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [autoSlideResetTick, setAutoSlideResetTick] = useState(0);
  const [playbackFeedback, setPlaybackFeedback] = useState(null);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);
  const loopedImageList =
    imageList.length > 1
      ? [imageList[imageList.length - 1], ...imageList, imageList[0]]
      : imageList;
  const currentIndex =
    imageList.length > 0
      ? imageList.length > 1
        ? ((trackIndex - 1 + imageList.length) % imageList.length)
        : 0
      : 0;

  useEffect(() => {
    setIsTransitionEnabled(false);
    setTrackIndex(initialTrackIndex);
    setAutoSlideResetTick((prev) => prev + 1);
    setIsPaused(false);
    setPlaybackFeedback(null);
    setIsFeedbackVisible(false);
  }, [project.id, initialTrackIndex]);

  useEffect(() => {
    if (imageList.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setTrackIndex((prev) => prev + 1);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [imageList.length, isPaused, autoSlideResetTick]);

  useEffect(() => {
    if (isTransitionEnabled) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setIsTransitionEnabled(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [isTransitionEnabled]);

  useEffect(() => {
    if (!playbackFeedback) return;
    setIsFeedbackVisible(true);
    const hideTimer = setTimeout(
      () => setIsFeedbackVisible(false),
      ICON_FEEDBACK_HOLD_MS,
    );
    const clearTimer = setTimeout(
      () => setPlaybackFeedback(null),
      ICON_FEEDBACK_HOLD_MS + ICON_FEEDBACK_FADE_MS,
    );
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [playbackFeedback]);

  const handleImageClick = () => {
    if (imageList.length > 1) {
      setIsPaused((prev) => {
        const next = !prev;
        setPlaybackFeedback(next ? "pause" : "play");
        return next;
      });
    }
  };

  const handleSlideTransitionEnd = () => {
    if (imageList.length <= 1) return;
    if (trackIndex === imageList.length + 1) {
      setIsTransitionEnabled(false);
      setTrackIndex(1);
      return;
    }
    if (trackIndex === 0) {
      setIsTransitionEnabled(false);
      setTrackIndex(imageList.length);
    }
  };

  const moveToPrevSlide = () => {
    if (imageList.length <= 1) return;
    setIsTransitionEnabled(true);
    setTrackIndex((prev) => prev - 1);
    setAutoSlideResetTick((prev) => prev + 1);
  };

  const moveToNextSlide = () => {
    if (imageList.length <= 1) return;
    setIsTransitionEnabled(true);
    setTrackIndex((prev) => prev + 1);
    setAutoSlideResetTick((prev) => prev + 1);
  };

  const handleTouchStart = (e) => {
    if (!isMobile || imageList.length <= 1) return;
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (e) => {
    if (!isMobile || imageList.length <= 1) return;
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartXRef.current;
    const dy = touch.clientY - touchStartYRef.current;
    const threshold = 32;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (Math.abs(dx) < threshold || Math.abs(dx) <= Math.abs(dy)) return;
    if (dx < 0) {
      moveToNextSlide();
    } else {
      moveToPrevSlide();
    }
  };

  return (
    <article
      className={`w-full flex flex-col overflow-hidden bg-light
        ${isMobile ? "min-h-0 rounded-none shadow-none py-0" : "max-w-[51.6875rem] p-[0.63rem] pb-[5rem] rounded-[0.625rem] shadow-md cursor-default"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      <header
        className={`w-full shrink-0 grid grid-cols-3 gap-2 items-center bg-light ${isMobile ? "px-[1.31rem] py-[1.31rem]" : "px-6 py-4"}`}
      >
        <span className={isMobile ? "typo-body2" : "typo-commentk"}>
          {project.category}
        </span>
        <p
          className={`${isMobile ? "typo-cardtextk" : "typo-buttontextbold"} text-text text-center leading-tight`}
        >
          {project.title}
        </p>
        <span
          className={`${isMobile ? "typo-body2" : "typo-commentk"} text-right`}
        >
          {project.number}기
        </span>
      </header>

      <div
        className={`flex-1 grid grid-cols-1 lg:grid-cols-[65%_35%] lg:grid-rows-1 lg:gap-x-[1rem] lg:items-start ${isMobile ? "pt-0 px-[1.8rem] pb-[3.5rem] gap-[0.6rem]" : "p-[0.88rem] gap-2 pt-0 pb-8"}`}
      >
        {/* PC: 이미지 + GIT/인스타를 하나로 묶음 / 모바일: 이미지만 */}
        <div className="order-1 flex flex-col gap-[0.62rem] lg:col-start-1 lg:row-start-1 min-h-0">
          {/* 402px Figma 기준, 450px~ 에서 납작해 보이지 않도록 높이 보강. 슬라이드: 클릭 시 일시정지/재개 */}
          <div
            role={imageList.length > 1 ? "button" : undefined}
            tabIndex={imageList.length > 1 ? 0 : undefined}
            onClick={handleImageClick}
            onKeyDown={
              imageList.length > 1
                ? (e) => e.key === "Enter" && handleImageClick()
                : undefined
            }
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={`w-full h-[13rem] min-[450px]:h-[15rem] lg:h-[18rem] bg-emptyimg overflow-hidden rounded-none lg:rounded-[0.25rem] shrink-0 relative ${imageList.length > 1 ? "cursor-pointer" : ""}`}
            style={{ contain: "layout paint" }}
          >
            {imageList.length > 0 ? (
              <>
                <div
                  className="flex h-full will-change-transform"
                  style={{
                    width: `${loopedImageList.length * 100}%`,
                    transform: `translate3d(-${trackIndex * (100 / loopedImageList.length)}%, 0, 0)`,
                    transition: isTransitionEnabled
                      ? "transform 0.6s ease-out"
                      : "none",
                  }}
                  onTransitionEnd={handleSlideTransitionEnd}
                >
                  {loopedImageList.map((src, idx) => (
                    <div
                      key={idx}
                      className="h-full shrink-0"
                      style={{ width: `${100 / loopedImageList.length}%` }}
                    >
                      <img
                        src={src}
                        alt={`${project.title} ${(idx % imageList.length) + 1}`}
                        className="h-full w-full object-cover"
                        decoding="async"
                        fetchPriority={idx === 0 ? "high" : "low"}
                      />
                    </div>
                  ))}
                </div>
                {playbackFeedback && (
                  <div
                    className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-all ease-out ${
                      isFeedbackVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDuration: `${ICON_FEEDBACK_FADE_MS}ms` }}
                  >
                    <img
                      src={playbackFeedback === "pause" ? pauseIcon : playIcon}
                      alt=""
                      aria-hidden="true"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
          {imageList.length > 1 && (
            <div
              className="flex justify-center items-center gap-[0.4rem] mt-[0.44rem]"
              aria-label={`슬라이드 ${currentIndex + 1} / ${imageList.length}`}
            >
              {imageList.map((_, idx) =>
                isMobile ? (
                  <span
                    key={`slide-indicator-${idx}`}
                    className={`rounded-full ${idx === currentIndex ? "bg-primarybrand" : "bg-[#EFEFEF]"}`}
                    style={{ width: "0.55rem", height: "0.55rem" }}
                    aria-hidden="true"
                  />
                ) : (
                  <button
                    key={`slide-indicator-${idx}`}
                    type="button"
                    onClick={() => {
                      setIsTransitionEnabled(true);
                      setTrackIndex(idx + 1);
                      setAutoSlideResetTick((prev) => prev + 1);
                    }}
                    aria-label={`${idx + 1}번 슬라이드로 이동`}
                    className={`rounded-full ${idx === currentIndex ? "bg-primarybrand" : "bg-[#EFEFEF]"}`}
                    style={{ width: "0.55rem", height: "0.55rem" }}
                    aria-current={idx === currentIndex ? "true" : undefined}
                  />
                ),
              )}
            </div>
          )}
          {/* PC에서만 이미지 바로 아래 표시 (간격 없음) - 아이디어톤 제외 */}
          {!isIdeathon && (
            <div className="hidden lg:flex gap-[0.62rem] justify-start items-center pt-0">
              {project.instagramUrl ? (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 typo-small1 text-subtext hover:text-primarybrand transition"
                  aria-label="Instagram"
                >
                  <img src={instagramIcon} alt="" className="w-5 h-5" />
                </a>
              ) : (
                <img src={instagramIcon} alt="" className="w-5 h-5" />
              )}
            </div>
          )}
        </div>

        <section className="order-2 flex flex-col gap-6 lg:col-start-2 lg:row-start-1">
          <div className="flex flex-col gap-2">
            <h2
              className={`${isMobile ? "typo-bolde" : "typo-commente"} text-text`}
            >
              About
            </h2>
            <p
              className={`${isMobile ? "typo-body2" : "typo-small2"} text-text whitespace-pre-line`}
            >
              {project.about}
            </p>
          </div>
          {!isIdeathon && (
            <div className="flex flex-col gap-2">
              <h2
                className={`${isMobile ? "typo-bolde" : "typo-commente"} text-text`}
              >
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-1.5 py-1.5 bg-accent text-text ${isMobile ? "typo-footer2ew" : "typo-tagtextew"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h2
              className={`${isMobile ? "typo-bolde" : "typo-commente"} text-text`}
            >
              Team
            </h2>
            <p
              className={`${isMobile ? "typo-body2" : "typo-small2"} text-text whitespace-pre-line`}
            >
              {project.team}
            </p>
          </div>
        </section>

        {/* 모바일(402px 기준): Team 아래, 소셜 가운데 정렬, 아이콘 2rem - 아이디어톤 제외 */}
        {!isIdeathon && (
          <div className="order-3 flex gap-3 lg:hidden flex-start items-center pt-6">
            {project.instagramUrl ? (
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center typo-small1 text-subtext hover:text-primarybrand transition"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="" className="w-[2rem] h-[2rem]" />
              </a>
            ) : (
              <img src={instagramIcon} alt="" className="w-[2rem] h-[2rem]" />
            )}
          </div>
        )}
      </div>
    </article>
  );
}
