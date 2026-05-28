"use client";
import { useEffect, useState } from "react";
import { useApp } from "@/contexts/AppContext";
import Button from "@/components/ui/Button";
import { Music2, Trash2 } from "lucide-react";

const LS = "unigames.spotify";
const DEFAULT_URI = "spotify:playlist:37i9dQZF1DX4sWSpwq3LiO"; // Peaceful Piano (public)

// Parse a Spotify URL or URI into an embed URL.
function toEmbed(input: string): string | null {
  if (!input) return null;
  // URI form: spotify:type:id
  const uri = input.match(/^spotify:(playlist|album|track|episode|show|artist):([a-zA-Z0-9]+)/);
  if (uri) return `https://open.spotify.com/embed/${uri[1]}/${uri[2]}?utm_source=generator&theme=0`;
  // URL form
  const url = input.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(playlist|album|track|episode|show|artist)\/([a-zA-Z0-9]+)/);
  if (url) return `https://open.spotify.com/embed/${url[1]}/${url[2]}?utm_source=generator&theme=0`;
  return null;
}

export default function SpotifyEmbed() {
  const { t } = useApp();
  const [value, setValue] = useState("");
  const [src, setSrc]   = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(LS);
    setSrc(toEmbed(saved || DEFAULT_URI));
  }, []);

  const apply = () => {
    const embed = toEmbed(value);
    if (embed) {
      setSrc(embed);
      localStorage.setItem(LS, value);
      setValue("");
    }
  };

  const remove = () => {
    setSrc(null);
    localStorage.removeItem(LS);
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/15 text-emerald-500">
          <Music2 className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">{t.spotify.title}</div>
          <div className="text-xs text-muted">{t.spotify.subtitle}</div>
        </div>
        {src && (
          <button onClick={remove} className="rounded-lg p-2 text-muted hover:bg-elevated" aria-label="remove">
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={t.spotify.placeholder}
          className="h-10 flex-1 rounded-xl border border-border bg-elevated px-3 text-sm outline-none focus:ring-2 focus:ring-accent/40"
        />
        <Button onClick={apply} disabled={!toEmbed(value)}>{t.spotify.apply}</Button>
      </div>
      <p className="mt-2 text-[11px] text-muted">{t.spotify.helper}</p>

      {src && (
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <iframe
            title="spotify"
            src={src}
            width="100%"
            height="152"
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ display: "block" }}
          />
        </div>
      )}
    </div>
  );
}
