import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  BottomNavar,
  About,
  Projects,
} from "./Components";
import Cursor from "./Components/Cursor/Cursor";
const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(0);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  useEffect(() => {
    const handleActiveLink = () => {
      const elements = document.querySelectorAll("section");
      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        if (position.top <= 150 && position.top > -200) {
          setActiveNavLink(elements[index].id);
        }
      });
    };
    window.addEventListener("scroll", handleActiveLink);
    return () => {
      window.removeEventListener("scroll", handleActiveLink);
    };
  });
  return (
    <BrowserRouter>
      {!isMobile && <Cursor />}
      <div className="relative z-0 bg-primary bg-hero-Image bg-contain bg-top">
        <div className="z-50">
          <Navbar activeLink={activeNavLink} />
          <Hero />
          {isMobile && <BottomNavar />}
        </div>
        <About />
        <Projects />
      </div>
    </BrowserRouter>
  );
};

export default App;
