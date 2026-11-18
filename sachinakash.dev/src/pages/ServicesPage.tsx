import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { ProcessSteps } from "../components/ProcessSteps";
import { Seo } from "../components/Seo";
import { profile, projects } from "../data/portfolio";
import { deliveryProcess, inSentence, servicePages } from "../data/services";
import {
  BUSINESS_ID,
  PERSON_ID,
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
} from "../lib/seo";

const hubFaqs = [
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes. I take on freelance website, web application, mobile app, e-commerce, and integration projects, either directly or through Evantra Labs, the software company I co-founded.",
  },
  {
    question: "Are you open to full-time software engineering roles?",
    answer:
      "I am open to thoughtful engineering roles where I can contribute as a full-stack or backend engineer. Recruiters can view my résumé or contact me directly.",
  },
  {
    question: "Where are you based, and which time zones do you work with?",
    answer:
      "I am based in Colombo, Sri Lanka (GMT+5:30) and work remotely with clients in Sri Lanka, Australia, Europe, the Middle East, and North America.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Send a short description of your goals, timeline, and budget through the contact form or by email. I usually reply within one business day with questions or a suggested next step.",
  },
];

export function ServicesPage() {
  return (
    <main id="main-content" className="inner-page">
      <Seo
        title="Hire a Freelance Software Engineer & Web Developer in Sri Lanka — Sachin Akash"
        description="Freelance software engineer and full-stack web developer in Colombo, Sri Lanka. Website development, web apps, React Native mobile apps, e-commerce, WordPress, APIs, and consulting for clients worldwide."
        path="/services"
        jsonLd={[
          {
            "@type": "CollectionPage",
            "@id": absoluteUrl("/services"),
            url: absoluteUrl("/services"),
            name: "Software development services",
            about: { "@id": BUSINESS_ID },
            author: { "@id": PERSON_ID },
            hasPart: servicePages.map((service) => ({
              "@type": "Service",
              name: service.name,
              url: absoluteUrl(`/services/${service.slug}`),
              provider: { "@id": BUSINESS_ID },
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqSchema(hubFaqs),
        ]}
      />
      <header className="shell page-hero">
        <p className="mono-label">SERVICES / FREELANCE & CONSULTING</p>
        <h1>Freelance software engineer and web developer for ambitious teams.</h1>
        <p>
          I help businesses in Sri Lanka, Australia, and around the world plan,
          build, and launch websites, web applications, mobile apps, online
          stores, and integrations. You work directly with the engineer
          building your product, backed by production experience at WSO2 and
          the team at Evantra Labs.
        </p>
      </header>

      <section className="shell service-hub" aria-label="Services">
        {servicePages.map((service, index) => (
          <article key={service.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>
              <Link to={`/services/${service.slug}`}>{service.name}</Link>
            </h2>
            <p>{service.metaDescription}</p>
            <div className="tag-list">
              {service.technologies.slice(0, 5).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link className="text-link" to={`/services/${service.slug}`}>
              Explore {inSentence(service.name)} <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </section>

      <section className="case-section case-section--tinted">
        <div className="shell">
          <div className="case-title">
            <p className="mono-label">HOW WE WORK</p>
            <h2>A simple, transparent process.</h2>
          </div>
          <ProcessSteps steps={deliveryProcess} />
        </div>
      </section>

      <section className="shell case-section service-proof">
        <div>
          <p className="mono-label">PROOF OF WORK</p>
          <h2>{projects.length} projects shipped for real businesses.</h2>
          <p>
            Travel platforms, e-commerce stores, corporate websites, and a
            server-rendered band website, for clients in Sri Lanka, Australia,
            and Europe.
          </p>
          <Link className="button" to="/projects">
            See all case studies <ArrowRight size={17} />
          </Link>
        </div>
        <ul>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link to={`/projects/${project.slug}`}>
                <strong>{project.shortTitle}</strong>
                <span>{project.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell case-section service-faq">
        <div className="case-title">
          <p className="mono-label">FAQ</p>
          <h2>Questions clients and recruiters ask.</h2>
        </div>
        <FaqList faqs={hubFaqs} />
      </section>

      <section className="case-contact">
        <div className="shell">
          <p>{profile.availability}</p>
          <h2>Tell me what you are building.</h2>
          <Link className="button" to="/#contact">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
