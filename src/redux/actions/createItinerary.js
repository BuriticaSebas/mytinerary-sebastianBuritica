import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createItinerary = createAsyncThunk("create/itinerary", async (data, thunkAPI) => {
  try {
    const token = localStorage.getItem("token"); 

    const response = await axios.post(
      "http://localhost:8080/mytinerary/city/itinerary/create",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Error al crear itinerario");
  }
});

