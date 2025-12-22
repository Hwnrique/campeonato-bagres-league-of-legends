import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-5 z-20 items-center">
      <Link to={"/"}>
        <img className="h-16 w-24" src={logo} alt="logo" />
      </Link>
      <ul className="flex gap-4 text-xl">
        <Link
          to={"/"}
          className="hover:scale-110 hover:text-cyan-600 text-slate-200 font-bold text-2xl"
        >
          <li>Home</li>
        </Link>
        <Link
          to={"/about"}
          className="hover:scale-110 hover:text-cyan-600 text-slate-200 font-bold text-2xl"
        >
          <li>Sobre</li>
        </Link>
        <Link
          to={"/follow"}
          className="hover:scale-110 hover:text-cyan-600 text-slate-200 font-bold text-2xl"
        >
          <li>Siga</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
