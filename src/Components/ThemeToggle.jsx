import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

const STORAGE_KEY = "portfolio-theme";
const THEME_CHANGE_EVENT = "portfolio-theme-change";

function getCurrentTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export default function ThemeToggle({ compact = false }) {
  const [theme, setTheme] = useState(getCurrentTheme);

  useEffect(() => {
    const syncTheme = () => setTheme(getCurrentTheme());
    window.addEventListener(THEME_CHANGE_EVENT, syncTheme);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, syncTheme);
  }, []);

  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={`inline-flex items-center justify-center gap-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-muted)] ${compact ? "h-10 w-10" : "h-12 w-12 border-l border-[var(--border-subtle)]"}`}
      style={{ transition: "background-color var(--ibm-dur-fast) var(--ibm-ease), color var(--ibm-dur-fast) var(--ibm-ease)" }}
    >
      {theme === "dark" ? <IconSun size={18} stroke={1.5} /> : <IconMoon size={18} stroke={1.5} />}
      {!compact && <span className="sr-only">Toggle color theme</span>}
    </button>
  );
}
