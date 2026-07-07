"use client";
import logo from "@/public/logos/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenuBasic } from "./DropDownMenu";
import { useState, useEffect } from "react";
import type { NavLink } from "@/types";
import { Logout } from "./Logout";
import { usePathname } from "next/navigation";

const Header = ({ LINKS }: { LINKS: NavLink[] }) => {
  const [bgOpacity, setBgOpacity] = useState(0);
  const pathname = usePathname();

  const highlightLink = (link: string, pathname: string) => {
    if (pathname === "/" && link === "/") return "text-white";
    if (pathname === "/admin" && link === "/admin") return "text-white";
    if (link === "/" || link === "/admin") return "text-zinc-500";
    if (pathname.includes(link)) return "text-white";
    return "text-zinc-500";
  };

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
        <div className="flex h-14 lg:h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12 mt-1">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src={logo} className="h-9 md:h-10 lg:h-12 w-auto" alt="logo" loading="eager" />
            </Link>
          </div>

          {pathname !== "/admin/sign-up" && pathname !== "/admin/sign-in" ? (
            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-5 lg:gap-10 text-md lg:text-2xl">
                  {LINKS.map((val) => (
                    <li key={val.title}>
                      {val.title !== "logout" ? (
                        <Link
                          className={`transition hover:text-white ${highlightLink(val.link, pathname)}`}
                          href={val.link}
                        >
                          {" "}
                          {val.label}{" "}
                        </Link>
                      ) : (
                        <Logout />
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="block md:hidden">
                <DropdownMenuBasic LINKS={LINKS} />
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl hidden lg:block font-bold text-white">
                Research & Development Cell | CCA
              </h1>
              <h1 className="text-2xl hidden md:block lg:hidden font-bold text-white">
                RnD Cell | CCA
              </h1>
              <h1 className="text-2xl md:hidden font-bold text-white">CCA RnD</h1>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
