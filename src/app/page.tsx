import { Contact, Team, Hero, Partners, AboutUs } from "@/components/home";
import Sponsors from "@/components/home/sponsors.component";

export default function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Partners />
      <Sponsors />
      <Contact />
      <Team />
    </>
  );
}
