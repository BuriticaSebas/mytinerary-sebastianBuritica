import { configureStore } from "@reduxjs/toolkit";
import carruselReducer from "./reducers/carruselReducer";
import searchCityR from "./reducers/searchCityR";

const store = configureStore({
    reducer:{
        carrusel: carruselReducer,
        searchCity: searchCityR
    }
})

export default store