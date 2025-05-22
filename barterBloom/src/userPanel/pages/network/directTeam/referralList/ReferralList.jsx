import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    Button,
    Container,
    Typography,
    Stack,
    InputLabel,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { useState, useMemo, useCallback, useEffect } from 'react';
import { referralListColumnHeader } from './referralListColumnHeader';
import { useGetReferralInfoQuery } from '../../../../../globalState/walletState/walletStateApis';
import { walletStateApis } from '../../../../../globalState/walletState/walletStateApis';
// import Selector from '../../../components/Selector';
// import Selector from '../../userPanelComponent/Selector';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useGetReferralListQuery } from '../../../../../globalState/walletState/walletStateApis';
import { parseReferralTree, collectAllReferralCodes } from '../../../../utils/parseReferralTree';
import { useDispatch } from 'react-redux';

// const STATUS_OPTIONS = ["PENDING", "COMPLETED", "PROCESSING", "REJECTED"];
// const TRANSACTION_TYPES = ["CLIENT-DEPOSIT", "CLIENT-WITHDRAW", "WALLET-DEPOSIT", "WALLET-WITHDRAW", "IB-WITHDRAW", "INTERNAL-TRANSFER"];

// const handleExportToExcel = (rows) => {
//     const worksheet = XLSX.utils.json_to_sheet(rows);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
//     XLSX.writeFile(workbook, 'transactionList.xlsx');
// };

function ReferralList() {

    // const dispatch = useDispatch();
    // const [referralUsers, setReferralUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const { userData } = useSelector(state => state.auth)

    // const { data, isLoading: referralListLoading } = useGetReferralListQuery()

    // const listData = data?.data ? parseReferralTree(data?.data) : [];

    // const allReferralCodes = collectAllReferralCodes(listData);

    // console.log(allReferralCodes)

    const { data: referralInfoData, isLoading } = useGetReferralInfoQuery({ referralCode: userData?.referralCode }, { skip: !userData?.referralCode })

    // useEffect(() => {
    //     if (!allReferralCodes || allReferralCodes.length === 0) return;

    //     const fetchAll = async () => {
    //         setLoading(true);
    //         try {
    //             const promises = allReferralCodes.map(code =>
    //                 dispatch(walletStateApis.endpoints.getReferralInfo.initiate({ referralCode: code })).unwrap()
    //             );

    //             const results = await Promise.all(promises);
    //             setReferralUsers(results.map(res => res.data));
    //         } catch (err) {
    //             console.error("Error fetching referral infos:", err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchAll();
    // }, [allReferralCodes, dispatch]);

    const referralInfo = referralInfoData?.data

    console.log(referralInfo)

    const table = useMaterialReactTable({
        columns: referralListColumnHeader,
        data: [referralInfo],
        enableColumnFilters: false,
        enableSorting: false,
        enableColumnActions: false,
        enablePagination: false,
        manualPagination: true,
        manualFiltering: true,
        // rowCount: listData?.data?.totalRecords || 0,
        state: {
            // pagination,
            isLoading,
            // showAlertBanner: isError,
        },
        // onPaginationChange: setPagination,
        columnFilterDisplayMode: "popover",
        enableGlobalFilter: false,
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        // renderTopToolbarCustomActions: () => (
        //     <Box
        //         sx={{
        //             display: 'flex',
        //             gap: 2,
        //             padding: 1,
        //             flexWrap: 'wrap',
        //         }}
        //     >
        //         <Button
        //             variant="contained"
        //             onClick={() => handleExportToExcel(transactionsListData)}
        //             startIcon={<FileDownloadIcon sx={{ color: "white" }} />}
        //             sx={{
        //                 textTransform: 'none',
        //                 color: 'white',
        //                 boxShadow: 'none',
        //                 bgcolor: "primary.main",
        //                 '&:hover': { boxShadow: 'none' },
        //             }}
        //         >
        //             Excel
        //         </Button>
        //     </Box>
        // ),
    });

    // const handleFilterChange = useCallback((key, value) => {
    //     setFilters((prev) => ({ ...prev, [key]: value }));
    // }, []);

    return (
        <Container sx={{ mt: "100px" }}>
            <Typography variant='h5' fontWeight={700} fontSize="1.8rem" mb={4}>
                Referral List
            </Typography>
            <Stack sx={{ mt: 4, borderRadius: 2, overflow: 'hidden' }}>
                <MaterialReactTable table={table} />
            </Stack>
        </Container>
    );
};

export default ReferralList;