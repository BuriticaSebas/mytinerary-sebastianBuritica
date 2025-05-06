import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Construction from "../assets/construc.png";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItinerary } from "../redux/actions/itineraryA";
import { useEffect, useState } from "react";
import { statusSoli } from "../redux/reducers/carruselReducer";
import { PiMoneyFill } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbHash } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import CreateItinerary from "../components/CreateItinerary";
import { getComments, createComments } from "../redux/actions/coments";
import {resetStatus} from "../redux/actions/resetStatus"

const DetailCity = () => {
  const location = useLocation();
  const city = location.state?.city;
  const idCity = city._id;

  const { itineraries, status } = useSelector((state) => state.itinerary);
  const { commentsByItinerary, createComment } = useSelector((state) => state.comments);
  
  const {login} = useSelector((state)=> state.auth)
  
  const online = login.online


  const {newItinerary} = useSelector((state)=> state.itinerary)
  
  const stateComment = createComment.statusComment
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItinerary(idCity));
  }, [idCity, dispatch,]);

  useEffect(()=>{
    dispatch(getItinerary(idCity));
  }, [newItinerary])

  useEffect(()=>{
    dispatch(getItinerary(idCity));
  }, [online])

  const [openCardId, setOpenCardId] = useState(null);

  
  useEffect(() => {
    if (openCardId) {
      dispatch(getComments(openCardId));
    }
    dispatch(resetStatus())

  }, [stateComment]);


  const handleToggle = (id) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
    dispatch(getComments(id));
    dispatch(resetStatus())
  };


  const [like, setLike] = useState({});

  const contadorLike = (id) => {
    setLike((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  const [modalCreateItinerary, setmodalCreateItinerary] = useState(false);

  const openModalItinerary = () => {
    setmodalCreateItinerary((prev) => !prev);
  };



  const [descriptionComment, setDescriptionComment] = useState({})

  const textComment = (text, idIti)=>{
      setDescriptionComment({
        idIti: idIti,
        description: text
      })
  }

  




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
        <div className="my-6 text-center flex flex-col items-center">
          <h1 className="text-6xl font-black ">Itineraries</h1>

          <button
            className={`p-2 bg-black text-white rounded-lg mt-4 hover:bg-gray-300 hover:text-black  ${
              online ? "block" : "hidden"
            }`}
            onClick={openModalItinerary}
          >
            Create New Itinerary
          </button>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-3 ">
          {status === statusSoli.SUCCEDED &&
            itineraries.map((iti) => {
              return (
                <div
                  key={iti._id}
                  className="bg-gradient-to-r from-gray-800 to-black rounded-2xl w-full sm:w-4/5 lg:w-1/2 transition-all duration-500 ease-in-out hover:scale-99 hover:shadow-xl relative"
                >
                  <div className="w-full h-1/2">
                    <img
                      src={city.imageUrl}
                      alt={city.name}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>

                  <div className="p-4 pt-6 flex flex-col gap-2 items-center">
                    <div className="absolute z-50 top-5 left-5 text-white flex items-center gap-2">
                      <button onClick={() => contadorLike(iti._id)}>
                        {like[iti._id] >= 1 ? (
                          <FaHeart className="font-bold text-2xl" />
                        ) : (
                          <FaRegHeart className="font-bold text-2xl" />
                        )}
                      </button>
                      <p className="font-white text-2xl">
                        {like[iti._id] || 0}
                      </p>
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
                            <span
                              className="flex items-center m-1 bg-blue-800 rounded-full px-2"
                              key={i}
                            >
                              <TbHash />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-center text-white text-sm md:text-base mt-8">
                      <img
                        src={iti.user.urlPhoto}
                        alt=""
                        className="rounded-full w-25"
                      />
                      <p className="mt-5 text-xl font-bold">
                        By: {iti.user.name} {iti.user.lastname}
                      </p>
                    </div>

                    <button
                      onClick={() => handleToggle(iti._id)}
                      className=" bg-blue-600 mt-8 text-white py-2 w-1/4 px-4 rounded-full font-semibold text-sm hover:bg-blue-900 transition-all duration-300"
                    >
                      {openCardId === iti._id ? "Hide" : "View All"}
                    </button>

                    {openCardId === iti._id && (
                      <div className="w-full mt-4 bg-gray-500 text-white p-4 rounded-lg transition-all duration-500 ease-in-out ">
                        <div className="overflow-auto max-h-[400px]">
                          {commentsByItinerary[iti._id]?.length > 0 ? (
                            commentsByItinerary[iti._id].map((comment) => (
                              <div key={comment._id} className="flex mb-5">
                                <img
                                  src={comment.user.urlPhoto}
                                  alt={`${comment.user.name} ${comment.user.lastname}`}
                                  className="rounded-full w-10 self-end"
                                />
                                <div className="flex flex-col">
                                  <div className="bg-white text-black p-2 rounded-tl-lg rounded-tr-lg rounded-br-lg ml-2 max-w-90">
                                    <p className="font-bold text-xs">
                                      {comment.user.name} {comment.user.lastname}
                                    </p>
                                    <small className="text-gray-900 font-light">
                                      {comment.description}
                                    </small>
                                  </div>
                                  <small className="ml-2">
                                    {new Date(comment.date).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </small>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-center text-gray-300 p-3">
                              No comments yet. Be the first to share your thoughts!
                            </p>
                          )}
                        </div>

                        <div className="relative text-center">
                          {online ? <>
                            <input
                            type="text"
                            placeholder="comment"
                            className="bg-black w-full p-2 rounded-lg"
                            onChange={(e)=> textComment(e.target.value, iti._id)}
                          />
                          <button onClick={() =>  dispatch(createComments(descriptionComment))}>
                            <IoSend className="absolute top-3 right-2 hover:text-yellow-200" />
                          </button>
                          </> : 

                          <button className="p-2 text-white bg-black rounded-lg">
                            <Link to="/login">Login</Link>
                          </button>
                          }
                          
                        </div>
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
      <CreateItinerary
        modalCreateiti={modalCreateItinerary}
        cerrarModal={openModalItinerary}
        cityID={idCity}
      ></CreateItinerary>
    </>
  );
};

export default DetailCity;