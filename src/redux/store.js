import { configureStore } from "@reduxjs/toolkit";
import carruselReducer from "./reducers/carruselReducer";
import searchCityR from "./reducers/searchCityR";
import itineraryR from "./reducers/itineraryR";
import authReducer from "./reducers/authR";
import commentsR from "./reducers/commentsR";

const store = configureStore({
    reducer:{
        carrusel: carruselReducer,
        searchCity: searchCityR,
        itinerary: itineraryR,
        auth: authReducer,
        comments: commentsR
    }
})

export default store