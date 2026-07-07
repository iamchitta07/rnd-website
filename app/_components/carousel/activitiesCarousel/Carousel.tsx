"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./VoyageSlider.module.css";

// ─── Utilities ────────────────────────────────────────────────
const wrap = (n: number, max: number) => (n + max) % max;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// ─── Types ────────────────────────────────────────────────────
// undefined = "hidden" (only relevant when total > 3 slides)
type SlidePosition = "current" | "next" | "previous" | undefined;

interface SlideData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

// ─── Slide data ────────────────────────────────────────────────
const SLIDES: SlideData[] = [
  {
    image: "/activities/one.webp",
    title: "Conjecture",
    subtitle: "NAB 401",
    description: "Day 1 of Aarohan, 2025",
  },
  {
    image: "/activities/two.webp",
    title: "Techmela",
    subtitle: "The Lords",
    description: "Project Shocase",
  },
  {
    image: "/activities/three.webp",
    title: "Techmela",
    subtitle: "Ribbon Cutting",
    description: "Official inauguration of Techmela 2025",
  },
  {
    image: "/activities/four.webp",
    title: "Director",
    subtitle: "Prof. Arvid Chobey",
    description: "Welcome address by the director",
  },
  {
    image: "/activities/five.webp",
    title: "Team Juniors",
    subtitle: "Together We",
    description: "Unity and collaboration",
  },
];

export default function VoyageSlider() {
  const total = SLIDES.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [zIndices, setZIndices] = useState<number[]>(
    Array.from({ length: total }, (_, i) => (i === 0 ? 20 : 10)),
  );

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const infoInnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Stable ref so keyboard/touch handlers never go stale
  const currentIndexRef = useRef(currentIndex);
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // ── Compute each slide's position ─────────────────────────
  // FIX: previously returned 'previous' for ALL non-current/next slides,
  // which broke layouts when total > 3. Now returns undefined for hidden slides.
  const getPos = (i: number): SlidePosition => {
    if (i === currentIndex) return "current";
    if (i === wrap(currentIndex + 1, total)) return "next";
    if (i === wrap(currentIndex - 1, total)) return "previous";
    return undefined;
  };

  const dataAttrs = (pos: SlidePosition) => ({
    "data-current": pos === "current" ? "" : undefined,
    "data-next": pos === "next" ? "" : undefined,
    "data-previous": pos === "previous" ? "" : undefined,
  });

  // ── Image pre-loading ─────────────────────────────────────
  useEffect(() => {
    let count = 0;
    let cur = 0;
    let target = 0;
    let rafId: number;
    let stopped = false;

    SLIDES.forEach(({ image }) => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        count++;
        target = count / SLIDES.length;
      };
      img.src = image;
    });

    const tick = () => {
      if (stopped) return;
      cur = lerp(cur, target, 0.06);
      if (Math.round(cur * 100) >= 100) {
        setIsLoaded(true);
        return;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => {
      stopped = true;
      cancelAnimationFrame(rafId);
    };
  }, []);

  // ── 3D tilt effect (per-slide, lerp-smoothed RAF) ──────────
  useEffect(() => {
    if (!isLoaded) return;

    const cleanups: Array<() => void> = [];

    SLIDES.forEach((_, i) => {
      const slide = slideRefs.current[i];
      const inner = innerRefs.current[i];
      const infoInner = infoInnerRefs.current[i];
      if (!slide || !inner || !infoInner) return;

      const targets = [inner, infoInner];
      let lerpAmt = 0.06;
      const rot = { cx: 0, cy: 0, tx: 0, ty: 0 };
      const bg = { cx: 0, cy: 0, tx: 0, ty: 0 };
      let rafId: number;

      const tick = () => {
        rot.cx = lerp(rot.cx, rot.tx, lerpAmt);
        rot.cy = lerp(rot.cy, rot.ty, lerpAmt);
        bg.cx = lerp(bg.cx, bg.tx, lerpAmt);
        bg.cy = lerp(bg.cy, bg.ty, lerpAmt);
        for (const el of targets) {
          el.style.setProperty("--rotX", `${rot.cy.toFixed(2)}deg`);
          el.style.setProperty("--rotY", `${rot.cx.toFixed(2)}deg`);
          el.style.setProperty("--bgPosX", `${bg.cx.toFixed(2)}%`);
          el.style.setProperty("--bgPosY", `${bg.cy.toFixed(2)}%`);
        }
        rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);

      const onMouseMove = ({ offsetX, offsetY }: MouseEvent) => {
        lerpAmt = 0.1;
        for (const el of targets) {
          const ox = (offsetX - el.clientWidth * 0.5) / (Math.PI * 3);
          const oy = -(offsetY - el.clientHeight * 0.5) / (Math.PI * 4);
          rot.tx = ox;
          rot.ty = oy;
          bg.tx = -ox * 0.3;
          bg.ty = oy * 0.3;
        }
      };

      const onMouseLeave = () => {
        lerpAmt = 0.06;
        rot.tx = rot.ty = bg.tx = bg.ty = 0;
      };

      slide.addEventListener("mousemove", onMouseMove);
      slide.addEventListener("mouseleave", onMouseLeave);
      cleanups.push(() => {
        cancelAnimationFrame(rafId);
        slide.removeEventListener("mousemove", onMouseMove);
        slide.removeEventListener("mouseleave", onMouseLeave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [isLoaded]);

  // ── Navigation ────────────────────────────────────────────
  // useCallback + currentIndexRef → stable function, no stale closures
  const navigate = useCallback(
    (direction: 1 | -1) => {
      const curr = currentIndexRef.current;
      const newCur = wrap(curr + direction, total);
      const newNext = wrap(newCur + 1, total);
      const newPrev = wrap(newCur - 1, total);

      const z = Array<number>(total).fill(10);
      z[newCur] = 20;
      // Exiting slide (old current) gets z=30 → layers on top during CSS transition
      z[direction === 1 ? newPrev : newNext] = 18;

      setZIndices(z);
      setCurrentIndex(newCur);
    },
    [total],
  ); // total is constant; currentIndex read from ref, not closure

  // ── Keyboard navigation ───────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  // ── Touch / swipe support ─────────────────────────────────
  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
  };

  // ── Render ────────────────────────────────────────────────
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 md:mt-20 md:-mb-10">
        Our Activities
      </h1>
      <div className={styles.container} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className={styles.slider}>
          {/* Prev */}
          <button
            className={styles.sliderBtn}
            onClick={() => navigate(-1)}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className={styles.slidesWrapper}>
            {/* Slide images */}
            <div className={styles.slides}>
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    slideRefs.current[i] = el;
                  }}
                  className={styles.slide}
                  style={{ zIndex: zIndices[i] }}
                  {...dataAttrs(getPos(i))}
                >
                  <div
                    ref={(el) => {
                      innerRefs.current[i] = el;
                    }}
                    className={styles.slideInner}
                  >
                    <div className={styles.slideImageWrapper}>
                      {/* FIX: width/height match 2:3 aspect ratio; sizes hint for next/image optimisation */}
                      <Image
                        width={300}
                        height={450}
                        className={styles.slideImage}
                        src={slide.image}
                        alt={slide.title}
                        draggable={false}
                        sizes="(max-width: 640px) 65vw, (max-width: 1024px) 40vw, 30vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide text infos */}
            <div className={styles.slidesInfos}>
              {SLIDES.map((slide, i) => (
                <div key={i} className={styles.slideInfo} {...dataAttrs(getPos(i))}>
                  <div
                    ref={(el) => {
                      infoInnerRefs.current[i] = el;
                    }}
                    className={styles.slideInfoInner}
                  >
                    <div className={styles.slideInfoTextWrapper}>
                      <div data-title="" className={styles.slideInfoText}>
                        <span>{slide.title}</span>
                      </div>
                      <div data-subtitle="" className={styles.slideInfoText}>
                        <span>{slide.subtitle}</span>
                      </div>
                      <div data-description="" className={styles.slideInfoText}>
                        <span>{slide.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button className={styles.sliderBtn} onClick={() => navigate(1)} aria-label="Next slide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
