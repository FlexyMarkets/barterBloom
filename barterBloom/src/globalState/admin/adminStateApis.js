import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminStateApis = createApi({
    reducerPath: "adminApis",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://barter.boostbullion.com",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        }
    }),
    tagTypes: ["transactionList", "pendingTransactionList"],
    endpoints: (builder) => ({
        addFund: builder.mutation({
            query: (data) => ({
                url: "/admin/transaction/deposit/usdt",
                method: "POST",
                body: data
            })
        }), 
    })
})

export const {
   useAddFundMutation
} = adminStateApis;