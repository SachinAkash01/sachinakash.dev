import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectVisual } from '../components/ProjectVisual'
import { Seo } from '../components/Seo'
import { projects } from '../data/portfolio'

export function ProjectsPage() {
  return <main id="main-content" className="inner-page"><Seo title="Projects — Sachin Akash" description="Selected software and product engineering work by Sachin Akash." path="/projects" /><header className="shell page-hero"><p className="mono-label">WORK INDEX / 04 PROJECTS</p><h1>Products built for clear business outcomes.</h1><p>Selected client work across commerce, education, finance, and food technology. Each case study explains the problem, product response, and engineering approach.</p></header><section className="shell all-projects">{projects.map((project) => <article key={project.slug}><Link to={`/projects/${project.slug}`}><ProjectVisual project={project} compact /></Link><div><p className="mono-label">{project.number} / {project.category}</p><h2>{project.title}</h2><p>{project.summary}</p><div className="tag-list">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-card__links"><Link to={`/projects/${project.slug}`}>Read case study <ArrowRight size={16} /></Link><a href={project.url} target="_blank" rel="noopener noreferrer">Live website <ArrowUpRight size={16} /></a></div></div></article>)}</section></main>
}
