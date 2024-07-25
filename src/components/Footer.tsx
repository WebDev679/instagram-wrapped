import Link from "next/link";
import React from "react";
import MutedText from "./Wrapped/MutedText";

function Footer() {
  return (
    <div>
      <a
        href="https://arnavchaudhry.com"
        target="_blank"
        rel="noreferrer"
        className="text-zinc-800 font-medium mt-12"
      >
        Made by <span className="underline">Arnav Chaudhry and Angad Chaudhry</span>
        <br />
      </a>
    </div>
  );
}

export default Footer;
