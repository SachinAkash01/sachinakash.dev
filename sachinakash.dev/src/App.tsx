import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectPage } from "./pages/ProjectPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ResumePage } from "./pages/ResumePage";

const PortfolioTerminal = lazy(() => import("./components/PortfolioTerminal"));

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0 });
  }, [pathname]);
  return null;
}

function useScrollReveal(pathname: string) {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;

    const selectors = [
      ".section-heading",
      ".overview-grid > article",
      ".about-panel > *",
      ".expertise-grid > article",
      ".timeline__item",
      ".project-card",
      ".skills-grid > article",
      ".engineering-band",
      ".services-grid > article",
      ".education-grid > article",
      ".book-card",
      ".contact-heading",
      ".contact-grid > *",
      ".page-hero > *",
      ".all-projects > article",
      ".case-hero__grid > *",
      ".case-brief > *",
      ".case-title",
      ".feature-grid > div",
      ".approach-grid > article",
      ".challenge-grid > *",
      ".outcome-section > *",
      ".case-gallery__item",
      ".next-project > *",
      ".case-contact > .shell",
    ].join(",");
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selectors),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-on-scroll--visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7%", threshold: 0.08 },
    );

    elements.forEach((element) => {
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children)
        : [];
      const siblingIndex = siblings.indexOf(element);
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(Math.max(siblingIndex, 0), 4) * 55}ms`,
      );
      element.classList.add("reveal-on-scroll");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);
}

function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  useScrollReveal(location.pathname);
  const openTerminal = useCallback(() => setTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setTerminalOpen(false), []);

  useEffect(() => {
    const shortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setTerminalOpen(true);
      }
    };
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  useEffect(() => {
    const update = () =>
      setProgress(
        Math.min(
          1,
          window.scrollY /
            Math.max(
              1,
              document.documentElement.scrollHeight - window.innerHeight,
            ),
        ),
      );
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div
        className="page-progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <Header onOpenTerminal={openTerminal} />
      <ScrollManager />
      <Routes location={location}>
        <Route path="/" element={<HomePage onOpenTerminal={openTerminal} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route
          path="/404"
          element={<NotFoundPage onOpenTerminal={openTerminal} />}
        />
        <Route
          path="*"
          element={<NotFoundPage onOpenTerminal={openTerminal} />}
        />
      </Routes>
      <Footer onOpenTerminal={openTerminal} />
      <Suspense fallback={null}>
        <PortfolioTerminal open={terminalOpen} onClose={closeTerminal} />
      </Suspense>
    </>
  );
}

export default App;
