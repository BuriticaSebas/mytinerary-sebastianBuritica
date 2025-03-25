import ImagenFondo from "../assets/ciudades/alemania.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Construction from "../assets/construc.png"





const DetailCity = ()=>{
    return (
        <>
    <div className="relative px-4 py-4 w-full min-h-screen md:h-dvh flex flex-col  ">
      <Navbar></Navbar>

      <div className="h-auto flex flex-col justify-center items-center text-center flex-grow z-10">
        <div className="z-20rounded-xl ">
          <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)] ">
            Munich,Alemania
          </h1>
        </div>
      </div>

      <div
        className=" absolute inset-0 w-full h-full bg-cover bg-center brightness-50 blur-[2px] md:blur-none "
        style={{ backgroundImage: `url(${ImagenFondo})` }}
      ></div>
    </div>




      <div className="w-full bg-white h-120 sm:h-200 text-black flex flex-col items-center justify-center">
              
              <h1 className="p-5 font-[1000]  sm:text-[3rem]">UNDER CONSTRUCTION</h1>
      
              <div className="inline-block  p-2">
                <img src={Construction} alt="" className="w-full h-full object-cover  sm:h-130  sm:w-130" />
              </div>
      
            
                
                <button className="m-5 p-2  bg-stone-900 rounded-2xl font-perso text-white"><Link to="/" className="hover:text-blue-200">BACT TO HOME</Link></button>
              
            </div>

        </>
    )
}

export default DetailCity