import Image from "next/image";
import Link from "next/link";
import rightIcon from "@/public/logos/right.svg";
import type { NavLink } from "@/types";
import { ChevronRight } from "lucide-react";

const PageLink = ({ link, title, label }: NavLink) => {
  return (
    <Link href={link} className="flex gap-2 items-center mb-1 text-white md:text-zinc-500 transition hover:text-white/75">
      <span className="hidden md:block">
        <ChevronRight  size={15} strokeWidth={1.5} />
      </span>
      <p className="text-md md:text-sm lg:text-xl">
        {label}
      </p>
    </Link>
  );
};

export default PageLink;
