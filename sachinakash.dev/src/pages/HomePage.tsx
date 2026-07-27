import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Download,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  TerminalSquare,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  books,
  education,
  expertise,
  experiences,
  overview,
  profile,
  projects,
  services,
  skillGroups,
  type Book,
} from "../data/portfolio";
import { ContactForm } from "../components/ContactForm";
import { ProjectVisual } from "../components/ProjectVisual";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

function BookDialog({
  book,
  onClose,
}: {
  book: Book | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!book) return;
    closeRef.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [book, onClose]);
  if (!book) return null;
  return (
    <div
      className="book-dialog-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="book-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-title"
      >
        <button
          ref={closeRef}
          className="icon-button book-dialog__close"
          onClick={onClose}
          aria-label="Close book details"
        >
          <X size={19} />
        </button>
        <div
          className="book-cover book-cover--large"
          style={{ "--book-seed": book.slug.length } as React.CSSProperties}
        >
          <img
            src={book.coverUrl}
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span>{book.category}</span>
          <strong>{book.title}</strong>
          <small>{book.author}</small>
        </div>
        <div>
          <p className="mono-label">READING NOTE / {book.category}</p>
          <h3 id="book-title">{book.title}</h3>
          <p className="book-dialog__author">by {book.author}</p>
          <p>{book.description}</p>
          <blockquote>“{book.personalTakeaway}”</blockquote>
          <small>Personal takeaway</small>
        </div>
      </div>
    </div>
  );
}

export function HomePage({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const reducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash)
      setTimeout(
        () => document.getElementById(location.hash.slice(1))?.scrollIntoView(),
        0,
      );
  }, [location.hash]);

  const copyEmail = async () => {
    if (profile.email === "YOUR_EMAIL_ADDRESS") return;
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main id="main-content">
      <Seo
        title="Sachin Akash — Software Engineer & Product Builder"
        description="Portfolio of Sachin Akash, software engineer, product builder, and Co-Founder & Director at Evantra Labs in Colombo, Sri Lanka."
      />
      <section className="hero-section" id="home">
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <div className="shell hero-grid">
          <motion.div
            className="hero-copy"
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={reveal}
            transition={{ duration: 0.55 }}
          >
            <div className="status-line">
              <i /> <span>{profile.availability}</span>
            </div>
            <p className="hero-eyebrow">{profile.eyebrow}</p>
            <h1>
              <span>{profile.name}</span>
              {profile.headline}
            </h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                View my work <ArrowDownRight size={18} />
              </a>
              <a className="button button--ghost" href="#contact">
                Contact me <ArrowRight size={18} />
              </a>
              <a className="text-link" href={profile.resumeUrl} download>
                Download CV <Download size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <a
                href="https://github.com/SachinAkash01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch size={16} /> GitHub
              </a>
              <button onClick={onOpenTerminal}>
                <TerminalSquare size={16} /> Open terminal
              </button>
              <span>
                <MapPin size={16} /> {profile.location}
              </span>
            </div>
          </motion.div>
          <motion.div
            className="portrait-stage"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <div className="portrait-coordinates portrait-coordinates--top">
              06.9271° N<br />
              79.8612° E
            </div>
            <div className="portrait-frame">
              <div className="portrait-scan" />
              <div className="portrait-glow" />
              <img
                src={profile.profileImage}
                width="1024"
                height="1024"
                alt="Sachin Akash in professional attire"
                style={{ objectPosition: profile.profileImagePosition }}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  const fallback = event.currentTarget
                    .nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "grid";
                }}
              />
              <div className="portrait-fallback">
                <span>SA</span>
                <small>Portrait asset pending</small>
              </div>
            </div>
            <div className="portrait-tag">
              <span>ROLE / 01</span>
              <strong>
                Engineering products
                <br />
                from idea to production.
              </strong>
            </div>
            <div className="portrait-status">
              <i /> SYSTEMS ONLINE
            </div>
          </motion.div>
        </div>
        <div className="shell hero-foot">
          <span>SCROLL TO EXPLORE</span>
          <div />
          <span>COLOMBO / LK</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Professional focus">
        <div className="shell">
          {[
            "Product engineering",
            "Open-source experience",
            "Client delivery",
            "Technical leadership",
          ].map((item, i) => (
            <span key={item}>
              <small>0{i + 1}</small>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="shell">
          <SectionHeading
            index="01"
            eyebrow="PROFILE / CAPABILITIES"
            title="Software built with product sense and engineering discipline."
            copy="I translate complex requirements into practical systems—balancing the experience people see with the architecture that keeps the product reliable."
          />
          <div className="overview-grid">
            {overview.map(({ icon: Icon, title, text }, i) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={reveal}
                transition={{ delay: reducedMotion ? 0 : i * 0.06 }}
              >
                <span>0{i + 1}</span>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
          <div className="about-panel">
            <div>
              <p className="mono-label">ABOUT ME</p>
              <h3>A builder across the whole product surface.</h3>
            </div>
            <div>
              <p>
                I'm a software engineer, product builder, and entrepreneur
                who enjoys turning complex requirements into thoughtful,
                well-designed software. My work spans developer tooling, APIs,
                open-source engineering, web and mobile products, cloud systems,
                and production client solutions.
              </p>
              <p>
                Today, I lead technical strategy and delivery as Co-Founder &
                Director at Evantra Labs, drawing on previous engineering experience
                at WSO2 and a practical bias toward software that is clear,
                useful, and ready for the real world.
              </p>
            </div>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, label, items }, index) => (
              <article key={label}>
                <div className="expertise-card__top">
                  <span>0{index + 1}</span>
                  <Icon size={21} />
                </div>
                <h3>{label}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="experience">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="CAREER / FIELD LOG"
            title="Experience shaped in product teams, open source, and client delivery."
          />
          <div className="timeline">
            {experiences.map((experience, index) => (
              <details
                key={`${experience.role}-${experience.company}`}
                open={index === 0}
              >
                <summary>
                  <span className="timeline__number">0{index + 1}</span>
                  <div>
                    <p>{experience.period}</p>
                    <h3>{experience.role}</h3>
                    <strong>{experience.company}</strong>
                  </div>
                  <span className="timeline__toggle">+</span>
                </summary>
                <div className="timeline__detail">
                  <p>{experience.summary}</p>
                  <ul>
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="SELECTED WORK / 2026"
            title="Digital products designed to do real work."
            copy="A selection of client platforms spanning commerce, education, finance, and food technology."
            action={
              <Link className="text-link" to="/projects">
                View all projects <ArrowUpRight size={16} />
              </Link>
            }
          />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.slug}>
                <Link
                  to={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} case study`}
                >
                  <ProjectVisual project={project} />
                </Link>
                <div className="project-card__body">
                  <div>
                    <p className="mono-label">
                      {project.number} / {project.category}
                    </p>
                    <h3>
                      <Link to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p>{project.summary}</p>
                  </div>
                  <div className="tag-list">
                    {project.technologies.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <Link to={`/projects/${project.slug}`}>
                      View case study <ArrowRight size={16} />
                    </Link>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="skills">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="TECHNICAL SYSTEMS"
            title="A pragmatic toolkit for product delivery."
            copy="Technologies are selected for the problem, the people maintaining the product, and the path to production—not for novelty."
          />
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, label, description, items }) => (
              <article key={label}>
                <div>
                  <Icon size={22} />
                  <h3>{label}</h3>
                </div>
                <p>{description}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="engineering-band">
            <span className="mono-label">ENGINEERING PRACTICE</span>
            <div>
              {[
                "System architecture",
                "API design",
                "OpenAPI",
                "Developer tools",
                "Performance",
                "Testing",
                "Security",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="shell">
          <SectionHeading
            index="05"
            eyebrow="SERVICES / EVANTRA LABS"
            title="From early direction to production software."
            copy="For teams that need a thoughtful technical partner—not just another implementation hand-off."
          />
          <div className="services-grid">
            {services.map(
              ({ icon: Icon, title, description, skills }, index) => (
                <article key={title}>
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div>
                    {skills.map((skill) => (
                      <small key={skill}>{skill}</small>
                    ))}
                  </div>
                  <a href="#contact">
                    Discuss a project <ArrowRight size={16} />
                  </a>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section--education" id="education">
        <div className="shell">
          <SectionHeading
            index="06"
            eyebrow="EDUCATION / LEADERSHIP"
            title="Grounded in fundamentals. Strengthened through responsibility."
          />
          <div className="education-grid">
            <article className="degree-card">
              <div>
                <GraduationCap size={26} />
                <span className="mono-label">BACHELOR’S DEGREE</span>
              </div>
              <h3>{education.degree}</h3>
              <p>{education.institution}</p>
              <strong>{education.result}</strong>
              <small>{education.year}</small>
            </article>
            <article className="leadership-card">
              <div>
                <BriefcaseBusiness size={24} />
                <span className="mono-label">LEADERSHIP</span>
              </div>
              {education.leadership.map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="books">
        <div className="shell">
          <SectionHeading
            index="07"
            eyebrow="BEYOND THE CODE"
            title="Books that shaped how I build, think, and lead."
            copy="A working shelf of ideas about craft, focus, leadership, discipline, and better systems."
          />
          <div className="book-shelf">
            {books.map((book, index) => (
              <button
                key={book.slug}
                className="book-card"
                onClick={() => setSelectedBook(book)}
                aria-label={`Read notes on ${book.title}`}
              >
                <div
                  className="book-cover"
                  style={{ "--book-seed": index + 1 } as React.CSSProperties}
                >
                  <img
                    src={book.coverUrl}
                    alt={`Cover of ${book.title}`}
                    width="320"
                    height="480"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span>{book.category}</span>
                  <strong>{book.title}</strong>
                  <small>{book.author}</small>
                </div>
                <div>
                  <p>{book.title}</p>
                  <span>{book.author}</span>
                </div>
              </button>
            ))}
          </div>
          <p className="shelf-hint">
            <BookOpen size={16} /> Select a book to open my reading note.
          </p>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell">
          <div className="contact-heading">
            <p className="mono-label">08 / OPEN CHANNEL</p>
            <h2>
              Have a role, product, or project in mind? <em>Let’s talk.</em>
            </h2>
            <p>
              Whether you’re assembling an engineering team or shaping a new
              product, share the context and I’ll respond with a practical next
              step.
            </p>
          </div>
          <div className="contact-grid">
            <aside>
              <div className="contact-route">
                <Mail size={19} />
                <div>
                  <span>Email</span>
                  <strong>
                    {profile.email === "YOUR_EMAIL_ADDRESS"
                      ? "Email address to add"
                      : profile.email}
                  </strong>
                </div>
                <button
                  onClick={copyEmail}
                  disabled={profile.email === "YOUR_EMAIL_ADDRESS"}
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={17} /> : <Clipboard size={17} />}
                </button>
              </div>
              <div className="contact-route">
                <MapPin size={19} />
                <div>
                  <span>Location</span>
                  <strong>{profile.location}</strong>
                </div>
              </div>
              <a
                className="contact-route"
                href="https://github.com/SachinAkash01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch size={19} />
                <div>
                  <span>GitHub</span>
                  <strong>@SachinAkash01</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>
              <div className="contact-availability">
                <i />
                <div>
                  <strong>Currently available</strong>
                  <p>{profile.availability}</p>
                </div>
              </div>
            </aside>
            <ContactForm />
          </div>
        </div>
      </section>
      <BookDialog book={selectedBook} onClose={() => setSelectedBook(null)} />
    </main>
  );
}
