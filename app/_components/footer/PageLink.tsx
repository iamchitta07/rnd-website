import Image from "next/image";
import Link from "next/link";
import rightIcon from "@/public/logos/right.svg";
import type { NavLink } from "@/types";

const PageLink = ({ link, title, label }: NavLink) => {
  return (
    <Link href={link} className="flex gap-2 items-center mb-1">
      <span className="hidden md:block">
        <Image height={15} src={rightIcon} alt={title} className="text-zinc-500" preload />
      </span>
      <p className="text-zinc-500 transition hover:text-white/75 text-md md:text-sm lg:text-xl">
        {label}
      </p>
    </Link>
  );
};

export default PageLink;
