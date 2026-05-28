"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, interpolate, type Dict } from "@/lib/i18n";
import type { LocaleCode, ThemeMode } from "@/types";

interface AppCtx {
  // theme
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  // i18n
  locale: LocaleCode;
  setLocale: (l: LocaleCode) => void;
  t: Dict;
  tx: (s: string, vars: Record<string, string | number>) => string;
  intl: string;
}

const Ctx = createContext<AppCtx | null>(null);

const LS_THEME = "unigames.theme";
const LS_LOCALE = "unigames.locale";

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [locale, setLocaleState] = useState<LocaleCode>(DEFAULT_LOCALE);

  useEffect(() => {
    const t = (localStorage.getItem(LS_THEME) as ThemeMode | null);
    const l = (localStorage.getItem(LS_LOCALE) as LocaleCode | null);
    if (t) setThemeState(t);
    if (l && LOCALES[l]) setLocaleState(l);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(LS_THEME, theme);
  }, [theme]);

  useEffect(() => { localStorage.setItem(LS_LOCALE, locale); }, [locale]);

  const value: AppCtx = {
    theme,
    setTheme: setThemeState,
    locale,
    setLocale: setLocaleState,
    t: LOCALES[locale].dict,
    tx: (s, vars) => interpolate(s, vars),
    intl: LOCALES[locale].intl
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp must be used inside AppProvider");
  return v;
}
