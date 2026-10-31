"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Component, type ReactNode, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Box,
  Check,
  Compass,
  Download,
  Mail,
  MapPin,
  Minus,
  Moon,
  MousePointer2,
  Plus,
  RotateCcw,
  Sun,
  X,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { personal } from "@/content/portfolio";
import { getZone, isZoneId, zones, type ZoneId } from "@/content/zones";
import { usePortfolio } from "@/store/portfolio";
import { ContentPanel } from "./ContentPanel";
import { ZoneIcon } from "./ZoneContent";
import "./portfolio.css";

const World = dynamic(() => import("./World"), { ssr: false });

class WorldBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    usePortfolio.getState().fallback();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function MiniMap() {
  const position = usePortfolio((s) => s.position);
  const navigate = usePortfolio((s) => s.navigate);
  const visited = usePortfolio((s) => s.visited);
  return (
    <div className="minimap">
      <div className="minimap-heading">
        <Compass size={13} aria-hidden="true" />
        <span>PETA KECIL</span>
        <span>{visited.length}/5</span>
      </div>
      <div className="minimap-drawing">
        <svg viewBox="0 0 160 105" aria-hidden="true">
          <ellipse cx="80" cy="53" rx="68" ry="42" fill="#e1e8d7" />
          <ellipse
            cx="80"
            cy="53"
            rx="37"
            ry="25"
            fill="none"
            stroke="#faf5e9"
            strokeWidth="9"
          />
          <circle cx="80" cy="53" r="7" fill="#a0bbbc" />
          <circle
            cx={80 + position[0] * 6.5}
            cy={53 + position[1] * 4}
            r="3.7"
            fill="#425f51"
            stroke="#fffdf4"
            strokeWidth="2"
          />
        </svg>
        {zones.map((zone) => (
          <button
            key={zone.id}
            aria-label={`Pergi ke ${zone.label}`}
            title={zone.label}
            onClick={() => navigate(zone.id)}
            className="map-stop"
            style={{
              left: `${50 + zone.position[0] * 4}%`,
              top: `${50 + zone.position[1] * 5}%`,
              background: zone.color,
            }}
          >
            {visited.includes(zone.id) ? <Check size={9} /> : zone.number}
          </button>
        ))}
      </div>
      <span className="minimap-caption">Setiap tempat punya cerita.</span>
    </div>
  );
}

function LoadingWorld() {
  return (
    <div className="world-loader" role="status">
      <span className="loading-cube">
        <Box size={26} strokeWidth={1.3} />
      </span>
      <p>Menyiapkan dunia kecil…</p>
      <span className="loading-track">
        <span />
      </span>
      <small>Kamu juga bisa memilih versi sederhana.</small>
    </div>
  );
}

export function PortfolioExplorer({
  simpleContent,
}: {
  simpleContent: ReactNode;
}) {
  const booted = usePortfolio((s) => s.booted),
    mode = usePortfolio((s) => s.mode),
    night = usePortfolio((s) => s.night),
    ready = usePortfolio((s) => s.ready),
    active = usePortfolio((s) => s.active),
    moving = usePortfolio((s) => s.moving),
    target = usePortfolio((s) => s.target),
    error = usePortfolio((s) => s.error);
  const navigate = usePortfolio((s) => s.navigate),
    setMode = usePortfolio((s) => s.setMode);
  const [zoom, setZoom] = useState(1);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const device = navigator as Navigator & { deviceMemory?: number };
    const requested = new URLSearchParams(location.search).get("mode");
    const lowPower =
      (device.deviceMemory !== undefined && device.deviceMemory <= 4) ||
      navigator.hardwareConcurrency <= 4;
    const veryLow =
      device.deviceMemory !== undefined && device.deviceMemory <= 2;
    const nextMode =
      requested === "2d" || requested === "3d"
        ? requested
        : media.matches || veryLow
          ? "2d"
          : "3d";
    usePortfolio.setState({
      booted: true,
      mode: nextMode,
      reducedMotion: media.matches,
      lowPower,
    });
    const hash = () => {
      const id = location.hash.slice(1);
      if (isZoneId(id)) {
        usePortfolio.getState().navigate(id);
        if (usePortfolio.getState().mode === "2d")
          requestAnimationFrame(() =>
            document
              .getElementById(id)
              ?.scrollIntoView({ behavior: "instant" }),
          );
      } else usePortfolio.getState().close();
    };
    const motion = () => {
      usePortfolio.setState({ reducedMotion: media.matches });
      if (media.matches) usePortfolio.getState().setMode("2d");
    };
    hash();
    window.addEventListener("hashchange", hash);
    media.addEventListener("change", motion);
    return () => {
      window.removeEventListener("hashchange", hash);
      media.removeEventListener("change", motion);
      document.body.style.cursor = "";
    };
  }, []);

  useEffect(() => {
    if (mode !== "3d" || !booted || ready) return;
    const timeout = window.setTimeout(
      () => usePortfolio.getState().fallback(),
      20000,
    );
    return () => clearTimeout(timeout);
  }, [mode, booted, ready]);

  useEffect(() => {
    if (active)
      history.replaceState(
        null,
        "",
        `${location.pathname}${location.search}#${active}`,
      );
    else if (mode === "3d" && ready && !moving && location.hash)
      history.replaceState(null, "", `${location.pathname}${location.search}`);
  }, [active, mode, moving, ready]);

  function visit(id: ZoneId) {
    navigate(id);
    if (mode === "2d") {
      history.replaceState(
        null,
        "",
        `${location.pathname}${location.search}#${id}`,
      );
      document.getElementById(id)?.scrollIntoView({
        behavior: usePortfolio.getState().reducedMotion ? "instant" : "smooth",
      });
    }
    setShowWelcome(false);
  }
  function toggleMode() {
    const next = mode === "3d" ? "2d" : "3d";
    const url = new URL(location.href);
    // Switching views is local to this visit; reopening the homepage starts in 3D.
    url.searchParams.delete("mode");
    history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    setMode(next);
  }

  return (
    <div
      className={`portfolio-app ${night ? "is-night" : ""} ${mode === "2d" ? "is-simple" : "is-world"}`}
    >
      <a
        href={mode === "2d" ? "#personal" : "#zone-navigation"}
        className="skip-link"
      >
        Lewati ke konten
      </a>
      <header className="world-header">
        <Link
          className="wordmark"
          href="/"
          aria-label="Wisam, halaman utama"
          onClick={() => {
            if (mode === "2d") setMode("3d");
          }}
        >
          <span className="brand-symbol">
            <Image
              src={personal.photo}
              alt=""
              width={853}
              height={1280}
              className="brand-photo"
              unoptimized
            />
          </span>
          <span>
            wisam<span className="wordmark-dot">.</span>
            <small>PERSONAL PORTFOLIO</small>
          </span>
        </Link>
        <nav className="desktop-zone-nav" aria-label="Jelajahi portofolio">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => visit(zone.id)}
              className={target === zone.id ? "nav-active" : ""}
              aria-current={active === zone.id ? "location" : undefined}
            >
              {zone.label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button className="mode-button" onClick={toggleMode}>
            <Box size={15} aria-hidden="true" />
            <span>{mode === "3d" ? "Versi sederhana" : "Jelajahi 3D"}</span>
            <ArrowUpRight size={13} aria-hidden="true" />
          </button>
          {mode === "3d" && (
            <button
              className="icon-button theme-button"
              aria-label={
                night ? "Aktifkan suasana siang" : "Aktifkan suasana malam"
              }
              onClick={() => usePortfolio.setState({ night: !night })}
            >
              {night ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </header>

      {mode === "3d" && (
        <div className="world-experience">
          <div className={`world-intro ${active ? "intro-muted" : ""}`}>
            <p className="eyebrow">
              <span className="live-dot" /> SELAMAT DATANG DI DUNIA SAYA
            </p>
            <h1>
              Dunia kecil.
              <br /> Cerita <span>besar.</span>
            </h1>
            <p className="intro-description">
              Halo, saya <strong>Wisam.</strong>
              <br />
              Developer yang senang mengubah
              <br className="desktop-break" /> rasa ingin tahu menjadi karya.
            </p>
            <div className="intro-location">
              <MapPin size={14} aria-hidden="true" />
              Surabaya, Indonesia<span>UTC+7</span>
            </div>
            <button className="intro-link" onClick={() => visit("personal")}>
              Mulai berkenalan
              <ArrowDownRight size={19} aria-hidden="true" />
            </button>
            <div className="intro-rule" />
            <p className="intro-footnote">
              SEDIKIT TENTANG SAYA,
              <br />
              DALAM SEBUAH DUNIA YANG BISA DIJELAJAHI.
            </p>
          </div>
          <div
            className={`world-canvas ${active ? "has-panel" : ""}`}
            role="img"
            aria-label="Pulau 3D dengan lima bangunan. Gunakan menu zona untuk menjelajahi kontennya."
          >
            {booted && (
              <WorldBoundary>
                <World zoom={zoom} />
              </WorldBoundary>
            )}
          </div>
          {!ready && <LoadingWorld />}
          <div className="world-coordinate" aria-hidden="true">
            <span>WISAM’S LITTLE WORLD</span>
            <span>07°16′ S · 112°44′ E</span>
          </div>
          <div className="world-utilities">
            <MiniMap />
            <div className="camera-controls" aria-label="Kontrol tampilan">
              <button
                className="icon-button"
                onClick={() => setZoom((value) => Math.min(1.45, value + 0.15))}
                disabled={zoom >= 1.45}
                aria-label="Perbesar dunia"
              >
                <Plus size={17} />
              </button>
              <button
                className="icon-button"
                onClick={() => setZoom((value) => Math.max(0.7, value - 0.15))}
                disabled={zoom <= 0.7}
                aria-label="Perkecil dunia"
              >
                <Minus size={17} />
              </button>
              <span />
              <button
                className="icon-button"
                onClick={() => setZoom(1)}
                aria-label="Atur ulang tampilan"
              >
                <RotateCcw size={15} />
              </button>
            </div>
          </div>
          {showWelcome && ready && !active && (
            <div className="welcome-note">
              <span className="welcome-icon">
                <MousePointer2 size={20} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <strong>Jalan-jalan sebentar?</strong>
                <p>Klik bangunan untuk menemukan ceritanya.</p>
              </div>
              <button
                className="icon-button"
                onClick={() => setShowWelcome(false)}
                aria-label="Tutup petunjuk"
              >
                <X size={14} />
              </button>
            </div>
          )}
          <div className="exploration-status" role="status" aria-live="polite">
            {moving && target ? (
              <>
                <span className="live-dot" />
                Menuju {getZone(target).place}…
              </>
            ) : (
              <>
                <MousePointer2 size={13} aria-hidden="true" />
                Klik bangunan, ikuti ceritanya.
              </>
            )}
          </div>
          {active && <ContentPanel key={active} id={active} />}
        </div>
      )}

      <div className="simple-view" hidden={mode !== "2d"}>
        {error && (
          <p className="fallback-message" role="status">
            {error}
          </p>
        )}
        {simpleContent}
      </div>

      <nav
        id="zone-navigation"
        tabIndex={-1}
        className="zone-dock"
        aria-label="Menu zona"
      >
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => visit(zone.id)}
            aria-current={target === zone.id ? "location" : undefined}
            className={target === zone.id ? "dock-active" : ""}
          >
            <span
              className="dock-icon"
              style={{ "--zone-color": zone.color } as React.CSSProperties}
            >
              <ZoneIcon id={zone.id} />
            </span>
            <span>{zone.short}</span>
            <span className="dock-number">{zone.number}</span>
          </button>
        ))}
        <span className="dock-divider" />
        <a
          className="dock-cv"
          href={personal.resume}
          download={personal.resumeFileName}
          aria-label="Unduh CV (DOCX)"
          title="Unduh CV dalam format DOCX"
        >
          <Download size={20} aria-hidden="true" />
          <span>Unduh CV</span>
        </a>
      </nav>
      {mode === "3d" && (
        <footer className="world-footer">
          <span>
            © {new Date().getFullYear()} Wisam
            <span className="footer-dot">·</span>Dibuat dengan rasa ingin tahu.
          </span>
          <div>
            <a
              href={personal.github}
              aria-label="GitHub Wisam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email Wisam">
              <Mail size={16} />
            </a>
            <a href={`mailto:${personal.email}`} className="footer-contact">
              Mari terhubung
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </footer>
      )}
      <noscript>
        <style>{`.world-experience,.zone-dock,.header-actions,.desktop-zone-nav,.world-footer{display:none!important}.simple-view[hidden]{display:block!important}.portfolio-app.is-world{height:auto;overflow:visible}`}</style>
      </noscript>
    </div>
  );
}
