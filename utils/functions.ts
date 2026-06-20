import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 768px matches Tailwind's 'md' breakpoint default
    const media = window.matchMedia("(max-width: 767px)");

    const listener = () => setIsMobile(media.matches);
    listener(); // Initial check

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
}
