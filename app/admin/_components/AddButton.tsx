"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui setup
import { redirect } from "next/navigation";

export default function StickyAddButton({ dir }: { dir: string }) {
  const handleAddClick = () => {
    // Add your click logic here (e.g., open a modal, redirect)
    redirect(`/admin/${dir}`);
  };

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-40 w-24">
      <div className="sticky top-[calc(100vh-5rem)] mb-0 flex justify-center">
        <Button
          type="button"
          onClick={handleAddClick}
          size="icon"
          className="pointer-events-auto h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95"
          aria-label="Add item"
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
