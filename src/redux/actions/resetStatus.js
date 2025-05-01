import { createAction } from "@reduxjs/toolkit";

export const resetStatusRegister = createAction("register/resetStatus");

export const resetStatusLogin = createAction("login/resetStatus");


export const resetStatus = createAction("general/resetstatus")