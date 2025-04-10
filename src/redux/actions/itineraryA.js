import { createAction,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const openActivities = createAction("itinerary/openActivities")

const getItinerary = createAsyncThunk("itinerary/getItinerary", async(cityId)=>{

    const response = await axios.get(`http://localhost:8080/mytinerary/city/itinerary/byCity/${cityId}`)

    console.log("Se hizo la peticion en el action", response)

    return response.data.response
})

export {openActivities, getItinerary}