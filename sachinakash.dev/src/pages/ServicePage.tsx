import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectVisual } from "../components/ProjectVisual";
import { Seo } from "../components/Seo";
import { projects } from "../data/portfolio";
import {
  deliveryProcess,
  getServicePage,
  inSentence,
  servicePages,
} from "../data/services";
import {
  BUSINESS_ID,
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
} from "../lib/seo";

export function ServicePage() {
  const { slug } = useParams();
  const service = getServicePage(slug);
  if (!service) return <Navigate to="/404" replace />;

  const related = service.relatedProjects
    .map((projectSlug) => projects.find((project) => project.slug === projectSlug))
    .filter((project) => project !== undefined);
  const otherServices = servicePages.filter((item) => item.slug !== service.slug);
  const path = `/services/${service.slug}`;

  return (
    <main id="main-content" className="inner-page">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={path}
        jsonLd={[
          {
            "@type": "Service",
            "@id": `${absoluteUrl(path)}#service`,
            name: service.name,
            serviceType: service.name,
            description: service.metaDescription,
            url: absoluteUrl(path),
            provider: { "@id": BUSINESS_ID },
            areaServed: ["Sri Lanka", "Australia", "Worldwide"],
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
          faqSchema(service.faqs),
        ]}
      />
      <header className="shell page-hero">
        <Link className="back-link" to="/services">
          <ArrowLeft size={16} /> All services
        </Link>
        <p className="mono-label">SERVICE / {service.name}</p>
        <h1>{service.heading}</h1>
        <p>{service.intro}</p>
        <div className="hero-actions">
          <Link className="button" to="/#contact">
            Discuss your project <ArrowUpRight size={17} />
          </Link>
          <a className="button button--ghost" href="#work">
            See related work <ArrowRight size={17} />
          </a>
        </div>
      </header>

      <section className="shell case-section case-brief">
        <div>
          <p className="mono-label">01 / WHO IT'S FOR</p>
          <h2>Built for teams like yours.</h2>
        </div>
        <ul className="check-list">
          {service.audience.map((item) => (
            <li key={item}>
              <Check size={16} /> {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="case-section case-section--tinted">
        <div className="shell">
          <div className="case-title">
            <p className="mono-label">02 / WHAT YOU GET</p>
            <h2>What's included.</h2>
          </div>
          <div className="deliverable-grid">
            {service.deliverables.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="tag-list service-tech">
            {service.technologies.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="shell case-section">
        <div className="case-title">
          <p className="mono-label">03 / PROCESS</p>
          <h2>From first call to launch.</h2>
        </div>
        <ol className="process-list">
          {deliveryProcess.map((step, index) => (
            <li key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {related.length > 0 && (
        <section className="case-section case-section--tinted" id="work">
          <div className="shell">
            <div className="case-title">
              <p className="mono-label">04 / RELATED WORK</p>
              <h2>Recent {inSentence(service.name)} projects.</h2>
            </div>
            <div className="related-projects">
              {related.map((project) => (
                <article key={project.slug}>
                  <Link to={`/projects/${project.slug}`}>
                    <ProjectVisual project={project} compact />
                  </Link>
                  <h3>
                    <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p>{project.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="shell case-section service-faq">
        <div className="case-title">
          <p className="mono-label">05 / FAQ</p>
          <h2>Common questions.</h2>
        </div>
        <div>
          {service.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="shell case-section other-services">
        <p className="mono-label">OTHER SERVICES</p>
        <nav aria-label="Other services">
          {otherServices.map((item) => (
            <Link key={item.slug} to={`/services/${item.slug}`}>
              {item.name} <ArrowRight size={15} />
            </Link>
          ))}
        </nav>
      </section>

      <section className="case-contact">
        <div className="shell">
          <p>Ready when you are</p>
          <h2>Let's plan your {inSentence(service.name)} project.</h2>
          <Link className="button" to="/#contact">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
