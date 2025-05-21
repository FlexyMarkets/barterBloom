import { Card, Container, Stack, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetReferralInfoQuery } from '../../../../../globalState/walletState/walletStateApis';

function ReferralInfo() {

  const { selectedReferralCode } = useSelector(state => state.wallet)

  console.log(selectedReferralCode)

  const { data: referralInfoData } = useGetReferralInfoQuery({ referralCode: selectedReferralCode }, { skip: !selectedReferralCode })

  const referralInfo = referralInfoData?.data

  console.log(referralInfo)

  return (
    <Stack mt={"2rem"}>
      <Container>
        <Card
          sx={{
            p: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
            borderRadius: "2rem",
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={"2rem"}>Referral User data</Typography>
          {
            selectedReferralCode &&
            Object.entries(referralInfo)?.map(([keys, values], i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-between"
                }}
              >
                <Typography sx={{ width: "30%" }}>{keys} :</Typography>
                <Typography sx={{ width: "70%" }}>{values}</Typography>
              </Box>
            ))
          }
        </Card>
      </Container>
    </Stack>
  )

}

export default ReferralInfo;