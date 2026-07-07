"use client";

import { useState } from "react";
import type { MediaProps } from "@/types";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./ImageCarousel.module.css";

export default function ImageCarousel({ IMAGES, title }: { IMAGES: MediaProps[]; title: string }) {
  const [curr, setCurr] = useState<number>(0);
  const prev = () => {
    setCurr((idx) => {
      return idx === 0 ? IMAGES.length - 1 : idx - 1;
    });
  };
  const next = () => {
    setCurr((idx) => {
      console.log("hello");
      return idx === IMAGES.length - 1 ? 0 : idx + 1;
    });
  };
  return (
    <div className={classes.outerBox}>
      <div className={classes.imageOuterBox}>
        <div className={classes.imageBox}>
          <Image
            src={IMAGES[curr].url}
            alt={`${title} - image ${curr + 1}`}
            height={250}
            width={100}
            sizes="(max-width: 768px) 100vw, 450px"
            priority={curr === 0}
          />
        </div>
      </div>

      {IMAGES.length > 1 && (
        <>
          <button
            type="button"
            className={classes.leftButton}
            onClick={prev}
            aria-label="Previous image"
          >
            <ChevronLeft className={classes.arrow} />
          </button>

          <button
            type="button"
            className={classes.rightButton}
            onClick={next}
            aria-label="Next image"
          >
            <ChevronRight className={classes.arrow} />
          </button>

          <div className={classes.bottomNav}>
            {IMAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurr(idx)}
                className={`${classes.bottomBtn} ${curr === idx ? classes.btnSelected : classes.btnNotSelected}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
