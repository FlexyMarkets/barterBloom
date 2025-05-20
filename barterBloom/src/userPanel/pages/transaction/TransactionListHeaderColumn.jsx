import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';

const columnHelper = createMRTColumnHelper();

export const transactionListHeaderColumn = [
    columnHelper.accessor('_id', {
        header: 'ID',
        size: 40,
    }),
    columnHelper.accessor('user', {
        header: 'User',
        size: 40,
    }),
    columnHelper.accessor('chain', {
        header: 'Chain',
        size: 120,
    }),
    columnHelper.accessor('balanceType', {
        header: 'Balance Type',
        size: 120,
    }),
    columnHelper.accessor('currentBalance', {
        header: 'Current Balance',
        size: 120,
    }),

    columnHelper.accessor('transactionType', {
        header: 'Transaction Type',
        size: 150,
    }),
    columnHelper.accessor('amount', {
        header: 'Amount',
        size: 150,
    }),
      columnHelper.accessor('status', {
        header: 'Status',
        size: 150,
    }),
    columnHelper.accessor('description', {
        header: 'Description',
        size: 250,
    }),
    columnHelper.accessor('createdAt', {
        header: 'Registration Date',
        size: 200,
        Cell: ({ row }) => (
            <Typography>
                {new Date(row.original.createdAt).toLocaleString()}
            </Typography>
        ),
    }),
];