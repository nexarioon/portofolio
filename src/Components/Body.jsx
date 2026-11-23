import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Porto from "./Porto";
import NavbarComponent from "./NavbarComponent";

const Body = () => (
  <div
    className="relative w-full"
    style={{
      fontFamily: "var(--ibm-font)",
      background: "var(--page-bg)",
      color: "var(--text-primary)",
    }}
  >
    <NavbarComponent />
    <main>
      <Home />
      <About />
      <Porto />
    </main>
    <Footer />
  </div>
);

export default Body;
