import {
    Facebook,
    Instagram,
    Linkedin,
    LucideIcon,
    Twitter,
    Youtube,
  } from "lucide-react";
  
  type SocialData = {
    name: string;
    link: string;
    icon: LucideIcon;
  };
  
  const instagramData: SocialData = {
    name: "Instagram",
    link: "https://www.instagram.com/hultprizeepn/",
    icon: Instagram,
  };
  
  const linkedinData: SocialData = {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/hultprizeepn/",
    icon: Linkedin,
  };
  
  const facebookData: SocialData = {
    name: "Facebook",
    link: "https://www.facebook.com/hultprizeepn/",
    icon: Facebook,
  };
  
  const twitterData: SocialData = {
    name: "Twitter",
    link: "https://twitter.com/hultprizeepn",
    icon: Twitter,
  };
  
  const youtubeData: SocialData = {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCZQ2phf8d-YkPcp4Iv9PxkA",
      icon: Youtube,
  }
  
  export const socialData: SocialData[] = [
    instagramData,
    linkedinData,
    twitterData,
    facebookData,
    youtubeData,
  ];
  