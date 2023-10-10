import { Conference } from "./schedule.type";

export interface EventData {
  title: string;
  subtitle: string;
  date: string;
  day?: string;
  month?: string;
  year?: string;
  hour: string;
  location?: string;
  locationAddress?: string;
  locationSpace?: string;
  locationURL?: string;
  conferences: Conference[];
  about: {
    title: string;
  };
}
