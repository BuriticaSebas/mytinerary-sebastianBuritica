import { createReducer } from "@reduxjs/toolkit";
import { getComments,createComments } from "../actions/coments";
import { statusSoli } from "./carruselReducer";
import {resetStatus} from "../actions/resetStatus.js"

const initialState = {
    commentsByItinerary: {},
    statusC: statusSoli.IDLE,
    createComment: {
        statusComment: statusSoli.IDLE
    }
};

const commentsR = createReducer(initialState, (builder) => {
    builder
        .addCase(getComments.pending, (state) => {
            state.statusC = statusSoli.PENDING;
        })
        .addCase(getComments.fulfilled, (state, action) => {
            const { itineraryId, comments } = action.payload;
            state.commentsByItinerary[itineraryId] = comments;
            state.statusC = statusSoli.SUCCEDED;
        })
        .addCase(getComments.rejected, (state) => {
            state.statusC = statusSoli.FAILED;
        })

        .addCase(createComments.fulfilled , (state)=>{
            state.createComment.statusComment = statusSoli.SUCCEDED
        })

        .addCase(resetStatus, (state) =>{
            state.createComment.statusComment = statusSoli.IDLE
        })
});

export default commentsR;
