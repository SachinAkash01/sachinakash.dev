import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/portfolio";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-visual project-visual--with-image ${compact ? "project-visual--compact" : ""}`}
      style={{ "--project-accent": project.accent } as React.CSSProperties}
    >
      <img
        className="project-visual__image"
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
      />
      <div className="project-visual__grid" />
      <div className="project-visual__content">
        <span className="project-visual__index">
          PROJECT / {project.number}
        </span>
        <strong>{project.shortTitle}</strong>
        <span>{project.industry}</span>
      </div>
      <ArrowUpRight className="project-visual__arrow" size={22} />
    </div>
  );
}
