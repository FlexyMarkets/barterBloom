import { Card, Container, Stack, Typography, Box, Divider } from '@mui/material';
import Loading from '../../../../userPanelComponent/Loading';

function ReferralInfo({ data, loading }) {

  const dataInfo = {
    "Name": data?.name,
    "Referral code": data?.referralCode,
    Email: data?.email,
    Sponser: data?.sponser,
    "Total team turnover balance": data?.totalTeamTurnoverBalance,
    "Total team": data?.totalTeam,
    "Total reward balance": data?.totalRewardBalance,
    "Total staked balance": data?.totalStakedBalance,
    "Login id": data?.loginId,
    "Direct referral team": data?.directReferralTeam
  }

  return (
    <Stack>
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
          <Typography variant="h5" fontWeight="bold">Referral User data</Typography>
          <Divider sx={{ my: "5px" }} />
          {
            loading
              ?
              <Loading />
              :
              Object.entries(dataInfo)?.map(([keys, values], i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography>{keys} :</Typography>
                  <Typography>{values}</Typography>
                </Box>
              ))
          }
        </Card>
      </Container>
    </Stack>
  )

}

export default ReferralInfo;