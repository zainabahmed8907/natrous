import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false
}
const userSlice = createSlice({
    name: "user",
    initialState,

})

export default userSlice.reducer;