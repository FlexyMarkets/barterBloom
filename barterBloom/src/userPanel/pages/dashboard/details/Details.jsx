import { Card, Typography, Box, IconButton, Container, Stack, useMediaQuery, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Tooltip } from "@mui/material";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useGetUserProfileQuery } from "../../../../globalState/settings/profileSettingApi";
import PaymentsIcon from '@mui/icons-material/Payments';

function Details() {

    const { activeTheme } = useSelector(state => state.themeMode)

    const { data, isLoading } = useGetUserProfileQuery()

    const userData = data?.data

    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    const profileData = {
        avatar: "/avatar.png",
        name: userData?.name || "Aditya Shaw",
        rank: `Rank - ${userData?.rank}`
    }

    const income = {
        "Main balance": userData?.BUSDBalance,
        "Trade balance": userData?.TRADEBalance,
        "Package": userData?.airDorpLevel,
        "Affiliate balance": userData?.AFFLIATEBalance,
        "Total staked balance": userData?.totalStakedBalance,
        "Total withdrawal balance": userData?.totalWithdrawalBalance,
        "Total team turnover balance": userData?.totalTeamTurnoverBalance,
        "Total direct team turnover balance": userData?.totalDirectTeamTurnoverBalance
    }

    const totalIncomeAndWidthdrawal = {
        "Total Income": `$ ${userData?.totalRewardBalance}`,
        "Total Withdrawal": `$ ${userData?.totalWithdrawalBalance}`
    }

    const matches = useMediaQuery('(max-width:450px)');

    return (
        <Stack>
            <Container>
                <Stack
                    sx={{
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        gap: '1.2rem',
                        my: "2rem"
                    }}
                >
                    {/* <Box>
                        <Typography variant="h5" fontWeight="bold" color="primary.main">
                            TLC-USD Trading Pair
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            1 TLC = 128 USD
                        </Typography>
                    </Box> */}
                    <Box>
                        <Typography fontWeight={"bold"} mb={".5rem"} color="primary.main">Referral Link</Typography>
                        <Card
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                px: "1rem",
                                py: ".3rem",
                                gap: "1rem",
                                borderRadius: "10px",
                                boxShadow: "none",
                                bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
                            }}
                        >
                            <Typography sx={{ wordBreak: "break-all" }}>
                                {isLoading ? <Skeleton width={200} height={30} /> : `https://user.barterbloom.com/signup?referral=${userData?.referralCode}` || null}
                            </Typography>
                            <Tooltip title={copied ? "Copied!" : "Copy"} sx={{ border: "1px solid primary.main", borderRadius: "10px", my: "0" }}>
                                <IconButton onClick={() => handleCopy(`https://user.barterbloom.com/signup?referral=${userData?.referralCode}`)}>
                                    <ContentCopyOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </Card>
                    </Box>
                </Stack>
                <Card
                    sx={{
                        marginBottom: 3,
                        padding: 2,
                        boxShadow: "none",
                        bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
                    }}
                >
                    <Grid container size={12} spacing={matches ? 2 : 0}>
                        <Grid item size={matches ? 12 : 6}>
                            <Avatar alt="Cindy Baker" src={profileData.avatar} sx={{ border: "1px solid black", mb: ".5rem" }} />
                            <Typography variant="h5" fontWeight="bold">
                                {isLoading ? <Skeleton width={200} height={30} /> : profileData.name || 0}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {isLoading ? <Skeleton width={200} height={30} /> : profileData.rank || 0}
                            </Typography>
                        </Grid>
                        <Grid item size={matches ? 12 : 6} textAlign={matches ? "left" : "right"}>
                            <Tooltip title={copied ? "Copied!" : "Copy"}>
                                <IconButton onClick={() => handleCopy(userData?.referralCode)}>
                                    <ContentCopyOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            <Box>
                                <Typography variant="body2" fontWeight="bold">
                                    Referral Code
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    {isLoading ? <Skeleton /> : userData?.referralCode || 0}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
                <Grid container spacing={2} size={12}>
                    {
                        Object.entries(income).map(([keys, values]) => (
                            <Grid
                                item
                                size={{ xs: 6, sm: 4, md: 3 }}
                                key={keys}
                                sx={{
                                    bgcolor: activeTheme === "dark" ? "#272727" : "#e9e6e6",
                                    p: "1rem",
                                    borderRadius: "1rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <Stack>
                                    <Typography variant="body2" color="textSecondary">
                                        {keys}
                                    </Typography>
                                    <Typography variant="h6" fontWeight="bold">
                                        {isLoading ? <Skeleton width={200} height={30} /> : values || 0}
                                    </Typography>
                                </Stack>
                                <PaymentsIcon />
                            </Grid>
                        ))
                    }
                </Grid>
                <Card
                    sx={{
                        marginTop: 3,
                        padding: 2,
                        boxShadow: "none",
                        bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
                    }}
                >
                    <Grid container spacing={2} sx={{ display: "flex", flexDirection: matches && "column" }}>
                        {
                            Object.entries(totalIncomeAndWidthdrawal).map(([keys, values]) => (
                                <Grid
                                    item
                                    size={matches ? 12 : 6}
                                    key={keys}
                                    sx={{
                                        textAlign: (keys === "Total Withdrawal" && !matches) ? { xs: "end", sm: "start" } : "start"
                                    }}
                                >
                                    <Typography variant="body2" fontWeight="bold">
                                        {keys}
                                    </Typography>
                                    <Typography variant="h5" fontWeight="bold" sx={{ color: "primary.main" }}>
                                        {isLoading ? <Skeleton width={200} height={30} /> : values || 0}
                                    </Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Card>
            </Container>
        </Stack>
    );
};

export default Details;