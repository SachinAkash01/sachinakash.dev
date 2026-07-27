import { useEffect, useRef, useState } from 'react'
import { Menu, Monitor, Moon, Sun, TerminalSquare, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme, type ThemePreference } from '../hooks/useTheme'
import { BrandMark } from './BrandMark'

const navigation = [
  ['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'], ['Skills', 'skills'],
  ['Services', 'services'], ['Books', 'books'], ['Contact', 'contact'],
]

function ThemeControl() {
  const { preference, setPreference } = useTheme()
  const icons = { dark: Moon, light: Sun, system: Monitor }
  const Icon = icons[preference]
  return (
    <label className="theme-control" title="Colour theme">
      <Icon size={16} aria-hidden="true" />
      <span className="sr-only">Colour theme</span>
      <select value={preference} onChange={(event) => setPreference(event.target.value as ThemePreference)} aria-label="Colour theme">
        <option value="dark">Dark</option><option value="light">Light</option><option value="system">System</option>
      </select>
    </label>
  )
}

export function Header({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    return () => { document.body.style.overflow = '' }
  }, [open])

  const sectionHref = (id: string) => location.pathname === '/' ? `#${id}` : `/#${id}`
  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="shell header-inner">
        <Link to="/" className="brand" aria-label="Sachin Akash home"><BrandMark /><small>Sachin Akash</small></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => <a key={id} href={sectionHref(id)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" type="button" onClick={onOpenTerminal} aria-label="Open portfolio terminal"><TerminalSquare size={18} /></button>
          <ThemeControl />
          <a className="button button--small header-cta" href={sectionHref('contact')}>Let’s work together</a>
          <button className="icon-button menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={20} /></button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false) }}>
          <div className="mobile-nav" ref={panelRef} role="dialog" aria-modal="true" aria-label="Mobile navigation" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false) }}>
            <div className="mobile-nav__top"><span className="mono-label">NAVIGATION / 01</span><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={20} /></button></div>
            <nav>{navigation.map(([label, id], index) => <a href={sectionHref(id)} key={id} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}</nav>
            <button className="terminal-prompt" type="button" onClick={() => { setOpen(false); onOpenTerminal() }}><TerminalSquare size={18} /> Open terminal <span>⌘ K</span></button>
          </div>
        </div>
      )}
    </header>
  )
}
