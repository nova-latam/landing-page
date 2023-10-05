import { Contact, Team, Hero, Partners, AboutUs } from "@/components/home";
import Sponsors from "@/components/home/sponsors.component";

export default function App() {
  return (
    <main className="bg-inherit">
      <Hero />
      <AboutUs />
      <Partners />
      <Sponsors />
      <Contact />
      <Team />
    </main>
  );
}
