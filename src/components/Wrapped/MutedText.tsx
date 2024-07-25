import React from "react";

function MutedText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-zinc-800 font-medium ${className} text-left mb-5`}
      suppressHydrationWarning
    >
      {children}
    </p>
  );
}

export default MutedText;
