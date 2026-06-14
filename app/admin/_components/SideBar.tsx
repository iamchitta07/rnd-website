"use client";

import { useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  FolderGit2,
  MessageSquare,
  CalendarPlus,
  PenLine,
  UserCog,
  LogOut,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  danger?: boolean;
};

// ─── Nav Data ─────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Recent Posts", href: "/posts", icon: FileText },
  { label: "Recent Events", href: "/events", icon: Calendar },
  { label: "Projects", href: "/projects", icon: FolderGit2 },
  { label: "Join Us Messages", href: "/messages", icon: MessageSquare },
  { label: "Post an Event", href: "/events/new", icon: CalendarPlus },
  { label: "Post a Blog", href: "/posts/new", icon: PenLine },
  { label: "Update Profile", href: "/profile", icon: UserCog },
  { label: "Log-out", href: "/logout", icon: LogOut, danger: true },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Sidebar() {
  // DOM refs
  const sidebarRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>(new Array(NAV_ITEMS.length + 1).fill(null));
  const itemRefs = useRef<(HTMLDivElement | null)[]>(new Array(NAV_ITEMS.length).fill(null));

  // GSAP timeline
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // State tracked as refs to maintain smooth animations across mobile/desktop
  const onHamburger = useRef(false);
  const onSidebar = useRef(false);
  const isOpen = useRef(false); // Track visual state for click-away logic
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ─── Build GSAP timeline once on mount ──────────────────────────────────────
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const hamburger = hamburgerRef.current;
    const dividers = dividerRefs.current.filter((el): el is HTMLDivElement => el !== null);
    const items = itemRefs.current.filter((el): el is HTMLDivElement => el !== null);

    if (!sidebar || !hamburger) return;

    // ── Initial hidden state ────────────────────────────────────────────────
    gsap.set(sidebar, { x: -256 });
    gsap.set(dividers, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(items, { autoAlpha: 0, x: -14 });

    // ── Reveal timeline ─────────────────────────────────────────────────────
    const tl = gsap
      .timeline({ paused: true })
      .to(hamburger, {
        autoAlpha: 0,
        duration: 0.18,
        ease: "power2.in",
      })
      .to(
        sidebar,
        {
          x: 0,
          duration: 0.38,
          ease: "power3.out",
        },
        "-=0.1",
      )
      .to(
        dividers,
        {
          scaleX: 1,
          duration: 0.26,
          ease: "power1.inOut",
          stagger: 0.03,
        },
        "-=0.12",
      )
      .to(items, {
        autoAlpha: 1,
        x: 0,
        duration: 0.18,
        ease: "power2.out",
        stagger: 0.038,
      });

    tlRef.current = tl;

    // ── Global Click-Away Handler (Mobile & Desktop Global Event) ───────────
    const handleGlobalClick = (event: MouseEvent) => {
      if (!isOpen.current) return;

      // Check if click originates outside both the sidebar container and hamburger
      const clickedInsideSidebar = sidebarRef.current?.contains(event.target as Node);
      const clickedInsideHamburger = hamburgerRef.current?.contains(event.target as Node);

      if (!clickedInsideSidebar && !clickedInsideHamburger) {
        closeImmediately();
      }
    };

    document.addEventListener("click", handleGlobalClick);

    return () => {
      tl.kill();
      if (hideTimer.current) clearTimeout(hideTimer.current);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // ─── Control Mechanics ─────────────────────────────────────────────────────
  const open = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    isOpen.current = true;
    tlRef.current?.play();
  }, []);

  const scheduleClose = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (!onHamburger.current && !onSidebar.current) {
        isOpen.current = false;
        tlRef.current?.reverse();
      }
    }, 110);
  }, []);

  const closeImmediately = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    onHamburger.current = false;
    onSidebar.current = false;
    isOpen.current = false;
    tlRef.current?.reverse();
  }, []);

  // ─── Interaction Handlers ─────────────────────────────────────────────────
  const handleHamburgerClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation(); // Stop bubble so global click doesn't trip instantly
      open();
    },
    [open],
  );

  const hamburgerEnter = useCallback(() => {
    onHamburger.current = true;
    open();
  }, [open]);

  const hamburgerLeave = useCallback(() => {
    onHamburger.current = false;
    scheduleClose();
  }, [scheduleClose]);

  const sidebarEnter = useCallback(() => {
    onSidebar.current = true;
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const sidebarLeave = useCallback(() => {
    onSidebar.current = false;
    scheduleClose();
  }, [scheduleClose]);

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Hamburger ─────────────────────────────────────────────────────── */}
      <button
        ref={hamburgerRef}
        onMouseEnter={hamburgerEnter}
        onMouseLeave={hamburgerLeave}
        onClick={handleHamburgerClick}
        aria-label="Toggle navigation"
        className={[
          "fixed top-16 left-5 lg:left-20 z-[50]",
          "w-10 h-10 rounded-full",
          "flex flex-col items-center justify-center gap-[5.5px]",
          "bg-transparent border border-[#dadada]",
          "cursor-pointer outline-none",
          "transition-[border-color,box-shadow] duration-200",
          "focus-visible:ring-2 focus-visible:ring-amber-500/40",
        ].join(" ")}
      >
        <span className="block w-[17px] h-px rounded-full bg-white transition-colors duration-150" />
        <span className="block w-[17px] h-px rounded-full bg-white transition-colors duration-150" />
        <span className="block w-[17px] h-px rounded-full bg-white transition-colors duration-150" />
      </button>

      {/* ── Sidebar ───────────────────────────────────────────────────────── */}
      <nav
        ref={sidebarRef}
        onMouseEnter={sidebarEnter}
        onMouseLeave={sidebarLeave}
        style={{ willChange: "transform" }}
        className={[
          "fixed top-0 left-0 max-h-screen z-[55] mt-16",
          "w-[252px] bg-transparent", // Added default background color for clear visual blocking over body text
          "border-r border-[#181818]",
          "shadow-[6px_0_48px_rgba(0,0,0,0.75)]",
          "flex flex-col",
        ].join(" ")}
      >
        {/* Brand label */}
        <div className="pt-[76px] pb-[14px] px-6">
          <span className="font-mono text-[9px] tracking-[0.42em] text-white uppercase select-none">
            Admin Panel
          </span>
        </div>

        {/* Header divider (index 0) */}
        <Divider
          refCallback={(el) => {
            dividerRefs.current[0] = el;
          }}
        />

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-none">
          {NAV_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.label}>
                <div
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeImmediately} // Seamless close when navigating
                    className={[
                      "group flex items-center gap-[13px] px-6 py-[11px]",
                      "transition-colors duration-150",
                      item.danger ? "hover:bg-red-500/[0.04]" : "hover:bg-white/[0.025]",
                    ].join(" ")}
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.6}
                      className={[
                        "flex-shrink-0 transition-colors duration-150",
                        item.danger
                          ? "text-[#383838] group-hover:text-red-500"
                          : "text-[#383838] group-hover:text-amber-400",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "font-mono text-[12px] tracking-[0.035em] whitespace-nowrap",
                        "transition-colors duration-150",
                        item.danger
                          ? "text-[#575757] group-hover:text-red-400"
                          : "text-[#636363] group-hover:text-[#dedede]",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </Link>
                </div>

                {/* Divider between items (indices 1 → 8) */}
                {i < NAV_ITEMS.length - 1 && (
                  <Divider
                    refCallback={(el) => {
                      dividerRefs.current[i + 1] = el;
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer divider (index 9) */}
        <Divider
          refCallback={(el) => {
            dividerRefs.current[NAV_ITEMS.length] = el;
          }}
        />
      </nav>
    </>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
function Divider({ refCallback }: { refCallback: (el: HTMLDivElement | null) => void }) {
  return (
    <div
      ref={refCallback}
      aria-hidden
      className="h-px w-full"
      style={{
        background: "linear-gradient(90deg, #1e1e1e 0%, #181818 65%, transparent 100%)",
      }}
    />
  );
}
