import { configureStore } from '@reduxjs/toolkit';
import themeModeSlice from "./themeMode/themeModeSlice"
import authSlice from "./auth/authSlice"
import notificationSlice from "./notification/notificationSlice"
import { authApi } from './auth/authApis';
import { profileSettingApi } from './settings/profileSettingApi';
import { robotApi } from './robot/robotApi';
import { transactionStateApis } from './transactionState/transactionStateApis';

const store = configureStore({
    reducer: {
        themeMode: themeModeSlice,
        auth: authSlice,
        notification: notificationSlice,
        [authApi.reducerPath]: authApi.reducer,
        [profileSettingApi.reducerPath]: profileSettingApi.reducer,
        [robotApi.reducerPath]: robotApi.reducer,
        [transactionStateApis.reducerPath]: transactionStateApis.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            authApi.middleware,
            profileSettingApi.middleware,
            robotApi.middleware,
            transactionStateApis.middleware
        )
});

export default store;