import { createReducer } from "@reduxjs/toolkit";
import { getItinerary } from "../actions/itineraryA";
import { statusSoli } from "./carruselReducer";

const initialState = {
    itineraries: [],
    status: statusSoli.IDLE,
    like: 0
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

})

export default itineraryR