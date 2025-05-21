import React from 'react'
import Details from './details/Details'
import Wallets from './wallets/Wallets'
import { Container, Stack, Typography } from '@mui/material'
import Grid from "@mui/material/Grid2"
import AboutUser from './aboutUser/AboutUser.jsx'
import DashboardBusinessHistory from './dashboardBusinessHistory/DashboardBusinessHistory.jsx'
import ForexCrossRatesWidget from './forexCrossRatesWidget/ForexCrossRatesWidget.jsx'
import LoginHistoryTable from './loginHistory/LoginHistoryTable.jsx'
import TopTenTransactionHistory from './topTenTransactionHistory/TopTenTransactionHistory.jsx'

function Dashboard() {
    return (
        <Stack mt={"100px"}>
            <Container>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Dashboard
                </Typography>
            </Container>
            <Details />
            {/* <Wallets /> */}
            <LoginHistoryTable />
            <Container sx={{ mt: "4rem" }}>
                <Grid container size={12}
                // spacing={2}
                >
                    {/* <Grid item size={{ xs: 12, lg: 6 }}>
                        <AboutUser />
                    </Grid> */}
                    {/* <Grid item size={{ xs: 12, lg: 6 }}> */}
                    <TopTenTransactionHistory />
                    {/* </Grid> */}
                </Grid>
            </Container>
            <ForexCrossRatesWidget />
        </Stack>
    )
}

export default Dashboard