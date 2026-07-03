"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { MediaProps } from "@/types";

// Local state item — wraps MediaProps with the actual File (for upload) and object URL (for preview)
interface MediaItem extends MediaProps {
  file?: File;
}

const VALID_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
const VALID_VIDEO_TYPES = ["video/mp4", "video/webm", "video/ogg"];

export default function MediaUploader({
  initialMedia,
  onChange,
}: {
  initialMedia?: MediaProps[];
  onChange?: (media: MediaProps[]) => void;
}) {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(initialMedia ?? []);
  const [activeIndex, setActiveIndex] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasVideo = mediaItems.some((m) => m.type === "VIDEO");
  const hasImages = mediaItems.length > 0 && !hasVideo;

  const emitChange = (items: MediaItem[]) => {
    onChange?.(items.map(({ id, url, type }) => ({ id, url, type })));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    const isVideoBatch = fileArray.some((f) => VALID_VIDEO_TYPES.includes(f.type));
    const isImageBatch = fileArray.every((f) => VALID_IMAGE_TYPES.includes(f.type));

    // Rule: video is always solo — one video, nothing else
    if (isVideoBatch) {
      if (fileArray.length > 1) {
        alert("You can only upload a single video, not multiple.");
        return;
      }
      const file = fileArray[0];
      if (!VALID_VIDEO_TYPES.includes(file.type)) {
        alert("Please select a valid video file (MP4, WEBM, or OGG).");
        return;
      }
      const newItem: MediaItem = {
        id: Date.now(),
        url: URL.createObjectURL(file),
        type: "VIDEO",
        file,
      };
      setMediaItems([newItem]);
      setActiveIndex(0);
      emitChange([newItem]);
      return;
    }

    // Image batch
    if (!isImageBatch) {
      alert("Please select valid image files (JPG, PNG, or WEBP) or a single video.");
      return;
    }

    if (hasVideo) {
      alert("Remove the current video before adding images.");
      return;
    }

    const newItems: MediaItem[] = fileArray.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      type: "IMAGE",
      file,
    }));

    const updated = [...mediaItems, ...newItems];
    setMediaItems(updated);
    setActiveIndex(mediaItems.length); // jump to first newly added
    emitChange(updated);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleButtonClick = () => fileInputRef.current?.click();

  const handleRemoveActive = () => {
    const updated = mediaItems.filter((_, i) => i !== activeIndex);
    setMediaItems(updated);
    setActiveIndex((prev) => Math.max(0, Math.min(prev, updated.length - 1)));
    emitChange(updated);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemoveAll = () => {
    setMediaItems([]);
    setActiveIndex(0);
    emitChange([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const goPrev = () => setActiveIndex((prev) => (prev === 0 ? mediaItems.length - 1 : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev === mediaItems.length - 1 ? 0 : prev + 1));

  const active = mediaItems[activeIndex];

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg w-75 md:w-xl xl:w-2xl text-card-foreground shadow-sm">
      <input
        type="file"
        name="media"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg, image/png, image/jpg, image/webp, video/mp4, video/webm, video/ogg"
        multiple={!hasVideo}
        className="hidden"
      />

      {active ? (
        <div className="relative w-full aspect-video overflow-hidden border border-white bg-muted flex items-center justify-center">
          {active.type === "VIDEO" ? (
            <video src={active.url} controls className="w-full h-full object-contain" />
          ) : (
            <Image
              src={active.url}
              alt={`Preview ${activeIndex + 1}`}
              width={800}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="w-full h-full object-contain"
            />
          )}

          {/* Remove current item */}
          <button
            type="button"
            onClick={handleRemoveActive}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
          >
            <X size={18} />
          </button>

          {/* Carousel arrows — only when multiple images */}
          {mediaItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1"
              >
                <ChevronRight size={20} />
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                {activeIndex + 1} / {mediaItems.length}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="w-full aspect-square rounded-lg border-2 border-dashed flex items-center justify-center text-white/90 text-lg bg-zinc-700/60">
          No media selected
        </div>
      )}

      {/* Thumbnails strip — only for images, more than one */}
      {hasImages && mediaItems.length > 1 && (
        <div className="flex gap-2 w-full overflow-x-auto pb-1">
          {mediaItems.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`relative shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                i === activeIndex ? "border-white" : "border-transparent opacity-70"
              }`}
            >
              <Image src={item.url} alt={`Thumb ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 w-full">
        <Button
          type="button"
          onClick={handleButtonClick}
          className="flex-1 py-4 md:py-5 text-md md:text-lg"
        >
          {mediaItems.length > 0 ? "Add More / Change" : "Select from Device"}
        </Button>

        {mediaItems.length > 0 && (
          <Button
            type="button"
            className="bg-red-500/90 py-4 md:py-5 text-md md:text-lg"
            onClick={handleRemoveAll}
          >
            Remove All
          </Button>
        )}
      </div>
    </div>
  );
}
