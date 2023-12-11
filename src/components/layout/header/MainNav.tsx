"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/navigation/nav.lib";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex justify-end w-full">
      <nav className="flex items-center space-x-6 text-md font-medium">
        {navItems.map((item) => (
          <Link
            key={`mobile-item-${item.name}`}
            href={item.link}
            className={cn(
              "transition-colors hover:text-cyan-950/70 font-bold",
              pathname === item.link ? "text-white" : "text-cyan-950"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
