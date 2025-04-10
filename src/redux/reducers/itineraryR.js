import { createReducer } from "@reduxjs/toolkit";
import { openActivities, getItinerary } from "../actions/itineraryA";
import { statusSoli } from "./carruselReducer";

const initialState = {
    itineraries: [],
    isOpen: false,
    status: statusSoli.IDLE
}


const itineraryR = createReducer(initialState, (builder) =>{

    builder.addCase(getItinerary.fulfilled, (state, action) =>{
        state.itineraries = action.payload
        state.status = statusSoli.SUCCEDED
    })

    builder.addCase(getItinerary.pending, (state, action)=>{
        state.status =statusSoli.PENDING
    })

    builder.addCase(getItinerary.rejected , (state,action)=>{
        state.status = statusSoli.FAILED
    })


    builder.addCase(openActivities, (state) =>{
        state.isOpen = !state.isOpen;
    })
})

export default itineraryR