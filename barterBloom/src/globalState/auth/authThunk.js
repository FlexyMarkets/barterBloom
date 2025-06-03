import { logout } from './authSlice';
import {
    removeCreatedTime,
    removeDepositQRData,
    removeExpireTime,
    removePaymentLoading,
    setHasTimedOut
} from '../paymentState/paymentStateSlice';

export const logoutThunk = () => (dispatch) => {
    dispatch(logout());

    dispatch(removeDepositQRData());
    dispatch(removeCreatedTime());
    dispatch(removeExpireTime());
    dispatch(removePaymentLoading());
    dispatch(setHasTimedOut(true));
};