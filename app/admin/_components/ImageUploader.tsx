"use client";

import React, { useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

export default function ImageUploader({ imageUrl }: { imageUrl?: string | StaticImageData | undefined }) {
  const [previewUrl, setPreviewUrl] = useState<string | undefined | StaticImageData>(imageUrl);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Validate file type (jpg or png)

      const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

      if (!validTypes.includes(file.type)) {
        alert("Please select a valid image file (JP/PNG or WEBP)");

        return;
      }

      // Generate a temporary preview URL

      const objectUrl = URL.createObjectURL(file);

      setPreviewUrl(objectUrl);
    }
  };

  // Trigger the hidden file input when the shadcn button is clicked

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Remove the image

  const handleRemoveImage = () => {
    setPreviewUrl(undefined);

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg w-75 md:w-xl xl:w-2xl text-card-foreground shadow-sm">
      <input
        type="file"
        name="image"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg, image/png, image/jpg, image/webp"
        className="hidden"
      />

      {previewUrl ? (
        <div className="relative w-full h-auto overflow-hidden border border-white bg-muted flex items-center justify-center">
          <Image
            src={previewUrl}
            alt="Preview"
            width={800} // 1. Set this to the maximum width the image will ever be
            height={450} // 2. Set the original aspect ratio height (Next.js needs this as a baseline)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="w-full aspect-square rounded-lg border-2 border-dashed flex items-center justify-center text-white/90 text-lg bg-zinc-700/60">
          No image selected
        </div>
      )}

      {/* Action Buttons */}

      <div className="flex gap-2 w-full ">
        <Button
          type="button"
          onClick={handleButtonClick}
          className="flex-1 py-4 md:py-5 text-md md:text-lg"
        >
          {previewUrl ? "Change Image" : "Select from Device"}
        </Button>

        {previewUrl && (
          <Button
            type="button"
            className="bg-red-500/90 py-4 md:py-5 text-md md:text-lg"
            onClick={handleRemoveImage}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
