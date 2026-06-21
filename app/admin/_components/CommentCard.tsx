"use client";

import { MessageProps } from "@/types";
import { formatDateHr, useIsMobile } from "@/utils/functions";
import { CircleUser } from "lucide-react";
import Link from "next/link";

const CommentCard = ({ id, name, date, mail, read }: MessageProps) => {
  const isMobile = useIsMobile();
  const iconW = isMobile ? 35 : 60;

  const dateTime = formatDateHr(date);
  return (
    <Link
      href={"/admin/messages/" + id.toString()}
      className="w-75 md:w-xl h-18 md:h-25 rounded-lg md:rounded-xl border border-black bg-slate-200 flex gap-3 items-center pl-3 md:pl-5 hover:bg-slate-300 duration-300 relative"
    >
      <div
        className="absolute h-3 w-3 md:h-4 md:w-4 rounded-full right-1 top-1 md:right-1.5 md:top-1.5"
        style={{ backgroundColor: read ? "green" : "red" }}
      />
      <CircleUser size={iconW} />
      <div className="w-full">
        <div className="w-full flex justify-between pr-5">
          <h1 className="text-md md:text-2xl">{name}</h1>
          <h1 className="text-[9px] md:text-sm italic">On {dateTime}</h1>
        </div>
        <h1 className="text-xs md:text-md italic">{mail}</h1>
      </div>
    </Link>
  );
};

export default CommentCard;
