import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { CornerDownLeft, TerminalSquare, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { completeTerminalInput, executeTerminalCommand } from "../lib/terminal";

type Line = { type: "command" | "output"; text: string };

export default function PortfolioTerminal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "Sachin Portfolio Terminal" },
    { type: "output", text: "Type “help” to explore. Try: projects" },
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.focus());
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && panelRef.current) {
        const focusable = [
          ...panelRef.current.querySelectorAll<HTMLElement>(
            "button, input, [href], select",
          ),
        ];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [onClose, open]);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [lines]);

  const runAction = (
    action: ReturnType<typeof executeTerminalCommand>["action"],
  ) => {
    if (!action) return;
    if (action.type === "clear") {
      setLines([]);
      return;
    }
    if (action.type === "open") {
      window.open(action.target, "_blank", "noopener,noreferrer");
      return;
    }
    if (action.type === "navigate") {
      navigate(action.target);
      onClose();
      return;
    }
    if (action.type === "scroll") {
      const scrollNow = () =>
        document
          .getElementById(action.target)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (location.pathname !== "/") {
        navigate(`/#${action.target}`);
        setTimeout(scrollNow, 80);
      } else scrollNow();
      onClose();
    }
  };

  const submit = () => {
    const command = input.trim();
    if (!command) return;
    const nextHistory = [...history, command];
    const result = executeTerminalCommand(command, nextHistory);
    if (result.action?.type !== "clear") {
      setLines((current) => [
        ...current,
        { type: "command", text: command },
        ...result.output.map((text): Line => ({ type: "output", text })),
      ]);
    }
    setHistory(nextHistory);
    setHistoryIndex(-1);
    setInput("");
    runAction(result.action);
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
    if (event.key === "Tab") {
      event.preventDefault();
      setInput(completeTerminalInput(input));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      if (next >= 0) {
        setHistoryIndex(next);
        setInput(history[history.length - 1 - next] ?? "");
      }
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = historyIndex - 1;
      setHistoryIndex(next);
      setInput(next < 0 ? "" : (history[history.length - 1 - next] ?? ""));
    }
  };

  if (!open) return null;
  return createPortal(
    <div
      className="terminal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="terminal"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terminal-title"
      >
        <div className="terminal__bar">
          <div>
            <TerminalSquare size={17} />
            <span id="terminal-title">portfolio://command-panel</span>
          </div>
          <div className="terminal__status">
            <i /> ONLINE{" "}
            <button type="button" onClick={onClose} aria-label="Close terminal">
              <X size={18} />
            </button>
          </div>
        </div>
        <div
          className="terminal__output"
          ref={outputRef}
          aria-live="polite"
          aria-label="Terminal output"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, index) => (
            <div
              key={`${line.text}-${index}`}
              className={`terminal-line terminal-line--${line.type}`}
            >
              {line.type === "command" && <span>visitor@sachin:~$</span>}
              <pre>{line.text}</pre>
            </div>
          ))}
        </div>
        <div className="terminal__suggestions" aria-label="Suggested commands">
          {["help", "projects", "whoami", "nightwatch"].map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => {
                setInput(command);
                inputRef.current?.focus();
              }}
            >
              {command}
            </button>
          ))}
        </div>
        <div className="terminal__input-wrap">
          <span aria-hidden="true">visitor@sachin:~$</span>
          <label className="sr-only" htmlFor="terminal-input">
            Terminal command
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onInputKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
          <button type="button" onClick={submit} aria-label="Run command">
            <CornerDownLeft size={17} />
          </button>
        </div>
        <div className="terminal__footer">
          <span>TAB complete</span>
          <span>↑↓ history</span>
          <span>ESC close</span>
        </div>
      </div>
    </div>,
    document.body,
  );
}
