import { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logoTer } from "../assets";
// eslint-disable-next-line react/prop-types
const Navbar = ({ activeLink }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleActiveLink = () => {
      setActive(activeLink);
    };
    window.addEventListener("scroll", handleActiveLink);
    return () => {
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, [activeLink]);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 ${
        scrolled
          ? "fixed !bg-white_transparant_max shadow-sm backdrop-blur-sm"
          : "absolute shadow-none"
      } transition-all`}
    >
      <div className="w-full flex sm:justify-center justify-between items-center max-w-6xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoTer} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
        <ul className="list-none sm:hidden flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-tertiary" : "text-secondary"
              } hover:text-tertiary text-[18px] font-bold cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
