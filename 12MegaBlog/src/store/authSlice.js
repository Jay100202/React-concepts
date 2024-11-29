import { createSlice } from "@reduxjs/toolkit";

//Now hame initial state ki bhi zarurat padegi to ham kya he store se ouchege klike kyay user authenticated he ki nai

const initialState = {
    status: false,
    userData:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    // aab ham dege reducer
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null
        }
    }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer;