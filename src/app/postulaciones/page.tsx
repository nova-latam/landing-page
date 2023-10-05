import { Contact, Team, Hero, Partners, AboutUs } from "@/components/home";
import Sponsors from "@/components/home/sponsors.component";

export default function App() {
  return (
    <main className="min-h-screen min-w-screen px-2 pb-10">
      <Hero />
      <AboutUs />
      <Partners />
      <Sponsors />
      <Contact />
      <Team />
    </main>
  );
}
