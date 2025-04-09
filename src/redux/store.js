import { configureStore } from "@reduxjs/toolkit";
import carruselReducer from "./reducers/carruselReducer";



const store = configureStore({
    reducer:{
        carrusel: carruselReducer
    }
})

export default store