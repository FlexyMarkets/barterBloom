import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    tempToken: "",
    userData: JSON.parse(localStorage.getItem("userData")) || null,
    forgotPasswordActiveStep: "sendOTP",
    selectedContactForOtp: "",
    emailOnOtpSent: ""
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        logout: (state) => {
            state.token = null;
            state.userData = null;
            // localStorage.removeItem('token');
            // localStorage.removeItem('userData');
            localStorage.clear()
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem("userData", JSON.stringify(action.payload));
        },
        initializeAuth: (state) => {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                state.token = storedToken;
            }
        },
        setForgotPasswordActiveStep: (state, action) => {
            state.forgotPasswordActiveStep = action.payload;
        },
        setSelectedContactForOtp: (state, action) => {
            state.selectedContactForOtp = action.payload
        },
        setTempToken: (state, action) => {
            state.tempToken = action.payload
        },
        setEmailOnOtpSent: (state, action) => {
            state.emailOnOtpSent = action.payload
        }
    },
});

export const {
    login,
    logout,
    setUserData,
    initializeAuth,
    setForgotPasswordActiveStep,
    setSelectedContactForOtp,
    setTempToken,
    setEmailOnOtpSent
} = authSlice.actions;
export default authSlice.reducer;