import { Card, CardContent, Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { depositCryptoQRsData } from "./depositCryptoQRsData";
import Grid from "@mui/material/Grid2"
import { useSelector } from "react-redux";

function DepositCryptoQRs() {

    const { activeTheme } = useSelector((state) => state.themeMode);
    const matches = useMediaQuery('(max-width:750px)');

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Grid container size={12} spacing={4}>
                    {
                        depositCryptoQRsData.map((data, i) => (
                            <Grid item size={matches ? 12 : 6}>
                                <Card
                                    key={i}
                                    sx={{
                                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                                        borderRadius: "2rem",
                                        height: "100%",
                                        padding: { xs: "1rem", md: "2rem" }
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: "1rem",
                                            wordBreak: "break-all"
                                        }}
                                    >
                                        <Typography>{data.QRType}</Typography>
                                        <Stack width={"250px"} sx={{ bgcolor: activeTheme === "dark" ? "#ebe8e8" : "" }}>
                                            <img src={data.QR} alt="error" width={"100%"} />
                                        </Stack>
                                        <Typography>{data.code}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Stack>
    )
}

export default DepositCryptoQRs;