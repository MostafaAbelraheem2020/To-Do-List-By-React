import React from "react";

function Footer() {
  return (
    <div
      style={{
        maxHeight: "40px !important",
        backgroundColor: "#357dc4",
        textAlign: "center",
        color: "white",
        fontSize: "12px",
        fontWeight: "bold",
        borderRadius: "2px",
        padding: "5px",
      }}
    >
      <p style={{ margin: "0" }}>
        <span style={{ fontSize: "16px", color: "#cddc39" }}>{`©    `}</span>
        Mo.Abdellraheem{"    "}
        <span
          style={{
            fontSize: "8px",
            color: "#cddc39",
            textDecoration: "underline",
          }}
        >
          under modification
        </span>
      </p>
    </div>
  );
}

export default Footer;
