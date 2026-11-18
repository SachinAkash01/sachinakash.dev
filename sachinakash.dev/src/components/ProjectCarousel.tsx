import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Link } from "react-router-dom";
import type { Project } from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisual";

/** Cards shown at once on wide screens; CSS shows fewer on smaller screens. */
const MAX_VISIBLE = 3;
const AUTOPLAY_MS = 4000;
const SLIDE_MS = 650;

/**
 * Looping carousel of project cards. Copies of the first and last cards sit
 * at each end so the track can slide past the end and then jump back without
 * a visible seam.
 */
export function ProjectCarousel({
  projects,
  label,
}: {
  projects: Project[];
  label: string;
}) {
  const count = projects.length;
  const clones = Math.min(MAX_VISIBLE, count);
  const slides = [
    ...projects.slice(-clones),
    ...projects,
    ...projects.slice(0, clones),
  ];

  const [index, setIndex] = useState(clones);
  const indexRef = useRef(clones);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const moving = useRef(false);
  const settleTimer = useRef<number | undefined>(undefined);
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const moveTo = useCallback((next: number, withAnimation: boolean) => {
    indexRef.current = next;
    setAnimate(withAnimation);
    setIndex(next);
  }, []);

  // Bring the index back into the real cards after sliding onto a copy.
  const settle = useCallback(() => {
    window.clearTimeout(settleTimer.current);
    moving.current = false;
    const current = indexRef.current;
    if (current >= count + clones) moveTo(current - count, false);
    else if (current < clones) moveTo(current + count, false);
  }, [count, clones, moveTo]);

  const go = useCallback(
    (step: number) => {
      if (moving.current) return;
      moving.current = true;
      moveTo(indexRef.current + step, true);
      // Fallback in case transitionend never fires (e.g. a background tab).
      settleTimer.current = window.setTimeout(settle, SLIDE_MS + 120);
    },
    [settle, moveTo],
  );

  // Re-enable the slide transition once a silent jump has been painted.
  useEffect(() => {
    if (animate) return;
    const timer = window.setTimeout(() => setAnimate(true), 30);
    return () => window.clearTimeout(timer);
  }, [animate]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    media.addEventListener("change", update);
    const root = rootRef.current;
    const observer =
      root && "IntersectionObserver" in window
        ? new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
            threshold: 0.3,
          })
        : null;
    if (root && observer) observer.observe(root);
    return () => {
      media.removeEventListener("change", update);
      observer?.disconnect();
      window.clearTimeout(settleTimer.current);
    };
  }, []);

  // Autoplay only while visible on screen, not hovered or focused, and
  // never for visitors who prefer reduced motion.
  useEffect(() => {
    if (paused || !inView || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") go(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, inView, reducedMotion, go]);

  const active = (((index - clones) % count) + count) % count;

  return (
    <div
      ref={rootRef}
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setPaused(false);
      }}
    >
      <div className="project-carousel__viewport">
        <div
          className="project-carousel__track"
          style={
            {
              "--index": index,
              transition: animate && !reducedMotion ? undefined : "none",
            } as CSSProperties
          }
          onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && event.propertyName === "transform")
              settle();
          }}
        >
          {slides.map((project, slideIndex) => {
            const isCopy = slideIndex < clones || slideIndex >= clones + count;
            const position = (((slideIndex - clones) % count) + count) % count;
            return (
              <article
                className="project-carousel__slide"
                key={`${project.slug}-${slideIndex}`}
                aria-roledescription={isCopy ? undefined : "slide"}
                aria-label={isCopy ? undefined : `${position + 1} of ${count}`}
                aria-hidden={isCopy || undefined}
                inert={isCopy}
              >
                <Link to={`/projects/${project.slug}`} tabIndex={isCopy ? -1 : undefined}>
                  <ProjectVisual project={project} compact />
                </Link>
                <h3>
                  <Link to={`/projects/${project.slug}`} tabIndex={isCopy ? -1 : undefined}>
                    {project.title}
                  </Link>
                </h3>
                <p>{project.summary}</p>
              </article>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="project-carousel__arrow project-carousel__arrow--prev"
        aria-label="Previous project"
        onClick={() => go(-1)}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        className="project-carousel__arrow project-carousel__arrow--next"
        aria-label="Next project"
        onClick={() => go(1)}
      >
        <ChevronRight size={20} />
      </button>
      <div className="project-carousel__dots" aria-hidden="true">
        {projects.map((project, dotIndex) => (
          <i key={project.slug} className={dotIndex === active ? "is-active" : undefined} />
        ))}
      </div>
    </div>
  );
}
