import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ImagenFondo from "../assets/welcome4.jpg";
import Cards from "../components/Cards.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeSearch } from "../redux/actions/searchCityA.js";
import { statusSoli } from "../redux/reducers/carruselReducer.js";
import { getCities } from "../redux/actions/carruseactions.js";

function Cities() {
  const dispatch = useDispatch();

  const { cities, status } = useSelector((state) => state.carrusel);

  const { busqueda } = useSelector((state) => state.searchCity);

  useEffect(() => {
    if (status !== statusSoli.IDLE) return;

    dispatch(getCities());
  }, [dispatch, status]);

  const buscadorCiudad = (letras) => {
    return cities.filter((city) =>
      city.name.toLowerCase().includes(letras.toLowerCase())
    );
  };

  const ciudadesFiltradas = buscadorCiudad(busqueda);

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
          className=" absolute inset-0 w-full h-full bg-cover  brightness-50 blur-[2px] md:blur-none "
          style={{ backgroundImage: `url(${ImagenFondo})` }}
        ></div>
      </div>

      <section className="w-full text-black p-5 sm:p-9  flex flex-col justify-center bg-[1d2941]">
        <div className="mb-8 w-2/ sm:w-1/2 mx-auto text-center">
          <label
            htmlFor="citySearch"
            className="block mb-2 text-xl font-medium text-gray-300"
          >
           Search City
          </label>

          <div className="relative">
            <input
              id="citySearch"
              type="text"
              value={busqueda}
              onChange={(e) => dispatch(changeSearch(e.target.value))}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Ej: París, Tokio, Nueva York"
              aria-label="Buscar ciudades por nombre"
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {busqueda && (
            <p className="mt-1 text-xs text-gray-400">
              Presiona Enter para buscar
            </p>
          )}
        </div>

        <div className="w-full grid grid-cols-1 sm:p-5 content-center gap-4 md:gap-3 md:grid-cols-2 lg:gap-5 lg:grid-cols-3 xl:grid-cols-4 text-center">
          {ciudadesFiltradas.length > 0 ? (
            ciudadesFiltradas.map((city) => (
              <Cards key={city._id} cities={city} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center py-10">
              <p className="text-white bg-black p-3 rounded-lg shadow-md">
                There is no match in the city you entered
              </p>
            </div>
          )}
        </div>

        <button className="m-5 p-2  w-[12rem]  bg-white rounded-2xl font-perso text-black mx-auto hover:bg-gray-200">
          <Link to="/" className="font-extrabold">
            BACk TO HOME
          </Link>
        </button>
      </section>
    </>
  );
}

export default Cities;
