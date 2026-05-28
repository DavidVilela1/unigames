"use client";
import { useApp } from "@/contexts/AppContext";
import { LOCALES } from "@/lib/i18n";
import Card from "@/components/ui/Card";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const { t, theme, setTheme, locale, setLocale } = useApp();

  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">{t.settings.title}</h1>

      <Card className="space-y-3">
        <div className="text-sm font-medium">{t.settings.theme}</div>
        <div className="flex gap-2">
          {([
            { id: "light", label: t.settings.light, Icon: Sun },
            { id: "dark",  label: t.settings.dark,  Icon: Moon }
          ] as const).map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setTheme(id)}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm transition",
                theme === id ? "border-accent bg-accent/10 text-fg" : "border-border bg-surface text-muted hover:text-fg"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>
      </Card>

      <Card className="space-y-3">
        <div className="text-sm font-medium">{t.settings.language}</div>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(LOCALES).map(([code, v]) => (
            <button
              key={code}
              onClick={() => setLocale(code as any)}
              className={cn(
                "rounded-xl border px-4 py-3 text-sm text-left transition",
                locale === code ? "border-accent bg-accent/10" : "border-border bg-surface text-muted hover:text-fg"
              )}
            >
              <div className="font-medium text-fg">{v.label}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted">{code}</div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
