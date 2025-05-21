import { Card, Typography, Box, IconButton, Container, Stack, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { income, totalIncomeAndWidthdrawal, userData } from "./detailsData";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Tooltip } from "@mui/material";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

function Details() {

    const { userData } = useSelector(state => state.auth)

    const profileData = {
        avatar: "/avatar.png",
        name: userData?.name || "Aditya Shaw",
        rank: `Rank - ${userData?.rank}`
    }

    const income = {
        "BUSD balance": userData?.BUSDBalance,
        "Trade balance": userData?.TRADEBalance,
        "Air dorpLevel": userData?.airDorpLevel,
        "Bonus balance": userData?.bonusBalance,
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

    const { activeTheme } = useSelector((state) => state.themeMode);

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
                            <Typography>https://barterbloom.com/signup?referral={userData?.referralCode}</Typography>
                            {/* <Typography>https://barterbloom.com/signup?referral=abcdefg</Typography> */}
                            <Tooltip title="Copy" sx={{ border: "1px solid primary.main", borderRadius: "10px", my: "0" }}>
                                <IconButton>
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
                                {profileData.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {profileData.rank}
                            </Typography>
                        </Grid>
                        <Grid item size={matches ? 12 : 6} textAlign={matches ? "left" : "right"}>
                            <Tooltip title="Copy">
                                <IconButton>
                                    <ContentCopyOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                            <Box>
                                <Typography variant="body2" fontWeight="bold">
                                    Referral Code
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    {userData?.referralCode}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
                <Grid container spacing={2} size={12}>
                    {
                        Object.entries(income).map(([keys, values]) => (
                            <Grid item size={{ xs: 6, sm: 3 }} key={keys}>
                                <Typography variant="body2" color="textSecondary">
                                    {keys}
                                </Typography>
                                <Typography variant="h6" fontWeight="bold">
                                    {values}
                                </Typography>
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
                                        {values}
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
















// import { Card, Typography, Box, IconButton, Container, Stack, useMediaQuery } from "@mui/material";
// import Grid from "@mui/material/Grid2"
// import { income, totalIncomeAndWidthdrawal, userData } from "./detailsData";
// import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
// import { Tooltip } from "@mui/material";
// import { Avatar } from "@mui/material";
// import { useSelector } from "react-redux";

// function Details() {

//     const matches = useMediaQuery('(max-width:450px)');

//     const { activeTheme } = useSelector((state) => state.themeMode);

//     return (
//         <Stack height={"100%"}>
//             <Card
//                 sx={{
//                     display: 'flex',
//                     flexDirection: "column",
//                     gap: "10px",
//                     padding: 2,
//                     boxShadow: "none",
//                     bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
//                 }}
//             >
//                 <Box
//                     item
//                     size={matches ? 12 : 6}
//                     sx={{
//                         display: "flex",
//                         gap: "5px",
//                         alignItems: 'center',
//                         bgcolor: activeTheme === "dark" ? "" : "#ebe8e8",
//                         boxShadow: 'none'
//                     }}
//                 >
//                     <Avatar alt="Cindy Baker" src={userData.avatar} sx={{ border: "1px solid black" }} />
//                     <Box>
//                         <Typography fontSize={"1.2rem"} fontWeight="bold">
//                             {userData.name}
//                         </Typography>
//                         <Typography fontSize={"13px"} color="textSecondary">
//                             {userData.rank}
//                         </Typography>
//                     </Box>
//                 </Box>
//                 <Box
//                     sx={{
//                         boxShadow: "none",
//                         bgcolor: activeTheme === "dark" ? "" : "#ebe8e8",
//                         display: "flex",
//                         gap: "5px"
//                     }}
//                 >
//                     {
//                         Object.entries(totalIncomeAndWidthdrawal).map(([keys, values]) => (
//                             <Card
//                                 item
//                                 key={keys}
//                                 sx={{
//                                     p: ".5rem",
//                                     boxShadow: 'none',
//                                     bgcolor: activeTheme === "dark" ? "" : "#ebe8e8",
//                                 }}
//                             >
//                                 <Typography variant="body2" fontWeight="bold">
//                                     {keys}
//                                 </Typography>
//                                 <Typography fontSize={"1rem"} fontWeight="bold" sx={{ color: "primary.main" }}>
//                                     {values}
//                                 </Typography>
//                             </Card>
//                         ))
//                     }
//                 </Box>
//                 {/* <Grid item size={matches ? 12 : 6} textAlign={matches ? "left" : "right"}>
//                         <Tooltip title="Copy">
//                             <IconButton>
//                                 <ContentCopyOutlinedIcon />
//                             </IconButton>
//                         </Tooltip>
//                         <Box>
//                             <Typography variant="body2" fontWeight="bold">
//                                 Referral Code
//                             </Typography>
//                             <Typography variant="h6" color="textSecondary">
//                                 #ROBO118603
//                             </Typography>
//                         </Box>
//                     </Grid> */}
//             </Card>
//             {/* <Grid container spacing={2} size={12}>
//                 {
//                     Object.entries(income).map(([keys, values]) => (
//                         <Grid item size={{ xs: 6, sm: 3, md: 2 }} key={keys}>
//                             <Typography variant="body2" color="textSecondary">
//                                 {keys}
//                             </Typography>
//                             <Typography variant="h6" fontWeight="bold">
//                                 {values}
//                             </Typography>
//                         </Grid>
//                     ))
//                 }
//             </Grid> */}
//             {/* <Card
//                 sx={{
//                     marginTop: 3,
//                     padding: 2,
//                     boxShadow: "none",
//                     bgcolor: activeTheme === "dark" ? "" : "#ebe8e8"
//                 }}
//             >
//                 <Grid container spacing={2} sx={{ display: "flex", flexDirection: matches && "column" }}>
//                     {
//                         Object.entries(totalIncomeAndWidthdrawal).map(([keys, values]) => (
//                             <Grid
//                                 item
//                                 size={matches ? 12 : 6}
//                                 key={keys}
//                                 sx={{
//                                     textAlign: (keys === "Total Withdrawal" && !matches) ? { xs: "end", sm: "start" } : "start"
//                                 }}
//                             >
//                                 <Typography variant="body2" fontWeight="bold">
//                                     {keys}
//                                 </Typography>
//                                 <Typography variant="h5" fontWeight="bold" sx={{ color: "primary.main" }}>
//                                     {values}
//                                 </Typography>
//                             </Grid>
//                         ))
//                     }
//                 </Grid>
//             </Card> */}
//         </Stack>
//     );
// };

// export default Details;