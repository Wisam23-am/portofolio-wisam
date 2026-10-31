import { describe, expect, it } from "vitest";
import { zones, type Point } from "@/content/zones";
import { distance, findPath, waypoints } from "./navigation";

describe("pedestrian navigation", () => {
  for (const from of zones)
    for (const to of zones) {
      it(`routes ${from.id} to ${to.id} within five seconds and clear of buildings`, () => {
        const path = findPath(waypoints[from.node], to.id);
        expect(path.at(-1)).toEqual(waypoints[to.node]);
        const length = path
          .slice(1)
          .reduce((total, point, i) => total + distance(path[i], point), 0);
        expect(length / 3.2).toBeLessThan(5);
        for (let i = 1; i < path.length; i++) {
          for (let t = 0; t <= 1; t += 0.1) {
            const sample: Point = [
              path[i - 1][0] * (1 - t) + path[i][0] * t,
              path[i - 1][1] * (1 - t) + path[i][1] * t,
            ];
            expect(Math.hypot(...sample)).toBeGreaterThan(1.6);
            for (const building of zones) {
              // Expanded ground footprint, including the avatar's half-width.
              const inside =
                Math.abs(sample[0] - building.position[0]) <
                  (building.id === "education" ? 2.3 : 2.1) &&
                Math.abs(sample[1] - building.position[1]) < 1.8;
              expect(inside, `intersects ${building.id}`).toBe(false);
            }
          }
        }
      });
    }
  it("starts a redirected route at the exact position between waypoints", () => {
    const start: Point = [
      (waypoints[2][0] + waypoints[3][0]) / 2,
      (waypoints[2][1] + waypoints[3][1]) / 2,
    ];
    const path = findPath(start, "skills");
    expect(path[0]).toEqual(start);
    expect(path.at(-1)).toEqual(waypoints[7]);
  });
});
