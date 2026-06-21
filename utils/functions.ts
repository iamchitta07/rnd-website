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

export function formatMyDate(date: Date) {
  // Extract date components
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  // Extract time components
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Determine am/pm and convert to 12-hour format
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'
  const hh = String(hours).padStart(2, "0");

  return `${hh}:${minutes} ${ampm}, ${dd}.${mm}.${yyyy}`;
}
