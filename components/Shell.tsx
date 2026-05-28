"use client";
import { useApp } from "@/contexts/AppContext";
import { LOCALES } from "@/lib/i18n";
import { Gamepad2, Library, Plug, Settings, Sun, Moon, Globe2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const NAV = [
  { href: "/",            key: "library",     icon: Library },
  { href: "/connections", key: "connections", icon: Plug },
  { href: "/settings",    key: "settings",    icon: Settings }
] as const;

export default function Shell({ children }: { children: ReactNode }) {
  const { theme, setTheme, locale, setLocale, t } = useApp();
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-border bg-surface/60 p-4">
        <Link href="/" className="flex items-center gap-2 px-2 py-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-fg">
            <Gamepad2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">{t.app.name}</div>
            <div className="text-[11px] text-muted leading-tight">{t.app.tagline}</div>
          </div>
        </Link>

        <nav className="mt-4 flex flex-col gap-1">
          {NAV.map(item => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm",
                  active ? "bg-elevated text-fg" : "text-muted hover:text-fg hover:bg-elevated/60"
                )}>
                <Icon className="h-4 w-4" />
                {t.nav[item.key as keyof typeof t.nav]}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex items-center justify-between gap-2 rounded-xl border border-border p-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs hover:bg-elevated"
            aria-label="toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {theme === "dark" ? t.settings.light : t.settings.dark}
          </button>
          <div className="h-6 w-px bg-border" />
          <label className="flex flex-1 items-center justify-center gap-2 rounded-lg py-1 text-xs hover:bg-elevated cursor-pointer">
            <Globe2 className="h-4 w-4" />
            <select
              aria-label="language"
              value={locale}
              onChange={(e) => setLocale(e.target.value as any)}
              className="bg-transparent text-xs outline-none cursor-pointer"
            >
              {Object.entries(LOCALES).map(([code, v]) => (
                <option key={code} value={code} className="bg-surface text-fg">{v.label}</option>
              ))}
            </select>
          </label>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">
        {/* Mobile topbar */}
        <div className="md:hidden sticky top-0 z-30 glass border-b border-border px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-accent-fg">
              <Gamepad2 className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold">{t.app.name}</span>
          </Link>
          <div className="flex items-center gap-1">
            {NAV.map(item => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}
                  className={cn("rounded-lg p-2", active ? "bg-elevated" : "hover:bg-elevated/60")}>
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">{children}</div>
      </main>
    </div>
  );
}
