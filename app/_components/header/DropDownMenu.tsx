import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavLink } from "@/types";
import Link from "next/link";
import { Logout } from "./Logout";

export function DropdownMenuBasic({ LINKS }: { LINKS: NavLink[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-white rounded-full py-1" asChild>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-100">
        <DropdownMenuGroup>
          {LINKS.map((val) => {
            return val.title !== "logout" ? (
              <Link href={val.link} key={val.title}>
                <DropdownMenuItem className="active:bg-gray-300 active:text-zinc-700">
                  {val.label}
                </DropdownMenuItem>
              </Link>
            ) : (
              <Logout key="logout" />
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
