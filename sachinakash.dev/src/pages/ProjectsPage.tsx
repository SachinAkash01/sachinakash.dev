import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectVisual } from "../components/ProjectVisual";
import { Seo } from "../components/Seo";
import { projects } from "../data/portfolio";
import { PERSON_ID, absoluteUrl, breadcrumbSchema } from "../lib/seo";

export function ProjectsPage() {
  return (
    <main id="main-content" className="inner-page">
      <Seo
        title="Web Development Portfolio & Case Studies — Sachin Akash"
        description={`${projects.length} website, web application, and e-commerce case studies by Sachin Akash, a software engineer and freelance web developer in Sri Lanka: travel platforms, online stores, corporate and WordPress websites.`}
        path="/projects"
        jsonLd={[
          {
            "@type": "CollectionPage",
            "@id": absoluteUrl("/projects"),
            url: absoluteUrl("/projects"),
            name: "Projects and case studies",
            author: { "@id": PERSON_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: absoluteUrl(`/projects/${project.slug}`),
                name: project.title,
              })),
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <header className="shell page-hero">
        <p className="mono-label">
          WORK INDEX / {String(projects.length).padStart(2, "0")} PROJECTS
        </p>
        <h1>Websites and products built for clear business outcomes.</h1>
        <p>
          Case studies across travel and tourism, e-commerce, construction,
          entertainment, education, finance, and software services, for clients
          in Sri Lanka, Australia, and Europe. Each one explains the problem,
          the product response, and the engineering approach.
        </p>
      </header>
      <section className="shell all-projects">
        {projects.map((project) => (
          <article key={project.slug}>
            <Link to={`/projects/${project.slug}`}>
              <ProjectVisual project={project} compact />
            </Link>
            <div>
              <p className="mono-label">
                {project.number} / {project.category}
              </p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="tag-list">
                {project.technologies.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-card__links">
                <Link to={`/projects/${project.slug}`}>
                  Read case study <ArrowRight size={16} />
                </Link>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Live website <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
