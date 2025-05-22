import { configureStore } from '@reduxjs/toolkit';
import themeModeSlice from "./themeMode/themeModeSlice"
import authSlice from "./auth/authSlice"
import notificationSlice from "./notification/notificationSlice"
import walletStateSlice from "./walletState/walletStateSlice"
import { authApi } from './auth/authApis';
import { profileSettingApi } from './settings/profileSettingApi';
import { robotApi } from './robot/robotApi';
import { walletStateApis } from './walletState/walletStateApis';

const store = configureStore({
    reducer: {
        themeMode: themeModeSlice,
        auth: authSlice,
        notification: notificationSlice,
        wallet: walletStateSlice,
        [authApi.reducerPath]: authApi.reducer,
        [profileSettingApi.reducerPath]: profileSettingApi.reducer,
        [robotApi.reducerPath]: robotApi.reducer,
        [walletStateApis.reducerPath]: walletStateApis.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            authApi.middleware,
            profileSettingApi.middleware,
            robotApi.middleware,
            walletStateApis.middleware
        )
});

export default store;