import { ImageResponse } from "next/og";

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
          background: "#0b0d12",
          color: "#e6e9ee",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: 64,
            height: 6,
            background: "#2dd4bf",
            marginBottom: 40,
            borderRadius: 3,
          }}
        />
        <div style={{ fontSize: 56, fontWeight: 700, marginBottom: 16 }}>
          Antonio Rodríguez‑Ynyesto
        </div>
        <div style={{ fontSize: 34, color: "#2dd4bf", marginBottom: 28 }}>
          Web3 Software Engineer
        </div>
        <div style={{ fontSize: 22, color: "#9aa4b2", maxWidth: 900, lineHeight: 1.5 }}>
          Building DeFi products end-to-end, from Solidity smart contracts and Foundry tests to
          production back-end systems.
        </div>
      </div>
    ),
    { ...size },
  );
}
