import { useRef, useState } from "react";
import { animate, motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import { TEAM_MEMBERS } from "../data/team";
import CircularQuotes, { QUOTES } from "../features/Team/components/CircularQuotes";
import PhotoGrid from "../features/Team/components/PhotoGrid";

const MotionDiv = motion.div;
const TARGET_ANCHOR_ANGLE = 0;
const AUTO_ROTATE_DEG_PER_SEC = 3.7894736842; // 360 / 95s
const ALIGN_DURATION_SEC = 0.9;

function normalizeAngle(angle) {
  const normalized = angle % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

export default function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(TEAM_MEMBERS[0]?.id ?? null);
  const [isAligning, setIsAligning] = useState(false);

  const rotation = useMotionValue(0);
  const alignAnimationRef = useRef(null);

  useAnimationFrame((_, delta) => {
    if (isAligning) return;
    rotation.set(rotation.get() + (delta / 1000) * AUTO_ROTATE_DEG_PER_SEC);
  });

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const selectMember = (memberId) => {
    setSelectedId(memberId);

    const selectedQuote = QUOTES.find(
      (quote) => quote.memberId === memberId && quote.quoteIndex === 0,
    );

    if (!selectedQuote) return;

    const current = rotation.get();
    const currentNormalized = normalizeAngle(current);
    const target = normalizeAngle(TARGET_ANCHOR_ANGLE - selectedQuote.angle);
    const clockwiseDelta = (target - currentNormalized + 360) % 360;

    if (alignAnimationRef.current) {
      alignAnimationRef.current.stop();
    }

    setIsAligning(true);
    alignAnimationRef.current = animate(rotation, current + clockwiseDelta, {
      duration: ALIGN_DURATION_SEC,
      ease: "easeOut",
      onComplete: () => {
        setIsAligning(false);
        alignAnimationRef.current = null;
      },
    });
  };

  const clearSelectedOnOutsideClick = () => setSelectedId(null);

  return (
    <div className="bg-secondarybrand min-h-screen flex flex-col">
      <Header onMenuClick={toggleSidebar} />

      <main
        className="flex-1 px-4 pt-[7.5rem] pb-20 sm:px-6 sm:pt-[6.8125rem]"
        onClick={clearSelectedOnOutsideClick}
      >
        <section className="mx-auto w-full max-w-[84rem]">
          <h1 className="typo-title1e text-text text-center">TEAM</h1>

          <div className="mt-8 sm:mt-[2.9375rem]">
            <div className="mx-auto hidden h-[43.75rem] w-full max-w-[60rem] lg:block">
              <div className="relative h-full w-full">
                <div className="absolute left-0 top-6 h-[30.25rem] w-[38.125rem]">
                  <PhotoGrid
                    members={TEAM_MEMBERS}
                    selectedId={selectedId}
                    onSelect={selectMember}
                  />
                </div>

                <div className="absolute left-64 top-0 h-[43.75rem] w-[43.75rem]">
                  <MotionDiv style={{ rotate: rotation }} className="h-full w-full origin-center">
                    <CircularQuotes selectedId={selectedId} />
                  </MotionDiv>
                </div>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[38rem] flex-col items-center gap-10 lg:hidden">
              <div className="relative h-[30.25rem] w-full">
                <PhotoGrid
                  members={TEAM_MEMBERS}
                  selectedId={selectedId}
                  onSelect={selectMember}
                />
              </div>

              <div className="relative h-[30.25rem] w-full max-w-[30.25rem]">
                <MotionDiv style={{ rotate: rotation }} className="h-full w-full">
                  <CircularQuotes selectedId={selectedId} />
                </MotionDiv>
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
