import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

import { socialData } from "@/lib/navigation/social.lib";

export default function Footer() {
  return (
    <>
      <Separator className="text-white"/>
      <footer className="px-16 py-8 w-full flex flex-col justify-center items-center">
        {/* <Image
          src={"/images/logos/full.png"}
          alt="Nova Club Logo"
          width={300}
          height={150}
          className=""
        /> */}
        <div className="mt-2 flex gap-4">
          {socialData.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="" />
              </Link>
            );
          })}
        </div>

        <div className="mt-4">
          <p className="text-center">
            © 2023 Nova Club. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
