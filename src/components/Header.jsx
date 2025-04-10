import ImagenFondo from "../assets/welcome2.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Navbar />

      {/* Fondo */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${ImagenFondo})` }}
      ></div>

      {/* Contenido */}
      <div className="relative flex-grow flex items-center justify-center px-6 text-center z-10">
        <div className="max-w-3xl">
          <h1 className="text-white font-bold text-[clamp(2rem,6vw,5rem)] leading-tight">
            MyTinerary
          </h1>
          <p
            className="mt-4 text-white text-lg md:text-3xl font-bold opacity-85">
            "Find your perfect trip, designed by insiders who know and love
            their cities!"
          </p>

          <Link
            to="/cities"
            className="inline-block mt-8 px-6 py-3 bg-white text-black text-lg font-black rounded-full hover:bg-blue-200 transition shadow-lg"
          >
            Explore Now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
