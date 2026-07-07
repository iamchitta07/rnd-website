"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
} from "react-icons/fa";

interface MemberProps {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  poster_image: string | null;
  insta: string | null;
  github: string | null;
  facebook: string | null;
  linkedin: string | null;
  position: string;
  year: number;
}

export default function MemberCard({
  name,
  email,
  phone,
  poster_image,
  insta,
  github,
  facebook,
  linkedin,
  position,
}: MemberProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bgAltRef = useRef<HTMLDivElement>(null);

  // Safely set defaults inside useGSAP lifecycle context
  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(".divider", { y: -18, scaleX: 1, opacity: 1, duration: 0.35, ease: "power2.out" });
    gsap.to(".name-pos", { y: -40, duration: 0.4, ease: "power2.out" });
    gsap.to(bgRef.current, { opacity: 0, duration: 0.1, ease: "power2.inOut" });
    gsap.to(bgAltRef.current, { opacity: 100, duration: 0.2, ease: "power4.inOut" });
    gsap.to(socialsRef.current, {
      y: -10,
      opacity: 1,
      duration: 0.4,
      delay: 0.05,
      ease: "back.out(1.2)",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(".divider", { y: -18, scaleX: 0, opacity: 0, duration: 0.15, ease: "power2.inOut" });
    gsap.to(".name-pos", { y: 0, duration: 0.4, ease: "power2.out" });
    gsap.to(bgRef.current, { opacity: 1, duration: 0.1, ease: "power2.inOut" });
    gsap.to(bgAltRef.current, { opacity: 0, duration: 0.3, ease: "power4.inOut" });
    gsap.to(socialsRef.current, { y: 20, opacity: 0, duration: 0.35, ease: "back.out(1.2)" });
  });

  const socialLinks = [
    { url: insta, icon: <FaInstagram className="size-3 md:size-4" /> },
    { url: facebook, icon: <FaFacebookF className="size-3 md:size-4" /> },
    { url: linkedin, icon: <FaLinkedinIn className="size-3 md:size-4" /> },
    { url: email ? `mailto:${email}` : null, icon: <FaEnvelope className="size-3 md:size-4" /> },
    { url: phone ? `tel:${phone}` : null, icon: <FaPhoneAlt className="size-3 md:size-4" /> },
    { url: github, icon: <FaGithub className="size-3 md:size-4" /> },
  ].filter((item) => item.url);

  return (
    <div
      ref={containerRef}
      className="relative w-32 h-48 md:w-45 md:h-66 bg-white rounded-md md:rounded-xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer flex flex-col justify-end"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={poster_image || "/placeholder-avatar.jpg"}
          fill
          alt={name}
          className="object-cover h-full w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          ref={bgRef}
          className="absolute inset-0 bg-linear-to-t from-black/50 via-black/5 to-transparent"
        />
        <div
          ref={bgAltRef}
          className="absolute opacity-100 lg:opacity-0 inset-0 size-20 rounded-xl h-full w-full bg-radial-[at_50%_30%] from-black/0 to-black/60 from-10% to-80%"
        />
      </div>

      <div className="relative w-full text-center flex flex-col justify-end">
        <div className="absolute name-pos w-full bottom-1 text-center mb-6 md:mb-8 lg:mb-0">
          <h3 className="text-xs md:text-md font-semibold leading-1 md:leading-3 text-white">
            {name}
          </h3>
          <p className="text-[9px] md:text-xs font-medium text-white/60">{position}</p>
        </div>
        <div className="w-26 md:w-38 mx-auto h-px bg-white mt-2 divider opacity-100 lg:opacity-0 mb-1 md:mb-1.5 lg:mb-0" />
        <div
          ref={socialsRef}
          className="flex items-center justify-center gap-1 md:gap-2 opacity-100 lg:opacity-0"
        >
          {socialLinks.map((link, idx) => {
            if (!link.url) return null;
            return (
              <a
                key={idx}
                href={link.url!}
                target="_blank"
                rel="noopener noreferrer"
                className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-xs bg-white text-neutral-800 text-sm hover:bg-neutral-900 hover:text-white transition-colors duration-200 mb-1.5 md:mb-2 lg:mb-0"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
