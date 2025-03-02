import Carrusel from "../components/SectionCarrusel";
import CalltoAction2 from "../components/CalltoAction2";
import alemania from "../assets/ciudades/alemania.jpg";
import arabia_saudi from "../assets/ciudades/arabia-saudi.jpg";
import austria from "../assets/ciudades/Austria.jpg";
import croacia from "../assets/ciudades/croacia.jpg";
import eeuu from "../assets/ciudades/eeuu.jpg";
import espana from "../assets/ciudades/españa.jpg";
import grecia from "../assets/ciudades/grecia.jpg";
import italia from "../assets/ciudades/italia.jpg";
import portugal from "../assets/ciudades/portugal.jpg";
import reino_unido from "../assets/ciudades/reino unido.jpg";
import turquia from "../assets/ciudades/turquia.jpg";
import medellin from "../assets/ciudades/medellin.jpg"
import {useRef, useState } from "react";
import Header from "../components/Header";



function Home() {

    const imagesCiudades = useRef([
        {
          items: [
            { ciudad: "Berlín", pais: "Alemania", imagen: alemania },
            { ciudad: "Riad", pais: "Arabia Saudita", imagen: arabia_saudi },
            { ciudad: "Viena", pais: "Austria", imagen: austria },
            { ciudad: "Zagreb", pais: "Croacia", imagen: croacia },
          ],
        },
        {
          items: [
            { ciudad: "Washington D.C.", pais: "Estados Unidos", imagen: eeuu },
            { ciudad: "Madrid", pais: "España", imagen: espana },
            { ciudad: "Atenas", pais: "Grecia", imagen: grecia },
            { ciudad: "Roma", pais: "Italia", imagen: italia },
          ],
        },
        {
          items: [
            { ciudad: "Lisboa", pais: "Portugal", imagen: portugal },
            { ciudad: "Londres", pais: "Reino Unido", imagen: reino_unido },
            { ciudad: "Estambul", pais: "Turquía", imagen: turquia },
            { ciudad: "Medellin", pais: "Colombia", imagen: medellin },
          ],
        },
      ]);

    const [posicionActual, cambioPosicion] = useState(0)

  return (
    <>
      <Header></Header>
      <Carrusel posicionActual = {posicionActual} cambioPosicion = {cambioPosicion} images={imagesCiudades.current} />
      <CalltoAction2 />
    </>
  );
}

export default Home;
