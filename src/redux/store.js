import { configureStore } from "@reduxjs/toolkit";
import carruselReducer from "./reducers/carruselReducer";
import searchCityR from "./reducers/searchCityR";
import itineraryR from "./reducers/itineraryR";

const store = configureStore({
    reducer:{
        carrusel: carruselReducer,
        searchCity: searchCityR,
        itinerary: itineraryR 
    }
})

export default store