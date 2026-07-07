import LinkTags from "./LinkTags";
import { contactDetails, navLinks, socialLinks } from "@/utils/index";
import SocialLink from "./SocialLink";
import PageLink from "./PageLink";

const Footer = () => {
  return (
    <footer className="w-full px-5 lg:px-20 pt-5 bg-black flex flex-col items-center">
      <div className="w-full hidden md:block">
        <div className="w-full flex">
          <nav className="w-1/3">
            <p className="font-semibold text-xl lg:text-2xl uppercase mb-3 text-zinc-100">
              Contact Us On
            </p>
            {contactDetails.map((contact, idx) => (
              <LinkTags key={idx} {...contact} />
            ))}
          </nav>
          <nav className="flex flex-col items-center w-1/3">
            <p className="font-semibold text-zinc-100 text-xl lg:text-2xl uppercase mb-3">
              Follow us on
            </p>
            <div className="flex gap-5">
              {socialLinks.map((links, idx) => (
                <SocialLink key={idx} {...links} sz={25} />
              ))}
            </div>
          </nav>
          <nav className="w-1/3 flex justify-end">
            <div>
              <p className="font-semibold text-zinc-100 text-xl lg:text-2xl uppercase mb-3">
                Useful links
              </p>
              {navLinks.map((navLink, idx) => (
                <PageLink key={idx} {...navLink} />
              ))}
            </div>
          </nav>
        </div>
      </div>

      <div className="md:hidden w-full items-start">
        <nav className="flex flex-col w-full items-center">
          <p className="font-semibold text-zinc-300 text-xl uppercase mb-3">Follow us on</p>
          <div className="flex gap-5">
            {socialLinks.map((links, idx) => (
              <SocialLink key={idx} {...links} sz={20} />
            ))}
          </div>
        </nav>
        <nav className="pt-5 flex flex-col w-full items-center">
          <p className="font-semibold text-xl uppercase mb-3 text-zinc-300">Contact Us On</p>
          {contactDetails.map((contact, idx) => (
            <LinkTags key={idx} {...contact} />
          ))}
        </nav>
        <nav className="flex flex-col w-full items-center pt-5">
          <p className="font-semibold text-zinc-300 text-xl uppercase mb-3">Useful links</p>
          {navLinks.map((navLink, idx) => (
            <PageLink key={idx} {...navLink} />
          ))}
        </nav>
      </div>

      <div className="w-1/2 h-0.5 bg-white my-4 md:my-8"></div>

      <div className="flex flex-col items-center">
        <p className="text-center tex-xl lg:text-2xl text-zinc-400 font-semibold mb-2">
          Center for Cognitive Activities,
          <br />
          Research and Development Cell
          <br />
          NIT Durgapur
        </p>
        <p className="text-md lg:text-xl mb-1 text-zinc-400">
          Made with &#10084;&#xfe0f; by{" "}
          <a
            href="https://www.linkedin.com/in/chittajit-nath"
            target="_blank"
            className="text-blue-600 transition hover:text-blue-400 duration-150"
          >
            Chittajit Nath
          </a>
        </p>
        <p className="text-md lg:text-xl text-zinc-400 mb-5">
          &copy; 2026 CCA RnD. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
