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

      <div className="" >
        <div className="flex justify-evenly items-center w-full mt-[1rem] gap-2">
        <button className="text-white flex-shrink-0" onClick={slideAnterior}>
          <FaArrowAltCircleLeft size={30} className="hover:text-zinc-400" />
        </button>

        <div className="w-full max-w-4xl flex flex-wrap gap-5 justify-center items-center ">
          {slideEnvista.map((objeto, posicion) => (
            <div className="bg-stone-800 rounded-2xl font-Mohave hover:shadow-[0px_1px_19px_7px_#7a7a7a] transition  duration-70 ease-in hover:-translate-y-1 hover:scale-110 " >
              <div key={posicion}
              className="w-full h-full rounded-2xl  bg-cover bg-center sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-52 lg:h-52 ">
                   <img src={objeto.imagen} alt="Ciudades class" className="h-full rounded-2xl " />

              </div>

              <div className="mt-1 p-1 text-white">
                <p> <strong>Ciudad</strong> : {objeto.ciudad}</p>
                <p> <strong>Pais</strong>: {objeto.pais}</p>

              </div>
              
            </div>
          ))}
        </div>
        

        <button className="text-white flex-shrink-0" onClick={siguienteSlide}>
          <FaArrowAltCircleRight size={30} className="hover:text-zinc-400" />
        </button>
          
        </div>
        
        <div className="text-white font-perso flex gap-3 justify-center p-3">
          <div>{posicionActual +1 }</div>
        </div>


      </div>
    </div>
  );
}

export default SectionCarrusel;










