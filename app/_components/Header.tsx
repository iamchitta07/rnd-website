import Link from "next/link";
import Image from "next/image";
import { DropdownMenuBasic } from "./DropDownMenu";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="w-full px-4 sm:px-12 lg:px-30">
        <div className="flex h-12 lg:h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image src="/logo.png" width={26} height={51} alt="logo" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-10 text-2xl">
                <li>
                  <Link className="text-zinc-500 transition hover:text-white/75" href="/">
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-500 transition hover:text-white/75" href="/events">
                    {" "}
                    Events{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-500 transition hover:text-white/75" href="/blogs">
                    {" "}
                    Blogs{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-500 transition hover:text-white/75" href="/projects">
                    {" "}
                    Our Projects{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-500 transition hover:text-white/75" href="/team">
                    {" "}
                    Our Team{" "}
                  </Link>
                </li>

                <li>
                  <Link className="text-zinc-500 transition hover:text-white/75" href="/join-us">
                    {" "}
                    Join Us{" "}
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="block lg:hidden">
              <DropdownMenuBasic />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
