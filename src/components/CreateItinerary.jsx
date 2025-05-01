import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {createItinerary }from "../redux/actions/createItinerary";
import { statusSoli } from "../redux/reducers/authR";
import { resetStatus } from "../redux/actions/resetStatus";

const CreateItinerary = ({ modalCreateiti, cerrarModal, cityID }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const dispatch = useDispatch()
  const onSubmit = (data) => {
    const userId = localStorage.getItem("idUser")
    const formattedData = {
      ...data,
      city: cityID,
      user: userId,
      hashtags: data.hashtags.split(",").map((tag) => tag.trim()),
      
    };

    console.log("Datos enviados:", formattedData);

    dispatch(createItinerary(formattedData))
    
  };

  const {newItinerary} = useSelector((state)=> state.itinerary)


  useEffect(()=>{
    if (newItinerary == statusSoli.SUCCEDED){
      cerrarModal()
    }

    setTimeout(() => {
      dispatch(resetStatus())
    }, 100);

  }, [newItinerary])

  

  if (!modalCreateiti) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white text-center rounded-2xl shadow-lg w-2/3 sm:w-full max-w-md p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Create new Itinerary</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration (hours)</label>
            <input
              type="text"
              {...register("duration", { required: "Duration is required" })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
            {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hashtags (comma separated)</label>
            <input
              {...register("hashtags", {
                required: "Hashtags are required",
                validate: (value) =>
                  value.split(",").filter((tag) => tag.trim() !== "").length > 0 ||
                  "Enter at least one hashtag",
              })}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
            {errors.hashtags && <p className="text-red-500 text-sm">{errors.hashtags.message}</p>}
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={cerrarModal}
              className="mt-4 px-4 py-2 bg-black hover:bg-gray-700 text-white font-medium rounded-md transition duration-200"
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition duration-200"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateItinerary;

