import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "20vh 24px", textAlign: "center" }}>
      <p style={{ color: "#737a6e", fontSize: 12, marginBottom: 15 }}>
        404 / DI LUAR PETA
      </p>
      <h1 style={{ fontSize: 38, letterSpacing: -1 }}>
        Sepertinya kamu tersesat.
      </h1>
      <p style={{ margin: "20px 0 30px", color: "#737a6e" }}>
        Mari kembali ke dunia kecil Wisam.
      </p>
      <Link
        href="/"
        style={{
          background: "#425d48",
          color: "#fffcef",
          padding: "13px 20px",
          borderRadius: 8,
        }}
      >
        Kembali ke pulau
      </Link>
    </div>
  );
}
