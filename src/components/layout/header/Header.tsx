import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b px-8 md:px-16 py-2 bg-white backdrop-blur">
      <div className="w-full flex justify-between h-14 items-center">
        <Link href={"/"}>
          <Image
            src={"/images/logos/only-words/light-500x135.png"}
            alt="Hult Prize logo"
            width={200}
            height={100}
            className="h-[2rem] w-[6rem] md:h-[2.75rem] md:w-[8.25rem]"
          />
        </Link>
        <MainNav />
        <MobileNav />

        <Button
          asChild
          className="bg-[#119AAD] text-white h-0 py-5 rounded-xl text-lg ml-2
          hover:scale-105 hover:bg-[#119AAD]/90 transition-all duration-300"
        >
          <Link href={"/aplica"}>Aplica</Link>
        </Button>
      </div>
    </header>
  );
}
