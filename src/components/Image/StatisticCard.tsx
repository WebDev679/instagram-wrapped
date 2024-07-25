import React from "react";

function StatisticCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div
      style={{
        background: "#ffffff22",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        width: "90%",
        maxWidth: "600px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        color: "#FFFFFF"
      }}
    >
      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>{title}</h2>
      <p style={{ fontSize: "24px", fontWeight: "lighter" }}>{value}</p>
    </div>
  );
}

export default StatisticCard;
