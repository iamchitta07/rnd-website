"use client";

import { useRef, useState } from "react";

interface VideoCardProps {
  src: string;
  poster?: string;
}

export default function VideoCard({ src, poster }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      onClick={handleVideoClick}
      className="relative w-full h-full aspect-9/16 bg-black rounded-md overflow-hidden shadow-xl cursor-pointer group flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        playsInline
        className="w-full h-full object-center"
      />

      {/* Play Overlay Button (Visible only when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
          <div className="bg-white/20 backdrop-blur-md p-2 md:p-4 rounded-full border border-white/30 transform transition-transform group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 md:w-8 md:h-8 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Optional: Brief Pause overlay indicator when playing and hovering */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 transition-opacity pointer-events-none">
          <div className="bg-white/20 backdrop-blur-md p-2 md:p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 md:w-8 md:h-8 text-white"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
