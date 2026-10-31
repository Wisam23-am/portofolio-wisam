"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { getZone, zones, type ZoneId } from "@/content/zones";
import { usePortfolio } from "@/store/portfolio";
import { ZoneContent, ZoneIcon } from "./ZoneContent";

export function ContentPanel({ id }: { id: ZoneId }) {
  const zone = getZone(id);
  const panel = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const close = usePortfolio((state) => state.close);
  const navigate = usePortfolio((state) => state.navigate);
  const index = zones.findIndex((item) => item.id === id);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeButton.current?.focus({ preventScroll: true });
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const focusable = panel.current?.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),[tabindex="0"]',
        );
        if (!focusable?.length) return;
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === "ArrowRight")
        navigate(zones[(index + 1) % zones.length].id);
      if (event.key === "ArrowLeft")
        navigate(zones[(index + zones.length - 1) % zones.length].id);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (previous?.isConnected) previous.focus({ preventScroll: true });
    };
  }, [close, index, navigate]);

  return (
    <div className="panel-layer">
      <div className="panel-backdrop" onClick={close} aria-hidden="true" />
      <div
        ref={panel}
        className="content-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
        onTouchStart={(event) => {
          if ((event.target as HTMLElement).closest(".panel-handle"))
            panel.current!.dataset.touchY = String(event.touches[0].clientY);
        }}
        onTouchEnd={(event) => {
          const start = panel.current?.dataset.touchY;
          if (start && event.changedTouches[0].clientY - Number(start) > 75)
            close();
          if (panel.current) delete panel.current.dataset.touchY;
        }}
      >
        <div className="panel-handle" aria-hidden="true">
          <span />
        </div>
        <header className="panel-header">
          <div className="panel-zone-icon" style={{ color: zone.color }}>
            <ZoneIcon id={id} size={23} />
          </div>
          <div>
            <p className="eyebrow">{zone.number} / JELAJAHI DUNIA WISAM</p>
            <h2 id="panel-title">{zone.label}</h2>
          </div>
          <button
            className="icon-button panel-close"
            ref={closeButton}
            onClick={close}
            aria-label="Tutup panel"
          >
            <X size={19} />
          </button>
        </header>
        <div className="panel-scroll">
          <ZoneContent id={id} />
        </div>
        <footer className="panel-footer">
          <span>
            {zone.number} <span>/ 05 tempat</span>
          </span>
          <div>
            <button
              className="icon-button"
              onClick={() => navigate(zones[(index + 4) % 5].id)}
              aria-label="Zona sebelumnya"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="icon-button"
              onClick={() => navigate(zones[(index + 1) % 5].id)}
              aria-label="Zona berikutnya"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
