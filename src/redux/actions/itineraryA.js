import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getItinerary = createAsyncThunk("itinerary/getItinerary", async(cityId)=>{
    console.log("Verificando qué id le llega al axios", cityId)

    const response = await axios.get(`http://localhost:8080/mytinerary/city/itinerary/byCity/${cityId}`)

    return response.data.response
})

export {getItinerary}