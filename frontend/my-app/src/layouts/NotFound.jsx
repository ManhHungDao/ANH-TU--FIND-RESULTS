// ===== src/pages/NotFound.jsx =====
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "64px", marginBottom: "16px" }}>😢 404</h1>
      <h2 style={{ marginBottom: "24px" }}>Trang bạn tìm không tồn tại</h2>
      <p style={{ color: "#666", marginBottom: "32px" }}>
        Có thể đường dẫn bị sai hoặc trang đã bị xóa.
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        ⬅️ Quay lại trang chủ
      </Link>
    </div>
  );
}
