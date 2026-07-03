"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

export function DateTimePicker({
  defaultDate
}: {
  defaultDate?: Date;
}) {
  const [date, setDate] = useState<Date | undefined>(defaultDate);
  const hh_mm =
    defaultDate !== undefined
      ? defaultDate.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      : "12:00";
  const [time, setTime] = useState<string>(hh_mm);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    const [hours, minutes] = time.split(":");
    const updatedDate = new Date(selectedDate);
    updatedDate.setHours(parseInt(hours), parseInt(minutes));
    setDate(updatedDate);
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const timeVal = e.target.value;
    setTime(timeVal);
    if (date) {
      const [hours, minutes] = timeVal.split(":");
      const updatedDate = new Date(date);
      updatedDate.setHours(parseInt(hours), parseInt(minutes));
      setDate(updatedDate);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-75 md:w-xl xl:w-2xl text-md md:text-xl lg:text-2xl">
      <label className="text-md md:text-lg text-white">Select Date and Time</label>
      <input type="hidden" name="date" value={date?.toISOString() || ""} />
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "bg-transparent rounded-sm h-10 w-full justify-start text-left font-normal text-white hover:bg-transparent hover:text-white",
            )}
          >
            <CalendarIcon className="w-full h-10 text-xs md:text-lg" />
            {date ? format(date, "PPP p") : <span>Pick a date & time</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex flex-col" align="start">
          <Calendar mode="single" selected={date} onSelect={handleDateSelect} className="dark" />
          <div className="p-3 border-t border-border flex items-center justify-between gap-4">
            <span className="text-lg font-semibold tracking-wider text-black/80">Time</span>
            <Input type="time" value={time} onChange={handleTimeChange} className="w-30 h-9" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
