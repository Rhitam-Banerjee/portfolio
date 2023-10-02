import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
