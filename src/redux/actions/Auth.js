import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerrUser = createAsyncThunk("auth/register", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/mytinerary/user/register",
      data
    );

    return response.data;
  } catch (error) {
    console.log("que esta pasando", error);
    throw error;
  }
});

const loginUser = createAsyncThunk("auth/login", async (data) => {
  localStorage.clear()
  try {
    const response = await axios.post(
      "http://localhost:8080/mytinerary/user/login",
      data
    );
    const info = response.data;

    localStorage.setItem("token", info.token)
    localStorage.setItem("idUser", info.user.id)
    localStorage.setItem("nameuser", info.user.name)
    localStorage.setItem("lastnameuser", info.user.lastname)
    localStorage.setItem("emailUser", info.user.email)
    localStorage.setItem("photouser", info.user.urlPhoto)
    localStorage.setItem("online", JSON.stringify(info.user.online));

    return info;

  } catch (error) {
    console.log(error);
    throw error;
  }
});

export { registerrUser, loginUser };
