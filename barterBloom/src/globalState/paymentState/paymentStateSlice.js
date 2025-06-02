import { createSlice } from '@reduxjs/toolkit';

const safeParse = (key) => {
    try {
        const item = localStorage.getItem(key);
        if (!item || item === "undefined" || item === "null") return null;
        return JSON.parse(item);
    } catch {
        return null;
    }
};

const initialState = {
    depositQRData: safeParse("depositQRData"),
    selectedReferralCode: localStorage.getItem("selectedReferralCode") || null,
    hasTimedOut: false,
    countdownEndTime: parseInt(localStorage.getItem("countdown_end_time")) || null,
    createdTime: parseInt(localStorage.getItem("created_time")) || null,
    expireTime: parseInt(localStorage.getItem("expire_time")) || null,
    paymentLoading: localStorage.getItem("payment_loading") || false
};

const paymentStateSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setDepositQRData: (state, action) => {
            const value = action.payload ?? null;
            state.depositQRData = value;
            localStorage.setItem("depositQRData", JSON.stringify(value));
        },
        setCreatedTime: (state, action) => {
            state.createdTime = action.payload;
            localStorage.setItem("created_time", action.payload);
        },
        setExpireTime: (state, action) => {
            state.expireTime = action.payload;
            localStorage.setItem("expire_time", action.payload);
        },
        setPaymentLoading: (state, action) => {
            state.paymentLoading = action.payload;
            localStorage.setItem("payment_loading", action.payload);
        },
        removeDepositQRData: (state) => {
            state.depositQRData = null;
            localStorage.removeItem("depositQRData");
        },
        removeCreatedTime: (state) => {
            state.createdTime = null;
            localStorage.removeItem("created_time");
        },
        removeExpireTime: (state) => {
            state.expireTime = null;
            localStorage.removeItem("expire_time");
        },
        removePaymentLoading: (state) => {
            state.paymentLoading = null;
            localStorage.removeItem("payment_loading");
        },
        setSelectedReferralCode: (state, action) => {
            localStorage.setItem("selectedReferralCode", action.payload)
            state.selectedReferralCode = action.payload
        },
        setHasTimedOut: (state, action) => {
            state.hasTimedOut = action.payload;
            if (action.payload) {
                state.countdownEndTime = null;
                localStorage.removeItem("countdown_end_time");
            }
        },
        setCountdownEndTime: (state, action) => {
            state.countdownEndTime = action.payload;
            localStorage.setItem("countdown_end_time", action.payload);
        }
    }
});

export const {
    setDepositQRData,
    removeDepositQRData,
    removeCreatedTime,
    removeExpireTime,
    removePaymentLoading,
    setSelectedReferralCode,
    setHasTimedOut,
    setCountdownEndTime,
    setCreatedTime,
    setExpireTime,
    setPaymentLoading
} = paymentStateSlice.actions;
export default paymentStateSlice.reducer;