import {
  books,
  education,
  experiences,
  profile,
  projects,
  services,
  skillGroups,
} from "../data/portfolio";

export type TerminalAction =
  | { type: "open"; target: string }
  | { type: "clear" }
  | { type: "close" };

export type TerminalResult = { output: string[]; action?: TerminalAction };

export const terminalCommands = [
  "help",
  "whoami",
  "about",
  "experience",
  "projects",
  "project sherees-cakes",
  "project winchild",
  "project capital-bridge",
  "project nutri",
  "project evantra-labs",
  "skills",
  "services",
  "education",
  "books",
  "contact",
  "social",
  "resume",
  "open github",
  "open linkedin",
  "open instagram",
  "open email",
  "clear",
  "exit",
  "history",
  "nightwatch",
];

const help = [
  "PORTFOLIO",
  "  whoami · about · experience · projects · project <slug>",
  "  skills · services · education · books · contact · social",
  "SYSTEM",
  "  open <github|linkedin|instagram|email>",
  "  resume · history · clear · exit",
];

export function executeTerminalCommand(
  input: string,
  history: string[],
): TerminalResult {
  const normalised = input.trim().replace(/\s+/g, " ");
  const [command = "", ...args] = normalised.toLowerCase().split(" ");

  if (!command) return { output: [] };

  switch (command) {
    case "help":
      return { output: help };
    case "whoami":
      return {
        output: [`${profile.name} — Software Engineer, Product Builder, and Co-Founder & Director at Evantra Labs`, profile.location],
      };
    case "about":
      return {
        output: [profile.title, profile.summary, `Location: ${profile.location}`],
      };
    case "experience":
      return {
        output: experiences.flatMap((item) => [
          `${item.period}  ${item.role} @ ${item.company}`,
          `  ${item.summary}`,
        ]),
      };
    case "projects":
      return {
        output: projects.flatMap((project) => [
          `${project.number}  ${project.slug.padEnd(16)} ${project.shortTitle}`,
          `    ${project.summary}`,
        ]),
      };
    case "project": {
      const project = projects.find((item) => item.slug === args[0]);
      if (!project)
        return {
          output: [`Project “${args[0] ?? ""}” was not found. Try: projects`],
        };
      return {
        output: [
          project.title,
          project.category,
          project.summary,
          `Objective: ${project.objective}`,
          `Role: ${project.role}`,
          `Stack: ${project.technologies.join(", ")}`,
          `Website: ${project.url}`,
        ],
      };
    }
    case "skills":
      return {
        output: skillGroups.map(
          (group) => `${group.label}: ${group.items.join(", ")}`,
        ),
      };
    case "services":
      return {
        output: services.map(
          (service) => `${service.title}: ${service.description}`,
        ),
      };
    case "education":
      return {
        output: [
          "UNIVERSITY EDUCATION",
          `${education.degree} (${education.year})`,
          education.institution,
          `Result: ${education.result}`,
          "University leadership:",
          ...education.leadership.map((item) => `- ${item}`),
          "",
          "SCHOOL EDUCATION",
          `${education.school.qualifications} (${education.school.year})`,
          education.school.institution,
          "School leadership:",
          ...education.school.leadership.map((item) => `- ${item}`),
        ],
      };
    case "books":
      return {
        output: [
          "Books that shaped how I build, think, and lead.",
          ...books.map((book) => `- ${book.title} — ${book.author}`),
        ],
      };
    case "contact":
      return {
        output: [
          `Email: ${profile.email}`,
          `Location: ${profile.location}`,
          `Website: ${profile.websiteUrl}`,
        ],
      };
    case "social":
      return {
        output: profile.socials.map(
          (social) => `${social.label}: ${social.href}`,
        ),
      };
    case "resume":
      return {
        output: [`Resume: ${profile.websiteUrl}${profile.resumeUrl}`],
      };
    case "open": {
      const target = args[0];
      if (target === "github" || target === "linkedin" || target === "instagram") {
        const social = profile.socials.find(
          (item) => item.label.toLowerCase() === target,
        );
        if (social)
          return {
            output: [`Opening ${social.label}…`],
            action: { type: "open", target: social.href },
          };
      }
      if (target === "email")
        return {
          output: ["Opening email client…"],
          action: {
            type: "open",
            target: `mailto:${profile.email}`,
          } as TerminalAction,
        };
      return {
        output: ["Usage: open <github|linkedin|instagram|email>"],
      };
    }
    case "clear":
      return { output: [], action: { type: "clear" } };
    case "exit":
      return { output: [], action: { type: "close" } };
    case "history":
      return {
        output: history.length
          ? history.map(
              (item, index) => `${String(index + 1).padStart(2, "0")}  ${item}`,
            )
          : ["No command history yet."],
      };
    case "nightwatch":
      return {
        output: [
          "        .     *",
          "   +--+    /\\       .",
          " +-+  +-+ /  \\  +--+",
          "-+------+--------+--+-",
          "Quiet systems. Clear signals. Software built after dark.",
        ],
      };
    default:
      return {
        output: [
          `Command not found: ${command}`,
          "Type “help” to see available commands.",
        ],
      };
  }
}

export function completeTerminalInput(input: string) {
  const matches = terminalCommands.filter((command) =>
    command.startsWith(input.toLowerCase()),
  );
  return matches.length === 1 ? matches[0] : input;
}
