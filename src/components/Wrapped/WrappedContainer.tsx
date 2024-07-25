import { Statistics } from "@/lib/Wrapped";
import React from "react";

export type WrappedSlideProps = {
  statistics: Statistics;
  isDemo: boolean;
};

function WrappedContainer({
  children,
  bg = "bg-newbg",
  text = "text-gray-900",
  button = true,
}: {
  children: React.ReactNode;
  bg?: string;
  text?: string;
  button?: boolean,
}) {
  return (
    <div
      className={`w-screen min-h-screen flex justify-center items-center flex-col gap-6 text-center ${bg} ${text} p-6`}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}

export default WrappedContainer;
