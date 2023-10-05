import React from "react";
import { MenuItem } from "./navbar.lib";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function DesktopItems({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <ul className="hidden sm:flex gap-4 sm:justify-between">
      {menuItems.map((item) => (
        <li key={nanoid()}>
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
