"use client";

import Link from "next/link";
import Image from "next/image";
import { DropdownMenuBasic } from "./DropDownMenu";
import { useState, useEffect } from "react";

const Header = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setBgOpacity(Math.min(window.scrollY / window.innerHeight, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-150"
      style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }}
    >
      <div className="w-full px-5 lg:px-20">
        <div className="flex h-12 lg:h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src="/logos/logo.svg" width={26} height={51} alt="logo" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-10 text-xl lg:text-2xl">
                <li>
                  <Link className="text-zinc-300 transition hover:text-white" href="/">
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-300 transition hover:text-white" href="/events">
                    {" "}
                    Events{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-300 transition hover:text-white" href="/blogs">
                    {" "}
                    Blogs{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-300 transition hover:text-white" href="/projects">
                    {" "}
                    Our Projects{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-300 transition hover:text-white" href="/team">
                    {" "}
                    Our Team{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-300 transition hover:text-white" href="/join-us">
                    {" "}
                    Join Us{" "}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="block md:hidden">
              <DropdownMenuBasic />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
