import Link from "next/link";
import { type ContackDetail } from "@/types";
import { Mail, Phone } from "lucide-react";

const LinkTags = ({ link, image, title, text }: ContackDetail) => {
  return (
    <Link href={`${link}`} target="_blank" className="flex gap-2 items-center mb-1 text-white md:text-zinc-500 transition hover:text-white/75">
      <span className="hidden md:block">
        {title!=="email" ? <Phone size={20} strokeWidth={1.5} /> : <Mail size={20} strokeWidth={1.5} />}
      </span>
      <p className="text-md md:text-sm lg:text-xl">
        {text}
      </p>
    </Link>
  );
};

export default LinkTags;
