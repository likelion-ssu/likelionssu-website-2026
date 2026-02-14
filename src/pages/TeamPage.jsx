import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import { TEAM_MEMBERS } from "../data/team";
import CircularQuotes, { QUOTES } from "../features/Team/components/CircularQuotes";
import PhotoGrid from "../features/Team/components/PhotoGrid";

const MotionDiv = motion.div;

export default function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(TEAM_MEMBERS[0]?.id ?? null);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  const clearSelectedOnOutsideClick = () => setSelectedId(null);

  const selectedQuote = QUOTES.find((quote) => quote.id === selectedId);
  const selectedRotation = selectedQuote ? -selectedQuote.angle : 0;

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
                    onSelect={setSelectedId}
                  />
                </div>

                <div className="absolute left-64 top-0 h-[43.75rem] w-[43.75rem]">
                  <MotionDiv
                    animate={{ rotate: 360 }}
                    transition={{ duration: 95, ease: "linear", repeat: Infinity }}
                    className="h-full w-full origin-center"
                  >
                    <MotionDiv
                      animate={{ rotate: selectedRotation }}
                      transition={{ type: "spring", stiffness: 40, damping: 16, mass: 1.15 }}
                      className="h-full w-full origin-center"
                    >
                      <CircularQuotes selectedId={selectedId} />
                    </MotionDiv>
                  </MotionDiv>
                </div>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[38rem] flex-col items-center gap-10 lg:hidden">
              <div className="relative h-[30.25rem] w-full">
                <PhotoGrid
                  members={TEAM_MEMBERS}
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                />
              </div>

              <div className="relative h-[30.25rem] w-full max-w-[30.25rem]">
                <MotionDiv
                  animate={{ rotate: 360 }}
                  transition={{ duration: 95, ease: "linear", repeat: Infinity }}
                  className="h-full w-full"
                >
                  <MotionDiv
                    animate={{ rotate: selectedRotation }}
                    transition={{ type: "spring", stiffness: 40, damping: 16, mass: 1.15 }}
                    className="h-full w-full"
                  >
                    <CircularQuotes selectedId={selectedId} />
                  </MotionDiv>
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
