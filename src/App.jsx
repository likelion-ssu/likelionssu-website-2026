import { useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { getRecruitPartScroll } from "./features/Recruit/recruitScrollRestore";

function RouteScrollManager() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const isRecruitBackNavigation =
      pathname === "/recruit" && navigationType === "POP";
    const hasSavedRecruitScroll = (getRecruitPartScroll() ?? 0) > 0;

    if (isRecruitBackNavigation && hasSavedRecruitScroll) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, navigationType]);

  useLayoutEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;

    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  return null;
}

function App() {
  return (
    <>
      <RouteScrollManager />
      <Outlet />
    </>
  );
}

export default App;
