import ImagenFondo from "../assets/welcome2.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative px-4 py-4 w-full min-h-screen md:h-dvh flex flex-col  ">
      <Navbar></Navbar>

      <div className="h-auto flex flex-col justify-center items-center text-center flex-grow z-10">
        <div className="z-20rounded-xl ">
          <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)] ">
            My
          </h1>
          <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)] ">
            Tineraries
          </h1>

          <p className="  text-white font-Abel text-xl mt-4  md:text-4xl ">
            "Find your perfect trip, designed by insiders who know and love
            their cities!"
          </p>

          <button className="px-4 py-2 bg-blue-600 text-black rounded-full mt-5 font-perso text-lg md:text-xl">
            <Link to="/cities">Explore Now !</Link>
          </button>
        </div>
      </div>

      <div
        className=" absolute inset-0 w-full h-full bg-cover bg-center brightness-50 blur-[2px] md:blur-none "
        style={{ backgroundImage: `url(${ImagenFondo})` }}
      ></div>
    </div>
  );
}

export default Header;

/* <div className=" relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center text-white">

      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 blur-[2px]"
        style={{ backgroundImage: `url(${ImagenFondo})` }}
      ></div>


      <div className=" absolute top-0 left-0  text-left">
          <h1 className="font-perso text-[33px] md:text-5xl font-bold font-[Rubik-mono-one]">MY</h1>
          <h1 className="font-perso text-[33px] md:text-5xl font-bold">TINERARIES</h1>
        </div>

      <div className=" relative z-10 px-6 md:px-12">
        <p className=" font-Abel mt-4 text-base md:text-xl">
          "Find your perfect trip, designed by insiders who know and love their cities!"
        </p>
        <button className="text-black !text-xs font-perso mt-5 px-3 py-2 bg-blue-600 font-medium rounded-xl shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition">
          Explore Now
        </button>
      </div>
    </div>*/
