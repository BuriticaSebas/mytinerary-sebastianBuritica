import Logo from "../assets/2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center w-full absolute top-2 right-2 z-50 p-4">
        <img src={Logo} className="w-10 sm:w-12 md:w-20 h-auto" alt="Logo" />

        {/* Botón hamburguesa visible solo en pantallas pequeñas */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menú - oculta en móviles cuando no está abierto */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row gap-4 items-center text-white text-lg md:gap-8 md:text-2xl absolute sm:static top-16 right-4 bg-gray-800 sm:bg-transparent p-4 sm:p-0 rounded-md sm:rounded-none`}
        >
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cities" onClick={() => setIsOpen(false)}>
              Cities
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;