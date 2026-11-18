import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { profile } from "../data/portfolio";
import {
  allResumeProjects,
  resumeCertifications,
  resumeEducation,
  resumeExperience,
  resumeLanguages,
  resumeLeadership,
  resumeProfile,
  resumeSkills,
} from "../data/resume";
import { PERSON_ID, absoluteUrl, breadcrumbSchema } from "../lib/seo";

export function ResumePage() {
  return (
    <main id="main-content" className="inner-page resume-page">
      <Seo
        title="Sachin Akash Résumé — Software Engineer (React, TypeScript, Front End)"
        description="Résumé of Sachin Akash, a front-end focused software engineer in Colombo, Sri Lanka with 2+ years at WSO2 and Evantra Labs building React and TypeScript web apps, booking platforms, and e-commerce stores. Download the CV."
        path="/resume"
        type="profile"
        jsonLd={[
          {
            "@type": "ProfilePage",
            "@id": absoluteUrl("/resume"),
            url: absoluteUrl("/resume"),
            name: "Sachin Akash — Résumé",
            mainEntity: { "@id": PERSON_ID },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Résumé", path: "/resume" },
          ]),
        ]}
      />
      <header className="shell page-hero resume-hero">
        <p className="mono-label">RÉSUMÉ / CURRICULUM VITAE</p>
        <h1>Sachin Akash — Software Engineer</h1>
        <p>{resumeProfile}</p>
        <div className="resume-contact">
          <span>
            <MapPin size={15} /> {profile.location}
          </span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <Phone size={15} /> {profile.phone}
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={15} /> {profile.email}
          </a>
          {profile.socials
            .filter((social) => social.label !== "Instagram")
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={15} /> {social.label}
              </a>
            ))}
          <a className="button" href={profile.resumeUrl} download>
            <Download size={17} /> Download CV (PDF)
          </a>
        </div>
      </header>

      <section className="shell case-section resume-section">
        <h2 className="mono-label">Technical skills</h2>
        <div className="resume-skills">
          {resumeSkills.map((group) => (
            <article key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell case-section resume-section">
        <h2 className="mono-label">Professional experience</h2>
        <div>
          {resumeExperience.map((experience) => (
            <article key={`${experience.role}-${experience.period}`}>
              <p className="resume-period">{experience.period}</p>
              <h3>
                {experience.role} · {experience.company}
              </h3>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="shell case-section resume-section">
        <h2 className="mono-label">Selected projects</h2>
        <div>
          {allResumeProjects.map((project) => (
            <article key={project.name}>
              <p className="resume-period">
                {project.period} ·{" "}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.urlLabel}
                </a>
              </p>
              <h3>
                {project.slug ? (
                  <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                ) : (
                  project.name
                )}
              </h3>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p className="resume-stack">{project.stack}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell case-section resume-section">
        <h2 className="mono-label">Education</h2>
        <div>
          {resumeEducation.map((item) => (
            <article key={item.title}>
              <p className="resume-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              {item.notes.length > 0 && (
                <ul>
                  {item.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="shell case-section resume-section">
        <h2 className="mono-label">Certifications</h2>
        <div>
          <article>
            <ul>
              {resumeCertifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="shell case-section resume-section">
        <h2 className="mono-label">Leadership & achievements</h2>
        <div>
          <article>
            <ul>
              {resumeLeadership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{resumeLanguages}</p>
          </article>
          <article>
            <h3>References</h3>
            <p>Available on request.</p>
          </article>
        </div>
      </section>

      <section className="case-contact">
        <div className="shell">
          <p>Hiring for an engineering role?</p>
          <h2>Let's talk about how I can help your team.</h2>
          <Link className="button" to="/#contact">
            Get in touch <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
