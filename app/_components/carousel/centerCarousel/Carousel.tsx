"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SplitText from "./SplitText";
interface CarouselItemProps {
  src: string;
  text: string;
}

interface CarouselProps {
  images: CarouselItemProps[];
  /** Autoplay interval in ms */
  interval?: number;
}
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const SLIDE_DURATION = 5000;
export default function Carousel({ images, interval = SLIDE_DURATION }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0); // forces the progress bar animation to restart
  // -1 = slide has never been active (don't render text yet); >=0 = animation key (remount to re-animate)
  const [slideAnimKeys, setSlideAnimKeys] = useState<number[]>(() => images.map(() => -1));
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = images.length;

  const activateSlide = useCallback((target: number) => {
    setCurrent(target);
    setProgressKey((k) => k + 1);
    if (target !== 0) {
      setSlideAnimKeys((prev) => {
        const updated = [...prev];
        updated[target] = updated[target] + 1;
        return updated;
      });
    }
  }, []);

  const goTo = useCallback(
    (index: number) => activateSlide((index + total) % total),
    [total, activateSlide],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay: advance every `interval` ms
  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setTimeout(() => {
      activateSlide((current + 1) % total);
    }, interval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, interval, total, activateSlide]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (total === 0) return null;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none">
      {/* Slides */}
      {images.map((e, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={e.src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {i === 0 ? (
            <span className="absolute top-80 left-1/2 -translate-x-1/2 lg:bottom-40 lg:translate-x-0 lg:left-20 uppercase text-3xl md:text-6xl lg:text-9xl text-white">
              {e.text}
            </span>
          ) : slideAnimKeys[i] >= 0 ? (
            <SplitText
              key={slideAnimKeys[i]}
              text={e.text}
              className="absolute top-80 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-40 lg:left-20  uppercase text-3xl md:text-6xl lg:text-9xl text-white"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          ) : null}
        </div>
      ))}

      {/* Left button */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 grid place-items-center
                   h-8 w-8 md:h-12 md:w-12 rounded-full bg-black/40 text-white backdrop-blur-sm
                   transition hover:bg-black/70 hover:scale-110 active:scale-95"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right button */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 grid place-items-center
                   h-8 w-8 md:h-12 md:w-12 rounded-full bg-black/40 text-white backdrop-blur-sm
                   transition hover:bg-black/70 hover:scale-110 active:scale-95"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Flipkart-style bottom progress navigator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1 w-10 overflow-hidden rounded-full bg-white/35 transition-all hover:bg-white/55"
          >
            {/* fully filled for already-seen slides */}
            {i < current && <span className="absolute inset-0 bg-white" />}
            {/* animated fill for the active slide */}
            {i === current && (
              <span
                key={progressKey}
                className="absolute inset-0 origin-left bg-white animate-[fillBar_5s_linear_forwards]"
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes fillBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
