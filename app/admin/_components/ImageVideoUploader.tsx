"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function MediaUploader() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isRequirementVideo, setIsRequirementVideo] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Validate file type (jpg, png, mp4, mkv)
      const validTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "video/mp4",
        "video/x-matroska", // MIME type for MKV
      ];

      if (!validTypes.includes(file.type)) {
        alert("Please select a valid image (JPG, PNG) or video (MP4, MKV) file.");
        return;
      }

      // Determine if the file is a video
      setIsRequirementVideo(file.type.startsWith("video/"));

      // Generate a temporary preview URL
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  // Trigger the hidden file input when the shadcn button is clicked
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Remove the media file
  const handleRemoveMedia = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl); // Clean up memory
    }
    setPreviewUrl(null);
    setIsRequirementVideo(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg w-75 md:w-sm text-card-foreground shadow-sm">
      {/* Hidden Native File Input accepting images and videos */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg, image/png, image/jpg, video/mp4, video/x-matroska, .mkv"
        className="hidden"
      />

      {/* Preview Section */}
      {previewUrl ? (
        <div className="relative w-full h-auto overflow-hidden border border-white bg-muted flex items-center justify-center">
          {isRequirementVideo ? (
            <video src={previewUrl} controls className="w-full h-full object-cover" />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
          )}
        </div>
      ) : (
        <div className="w-full aspect-square rounded-lg border-2 border-dashed flex items-center justify-center text-white/90 text-lg bg-zinc-700/60">
          No media selected
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 w-full">
        <Button type="button" onClick={handleButtonClick} className="flex-1">
          {previewUrl ? "Change Media" : "Select from Device"}
        </Button>

        {previewUrl && (
          <Button type="button" className="bg-red-500/90" onClick={handleRemoveMedia}>
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
