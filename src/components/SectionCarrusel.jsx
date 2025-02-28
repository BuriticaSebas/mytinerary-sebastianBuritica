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
    <div className="w-full flex flex-col text-center text-black p-2">
      <h3 className="font-perso text-white md:my-3 text-2xl">
        Popular My Tineraries
      </h3>

      <div className="flex justify-evenly w-full h-full mt-[1rem]">
        <button className="text-white" onClick={slideAnterior}>
          <FaArrowAltCircleLeft size={30} className="hover:text-zinc-400" />
        </button>

        <div className="w-3/4 h-50 text-white flex flex-wrap gap-4 justify-center content-center">
          {slideEnvista.map((objeto, posicion) => (
            <div
              key={posicion}
              className="w-[6rem] rounded-lg bg-white h-[6rem] bg-cover bg-center  md:w-[8rem] md:h-[8rem] lg:w-[15rem] lg:h-[15rem] min-[1100px]:w-[6rem] min-[1100px]:h-[6rem]"
              style={{
                backgroundImage: `url(${objeto.imagen})`,
              }}
            ></div>
          ))}
        </div>
        <button className="text-white" onClick={siguienteSlide}>
          <FaArrowAltCircleRight size={30} className="hover:text-zinc-400" />
        </button>
      </div>
    </div>
  );
}

export default SectionCarrusel;
