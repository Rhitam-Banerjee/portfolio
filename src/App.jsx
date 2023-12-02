import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, BottomNavar, About, Projects } from "./Components";
import Cursor from "./Components/Cursor/Cursor";
const App = () => {
  const [isMobile, setIsMobile] = useState(false);
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
  return (
    <BrowserRouter>
      {!isMobile && <Cursor />}
      <div className="relative z-0">
        <div className="z-50">
          <Navbar />
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
