import ImagenFondo from "../assets/welcome2.jpg";

import Navbar from "./Navbar";


function Header() {
  return (
    <>
      <div className="relative px-2 py-2 w-full h-100 md:h-dvh ">
        
        <Navbar></Navbar>

        <div className="md:top-20 md:left-6 absolute z-10">
          <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)]">
            My
          </h1>
          <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)]">
            Tineraries
          </h1>
        </div>


        <div className="text-center  absolute z-40    top-40 left-1   md:top-90   md:w-118">
          <p className="text-white  font-Abel  md:text-4xl">"Find your perfect trip, designed by insiders who know and love their cities!"</p>
          <button className="px-3 py-2  bg-white rounded-full mt-3  font-perso text-[10px] md:text-[20px] md:mt-7 ">Explore now! </button>
        </div>


        <div
          className="absolute z-0 inset-0 w-full h-full bg-cover bg-center brightness-50 blur-[2px] md:blur-none md:brightness-50   md:w-2/3 md:h-full md:inset-auto  md:top-0 md:right-0 "
          style={{ backgroundImage: `url(${ImagenFondo})` }}
        ></div>
      </div>
    </>
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
 

