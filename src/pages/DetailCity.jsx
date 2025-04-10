import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
//import Construction from "../assets/construc.png"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openActivities, getItinerary } from "../redux/actions/itineraryA";
import { useEffect } from "react";
import { statusSoli } from "../redux/reducers/carruselReducer";
import { PiMoneyFill } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbHash } from "react-icons/tb";

const DetailCity = () => {
  const location = useLocation();
  const city = location.state?.city;

  const id_ciudad = city._id;
  console.log(id_ciudad);

  const { itineraries, status, isOpen } = useSelector(
    (state) => state.itinerary
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== statusSoli.IDLE) return;

    dispatch(getItinerary(id_ciudad));
  }, []);

  console.log("estos son los itinerarios", itineraries);

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

      <div className="w-full bg-white  text-black flex flex-col items-center justify-center p-3 gap-2">
        <div>
          <h1 className="text-6xl font-black ">Itineraries</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-3 ">
          {itineraries.map((iti) => {
            return (
              <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-full sm:w-5/6 rounded-2xl flex justify-center">
                <div className="flex flex-col text-white p-5 text-center  gap-6">
                  <div>
                    <h1 className="font-black">{iti.title}</h1>
                  </div>

                  <div className="flex flex-col items-center">
                    <span>
                      <img src={iti.imgUser} alt="" className="rounded-full" />
                    </span>
                    <span className="font-bold">By: {iti.nameUser}</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <button className="flex items-center gap-1">
                      <FaRegHeart />
                      {iti.likes}
                    </button>
                    <span className="flex items-center gap-1">
                      <FaRegClock />
                      {iti.duration} Hours
                    </span>
                    <span className="flex items-center gap-1">
                      <PiMoneyFill />
                      {iti.price}
                    </span>
                  </div>

                  <div className="flex gap-2 justify-center">
                    {iti.hashtags.map((tag, i) => (
                      <span className="flex items-center gap-1" key={i}> <TbHash />{tag}</span>
                    ))}
                  </div>
                  <div>
                    <button className="bg-white px-3 py-1 rounded-2xl text-black font-black">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="m-5 p-2  bg-stone-900 rounded-2xl font-perso text-white">
          <Link to="/cities" className="hover:text-blue-200">
            BACT TO CITIES
          </Link>
        </button>
      </div>
    </>
  );
};

export default DetailCity;
