import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: 'happy',
    isLoading: true,
    error: 'error',
}

const userSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {},
    // extraReducers: {},
})

export default userSlice.reducer;
export const {} = userSlice.actions