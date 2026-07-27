import {
  ArrowUp,
  Mail,
  TerminalSquare,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { profile, services } from "../data/portfolio";
import { BrandMark } from "./BrandMark";

export function Footer({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const location = useLocation();
  const section = (id: string) =>
    location.pathname === "/" ? `#${id}` : `/#${id}`;
  const socialUrl = (label: string) =>
    profile.socials.find((social) => social.label === label)?.href ?? "#";
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link
            className="brand brand--footer"
            to="/"
            aria-label="Sachin Akash home"
          >
            <BrandMark />
            <small>Sachin Akash</small>
          </Link>
          <p>
            Software engineer and product builder creating useful, reliable
            digital systems.
          </p>
          <span className="footer-signal">
            <i /> {profile.location}
          </span>
        </div>
        <div>
          <h3>Navigate</h3>
          <nav>
            {[
              "About",
              "Experience",
              "Projects",
              "Skills",
              "Books",
              "Contact",
            ].map((item) => (
              <a key={item} href={section(item.toLowerCase())}>
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3>Services</h3>
          <nav>
            {services.slice(0, 4).map((service) => (
              <a key={service.title} href={section("services")}>
                {service.title}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3>Connect</h3>
          <nav>
            <a
              href={socialUrl("GitHub")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={14} /> GitHub
            </a>
            <a
              href={socialUrl("LinkedIn")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={14} /> LinkedIn
            </a>
            <a
              href={socialUrl("Instagram")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={14} /> Instagram
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={14} /> Email
            </a>
            <button onClick={onOpenTerminal}>
              <TerminalSquare size={14} /> Terminal
            </button>
            <a href={section("contact")}>Start a conversation</a>
          </nav>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>
          © {new Date().getFullYear()} Sachin Akash. Designed and engineered
          with intent.
        </p>
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
