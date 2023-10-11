import { useState, useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, BottomNavar } from "./Components";
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
      <div className="relative z-0 bg-hero-Image bg-center bg-fixed">
        <div>
          <Navbar />
          <Hero />
          {isMobile && <BottomNavar />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
