// actions/commentsA.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk("getcoments/itinerary", async (idIti) => {

    try {
        const response = await axios.get(`http://localhost:8080/mytinerary/city/itinerary/getComments/${idIti}`);

    return {
        itineraryId: idIti,
        comments: response.data.data
    };
    } catch (error) {
        console.log(error)
    }
});


export const createComments = createAsyncThunk("createComments/itinerary", async (data) => {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.post(
            `http://localhost:8080/mytinerary/city/itinerary/createcomment/${data.idIti}`,
            { description: data.description },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
});
