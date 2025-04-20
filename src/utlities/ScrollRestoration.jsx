import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // PUSH, POP, REPLACE

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem(`scroll-position-${pathname}`);

    if (navigationType === "POP" && savedScrollY !== null) {
      // Restore scroll position on back/forward navigation
      window.scrollTo({ top: parseInt(savedScrollY, 10), behavior: "auto" });
    } else if (navigationType === "PUSH") {
      // Scroll to top on new route
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleScroll = () => {
      sessionStorage.setItem(`scroll-position-${pathname}`, window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, navigationType]);

  return null;
};

export default ScrollRestoration;
