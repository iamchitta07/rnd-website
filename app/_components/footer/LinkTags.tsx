import Image from "next/image";
import Link from "next/link";
import { type ContackDetail } from "@/types";

const LinkTags = ({ link, image, title, text }: ContackDetail) => {
  return (
    <Link href={`${link}`} className="flex gap-2 items-center mb-1">
      <span className="hidden md:block">
        <Image width={20} src={image} alt={title} style={{ color: "zinc-500" }} preload />
      </span>
      <p className="text-md md:text-sm lg:text-xl text-zinc-500 transition hover:text-white/75">
        {text}
      </p>
    </Link>
  );
};

export default LinkTags;
