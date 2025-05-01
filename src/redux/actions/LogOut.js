import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logOutUser = createAsyncThunk("user/logout", async (emailUser) => {
    const response = await axios.post("http://localhost:8080/mytinerary/user/logout", {
        email: emailUser
    });

    localStorage.clear();

    return response.data;
});
