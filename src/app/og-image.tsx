import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "radial-gradient(circle at 20% 20%, #1e3a8a 0%, #0a1628 45%, #091221 100%)",
        color: "white",
        padding: "64px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontSize: "28px",
          color: "#93c5fd",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "9999px",
            backgroundColor: "#22d3ee",
            display: "flex",
          }}
        />
        Capital Analysis
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            fontSize: "72px",
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: "-1px",
            maxWidth: "980px",
          }}
        >
          La perspective de vos chiffres
        </div>
        <div
          style={{
            fontSize: "30px",
            lineHeight: 1.3,
            color: "#cbd5e1",
            maxWidth: "980px",
          }}
        >
          Ingénierie financière, solutions IT et accompagnement comptable au
          Niger et en Afrique de l&apos;Ouest.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "26px",
          color: "#94a3b8",
        }}
      >
        <div style={{ display: "flex" }}>capital-analysis.com</div>
        <div
          style={{
            display: "flex",
            border: "1px solid rgba(148, 163, 184, 0.4)",
            borderRadius: "9999px",
            padding: "8px 18px",
            color: "#e2e8f0",
            fontSize: "22px",
          }}
        >
          CAPEsys • Conseil • IT
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
