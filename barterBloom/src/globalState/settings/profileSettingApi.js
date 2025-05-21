import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileSettingApi = createApi({
    reducerPath: "profileSettingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["bankDetails"],
    endpoints: (builder) => ({
        updateProfile: builder.mutation({
            query: (data) => ({
                url: "/profile/update",
                method: "PUT",
                body: data
            })
        }),
        getTransactionData: builder.query({
            query: ({ page = 1, sizePerPage = 10, status = "", transactionType = "" }) => {
                const params = new URLSearchParams();
                params.append("page", page);
                params.append("sizePerPage", sizePerPage);
                if (status) params.append("status", status);
                if (transactionType) params.append("transactionType", transactionType);

                return `transaction/list?${params.toString()}`;
            }
        }),
        // getReferralList: builder.query({
        //     query: () => `/referral/list`,
        // }),
    })
})

export const {
    useSetTransactionPasswordMutation,
    useUpdateTransactionPasswordMutation,
    useBankKYCMutation,
    useGetBankDetailsQuery,
    useUpdateProfileMutation,
    useGetTransactionDataQuery,
    // useGetReferralListQuery
} = profileSettingApi;