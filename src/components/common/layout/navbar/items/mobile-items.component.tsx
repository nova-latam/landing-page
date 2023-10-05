import React from "react";
import { MenuItem } from "../navbar.lib";
import Link from "next/link";
    
export default function MobileItems({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <ul className="flex gap-4 h-full flex-row flex-nowrap items-center sm:hidden">
      {menuItems.map((item, index) => (
        <li key={`${item}-${index}`} className="text-primary-0">
          <Link className="w-full" href={item.href}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
