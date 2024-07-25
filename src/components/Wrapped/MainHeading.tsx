import React from "react";

function MainHeading({
  children,
  component = "h1",
  className = "",
}: {
  children: React.ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
  className?: string;
}) {
  const Component = component;
  return (
    <Component
      className={`font-playfair font-bold text-3xl leading-tight mb-5 tracking-tight ${className}`}
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {children}
    </Component>
  );
}

export default MainHeading;
