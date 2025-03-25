"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { menuOptions } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav className='overflow-auto justify-between flex items-center flex-col gap-10 py-6 px-2'>
      <div className='flex items-center justify-center flex-col gap-8'>
        <Link href='/' className='flex flex-row pr-1'>
          <p className='text-2xl font-bold'>Fu</p>
          <Image
            src='/fuzzielogo.png'
            width={10}
            height={10}
            alt='fuzzie logo'
            className='shadow-sm'
          />
          <p className='text-2xl font-bold'>zie</p>
        </Link>
        <TooltipProvider>
          <ul className='space-y-8'>
            {menuOptions.map(({ name, href, Component }) => (
              <li key={name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Link
                      href={href}
                      className={cn(
                        "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                        pathname === href && "bg-muted"
                      )}
                    >
                      <Component selected={pathname === href} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side='right'>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
        <Separator />
        <div className='flex items-center flex-col gap-9 py-4 px-2 rounded-full h-56 overflow-auto no-scrollbar bg-foreground/5 border'>
          <div className='relative p-2 rounded-full border bg-foreground/10'>
            <LucideMousePointerClick size={16} />
            <div
              className='border-l border-foreground/40 h-6 absolute left-1/2 transform -translate-x-1/2 -bottom-[30px]'
              aria-hidden
            />
          </div>
          <div className='relative p-2 rounded-full border bg-foreground/10'>
            <GitBranch size={16} />
            <div
              className='border-l border-foreground/40 h-6 absolute left-1/2 transform -translate-x-1/2 -bottom-[30px]'
              aria-hidden
            />
          </div>
          <div className='relative p-2 rounded-full border bg-foreground/10'>
            <Database size={16} />
            <div
              className='border-l border-foreground/40 h-6 absolute left-1/2 transform -translate-x-1/2 -bottom-[30px]'
              aria-hidden
            />
          </div>
          <div className='relative p-2 rounded-full border bg-foreground/10'>
            <GitBranch size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
