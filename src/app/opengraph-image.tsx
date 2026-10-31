/* eslint-disable @next/next/no-img-element -- ImageResponse requires native image markup. */
import { ImageResponse } from "next/og";
import { portraitDataUrl } from "@/lib/portrait";

export const alt = "Wisam — Dunia Kecil, Cerita Besar. Web & Mobile Developer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await portraitDataUrl();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f7f7ef",
        padding: "65px 75px",
        flexDirection: "column",
        color: "#303d35",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, letterSpacing: -1 }}>
        wisam.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 80,
          fontSize: 82,
          letterSpacing: -4,
        }}
      >
        Dunia kecil.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 82,
          letterSpacing: -4,
          color: "#768d69",
        }}
      >
        Cerita besar.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 45,
          fontSize: 21,
          color: "#737a6e",
        }}
      >
        Aqila Wisam Madani Ma’murri · Web & Mobile Developer
      </div>
      <img
        src={photo}
        alt="Foto Aqila Wisam Madani Ma’murri"
        width={240}
        height={240}
        style={{
          position: "absolute",
          right: 85,
          top: 160,
          width: 240,
          height: 240,
          borderRadius: 120,
          objectFit: "cover",
          objectPosition: "50% 20%",
        }}
      />
    </div>,
    size,
  );
}
