import { ArrowLeft, FolderSearch, TerminalSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFoundPage({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  return <main id="main-content" className="not-found"><Seo title="Signal lost — Sachin Akash" description="The requested route could not be located." /><div className="not-found__radar"><i /><i /><i /><span>404</span></div><p className="mono-label">ERROR / ROUTE_NOT_FOUND</p><h1>Signal lost.</h1><p>The requested route could not be located in this system.</p><div><Link className="button" to="/"><ArrowLeft size={17} /> Return home</Link><Link className="button button--ghost" to="/projects"><FolderSearch size={17} /> View projects</Link><button className="text-link" onClick={onOpenTerminal}><TerminalSquare size={17} /> Open terminal</button></div></main>
}
