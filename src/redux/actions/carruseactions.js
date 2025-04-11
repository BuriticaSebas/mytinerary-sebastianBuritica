import { createAction,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getCities = createAsyncThunk('carrusel/getCities', async ()=>{
    const response = await axios.get('https://mytinerary-back-jhosefburitica.onrender.com/mytinerary/city/allCities')
    console.log("Ese es el array que devuelve", response.data)
    return response.data.response; 

})

const backSlide = createAction("carrusel/backSlide")
const nextSlide = createAction("carrusel/nextSlide")

export {getCities, backSlide,nextSlide} 

