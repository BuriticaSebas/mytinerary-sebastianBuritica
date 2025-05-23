import { createReducer } from "@reduxjs/toolkit";
import { backSlide, getCities, nextSlide } from "../actions/carruseactions";

export const statusSoli = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCEDED: "succeded",
  FAILED: "failed",
};

const carrusel = {
  cities: [],
  currentPosition: 0,
  status: statusSoli.IDLE,
};

const carruselReducer = createReducer(carrusel, (builder) => {
  builder.addCase(getCities.fulfilled, (state, action) => {
    state.cities = action.payload;
    state.status = statusSoli.SUCCEDED;
  });

  builder.addCase(getCities.pending, (state) => {
    state.status = statusSoli.PENDING;
  });

  builder.addCase(getCities.rejected, (state) => {
    state.status = statusSoli.FAILED;
  });

  builder.addCase(backSlide, (state) => {
    const totalSlides = Math.ceil(state.cities.length / 4);
    state.currentPosition =
      (state.currentPosition - 1 + totalSlides) % totalSlides;
  });
  
  builder.addCase(nextSlide, (state) => {
    const totalSlides = Math.ceil(state.cities.length / 4);
    state.currentPosition = (state.currentPosition + 1) % totalSlides;
  });
  

});

export default carruselReducer;
