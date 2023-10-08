import React from "react";
import { nanoid } from "nanoid";
import Link from "next/link";

import { Text } from "@/components/common/text";
import { MenuItem } from "../navbar.lib";

export default function DesktopItems({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <ul className="hidden w-full sm:flex gap-4 sm:justify-between items-center ">
      {menuItems.map((item) => (
        <li key={nanoid()} className="text-primary-0">
          <Link href={item.href}>
            <Text size="sm">{item.name}</Text>
          </Link>
        </li>
      ))}
    </ul>
  );
}
