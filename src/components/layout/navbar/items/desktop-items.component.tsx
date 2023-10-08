import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";

import { MenuItem } from "../navbar.lib";
import { textSizes } from "@/components/common/text";

export default function DesktopItems({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <ul className="hidden w-full md:flex gap-4 md:justify-between md:items-center ">
      {menuItems.map((item) => (
        <li key={nanoid()} className="text-primary-0">
          <Link href={item.href} className={`${textSizes.sm}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
