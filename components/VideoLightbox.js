"use client";

import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

/**
 * Click-to-play video trigger + modal. Self-contained (owns its own open
 * state) so any server component can render it with plain props.
 *
 * Deliberately NOT an autoplaying background iframe: an eager autoplay embed
 * pulls in YouTube's player JS and tracking requests on every page load,
 * which is exactly the wrong tradeoff for visitors on rural 4G connections.
 * This renders a plain button — no iframe exists in the DOM at all — until
 * the visitor chooses to watch, at which point the iframe mounts on
 * youtube-nocookie.com with autoplay (a real user gesture, so it's expected).
 */
export default function VideoLightbox({
  youtubeId,
  title,
  triggerLabel = "Watch it in Action",
  triggerClassName,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!youtubeId) return null;

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        <Play className="h-4 w-4" fill="currentColor" />
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="focus-ring absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="aspect-video w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}