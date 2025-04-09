import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCities } from "../redux/actions/carruseactions";
import { backSlide } from "../redux/actions/carruseactions";
import { nextSlide } from "../redux/actions/carruseactions";
import { statusSoli } from "../redux/reducers/carruselReducer";

function SectionCarrusel() {
  const dispatch = useDispatch();
  const { cities, currentPosition, status } = useSelector(
    (state) => state.carrusel
  );

  useEffect(() => {
    if (status !== statusSoli.IDLE) return;

    dispatch(getCities());
  }, [dispatch, status]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      dispatch(nextSlide);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [currentPosition]);

  return (
    <div className="w-full  flex flex-col text-center text-black p-2">
      <h3 className="font-perso text-black md:my-3 text-2xl">
        Popular My Tineraries
      </h3>

      <div className="">
        <div className="flex justify-evenly items-center w-full mt-[1rem] gap-2">
          <button
            className="text-white flex-shrink-0"
            onClick={() => dispatch(backSlide)}
          >
            <FaArrowAltCircleLeft
              size={30}
              className="hover:text-zinc-400 text-black"
            />
          </button>

          <div className="w-full max-w-4xl flex flex-wrap gap-5 justify-center items-center ">
            {status === statusSoli.SUCCEDED &&
              cities.map((objeto, posicion) => (
                <div
                  key={posicion}
                  className="bg-stone-800 rounded-2xl font-Mohave hover:shadow-[0px_1px_19px_7px_#7a7a7a] transition  duration-70 ease-in hover:-translate-y-1 hover:scale-110 "
                >
                  <div
                    key={posicion}
                    className="w-full h-full rounded-2xl  bg-cover bg-center sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-52 lg:h-52 "
                  >
                    <img
                      src={objeto.imageUrl}
                      alt="Ciudades class"
                      className="h-full rounded-2xl "
                    />
                  </div>

                  <div className="mt-1 p-1 text-white">
                    <p>
                      {" "}
                      <strong>City</strong> : {objeto.name}
                    </p>
                    <p>
                      {" "}
                      <strong>Country</strong>: {objeto.country}
                    </p>
                  </div>
                </div>
              ))}

            {status === statusSoli.PENDING && (
              <p className="text-white">Cargando ciudades...</p>
            )}

            {status === statusSoli.FAILED && (
              <p className="text-red-500">Error al cargar las ciudades.</p>
            )}
          </div>

          <button
            className="text-white flex-shrink-0"
            onClick={() => dispatch(nextSlide)}
          >
            <FaArrowAltCircleRight
              size={30}
              className="hover:text-zinc-400 text-black"
            />
          </button>
        </div>

        <div className="text-white font-perso flex gap-3 justify-center p-3">
          <div className="px-3 py-1 rounded-full bg-[#6d6d6d]">
            {currentPosition + 1}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCarrusel;
