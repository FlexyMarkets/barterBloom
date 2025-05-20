import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionStateApis = createApi({
    reducerPath: "transaction",
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
    tagTypes: ["transactionList", "pendingTransactionList"],
    endpoints: (builder) => ({
        // clientDeposit: builder.mutation({
        //     query: (data) => ({
        //         url: "/client/deposit",
        //         method: "POST",
        //         body: data
        //     }),
        //     invalidatesTags: [{ type: "transactionList", id: "PARTIAL-LIST" }]
        // }),
        // clientWithdraw: builder.mutation({
        //     query: (data) => ({
        //         url: "/client/withdraw",
        //         method: "POST",
        //         body: data
        //     }),
        //     invalidatesTags: [{ type: "transactionList", id: "PARTIAL-LIST" }]
        // }),
        // walletDeposit: builder.mutation({
        //     query: (data) => ({
        //         url: "/wallet/deposit",
        //         method: "POST",
        //         body: data
        //     }),
        //     invalidatesTags: [{ type: "transactionList", id: "PARTIAL-LIST" }]
        // }),
        // walletWithdraw: builder.mutation({
        //     query: (data) => ({
        //         url: "/wallet/withdraw",
        //         method: "POST",
        //         body: data
        //     }),
        //     invalidatesTags: [{ type: "transactionList", id: "PARTIAL-LIST" }]
        // }),
        // internalTransfer: builder.mutation({
        //     query: (data) => ({
        //         url: "/internal/transfer",
        //         method: "POST",
        //         body: data
        //     }),
        //     invalidatesTags: [{ type: "transactionList", id: "PARTIAL-LIST" }]
        // }),
        transactionsList: builder.query({
            query: ({ page = 1, sizePerPage = 10, status, transactionType, startDate, endDate }) => {
                const params = {};
                if (page > 0) params.page = page;
                if (sizePerPage > 0) params.sizePerPage = sizePerPage;
                if (status) params.status = status;
                if (transactionType) params.transactionType = transactionType;
                if (startDate) params.startDate = startDate;
                if (endDate) params.endDate = endDate;

                return {
                    url: "/wallet",
                    params,
                };
            },

            providesTags: (result) => {
                const data = result?.data?.usersList || []
                return data.length > 0
                    ?
                    [
                        ...data.map(({ id }) => ({ type: 'transactionList', id })),
                        { type: 'transactionList', id: 'PARTIAL-LIST' },
                    ]
                    :
                    [{ type: 'transactionList', id: 'PARTIAL-LIST' }]
            },
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: true,
        }),
        // pendingTransactionList: builder.query({
        //     query: ({ page = 1, sizePerPage = 10, search = "", status, transactionType, paymentMethod, fromDate, toDate }) => {
        //         const params = {};
        //         if (page > 0) params.page = page;
        //         if (sizePerPage > 0) params.sizePerPage = sizePerPage;
        //         if (search) params.search = search;
        //         if (status) params.status = status;
        //         if (transactionType) params.transactionType = transactionType;
        //         if (paymentMethod) params.paymentMethods = paymentMethod;
        //         if (fromDate) params.fromDate = fromDate;
        //         if (toDate) params.toDate = toDate;

        //         return {
        //             url: "/deposit-withdraw/list",
        //             params,
        //         };
        //     },
        //     providesTags: (result) => {
        //         const data = result?.data?.usersList || []
        //         return data.length > 0
        //             ?
        //             [
        //                 ...data.map(({ id }) => ({ type: 'pendingTransactionList', id })),
        //                 { type: 'pendingTransactionList', id: 'PARTIAL-LIST' },
        //             ]
        //             :
        //             [{ type: 'pendingTransactionList', id: 'PARTIAL-LIST' }]
        //     },
        //     keepUnusedDataFor: 60,
        //     refetchOnMountOrArgChange: true,
        // }),
        // pendingTransactionById: builder.query({
        //     query: ({ id }) => ({
        //         url: `/deposit-withdraw/${id}`,
        //     }),
        //     providesTags: (result, error, { id }) => [{ type: 'pendingTransactionById', id }],
        // }),
        // editPendingTransactionStatus: builder.mutation({
        //     query: (data) => ({
        //         url: "/update/deposit-withdraw",
        //         method: "PUT",
        //         body: data
        //     }),
        //     invalidatesTags: (result, error, { depositId }) => [
        //         { type: "pendingTransactionList", id: "PARTIAL-LIST" },
        //         { type: "pendingTransactionById", id: depositId }
        //     ]
        // }),
    })
})

export const {
    useClientDepositMutation,
    useClientWithdrawMutation,
    useWalletDepositMutation,
    useWalletWithdrawMutation,
    useInternalTransferMutation,
    useTransactionsListQuery,
    usePendingTransactionListQuery,
    usePendingTransactionByIdQuery,
    useEditPendingTransactionStatusMutation
} = transactionStateApis;