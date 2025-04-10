import ImagenFondo from "../assets/welcome2.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


function Header() {
  

  return (
    <div className="relative px-4 py-4 w-full min-h-screen md:h-dvh flex flex-col  ">
      <Navbar></Navbar>

      <div className="h-auto flex flex-col justify-center items-center text-center flex-grow z-10">
        <div className="z-20 rounded-xl ">
          <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)] ">
           MyTinerary
          </h1>

          <p className="  text-white font-Abel text-xl mt-4  md:text-4xl ">
            "Find your perfect trip, designed by insiders who know and love
            their cities!"
          </p>

          <button className="px-4 py-2 bg-[#b0b0b0] text-black rounded-full mt-5 font-perso text-base md:text-xl shadow-[0px_1px_19px_7px_#7a7a7a] hover:opacity-75 hover:bg-blue-200">
            <Link to="/cities">Explore Now!</Link>
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