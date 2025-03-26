import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  return (
    <header className="fixed right-0 left-0 top-0 p-4 bg-black/20 backdrop-blur-lg z-[100] flex items-center border-b justify-between">
      <aside className="flex items-center gap-0.5">
        <p className="text-3xl font-bold">Fu</p>
        <Image
          src="/fuzzielogo.png"
          width={15}
          height={15}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">zie</p>
      </aside>
      <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>

      <aside className="flex items-center gap-4">
        <Link
          href="/sign-up"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-offset-2 focus:ring-offset-ring"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {false ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {/* wire up user */}
        <UserButton />
        <MenuIcon className="md:hidden block" />
      </aside>
    </header>
  );
};

export default Navbar;
