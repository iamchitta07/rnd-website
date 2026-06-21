import Link from "next/link";
import Image from "next/image";
import type { SocialLink } from "@/types";

const SocialLink = ({ title, image, link, sz }: SocialLink & { sz: number }) => {
  return (
    <div className="p-2 bg-white rounded-full">
      <Link href={link} target="_blank">
        <Image height={sz} src={image} alt={title} preload />
      </Link>
    </div>
  );
};

export default SocialLink;
