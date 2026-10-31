import { getZone, type Point, type ZoneId } from "@/content/zones";

// All edges stay on the plaza's pedestrian ring, clear of the five buildings.
export const waypoints: Point[] = Array.from({ length: 10 }, (_, index) => {
  const angle = (index / 10) * Math.PI * 2;
  return [-Math.sin(angle) * 4, Math.cos(angle) * 4];
});

export const distance = (a: Point, b: Point) =>
  Math.hypot(a[0] - b[0], a[1] - b[1]);

export function findPath(start: Point, destination: ZoneId): Point[] {
  const target = getZone(destination).node;
  const nearest = waypoints.reduce(
    (best, point, index) =>
      distance(start, point) < distance(start, waypoints[best]) ? index : best,
    0,
  );
  const open = new Set([nearest]);
  const previous = new Map<number, number>();
  const costs = new Map<number, number>([[nearest, 0]]);
  while (open.size) {
    const current = [...open].reduce((a, b) =>
      costs.get(a)! + distance(waypoints[a], waypoints[target]) <
      costs.get(b)! + distance(waypoints[b], waypoints[target])
        ? a
        : b,
    );
    if (current === target) {
      const indices = [current];
      while (previous.has(indices[0]))
        indices.unshift(previous.get(indices[0])!);
      return [start, ...indices.map((index) => waypoints[index])];
    }
    open.delete(current);
    for (const next of [(current + 1) % 10, (current + 9) % 10]) {
      const cost =
        costs.get(current)! + distance(waypoints[current], waypoints[next]);
      if (cost < (costs.get(next) ?? Infinity)) {
        previous.set(next, current);
        costs.set(next, cost);
        open.add(next);
      }
    }
  }
  return [start];
}
