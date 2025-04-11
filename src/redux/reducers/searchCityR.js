import { createReducer } from "@reduxjs/toolkit";
import { changeSearch } from "../actions/searchCityA";



const initialState = {
    busqueda: "",
}

const searchCityR = createReducer(initialState, (builder)=>{

    builder.addCase(changeSearch, (state, action)=>{
        state.busqueda = action.payload
    })
})

export default searchCityR