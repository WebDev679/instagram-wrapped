import React from "react";

function SimpleFooter() {
  return (
    <footer
      style={{
        textAlign: "center",
        width: "100%",
        padding: "20px",
        position: "absolute",
        bottom: "0",
        color: "#FFFFFF",
        fontSize: "18px",
      }}
    >
       Discover more at
      <a href="https://instagram-wrapped.vercel.app/" style={{ color: "#ADF", marginLeft: "5px" }}>
        instagram-wrapped.vercel.app
      </a>
    </footer>
  );
}

export default SimpleFooter;
 