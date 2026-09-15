import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background:
            "linear-gradient(135deg, #BA0A4A 0%, #E10B57 55%, #FF3C82 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#FFF8EC",
              color: "#BA0A4A",
              fontSize: 22,
              fontWeight: 700,
              padding: "8px 20px",
              borderRadius: 999,
              letterSpacing: 2,
            }}
          >
            TEGUCIGALPA, HONDURAS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 108,
            fontWeight: 900,
            lineHeight: 1.02,
            color: "#FFF8EC",
            letterSpacing: -2,
            textTransform: "uppercase",
          }}
        >
          <span>The burgers</span>
          <span>that smashed</span>
          <span>the internet.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 32,
            color: "#FFE3EE",
            fontWeight: 600,
          }}
        >
          PACOMERALGO · Padel Club Honduras, Piso 7
        </div>
      </div>
    ),
    { ...size }
  );
}
