import InstagramIcon from "../icons/instagram.icon";
import LinkedinIcon from "../icons/linkedin.icon";
import { SocialLinkProps } from "../types/social-link.type";

export const socialLinksData: { [key: string]: SocialLinkProps } = {
  instagram: {
    name: "Instagram",
    link: "https://www.instagram.com/nova.epn/",
    Icon: InstagramIcon,
    username: "@nova.epn",
  },
  linkedin: {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/nova-epn/",
    Icon: LinkedinIcon,
    username: "@nova.epn",
  },
};
