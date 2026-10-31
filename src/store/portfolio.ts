"use client";

import { create } from "zustand";
import { type Point, type ZoneId, getZone } from "@/content/zones";
import { findPath, waypoints } from "@/lib/navigation";

type PortfolioState = {
  booted: boolean;
  mode: "2d" | "3d";
  night: boolean;
  ready: boolean;
  reducedMotion: boolean;
  lowPower: boolean;
  error: string | null;
  active: ZoneId | null;
  target: ZoneId | null;
  current: ZoneId;
  position: Point;
  path: Point[];
  moving: boolean;
  visited: ZoneId[];
  navigate: (zone: ZoneId) => void;
  arrive: () => void;
  close: () => void;
  setMode: (mode: "2d" | "3d") => void;
  fallback: () => void;
};

export const usePortfolio = create<PortfolioState>((set, get) => ({
  booted: false,
  mode: "3d",
  night: false,
  ready: false,
  reducedMotion: false,
  lowPower: false,
  error: null,
  active: null,
  target: null,
  current: "personal",
  position: [...waypoints[1]],
  path: [],
  moving: false,
  visited: [],
  navigate: (zone) => {
    const state = get();
    if (state.mode === "2d" || state.reducedMotion || !state.ready) {
      set({
        current: zone,
        active: state.mode === "3d" ? zone : null,
        target: zone,
        position: [...waypoints[getZone(zone).node]],
        moving: false,
        path: [],
        visited: [...new Set([...state.visited, zone])],
      });
    } else {
      set({
        active: null,
        target: zone,
        path: findPath(state.position, zone),
        moving: true,
      });
    }
  },
  arrive: () => {
    const { target, visited } = get();
    if (target)
      set({
        moving: false,
        current: target,
        active: target,
        path: [],
        visited: [...new Set([...visited, target])],
      });
  },
  close: () => set({ active: null }),
  setMode: (mode) => {
    set({
      mode,
      active: null,
      moving: false,
      path: [],
      ready: false,
      error: null,
    });
  },
  fallback: () =>
    set({
      mode: "2d",
      active: null,
      moving: false,
      error:
        "Perangkatmu belum bisa menampilkan dunia 3D. Jelajahi versi sederhana di bawah ini.",
    }),
}));
