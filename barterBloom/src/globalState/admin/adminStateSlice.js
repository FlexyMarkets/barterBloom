import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    role: localStorage.getItem("role") || null
};

const adminStateSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload
            localStorage.setItem("role", action.payload)
        },
    }
});

export const { setRole } = adminStateSlice.actions;
export default adminStateSlice.reducer;