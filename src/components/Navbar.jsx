import Logo from "../assets/2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center w-full absolute top-2 right-2 z-50 p-4">
        <img src={Logo} className="w-10 sm:w-12 md:w-20 h-auto" alt="Logo" />

        {/* Botón hamburguesa visible solo en pantallas pequeñas */}
        <button
          className="sm:hidden text-white focus:outline-none "
          onClick={() => setIsOpen(!isOpen)}
        >
         <GiHamburgerMenu className="text-xl" />
        </button>

        {/* Menú - oculta en móviles cuando no está abierto */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 items-center text-white text-lg md:gap-8 md:text-2xl absolute sm:static top-16 right-4 bg-gray-800 sm:bg-transparent p-4 sm:p-0 rounded-md sm:rounded-none`}
        >
          <li>
            <Link to="/" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>
              <strong>Home</strong>
            </Link>
          </li>
          <li>
            <Link to="/cities" className="hover:text-blue-200" onClick={() => setIsOpen(false)}>
              <strong>Cities</strong>
            </Link>
          </li>
          <li>
            <button className="bg-stone-200 px-4 py-1 rounded-3xl text-black hover:opacity-70">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <strong>Login</strong>
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
