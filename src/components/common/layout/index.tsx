import MyNavbar from "./navbar.component";
import Footer from "./footer.component";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyNavbar />
      {children}
      <Footer />
    </>
  );
}
