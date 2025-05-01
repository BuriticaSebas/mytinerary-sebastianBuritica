import { createReducer } from "@reduxjs/toolkit";
import { getItinerary} from "../actions/itineraryA";
import { statusSoli } from "./carruselReducer";
import { resetStatus } from "../actions/resetStatus";
import { createItinerary } from "/src/redux/actions/createItinerary.js";

const initialState = {
    itineraries: [],
    status: statusSoli.IDLE,
    like: 0,
    newItinerary: statusSoli.IDLE
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

    .addCase(createItinerary.fulfilled, (state)=>{
        state.newItinerary = statusSoli.SUCCEDED
    })

    .addCase(resetStatus, (state)=>{
        state.newItinerary = statusSoli.IDLE
    })
})

export default itineraryR