"use client";

import { useRouter } from "next/navigation";

export default function BackDrop() {
  const router = useRouter();
  return (
    <div
      className="fixed z-5 top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center"
      onClick={() => router.back()}
    />
  );
}
