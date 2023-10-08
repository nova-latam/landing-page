import Link from "next/link";
import React from "react";
import { SocialLinkProps } from "./types/social-link.type";

export default function SocialLink({ socialLinkData, children}: {socialLinkData: SocialLinkProps, children?: React.ReactNode}) {
  const { link, Icon } = socialLinkData;
  return (
    <Link
      className="flex justify-center items-center gap-2"
      href={link}
      target="_blank"
    >
      <Icon />
      {children}
    </Link>
  );
}
