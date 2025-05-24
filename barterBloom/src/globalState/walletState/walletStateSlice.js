import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    depositQRData: JSON.parse(localStorage.getItem("depositQRData")) || null,
    selectedReferralCode: localStorage.getItem("selectedReferralCode") || null,
    hasTimedOut: localStorage.getItem("countdown_has_timed_out") === 'true'
};

const walletStateSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setDepositQRData: (state, action) => {
            state.depositQRData = action.payload;
            localStorage.setItem("depositQRData", JSON.stringify(action.payload));
        },
        removeDepositQRData: () => {
            state.depositQRData = null;
            localStorage.removeItem("depositQRData");
        },
        setSelectedReferralCode: (state, action) => {
            localStorage.setItem("selectedReferralCode", action.payload)
            state.selectedReferralCode = action.payload
        },
        setHasTimedOut: (state, action) => {
            state.hasTimedOut = action.payload;
            if (action.payload) {
                localStorage.setItem("countdown_has_timed_out", "true");
                localStorage.removeItem("countdown_end_time");
            } else {
                localStorage.removeItem("countdown_has_timed_out");
            }
        }
    }
});

export const {
    setDepositQRData,
    removeDepositQRData,
    setSelectedReferralCode,
    setHasTimedOut
} = walletStateSlice.actions;
export default walletStateSlice.reducer;