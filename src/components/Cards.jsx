import Alemania from "../assets/ciudades/alemania.jpg";
import { SiGooglemaps } from "react-icons/si";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

const Cards = ({cities}) => {

  

  return (
    <>      
   <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl overflow-hidden w-full md:h-[400px]  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
      
      <div className="w-full h-1/2 overflow-hidden relative">
        <img src={cities.imageUrl} alt={cities.name} className="w-full h-full object-cover rounded-t-2xl" />
      </div>

     
      <div className="p-4 pt-6">
      
        <div className="text-center mb-3">
          <h3 className="font-extrabold text-2xl text-white">{cities.name}</h3>
          <p className="font-medium text-sm text-gray-400">{cities.country}</p>
        </div>

  
        <div className="flex justify-between items-center text-white text-sm md:text-base">
          <div className="flex items-center gap-2">
            <GrLanguage className="text-md" />
            <p>Language</p>
          </div>
          <p className="font-semibold">{cities.language}</p>
        </div>

        {/* Divider */}
        <div className="my-4 h-[1px] bg-white opacity-40"></div>

        {/* Botón */}
        <button className=" bg-blue-600 text-white py-2 px-4 rounded-full font-semibold text-sm hover:bg-blue-900 transition-all duration-300">
          <Link to="/detailCity" state={{ city: cities }}>Explore Now!</Link>
        </button>
      </div>
    </div>
    </>
  );
};
export default Cards;


