"use client";
import React from "react";
import MainHeading from "../Wrapped/MainHeading";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import { UploadCloud } from "lucide-react";  // Changed icon for visual relevance

import MutedText from "../Wrapped/MutedText";

function FileUpload({ onFileSelect }: { onFileSelect: (file: File) => void }) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
<div className="w-screen min-h-screen flex justify-center items-center flex-col gap-8 text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-8">
      <div className="max-w-md p-6 rounded-lg shadow-lg bg-gray-900">
        <MainHeading className="text-4xl">
          Upload Your Instagram Data
        </MainHeading>
        <label htmlFor="file-upload" className="mt-4 inline-block">
          <Button onClick={() => inputRef.current?.click()} variant="ghost">
            <UploadCloud size={20} className="mr-2" />
            Choose File
          </Button>
        </label>
        <input
          type="file"
          accept=".zip,.json"
          id="file-upload"
          className="hidden"
          ref={inputRef}
          onChange={(e) => {
            if (e.target.files) {
              onFileSelect(e.target.files[0]);
            }
          }}
        />
      </div>
    </div>
  );
}

export default FileUpload;
