"use client";
import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";

interface Props { open: boolean; onClose: () => void; title?: string; children: ReactNode; }

export default function Modal({ open, onClose, title, children }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-glow animate-slide-up">
        {title && <h3 className="text-lg font-semibold pr-8">{title}</h3>}
        <button onClick={onClose} className="absolute top-4 right-4 rounded-lg p-1.5 hover:bg-elevated">
          <X className="h-4 w-4" />
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
