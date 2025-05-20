import { Button, Card, Container, Divider, Stack, Typography, useMediaQuery } from '@mui/material'
import { TextField, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import Selector from '../../../../userPanelComponent/Selector';

function WalletAddressForm() {

    const matches = useMediaQuery('(max-width:800px)');

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };


    return (
        <Stack>
            <Container>
                <Card
                    sx={{
                        padding: { xs: "1rem", sm: "2rem" },
                        borderRadius: "2rem",
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <Typography variant='h6' m={{ xs: "1rem", sm: "0" }}>Add New USDT.TRC20 Address to Receive Profits</Typography>
                    <Divider sx={{ my: "1.2rem" }} />
                    <Stack gap={"2rem"} component={"form"}>
                        <Grid container size={12} spacing={3}>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Select Wallet</InputLabel>
                                <Selector items={["Tether USD (Tron/TRC20)", "Trillioner(TLC)"]} shouldBeFullWidth={true} />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Address</InputLabel>
                                <TextField fullWidth placeholder="hello@example.com" variant="outlined" />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>Transaction Password</InputLabel>
                                <OutlinedInput
                                    placeholder='********'
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, sm: 6 }}>
                                <InputLabel sx={{ mb: ".5rem" }}>One Time Password</InputLabel>
                                <OutlinedInput
                                    placeholder={matches ? "Enter OTP" : 'Enter One Time Password'}
                                    fullWidth
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button
                                                variant='contained'
                                                edge="end"
                                                sx={{
                                                    height: "100%",
                                                    boxShadow: "none",
                                                    bgcolor: "primary.main",
                                                    textTransform: "capitalize",
                                                    color: "white",
                                                    "&:hover": { boxShadow: "none" }
                                                }}
                                            >
                                                {matches ? "OTP" : "Send OTP"}
                                            </Button>
                                        </InputAdornment>
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            variant='contained'
                            sx={{
                                textTransform: "capitalize",
                                width: "5rem",
                                boxShadow: "none",
                                bgcolor: "primary.main",
                                fontSize: "1.1rem",
                                color: "white",
                                "&:hover": {
                                    boxShadow: "none"
                                }
                            }}
                        >Add</Button>
                    </Stack>
                </Card>
            </Container>
        </Stack>
    )
}

export default WalletAddressForm;