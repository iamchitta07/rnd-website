import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function DropdownMenuBasic() {
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
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-100">
        <DropdownMenuGroup>
          <Link href="/">
            <DropdownMenuItem className="active:bg-gray-300 active:text-zinc-700">
              Home
            </DropdownMenuItem>
          </Link>
          <Link href="/events">
            <DropdownMenuItem>Events</DropdownMenuItem>
          </Link>
          <Link href="/blogs">
            <DropdownMenuItem>Blogs</DropdownMenuItem>
          </Link>
          <Link href="/projects">
            <DropdownMenuItem>Our Projects</DropdownMenuItem>
          </Link>
          <Link href="/team">
            <DropdownMenuItem>Our Team</DropdownMenuItem>
          </Link>
          <Link href="/join-us">
            <DropdownMenuItem>Join Us</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
