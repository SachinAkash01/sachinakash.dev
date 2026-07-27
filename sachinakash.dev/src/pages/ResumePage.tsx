import { Download, FileText } from "lucide-react";
import { Seo } from "../components/Seo";
import { profile } from "../data/portfolio";

export function ResumePage() {
  return (
    <main id="main-content" className="not-found">
      <Seo
        title="Résumé — Sachin Akash"
        description="Résumé overview and download for Sachin Akash."
        path="/resume"
      />
      <div className="not-found__radar">
        <FileText size={42} />
        <span>CV</span>
      </div>
      <p className="mono-label">DOCUMENT / RESUME</p>
      <h1>Résumé.</h1>
      <p>
        Add the final PDF at public/documents/sachin-akash-resume.pdf to enable
        this download.
      </p>
      <a className="button" href={profile.resumeUrl} download>
        <Download size={17} /> Download CV
      </a>
    </main>
  );
}
