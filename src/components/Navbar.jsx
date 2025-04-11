import Logo from "../assets/2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full fixed top-0 left-0 z-50 p-1 bg-black bg-opacity-50 backdrop-blur-md">
      <img src={Logo} className="w-10 sm:w-12 md:w-16 h-auto" alt="Logo" />

      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row gap-4 items-center text-white text-base md:gap-8 md:text-xl absolute sm:static top-16 right-4 bg-black bg-opacity-90 sm:bg-transparent p-4 sm:p-0 rounded-md sm:rounded-none shadow-md`}
      >
        <li>
          <Link to="/" className="hover:text-blue-300 text-xl font-bold" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cities" className="hover:text-blue-300 text-xl font-bold" onClick={() => setIsOpen(false)}>
            Cities
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-blue-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
