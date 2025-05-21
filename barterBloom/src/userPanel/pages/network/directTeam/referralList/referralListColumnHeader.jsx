import { createMRTColumnHelper } from 'material-react-table';
import { Typography } from '@mui/material';

const columnHelper = createMRTColumnHelper();

export const referralListColumnHeader = [
    columnHelper.accessor('loginId', {
        header: 'Login Id',
        size: 40,
    }),
    columnHelper.accessor('name', {
        header: 'Name',
        size: 40,
    }),
    columnHelper.accessor('referralCode', {
        header: 'Referral Code',
        size: 40,
    }),
    // columnHelper.accessor('email', {
    //     header: 'Email',
    //     size: 120,
    // }),
    columnHelper.accessor('sponser', {
        header: 'Sponser',
        size: 120,
    }),
    columnHelper.accessor('totalTeamTurnoverBalance', {
        header: 'Total team turnover balance',
        size: 250,
    }),

    // columnHelper.accessor('totalTeam', {
    //     header: 'Total Team',
    //     size: 150,
    // }),
    // columnHelper.accessor('totalRewardBalance', {
    //     header: 'Total reward balance',
    //     size: 200,
    // }),
    columnHelper.accessor('totalStakedBalance', {
        header: 'Total staked balance',
        size: 200,
    }),
    columnHelper.accessor('directReferralTeam', {
        header: 'Direct referral team',
        size: 250,
    })
];