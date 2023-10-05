import Navbar from "./navbar";
import Footer from "./footer.component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );  
}
