import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectVisual } from "../components/ProjectVisual";
import { Seo } from "../components/Seo";
import { projects } from "../data/portfolio";

export function ProjectPage() {
  const { slug } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  const galleryImages = project
    ? [
        { image: project.image, imageAlt: project.imageAlt },
        ...(project.gallery ?? []),
      ]
    : [];
  const lightboxOpen = activeImageIndex !== null;
  const activeImage =
    activeImageIndex === null ? null : galleryImages[activeImageIndex];

  useEffect(() => {
    if (!lightboxOpen || !galleryImages.length) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImageIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveImageIndex((current) =>
          current === null
            ? null
            : (current - 1 + galleryImages.length) % galleryImages.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveImageIndex((current) =>
          current === null ? null : (current + 1) % galleryImages.length,
        );
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previousFocus?.focus();
    };
  }, [galleryImages.length, lightboxOpen]);

  if (!project) return <Navigate to="/404" replace />;
  const nextProject = projects[(projectIndex + 1) % projects.length];
  return (
    <main id="main-content" className="case-study">
      <Seo
        title={`${project.title} — Sachin Akash`}
        description={project.summary}
        path={`/projects/${project.slug}`}
      />
      <header className="shell case-hero">
        <Link className="back-link" to="/projects">
          <ArrowLeft size={16} /> All projects
        </Link>
        <div className="case-hero__grid">
          <div>
            <p className="mono-label">CASE STUDY / {project.number}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-meta">
              <div>
                <span>Industry</span>
                <strong>{project.industry}</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>{project.role}</strong>
              </div>
            </div>
            <a
              className="button"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live website <ExternalLink size={17} />
            </a>
          </div>
          <ProjectVisual project={project} />
        </div>
      </header>
      <section className="shell case-section case-brief">
        <div>
          <p className="mono-label">01 / THE BRIEF</p>
          <h2>A useful product starts with a precise problem.</h2>
        </div>
        <div className="case-copy">
          <article>
            <span>Objective</span>
            <p>{project.objective}</p>
          </article>
          <article>
            <span>Business problem</span>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>Proposed solution</span>
            <p>{project.solution}</p>
          </article>
        </div>
      </section>
      <section className="case-section case-section--tinted">
        <div className="shell">
          <div className="case-title">
            <p className="mono-label">02 / PRODUCT SYSTEM</p>
            <h2>What the experience needed to do.</h2>
          </div>
          <div className="feature-grid">
            {project.features.map((feature, index) => (
              <div key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>
                  <Check size={15} />
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="shell case-section approach-grid">
        <article>
          <p className="mono-label">03A / DESIGN APPROACH</p>
          <h2>Clarity before decoration.</h2>
          <p>{project.designApproach}</p>
        </article>
        <article>
          <p className="mono-label">03B / TECHNICAL APPROACH</p>
          <h2>Built for the path to production.</h2>
          <p>{project.technicalApproach}</p>
          <div className="tag-list">
            {project.technologies.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </section>
      <section className="case-section case-section--dark">
        <div className="shell challenge-grid">
          <div>
            <p className="mono-label">04 / CONSTRAINTS</p>
            <h2>The difficult parts are part of the design.</h2>
            <p>
              Each challenge was handled by narrowing the user decision, making
              state explicit, and choosing implementation patterns the product
              could sustain.
            </p>
          </div>
          <ol>
            {project.challenges.map((challenge, index) => (
              <li key={challenge}>
                <span>0{index + 1}</span>
                <p>{challenge}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="shell case-section outcome-section">
        <p className="mono-label">05 / OUTCOME</p>
        <blockquote>{project.outcome}</blockquote>
      </section>
      <section
        className={`shell case-gallery ${galleryImages.length === 1 ? "case-gallery--single" : ""}`}
        aria-label={`${project.title} website preview`}
      >
        {galleryImages.map((image, index) => (
          <figure className="case-gallery__item" key={image.image}>
            <button
              className="case-gallery__trigger"
              type="button"
              onClick={() => setActiveImageIndex(index)}
              aria-label={`View full image: ${image.imageAlt}`}
            >
              <img
                src={image.image}
                alt={image.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </button>
            <figcaption>
              {String(index + 1).padStart(2, "0")} / PRODUCT VIEW
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="shell next-project">
        <div>
          <p className="mono-label">NEXT PROJECT / {nextProject.number}</p>
          <h2>{nextProject.title}</h2>
        </div>
        <Link to={`/projects/${nextProject.slug}`}>
          Continue to case study <ArrowRight size={18} />
        </Link>
      </section>
      <section className="case-contact">
        <div className="shell">
          <p>Have a product or engineering challenge?</p>
          <h2>Let’s turn it into a clear, reliable system.</h2>
          <Link className="button" to="/#contact">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      {activeImage &&
        createPortal(
          <div
            className="case-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Full-size project image"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget)
                setActiveImageIndex(null);
            }}
          >
            <button
              ref={closeButtonRef}
              className="case-lightbox__close"
              type="button"
              onClick={() => setActiveImageIndex(null)}
              aria-label="Close full-size image"
            >
              <X size={22} />
            </button>
            {galleryImages.length > 1 && (
              <>
                <button
                  className="case-lightbox__nav case-lightbox__nav--previous"
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((current) =>
                      current === null
                        ? null
                        : (current - 1 + galleryImages.length) %
                          galleryImages.length,
                    )
                  }
                  aria-label="View previous project image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  className="case-lightbox__nav case-lightbox__nav--next"
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((current) =>
                      current === null
                        ? null
                        : (current + 1) % galleryImages.length,
                    )
                  }
                  aria-label="View next project image"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
            <img src={activeImage.image} alt={activeImage.imageAlt} />
          </div>,
          document.body,
        )}
    </main>
  );
}
