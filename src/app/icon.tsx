/* eslint-disable @next/next/no-img-element -- ImageResponse requires native image markup. */
import { ImageResponse } from "next/og";
import { portraitDataUrl } from "@/lib/portrait";

export const size = { width: 128, height: 128 };
export const contentType = "image/png";

export default async function Icon() {
  const photo = await portraitDataUrl();
  return new ImageResponse(
    <img
      src={photo}
      alt=""
      width={128}
      height={128}
      style={{
        objectFit: "cover",
        objectPosition: "50% 20%",
        borderRadius: 64,
      }}
    />,
    size,
  );
}
