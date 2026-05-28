import pt from "./locales/pt";
import en from "./locales/en";
import type { LocaleCode } from "@/types";
import type { Dict } from "./types";

export type { Dict };

export const LOCALES: Record<LocaleCode, { label: string; dict: Dict; intl: string }> = {
  pt: { label: "Português", dict: pt, intl: "pt-PT" },
  en: { label: "English",   dict: en, intl: "en-US" }
};

export const DEFAULT_LOCALE: LocaleCode = "pt";

export function interpolate(s: string, vars: Record<string, string | number>) {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
