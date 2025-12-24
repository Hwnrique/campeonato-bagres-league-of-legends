import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ToggleMenu from "./ToggleMenu";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setTimeout(() => {
      setMenu(prev => !prev);
    }, 150);
  };

  return (
    <nav className="w-full flex justify-between items-center p-5 relative z-20">
      <Link to="/">
        <img className="h-16 w-24" src={logo} alt="logo" />
      </Link>
      <ToggleMenu onClick={showMenu} />
      <ul
        className={`
          absolute top-full left-0 w-full
          flex flex-col items-center gap-6
          bg-zinc-900/90 backdrop-blur-md
          text-xl
          transition-all duration-300

          ${menu ? "opacity-100 visible" : "opacity-0 invisible"}

          md:static md:flex md:flex-row md:w-auto
          md:bg-transparent md:opacity-100 md:visible
        `}
      >
        <li>
          <Link
            to="/"
            className="hover:text-cyan-600 text-slate-200 font-bold text-2xl"
            onClick={() => setMenu(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-cyan-600 text-slate-200 font-bold text-2xl"
            onClick={() => setMenu(false)}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/follow"
            className="hover:text-cyan-600 text-slate-200 font-bold text-2xl"
            onClick={() => setMenu(false)}
          >
            Siga
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
