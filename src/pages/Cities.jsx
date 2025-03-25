import imgCons from "../assets/construc.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImagenFondo from "../assets/welcome4.jpg";
import Cards from "../components/Cards.jsx";

function Cities() {
  return (
    <>
      <div className="relative px-4 py-4 w-full min-h-screen md:h-dvh flex flex-col ">
        <Navbar></Navbar>

        <div className="h-auto flex flex-col justify-center items-center text-center flex-grow z-10">
          <div className="z-20rounded-xl ">
            <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)] ">
              CITIES
            </h1>

            <p className="  text-white font-Abel text-xl mt-4  md:text-4xl ">
              Collection of the most beautiful places and experience
            </p>
          </div>
        </div>

        <div
          className=" absolute inset-0 w-full h-full bg-cover bg-center bg-center brightness-50 blur-[2px] md:blur-none "
          style={{ backgroundImage: `url(${ImagenFondo})` }}
        ></div>
      </div>

      <section className="w-full text-black p-5  flex flex-col justify-center">
        <div className="mb-5 flex justify-center">
          <input
            type="text"
            className="bg-black rounded-lg  text-white p-2 m-auto"
            placeholder="Ingresa una Ciudad"
          />
        </div>

        <div className="w-full  grid grid-cols-2 content-center gap-4 md:gap-3 md:grid-cols-2  lg:gap-5 lg:grid-cols-3  xl:grid-cols-4">
          <Cards></Cards>
        </div>

        <button className="m-5 p-2  bg-stone-900 rounded-2xl font-perso text-white">
          <Link to="/" className="hover:text-blue-200">
            BACT TO HOME
          </Link>
        </button>
      </section>
    </>
  );
}

export default Cities;
