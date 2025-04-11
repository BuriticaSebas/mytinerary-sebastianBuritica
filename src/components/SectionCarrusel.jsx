import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCities } from "../redux/actions/carruseactions";
import { backSlide } from "../redux/actions/carruseactions";
import { nextSlide } from "../redux/actions/carruseactions";
import { statusSoli } from "../redux/reducers/carruselReducer";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SectionCarrusel() {
  const dispatch = useDispatch();
  const { cities, currentPosition, status } = useSelector(
    (state) => state.carrusel
  );

  const cityData = cities.map((city) => ({
    id: city._id,
    name: city.name,
  }));

  console.log(cityData);

  const isMobile = useMediaQuery({ maxWidth: 639 });
  const itemsPerSlide = isMobile ? 1 : 4;

  const citiesToShow = cities.slice(
    currentPosition * itemsPerSlide,
    currentPosition * itemsPerSlide + itemsPerSlide
  );

  useEffect(() => {
    if (status !== statusSoli.IDLE) return;

    dispatch(getCities());
  }, [dispatch, status]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      dispatch(nextSlide());
    }, 3000);

    return () => clearInterval(intervalo);
  }, [currentPosition]);

  return (
    <div className="w-full flex flex-col items-center text-center text-white py-6 px-4">
      <h3 className="font-black text-3xl md:text-4xl text-white mb-6">
        Popular MyTineraries
      </h3>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full gap-4">
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {status === statusSoli.SUCCEDED &&
            citiesToShow.map((objeto, posicion) => (
              <div
                key={posicion}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-r from-gray-800 to-black"
              >
                <img
                  src={objeto.imageUrl}
                  alt={`City of ${objeto.name}`}
                  className="w-full h-55 object-cover"
                />
                <div className="p-4  text-white font-black text-left">
                  <p className="text-lg font-semibold ">{objeto.name}</p>
                </div>
              </div>
            ))}

          {status === statusSoli.PENDING && (
            <p className="text-white col-span-full text-center">
              Cargando ciudades...
            </p>
          )}

          {status === statusSoli.FAILED && (
            <p className="text-red-500 col-span-full text-center">
              Error al cargar las ciudades.
            </p>
          )}
        </div>

        <div className="flex justify-between  gap-2 sm:gap-0  sm:px-5 absolute w-full ">
          <button
            className="text-white hover:text-blue-300 transition transform "
            onClick={() => dispatch(backSlide())}
          >
            <IoIosArrowBack size={40} className="text-white drop-shadow-md" />
          </button>

          <button
            className="text-white hover:text-blue-300"
            onClick={() => dispatch(nextSlide())}
          >
            <IoIosArrowForward
              size={40}
              className="text-white drop-shadow-md font-black"
            />
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-3 justify-center">
        <div className="px-4 py-2 rounded-full bg-blue-300 text-white font-bold shadow">
          {currentPosition + 1}
        </div>
      </div>
    </div>
  );
}

export default SectionCarrusel;
