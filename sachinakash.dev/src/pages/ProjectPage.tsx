import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectVisual } from "../components/ProjectVisual";
import { Seo } from "../components/Seo";
import { projects } from "../data/portfolio";

export function ProjectPage() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  if (projectIndex < 0) return <Navigate to="/404" replace />;
  const project = projects[projectIndex];
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
        <p>
          Project imagery can be replaced with approved production screenshots
          from the central project data and public image folders.
        </p>
      </section>
      <section
        className="shell case-gallery"
        aria-label="Project gallery placeholders"
      >
        <div>
          <ProjectVisual project={project} compact />
        </div>
        <div>
          <ProjectVisual project={project} compact />
        </div>
        <div>
          <ProjectVisual project={project} compact />
        </div>
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
    </main>
  );
}
