import { Stack, Container, Typography } from '@mui/material';
import ReferralTree from './referralTree/ReferralTree';
import { useGetReferralListQuery, useGetReferralInfoQuery } from '../../../../globalState/walletState/walletStateApis';
import ReferralInfo from './referralInfo/ReferralInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedReferralCode } from '../../../../globalState/walletState/walletStateSlice';
import { parseReferralTree } from "../../../utils/parseReferralTree"
import Grid from "@mui/material/Grid2"

function DirectTeam() {

    const { selectedReferralCode } = useSelector(state => state.wallet)

    const { data: referralInfoData, isLoading: referralInfoDataLoading } = useGetReferralInfoQuery({ referralCode: selectedReferralCode }, { skip: !selectedReferralCode })

    const referralInfo = !referralInfoDataLoading && referralInfoData?.data

    const dispatch = useDispatch()

    const { data, isLoading } = useGetReferralListQuery()

    const listData = data?.data ? parseReferralTree(data?.data) : [];

    function onReferralCodeClick(referralCode) {
        const match = referralCode?.match(/-(\w+)-/);
        const refCode = match ? match[1] : null;
        console.log(refCode)
        dispatch(setSelectedReferralCode(refCode))
    }

    return (
        <Stack mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Referral Tree</Typography></Container>
            <Grid container size={12}>
                <Grid size={7}>
                    <ReferralTree
                        listData={listData}
                        loadingListData={isLoading}
                        onClick={onReferralCodeClick}
                    />
                </Grid>
                <Grid size={5}>
                    {selectedReferralCode && <ReferralInfo data={referralInfo} loading={referralInfoDataLoading} />}
                </Grid>
            </Grid>
        </Stack>
    )
}

export default DirectTeam;