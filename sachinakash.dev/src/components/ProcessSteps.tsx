import { useEffect, useRef, useState, type CSSProperties } from "react";

type Step = { title: string; text: string };

/**
 * Delivery process as a timeline: when it scrolls into view, a gold line runs
 * through the steps in order, lighting each node and revealing its text.
 */
export function ProcessSteps({ steps }: { steps: Step[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  // "static" until mounted in the browser, so prerendered HTML (and visitors
  // without JavaScript or with reduced motion) always see every step.
  const [state, setState] = useState<"static" | "waiting" | "active">("static");

  useEffect(() => {
    const list = listRef.current;
    if (
      !list ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Below the fold: hide the steps until they scroll into view.
          setState((current) => (current === "static" ? "waiting" : current));
          return;
        }
        // Hide first, then start on the next tick so the sequence animates
        // even when the list is already in view.
        setState("waiting");
        timer = window.setTimeout(() => setState("active"), 50);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12%", threshold: 0.25 },
    );
    observer.observe(list);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <ol
      ref={listRef}
      className={`process-list${state === "static" ? "" : " process-list--animate"}${state === "active" ? " is-active" : ""}`}
    >
      {steps.map((step, index) => (
        <li key={step.title} style={{ "--step": index } as CSSProperties}>
          <i className="process-list__node" aria-hidden="true" />
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
