import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Cog,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  TerminalSquare,
  X,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
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

let headlineCharacterIndex = 0;
const headlineTypingWords = profile.headline.split(" ").map((word) => ({
  key: `${word}-${headlineCharacterIndex}`,
  characters: Array.from(word).map((character, characterIndex, characters) => ({
    character,
    index: headlineCharacterIndex++,
    pauseAfter: characterIndex === characters.length - 1 ? 75 : 35,
  })),
}));
const headlineTypingCharacters = headlineTypingWords.flatMap(
  (word) => word.characters,
);

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

function ReadingFactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="reading-fact-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="reading-fact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reading-fact-title"
      >
        <button
          ref={closeRef}
          className="icon-button reading-fact-dialog__close"
          type="button"
          onClick={onClose}
          aria-label="Close reading fun fact"
        >
          <X size={19} />
        </button>
        <div className="reading-fact-emblem" aria-hidden="true">
          <span className="reading-fact-orbit">
            <i />
            <i />
            <i />
          </span>
          <Cog className="reading-fact-gear reading-fact-gear--one" size={34} />
          <Cog className="reading-fact-gear reading-fact-gear--two" size={23} />
          <span className="reading-fact-core">
            <BookOpen size={34} />
          </span>
        </div>
        <div>
          <p className="mono-label">A NOTE FROM THE SHELF / 400+</p>
          <h2 id="reading-fact-title">
            Read widely. Think deeply. Build deliberately.
          </h2>
          <p className="reading-fact-dialog__wisdom">
            Knowledge compounds when ideas leave the page and enter the work.
          </p>
          <p>
            More than 400 books later, the most valuable lesson is not how much
            you remember. It is how thoughtfully you apply what changed your
            perspective.
          </p>
          <button className="text-link" type="button" onClick={onClose}>
            Return to the shelf <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function HomePage({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const reducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [readingFactOpen, setReadingFactOpen] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(0);
  const [visibleHeadlineCharacters, setVisibleHeadlineCharacters] = useState(0);
  const location = useLocation();
  const closeReadingFact = useCallback(() => setReadingFactOpen(false), []);
  const socialUrl = (label: string) =>
    profile.socials.find((social) => social.label === label)?.href ?? "#";

  useEffect(() => {
    if (location.hash)
      setTimeout(
        () => document.getElementById(location.hash.slice(1))?.scrollIntoView(),
        0,
      );
  }, [location.hash]);

  useEffect(() => {
    if (reducedMotion) return;

    let characterIndex = 0;
    let typingTimer: number;
    const revealNextCharacter = () => {
      characterIndex += 1;
      setVisibleHeadlineCharacters(characterIndex);

      if (characterIndex < headlineTypingCharacters.length) {
        const currentCharacter = headlineTypingCharacters[characterIndex - 1];
        typingTimer = window.setTimeout(
          revealNextCharacter,
          currentCharacter.pauseAfter,
        );
      }
    };
    const startTimer = window.setTimeout(() => {
      revealNextCharacter();
    }, 680);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(typingTimer);
    };
  }, [reducedMotion]);

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
            <p className="hero-eyebrow">{profile.eyebrow}</p>
            <h1 aria-label={`${profile.name}. ${profile.headline}`}>
              <span className="hero-name" aria-hidden="true">
                {profile.name}
              </span>
              <span className="hero-headline" aria-hidden="true">
                {headlineTypingWords.map((word) => (
                  <span className="hero-headline__word" key={word.key}>
                    {word.characters.map(({ character, index }) => {
                      const isVisible =
                        reducedMotion || index < visibleHeadlineCharacters;
                      const isCurrent =
                        !reducedMotion &&
                        index === visibleHeadlineCharacters - 1;
                      return (
                        <span
                          className={`hero-typing-character${isVisible ? " hero-typing-character--visible" : ""}`}
                          key={`${character}-${index}`}
                        >
                          {character}
                          {isCurrent && <i className="hero-typing-cursor" />}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </span>
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
                href={socialUrl("GitHub")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={16} /> GitHub
              </a>
              <a
                href={socialUrl("LinkedIn")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={16} /> LinkedIn
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
            copy="I translate complex requirements into practical systems, balancing the experience people see with the architecture that keeps the product reliable."
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
            {experiences.map((experience, index) => {
              const isExpanded = expandedExperience === index;
              const detailId = `experience-detail-${index}`;
              return (
              <article
                className={`timeline__item ${isExpanded ? "timeline__item--open" : ""}`}
                key={`${experience.role}-${experience.company}`}
              >
                <button
                  className="timeline__summary"
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={detailId}
                  onClick={(event) => {
                    event.preventDefault();
                    setExpandedExperience((current) =>
                      current === index ? null : index,
                    );
                  }}
                >
                  <span className="timeline__number">0{index + 1}</span>
                  <div>
                    <p>{experience.period}</p>
                    <h3>{experience.role}</h3>
                    <strong>{experience.company}</strong>
                  </div>
                  <span className="timeline__toggle" aria-hidden="true">+</span>
                </button>
                <div
                  className="timeline__detail-shell"
                  id={detailId}
                  aria-hidden={!isExpanded}
                >
                  <div>
                    <div className="timeline__detail">
                      <p>{experience.summary}</p>
                      <ul>
                        {experience.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="SELECTED WORK / 2026"
            title="Digital products designed to do real work."
            copy="A selection of platforms spanning commerce, education, finance, food technology, and software services."
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
            copy="Technologies are selected for the problem, the people maintaining the product, and the path to production, not for novelty."
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
            copy="For teams that need a thoughtful technical partner, not just another implementation hand-off."
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
                <span className="mono-label">UNIVERSITY LEADERSHIP</span>
              </div>
              {education.leadership.map((item, index) => (
                <div key={item}>
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
                </div>
              ))}
            </article>
            <article className="school-card">
              <div>
                <GraduationCap size={26} />
                <span className="mono-label">SCHOOL EDUCATION</span>
              </div>
              <h3>{education.school.qualifications}</h3>
              <p>{education.school.institution}</p>
              <small>{education.school.year}</small>
            </article>
            <article className="leadership-card">
              <div>
                <BriefcaseBusiness size={24} />
                <span className="mono-label">SCHOOL LEADERSHIP</span>
              </div>
              {education.school.leadership.map((item, index) => (
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
            copy="A small selection of favourites from more than 400 books I’ve read, titles that shaped how I approach craft, focus, leadership, discipline, and better systems."
            action={
              <button
                className={`reading-stat ${readingFactOpen ? "reading-stat--activated" : ""}`}
                type="button"
                onClick={() => setReadingFactOpen(true)}
                aria-haspopup="dialog"
                aria-label="Fun fact: more than 400 books read"
              >
                <span>Fun fact</span>
                <strong>400+</strong>
                <small>books read</small>
              </button>
            }
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
                href={socialUrl("GitHub")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={19} />
                <div>
                  <span>GitHub</span>
                  <strong>@SachinAkash01</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>
              <a
                className="contact-route"
                href={socialUrl("LinkedIn")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={19} />
                <div>
                  <span>LinkedIn</span>
                  <strong>Sachin Akash</strong>
                </div>
                <ArrowUpRight size={17} />
              </a>
              <a
                className="contact-route"
                href={socialUrl("Instagram")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram size={19} />
                <div>
                  <span>Instagram</span>
                  <strong>@sachinakash_</strong>
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
      <ReadingFactDialog open={readingFactOpen} onClose={closeReadingFact} />
    </main>
  );
}
