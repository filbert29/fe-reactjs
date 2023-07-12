import { createSlice } from "@reduxjs/toolkit";
import localstorage from "../helper/localstorage";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user: localstorage.getFromLocalStorage("token") || null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localstorage.setToLocalStorage("token", action.payload)
        },
        logout: (state) => {
            state.user = null;
            localstorage.removeFromLocalStorage("token")
            window.location.reload()
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;