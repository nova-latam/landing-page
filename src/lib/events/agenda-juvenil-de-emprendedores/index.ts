import { OrganizationProps } from "@/components/views/events/template/organizations/organization.type";
import { Speaker } from "@/components/views/events/template/types/schedule.type";
import { AEEUCE, EPN, ImagenSistemas, InnovaUCE, Leadership, NovaClub } from "@/lib/organizations";
import { CCQ } from "@/lib/organizations/quito/comercio";
import { CamiloPinzonOrbes, CarlosZaldumbide, FranciscoAbad } from "@/lib/people";

export const speakers: Speaker[] = [
  CarlosZaldumbide,
  CamiloPinzonOrbes,
  FranciscoAbad,
];

export const hosts: OrganizationProps[] = [
  EPN,
];

export const organizers: OrganizationProps[] = [
  //InnovaUCE,
  NovaClub,
  ImagenSistemas,
];


export const sponsors: OrganizationProps[] = [
  NovaClub,
];

export const partners: OrganizationProps[] = [
  Leadership,
  CCQ,
  AEEUCE,
];

export * from './eventData'
