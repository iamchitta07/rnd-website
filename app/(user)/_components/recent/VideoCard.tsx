"use client";

import { useRef, useState } from "react";
import { MediaProps } from "@/types";
import classes from "./VideoCard.module.css";
import { Volume2, VolumeOff } from "lucide-react";

export default function VideoCard({ media }: { media: MediaProps }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const currentMutedState = videoRef.current.muted;
      videoRef.current.muted = !currentMutedState;
      setIsMuted(!currentMutedState);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  const toggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div
      className={classes.outerBox}
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      onClick={toggle}
    >
      <div className={classes.videoOuterBox}>
        <div className={classes.videoBox}>
          <video src={media.url} loop ref={videoRef} muted={isMuted} playsInline />
        </div>
      </div>
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute Video" : "Mute Video"}
        className={classes.muteBtn}
      >
        {isMuted ? <Volume2 className={classes.btn} /> : <VolumeOff className={classes.btn} />}
      </button>
    </div>
  );
}
