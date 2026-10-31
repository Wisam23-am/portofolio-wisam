import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function portraitDataUrl() {
  const photo = await readFile(
    join(process.cwd(), "public", "images", "wisam-foto.jpg"),
  );
  return `data:image/jpeg;base64,${photo.toString("base64")}`;
}
