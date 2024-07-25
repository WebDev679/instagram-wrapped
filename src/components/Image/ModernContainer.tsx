import React from "react";

function ModernContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)",
        color: "#ffffff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export default ModernContainer;
