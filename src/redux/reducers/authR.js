import { createReducer } from "@reduxjs/toolkit";
import { registerrUser, loginUser } from "../actions/Auth";
import {resetStatusLogin,resetStatusRegister} from "../actions/resetStatus.js"
import { logOutUser } from "../actions/LogOut.js";

export const statusSoli = {
    IDLE: "idle",
    PENDING: "pending",
    SUCCEDED: "succeded",
    FAILED: "failed",
};

const initialState = {
    registerr: {
        status: statusSoli.IDLE,
    },
    login: {
        status: statusSoli.IDLE,
        online:  JSON.parse(localStorage.getItem("online"))
    }
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        // Registro
        .addCase(registerrUser.pending, (state) => {
            state.registerr.status = statusSoli.PENDING;
        })
        .addCase(registerrUser.fulfilled, (state) => {
            state.registerr.status = statusSoli.SUCCEDED;
        })
        .addCase(registerrUser.rejected, (state) => {
            state.registerr.status = statusSoli.FAILED;
        })

        // Login
        .addCase(loginUser.pending, (state) => {
            state.login.status = statusSoli.PENDING;
        })
        .addCase(loginUser.fulfilled, (state) => {
            state.login.status = statusSoli.SUCCEDED;
            state.login.online = localStorage.getItem("online")
        })
        .addCase(loginUser.rejected, (state) => {
            state.login.status = statusSoli.FAILED;
        })

        //ResetStatusRegister
        .addCase(resetStatusRegister, (state)=>{
            state.registerr.status = statusSoli.IDLE
        })

        .addCase(resetStatusLogin, (state)=>{
            state.login.status = statusSoli.IDLE
        })

        //LogOut
        .addCase(logOutUser.pending, (state) => {
            state.registerr.status = statusSoli.PENDING;
        })
        .addCase(logOutUser.fulfilled, (state) => {
            state.registerr.status = statusSoli.SUCCEDED;
            state.login.online = localStorage.getItem("online")
        })
        .addCase(logOutUser.rejected, (state) => {
            state.registerr.status = statusSoli.FAILED;
        })
});

export default authReducer;
