import { Stack, Container, Typography } from '@mui/material';
import ReferralTree from './referralTree/ReferralTree';
import { useGetReferralListQuery, useGetReferralInfoQuery } from '../../../../globalState/walletState/walletStateApis';
import ReferralInfo from './referralInfo/ReferralInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedReferralCode } from '../../../../globalState/walletState/walletStateSlice';

function DirectTeam() {

    const dispatch = useDispatch()

    const { data, isLoading } = useGetReferralListQuery()

    const listData = data?.data

    function onReferralCodeClick(referralCode) {
        const match = referralCode?.match(/-(\w+)-/);
        const refCode = match ? match[1] : null;
        console.log(refCode)
        dispatch(setSelectedReferralCode(refCode))
    }

    return (
        <Stack mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Referral Tree</Typography></Container>
            <ReferralTree listData={listData} loadingListData={isLoading} onClick={(e) => onReferralCodeClick(e.target.innerText)} />
            <ReferralInfo />
        </Stack>
    )
}

export default DirectTeam;