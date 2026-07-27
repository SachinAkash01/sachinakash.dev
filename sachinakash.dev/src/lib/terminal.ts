import { education, experiences, profile, projects, services, skillGroups } from '../data/portfolio'
import type { ThemePreference } from '../hooks/useTheme'

export type TerminalAction =
  | { type: 'scroll'; target: string }
  | { type: 'navigate'; target: string }
  | { type: 'theme'; value: ThemePreference }
  | { type: 'open'; target: string }
  | { type: 'clear' }

export type TerminalResult = { output: string[]; action?: TerminalAction }

export const terminalCommands = [
  'help', 'whoami', 'about', 'experience', 'projects', 'project sherees-cakes', 'project winchild',
  'project capital-bridge', 'project nutri', 'skills', 'services', 'education', 'books', 'contact',
  'social', 'resume', 'theme dark', 'theme light', 'theme system', 'open github', 'open linkedin',
  'open email', 'clear', 'history', 'nightwatch',
]

const help = [
  'PORTFOLIO',
  '  whoami · about · experience · projects · project <slug>',
  '  skills · services · education · books · contact · social',
  'SYSTEM',
  '  theme <dark|light|system> · open <github|linkedin|email>',
  '  resume · history · clear',
]

export function executeTerminalCommand(input: string, history: string[]): TerminalResult {
  const normalised = input.trim().replace(/\s+/g, ' ')
  const [command = '', ...args] = normalised.toLowerCase().split(' ')

  if (!command) return { output: [] }

  switch (command) {
    case 'help': return { output: help }
    case 'whoami': return { output: [`${profile.name} — ${profile.title}`, profile.location] }
    case 'about': return { output: [profile.summary], action: { type: 'scroll', target: 'about' } }
    case 'experience': return { output: experiences.map((item) => `${item.role} @ ${item.company} — ${item.period}`), action: { type: 'scroll', target: 'experience' } }
    case 'projects': return { output: projects.map((project) => `${project.slug.padEnd(16)} ${project.shortTitle}`), action: { type: 'scroll', target: 'projects' } }
    case 'project': {
      const project = projects.find((item) => item.slug === args[0])
      if (!project) return { output: [`Project “${args[0] ?? ''}” was not found. Try: projects`] }
      return { output: [project.title, project.category, project.summary, `Opening /projects/${project.slug}…`], action: { type: 'navigate', target: `/projects/${project.slug}` } }
    }
    case 'skills': return { output: skillGroups.map((group) => `${group.label}: ${group.items.join(', ')}`), action: { type: 'scroll', target: 'skills' } }
    case 'services': return { output: services.map((service) => service.title), action: { type: 'scroll', target: 'services' } }
    case 'education': return { output: [education.degree, education.institution, education.result], action: { type: 'scroll', target: 'education' } }
    case 'books': return { output: ['Books that shaped how I build, think, and lead.', 'Opening the reading shelf…'], action: { type: 'scroll', target: 'books' } }
    case 'contact': return { output: [`Email: ${profile.email}`, `Location: ${profile.location}`], action: { type: 'scroll', target: 'contact' } }
    case 'social': return { output: profile.socials.map((social) => `${social.label}: ${social.href}`) }
    case 'resume': return { output: ['Opening résumé…'], action: { type: 'open', target: profile.resumeUrl } }
    case 'theme': {
      const value = args[0]
      if (value !== 'dark' && value !== 'light' && value !== 'system') return { output: ['Usage: theme <dark|light|system>'] }
      return { output: [`Theme preference set to ${value}.`], action: { type: 'theme', value } }
    }
    case 'open': {
      const target = args[0]
      if (target === 'github') return { output: ['Opening GitHub…'], action: { type: 'open', target: profile.socials[0].href } }
      if (target === 'linkedin') return { output: ['LinkedIn URL is ready to update in src/data/portfolio.ts.'] }
      if (target === 'email') return { output: [profile.email === 'YOUR_EMAIL_ADDRESS' ? 'Email address is ready to update in src/data/portfolio.ts.' : 'Opening email client…'], ...(profile.email === 'YOUR_EMAIL_ADDRESS' ? {} : { action: { type: 'open', target: `mailto:${profile.email}` } as TerminalAction }) }
      return { output: ['Usage: open <github|linkedin|email>'] }
    }
    case 'clear': return { output: [], action: { type: 'clear' } }
    case 'history': return { output: history.length ? history.map((item, index) => `${String(index + 1).padStart(2, '0')}  ${item}`) : ['No command history yet.'] }
    case 'nightwatch': return { output: ['        ·     *', '   ┌─┐    ╱╲       ·', ' ┌─┘ └─┐ ╱  ╲  ┌─┐', '─┴─────┴───────┴─┴─', 'Quiet systems. Clear signals. Software built after dark.'] }
    default: return { output: [`Command not found: ${command}`, 'Type “help” to see available commands.'] }
  }
}

export function completeTerminalInput(input: string) {
  const matches = terminalCommands.filter((command) => command.startsWith(input.toLowerCase()))
  return matches.length === 1 ? matches[0] : input
}
