import { beforeEach, describe, expect, it } from "vitest";
import { usePortfolio } from "./portfolio";
import { waypoints } from "@/lib/navigation";

beforeEach(() =>
  usePortfolio.setState({
    mode: "3d",
    ready: true,
    reducedMotion: false,
    active: null,
    current: "personal",
    target: null,
    moving: false,
    position: [...waypoints[1]],
    path: [],
    visited: [],
  }),
);
describe("world interaction state", () => {
  it("replaces an in-progress destination and opens only the latest panel", () => {
    usePortfolio.getState().navigate("education");
    usePortfolio.setState({ position: [...waypoints[2]] });
    usePortfolio.getState().navigate("skills");
    expect(usePortfolio.getState().path[0]).toEqual(waypoints[2]);
    expect(usePortfolio.getState().active).toBeNull();
    usePortfolio.getState().arrive();
    expect(usePortfolio.getState().active).toBe("skills");
    expect(usePortfolio.getState().visited).toEqual(["skills"]);
  });
  it("skips walking for reduced motion", () => {
    usePortfolio.setState({ reducedMotion: true });
    usePortfolio.getState().navigate("achievement");
    expect(usePortfolio.getState().moving).toBe(false);
    expect(usePortfolio.getState().active).toBe("achievement");
    expect(usePortfolio.getState().position).toEqual(waypoints[5]);
  });
  it("recovers to the reading view after a graphics failure", () => {
    usePortfolio.getState().navigate("education");
    usePortfolio.getState().fallback();
    expect(usePortfolio.getState().mode).toBe("2d");
    expect(usePortfolio.getState().moving).toBe(false);
    expect(usePortfolio.getState().active).toBeNull();
  });
});
