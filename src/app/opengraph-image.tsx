import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0a0a0a",
          color: "#ededed",
          padding: "64px",
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 12 }}>
          Antonio Rodríguez‑Ynyesto
        </div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>Smart Contract Engineer</div>
        <div style={{ fontSize: 20, marginTop: 16, opacity: 0.8 }}>{SITE.description}</div>
      </div>
    ),
    { ...size },
  );
}
