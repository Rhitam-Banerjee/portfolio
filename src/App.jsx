import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, BottomNavar } from "./Components";
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
      <div className="relative z-0">
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
