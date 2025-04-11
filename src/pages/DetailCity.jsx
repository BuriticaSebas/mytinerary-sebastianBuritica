import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Construction from "../assets/construc.png"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getItinerary } from "../redux/actions/itineraryA";
import { useEffect } from "react";
import { statusSoli } from "../redux/reducers/carruselReducer";
import { PiMoneyFill } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbHash } from "react-icons/tb";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const DetailCity = () => {
  const location = useLocation();
  const city = location.state?.city;
  const idCity = city._id;

  const { itineraries, status} = useSelector(
    (state) => state.itinerary
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItinerary(idCity));
  }, [idCity, dispatch]);

  const [openCardId, setOpenCardId] = useState(null);

  const handleToggle = (id) => {
    setOpenCardId(prevId => prevId === id ? null : id);
  };


  const [like, setLike] = useState(0)

  const contadorLike = (id) => {
    setLike((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1
    }));
  };
  


  return (
    <>
      <div className="relative px-4 py-4 w-full min-h-screen md:h-dvh flex flex-col  ">
        <Navbar></Navbar>

        <div className="h-auto flex flex-col justify-center items-center text-center flex-grow z-10">
          <div className="z-20rounded-xl ">
            <h1 className="text-white font-perso text-[clamp(1.5rem,5vw,20rem)] ">
              {city.name},{city.country}
            </h1>
          </div>
        </div>

        <div
          className=" absolute inset-0 w-full h-full bg-cover bg-center brightness-50 blur-[2px] md:blur-none "
          style={{ backgroundImage: `url(${city.imageUrl})` }}
        ></div>
      </div>

      <div className="w-full   text-white flex flex-col items-center justify-center p-3 gap-2 bg-gray-900">
        <div className="my-6">
          <h1 className="text-6xl font-black ">Itineraries</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-3 ">
          {status === statusSoli.SUCCEDED &&
            itineraries.map((iti) => {
              return (
                <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl w-full sm:w-4/5 lg:w-1/2 transition-all duration-500 ease-in-out hover:scale-99 hover:shadow-xl relative">
                  <div className="w-full h-1/2">
                    <img
                      src={city.imageUrl}
                      alt={city.name}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />

                    
                  </div>

                  <div className="p-4 pt-6 flex flex-col gap-2 items-center">
                  <div className="absolute z-50 top-5 left-5 text-white flex items-center gap-2">
                    <button onClick={()=> contadorLike(iti._id)}>
                      {like[iti._id] >= 1 ? <FaHeart className="font-bold text-2xl" />:  <FaRegHeart className="font-bold text-2xl" />}
                    </button>
                    <p className="font-white text-2xl">{like[iti._id] || 0}</p>
                    </div>
                    <div className="text-center mb-3 font-black">
                      <h1 className="font-extrabold text-2xl text-white">
                        {iti.title}
                      </h1>
                      <div className="flex justify-center gap-5 mt-4  text-white ">
                        <span className="flex items-center gap-2">
                          <PiMoneyFill />
                          {iti.price}
                        </span>
                        <span className="flex  items-center gap-2">
                          <FaRegClock />
                          {iti.duration} Hours
                        </span>

                        <div className="flex">
                        {iti.hashtags.map((tag, i) => (
                        <span className="flex items-center m-1 bg-blue-800 rounded-full px-2" key={i}>
                          <TbHash />{tag}
                        </span>
                      ))}

                        </div>
                        
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-center text-white text-sm md:text-base mt-8">
                      
                      <img src={iti.imgUser} alt=""  className="rounded-full"/>
                      <p className="mt-5 text-xl font-bold">By: {iti.nameUser}</p>
                    </div>

                    

                    <button  onClick={()=> handleToggle(iti.id)} className=" bg-blue-600 mt-8 text-white py-2 w-1/4 px-4 rounded-full font-semibold text-sm hover:bg-blue-900 transition-all duration-300">
                    {openCardId === iti.id ? "Hide" : "View All"}
                    </button>

                    
                     {openCardId === iti.id && (
                      <div className="w-full mt-4 bg-gray-700 text-white p-4 rounded-lg transition-all duration-500 ease-in-out">
                       <img src={Construction} alt="" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        <button className="m-5 p-2  py-3 bg-white rounded-2xl font-perso text-black mx-auto hover:bg-gray-200">
          <Link to="/cities" className="font-bold">
            BACk TO CITIES
          </Link>
        </button>
      </div>
    </>
  );
};

export default DetailCity;
