import Image from "next/image";
import classes from "./ImageCarousel.module.css";

export default function ImageCarousel({ IMAGE, title }: { IMAGE: string; title: string }) {
  return (
    <div className={classes.outerBox}>
      <div className={classes.imageOuterBox}>
        <div className={classes.imageBox}>
          <Image
            src={IMAGE}
            alt={`${title} - image`}
            height={250}
            width={100}
            sizes="(max-width: 768px) 100vw, 450px"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
