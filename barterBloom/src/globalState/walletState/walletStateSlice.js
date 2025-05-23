import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    depositQRData: JSON.parse(localStorage.getItem("depositQRData")) || null,
    selectedReferralCode: localStorage.getItem("selectedReferralCode") || null
};

const walletStateSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setDepositQRData: (state, action) => {
            console.log(action.payload)
            state.depositQRData = action.payload;
            localStorage.setItem("depositQRData", JSON.stringify(action.payload));
        },
        setSelectedReferralCode: (state, action) => {
            localStorage.setItem("selectedReferralCode", action.payload)
            state.selectedReferralCode = action.payload
        }
    }
});

export const {
    setDepositQRData,
    setSelectedReferralCode
} = walletStateSlice.actions;
export default walletStateSlice.reducer;