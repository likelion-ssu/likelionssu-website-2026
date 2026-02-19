import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import { TEAM_MEMBERS } from "../data/team";
import CircularQuotes, { QUOTES } from "../features/Team/components/CircularQuotes";
import PhotoGrid from "../features/Team/components/PhotoGrid";

const MotionDiv = motion.div;
const DESKTOP_TARGET_ANCHOR_ANGLE = -15;
const MOBILE_TARGET_ANCHOR_ANGLE = 0;
const AUTO_ROTATE_DEG = 360;
const AUTO_ROTATE_DURATION_SEC = 95;
const ALIGN_MIN_DURATION_SEC = 0.35;
const ALIGN_MAX_DURATION_SEC = 1.1;
const ALIGN_SPEED_DEG_PER_SEC = 220;
const LARGE_ROTATION_THRESHOLD_DEG = 180;
const LARGE_ROTATION_SPEED_MULTIPLIER = 1.4;
const QUOTES_BASE_SIZE_REM = 43.75;
const DESKTOP_QUOTES_SCALE = 0.9;
const MOBILE_QUOTES_SCALE = 0.95;
const DESKTOP_QUOTES_OFFSET_LEFT_REM = 16.5;
const DESKTOP_QUOTES_OFFSET_TOP_REM = -6.3;

const PHOTO_GRID_BASE_WIDTH_REM = 41.48944;
const PHOTO_GRID_BASE_HEIGHT_REM = 30.00275;
const DESKTOP_PHOTO_GRID_SCALE = 0.95;
const MOBILE_PHOTO_GRID_SCALE = 0.5;
const TABLET_PHOTO_GRID_SCALE = 0.7;
const DESKTOP_PHOTO_GRID_WIDTH_REM =
  PHOTO_GRID_BASE_WIDTH_REM * DESKTOP_PHOTO_GRID_SCALE;
const DESKTOP_PHOTO_GRID_HEIGHT_REM =
  PHOTO_GRID_BASE_HEIGHT_REM * DESKTOP_PHOTO_GRID_SCALE;
const MOBILE_PHOTO_GRID_WIDTH_REM =
  PHOTO_GRID_BASE_WIDTH_REM * MOBILE_PHOTO_GRID_SCALE;
const MOBILE_PHOTO_GRID_HEIGHT_REM =
  PHOTO_GRID_BASE_HEIGHT_REM * MOBILE_PHOTO_GRID_SCALE;
const TABLET_PHOTO_GRID_WIDTH_REM =
  PHOTO_GRID_BASE_WIDTH_REM * TABLET_PHOTO_GRID_SCALE;
const TABLET_PHOTO_GRID_HEIGHT_REM =
  PHOTO_GRID_BASE_HEIGHT_REM * TABLET_PHOTO_GRID_SCALE;
const MOBILE_PHOTO_GRID_TOP_REM = 1;

function normalizeAngle(angle) {
  const normalized = angle % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const rotation = useMotionValue(0);
  const autoRotateAnimationRef = useRef(null);
  const alignAnimationRef = useRef(null);

  const startAutoRotate = useCallback(() => {
    if (autoRotateAnimationRef.current) {
      autoRotateAnimationRef.current.stop();
    }

    const current = rotation.get();
    autoRotateAnimationRef.current = animate(rotation, current + AUTO_ROTATE_DEG, {
      duration: AUTO_ROTATE_DURATION_SEC,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });
  }, [rotation]);

  useEffect(() => {
    startAutoRotate();

    return () => {
      if (autoRotateAnimationRef.current) autoRotateAnimationRef.current.stop();
      if (alignAnimationRef.current) alignAnimationRef.current.stop();
    };
  }, [startAutoRotate]);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 1023px)");
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)",
    );

    const updateViewportFlags = () => {
      setIsMobile(mobileMediaQuery.matches);
      setIsTablet(tabletMediaQuery.matches);
    };

    updateViewportFlags();
    mobileMediaQuery.addEventListener("change", updateViewportFlags);
    tabletMediaQuery.addEventListener("change", updateViewportFlags);

    return () => {
      mobileMediaQuery.removeEventListener("change", updateViewportFlags);
      tabletMediaQuery.removeEventListener("change", updateViewportFlags);
    };
  }, []);

  const mobilePhotoGridScale = isTablet
    ? TABLET_PHOTO_GRID_SCALE
    : MOBILE_PHOTO_GRID_SCALE;
  const mobileOverlayTextScale = 1 / mobilePhotoGridScale;
  const mobilePhotoGridWidthRem = isTablet
    ? TABLET_PHOTO_GRID_WIDTH_REM
    : MOBILE_PHOTO_GRID_WIDTH_REM;
  const mobilePhotoGridHeightRem = isTablet
    ? TABLET_PHOTO_GRID_HEIGHT_REM
    : MOBILE_PHOTO_GRID_HEIGHT_REM;

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const selectMember = (memberId) => {
    if (memberId === selectedId) {
      setSelectedId(null);
      return;
    }

    setSelectedId(memberId);

    const selectedQuote = QUOTES.find(
      (quote) => quote.memberId === memberId && quote.quoteIndex === 0,
    );

    if (!selectedQuote) return;

    if (autoRotateAnimationRef.current) {
      autoRotateAnimationRef.current.stop();
      autoRotateAnimationRef.current = null;
    }

    const current = rotation.get();
    const currentNormalized = normalizeAngle(current);
    const targetAnchorAngle = isMobile
      ? MOBILE_TARGET_ANCHOR_ANGLE
      : DESKTOP_TARGET_ANCHOR_ANGLE;
    const target = normalizeAngle(targetAnchorAngle - selectedQuote.angle);
    const clockwiseDelta = (target - currentNormalized + 360) % 360;

    if (alignAnimationRef.current) {
      alignAnimationRef.current.stop();
    }

    const largeRotationRatio = clamp(
      clockwiseDelta / LARGE_ROTATION_THRESHOLD_DEG,
      0,
      1,
    );
    const speedMultiplier =
      1 + (LARGE_ROTATION_SPEED_MULTIPLIER - 1) * largeRotationRatio;
    const effectiveSpeedDegPerSec = ALIGN_SPEED_DEG_PER_SEC * speedMultiplier;
    const alignDurationSec = clamp(
      Math.abs(clockwiseDelta) / effectiveSpeedDegPerSec,
      ALIGN_MIN_DURATION_SEC,
      ALIGN_MAX_DURATION_SEC,
    );

    alignAnimationRef.current = animate(rotation, current + clockwiseDelta, {
      duration: alignDurationSec,
      ease: "easeOut",
      onComplete: () => {
        alignAnimationRef.current = null;
        startAutoRotate();
      },
    });
  };

  const clearSelectedOnOutsideClick = () => setSelectedId(null);

  return (
    <div
      className="bg-secondarybrand min-h-screen flex flex-col overflow-x-hidden"
      style={{ overflowX: "clip" }}
    >
      <Header onMenuClick={toggleSidebar} />

      <main
        className="flex-1 px-4 pt-[7.5rem] pb-20 sm:px-6 sm:pt-[6.8125rem]"
        onClick={clearSelectedOnOutsideClick}
      >
        <section className="mx-auto w-full max-w-[84rem]">
          <h1 className="typo-title1e text-text text-center">TEAM</h1>

          <div className="mt-8 sm:mt-[2.9375rem]">

            {/* Desktop */}
            <div className="mx-auto hidden h-[43.75rem] w-full max-w-[60rem] lg:block">
              <div className="relative h-full w-full">
                <div
                  className="absolute left-1/2 top-6 -translate-x-1/2"
                  style={{
                    width: `${DESKTOP_PHOTO_GRID_WIDTH_REM}rem`,
                    height: `${DESKTOP_PHOTO_GRID_HEIGHT_REM}rem`,
                  }}
                >
                  <div
                    className="origin-top-left relative z-10"
                    style={{
                      width: `${PHOTO_GRID_BASE_WIDTH_REM}rem`,
                      height: `${PHOTO_GRID_BASE_HEIGHT_REM}rem`,
                      transform: `scale(${DESKTOP_PHOTO_GRID_SCALE})`,
                    }}
                  >
                    <PhotoGrid
                      members={TEAM_MEMBERS}
                      selectedId={selectedId}
                      onSelect={selectMember}
                      overlayTextScale={1}
                      overlayTextClassName="typo-body2"
                    />
                  </div>
                  <div
                    className="absolute z-0"
                    style={{
                      left: `${DESKTOP_QUOTES_OFFSET_LEFT_REM}rem`,
                      top: `${DESKTOP_QUOTES_OFFSET_TOP_REM}rem`,
                      width: `${QUOTES_BASE_SIZE_REM}rem`,
                      height: `${QUOTES_BASE_SIZE_REM}rem`,
                    }}
                  >
                    <div
                      className="h-full w-full origin-center transform-gpu"
                      style={{ transform: `scale(${DESKTOP_QUOTES_SCALE})` }}
                    >
                      <MotionDiv
                        style={{ rotate: rotation, willChange: "transform" }}
                        className="h-full w-full origin-center transform-gpu"
                      >
                        <CircularQuotes selectedId={selectedId} />
                      </MotionDiv>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="mx-auto w-full lg:hidden">
              <div
                className="relative w-screen self-start overflow-x-clip overflow-y-visible"
                style={{
                  height: `${QUOTES_BASE_SIZE_REM * MOBILE_QUOTES_SCALE}rem`,
                  marginLeft: "calc(50% - 50vw)",
                  contain: "paint",
                }}
              >
                <div
                  className="absolute left-1/2 z-10 -translate-x-1/2"
                  style={{
                    top: `${MOBILE_PHOTO_GRID_TOP_REM}rem`,
                    width: `${mobilePhotoGridWidthRem}rem`,
                    height: `${mobilePhotoGridHeightRem}rem`,
                  }}
                >
                  <div
                    className="origin-top-left"
                    style={{
                      width: `${PHOTO_GRID_BASE_WIDTH_REM}rem`,
                      height: `${PHOTO_GRID_BASE_HEIGHT_REM}rem`,
                      transform: `scale(${mobilePhotoGridScale})`,
                    }}
                  >
                    <PhotoGrid
                      members={TEAM_MEMBERS}
                      selectedId={selectedId}
                      onSelect={selectMember}
                      overlayTextScale={mobileOverlayTextScale}
                      overlayTextClassName="typo-commentk"
                    />
                  </div>
                </div>
                <div
                  className="absolute left-0 top-0"
                  style={{
                    width: `${QUOTES_BASE_SIZE_REM}rem`,
                    height: `${QUOTES_BASE_SIZE_REM}rem`,
                    transform: `translateX(-50%) scale(${MOBILE_QUOTES_SCALE})`,
                    transformOrigin: "top left",
                  }}
                >
                  <MotionDiv
                    style={{ rotate: rotation, willChange: "transform" }}
                    className="absolute inset-0 z-0 h-full w-full transform-gpu"
                  >
                    <CircularQuotes selectedId={selectedId} />
                  </MotionDiv>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
