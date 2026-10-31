export type ZoneId =
  "personal" | "education" | "organisation" | "achievement" | "skills";
export type Point = [number, number];

export const zones: {
  id: ZoneId;
  label: string;
  short: string;
  place: string;
  description: string;
  color: string;
  position: Point;
  node: number;
  number: string;
}[] = [
  {
    id: "personal",
    label: "Tentang saya",
    short: "Personal",
    place: "Rumah Wisam",
    description: "Kenalan dulu, yuk.",
    color: "#5484ab",
    position: [-4.7, 5.4],
    node: 1,
    number: "01",
  },
  {
    id: "education",
    label: "Pendidikan",
    short: "Pendidikan",
    place: "Kampus",
    description: "Tempat rasa ingin tahu tumbuh.",
    color: "#5c8b70",
    position: [-6.7, -1.7],
    node: 3,
    number: "02",
  },
  {
    id: "organisation",
    label: "Organisasi",
    short: "Organisasi",
    place: "Balai bersama",
    description: "Belajar, bertemu, berkolaborasi.",
    color: "#b77e4d",
    position: [6, 3.5],
    node: 9,
    number: "03",
  },
  {
    id: "achievement",
    label: "Pencapaian",
    short: "Pencapaian",
    place: "Taman prestasi",
    description: "Beberapa langkah yang berarti.",
    color: "#a98935",
    position: [-1.6, -6.4],
    node: 5,
    number: "04",
  },
  {
    id: "skills",
    label: "Skill & proyek",
    short: "Skill & proyek",
    place: "Studio ide",
    description: "Dari ide menjadi sesuatu yang nyata.",
    color: "#8876a6",
    position: [5.8, -3.7],
    node: 7,
    number: "05",
  },
];

export function isZoneId(value: string): value is ZoneId {
  return zones.some((zone) => zone.id === value);
}

export const getZone = (id: ZoneId) => zones.find((zone) => zone.id === id)!;
