import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function SectionCarrusel({ posicionActual, cambioPosicion, images }) {
  const slideEnvista = images[posicionActual].items;

  const slideAnterior = () => {
    if (posicionActual === 0) {
      cambioPosicion(2);
    } else {
      cambioPosicion(posicionActual - 1);
    }
  };

  const siguienteSlide = () => {
    if (posicionActual === 2) {
      cambioPosicion(0);
    } else {
      cambioPosicion(posicionActual + 1);
    }
  };

  return (
    <div className="w-full  flex flex-col text-center text-black p-2">
      <h3 className="font-perso text-white md:my-3 text-2xl">
        Popular My Tineraries
      </h3>

      <div className="flex justify-between items-center w-full mt-[1rem] gap-2">
        <button className="text-white flex-shrink-0" onClick={slideAnterior}>
          <FaArrowAltCircleLeft size={30} className="hover:text-zinc-400" />
        </button>

        <div className="w-full max-w-4xl flex flex-wrap gap-4 justify-center items-center">
          {slideEnvista.map((objeto, posicion) => (
            <div
              key={posicion}
              className="w-24 h-24 rounded-lg bg-white bg-cover bg-center 
                         sm:w-28 sm:h-28 
                         md:w-32 md:h-32 
                         lg:w-52 lg:h-52 
                        "
              style={{
                backgroundImage: `url(${objeto.imagen})`,
              }}
            ></div>
          ))}
        </div>

        <button className="text-white flex-shrink-0" onClick={siguienteSlide}>
          <FaArrowAltCircleRight size={30} className="hover:text-zinc-400" />
        </button>
      </div>
    </div>
  );
}

export default SectionCarrusel;
