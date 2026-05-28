import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatHours = (h: number, suffix: string) =>
  `${h.toLocaleString()} ${suffix}`;

export const formatDate = (iso: string, locale: string) =>
  new Date(iso).toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" });
