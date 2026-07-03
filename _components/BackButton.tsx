"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className="hidden md:block absolute left-5 lg:left-20">
      <Button
        variant="secondary"
        onClick={() => router.back()}
        className="text-md lg:text-xl pl-0 lg:pl-1 pr-2 lg:pr-3 py-1 lg:py-5 flex gap-0 rounded-full"
      >
        <ChevronLeft className="size-6 lg:size-8" />
        Back
      </Button>
    </div>
  );
}
