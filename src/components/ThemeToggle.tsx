"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 animate-pulse" />
    );
  }

  const cycleTheme = () => {
    if (theme === "dark") setTheme("light");
    else if (theme === "light") setTheme("system");
    else setTheme("dark");
  };

  return (
    <button
      onClick={cycleTheme}
      type="button"
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
      aria-label={`Current theme: ${theme}. Click to switch theme.`}
      title={`Theme: ${theme} (Click to toggle)`}
    >
      {theme === "dark" && <Moon className="w-4 h-4 text-emerald-400" />}
      {theme === "light" && <Sun className="w-4 h-4 text-amber-500" />}
      {theme === "system" && <Monitor className="w-4 h-4 text-blue-400" />}
    </button>
  );
}
