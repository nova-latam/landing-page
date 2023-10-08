import React from "react";
import { MenuItem } from "../navbar.lib";
import Link from "next/link";
import { textSizes } from "@/components/common/text";
import { nanoid } from "nanoid";
    
export default function MobileItems({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <ul className="flex gap-4 h-full flex-row flex-nowrap items-center sm:hidden">
      {menuItems.map((item, index) => (
        <li key={nanoid()} className="text-primary-0">
          <Link className="w-full" href={item.href}>
            {item.name}<span className={`${textSizes}`}>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
