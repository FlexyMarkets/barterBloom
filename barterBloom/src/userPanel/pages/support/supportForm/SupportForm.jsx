import { Button, Card, Divider, Stack, Typography, TextField, InputLabel, OutlinedInput, IconButton, InputAdornment, useMediaQuery, Container } from '@mui/material'
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Grid from "@mui/material/Grid2"
import Selector from '../../../userPanelComponent/Selector';


const Categories = ["Monthly Closing", "MT5 Account", "Withdrawal", "Compounding", "Profile", "TLC", "Deposit", "Others"]
const Priorities = ["Normal/Minor impact", "Urgent", "High", "Low/Informational"]



function SupportForm() {

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
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "2rem",
            padding: { xs: "1rem", md: "2rem" }
          }}
        >
          <Typography mx={{ xs: "1rem", md: "0" }}>Fill Details</Typography>
          <Divider sx={{ my: "1.2rem" }} />
          <Grid container size={12} spacing={3}>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <InputLabel sx={{ mb: ".5rem" }}>Category</InputLabel>
              <Selector items={Categories} shouldBeFullWidth={true} />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <InputLabel sx={{ mb: ".5rem" }}>Priority</InputLabel>
              <Selector items={Priorities} shouldBeFullWidth={true} value={"Normal/Minor impact"} />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }}>
              <InputLabel sx={{ mb: ".5rem" }}>Message</InputLabel>
              <TextField fullWidth placeholder="Message" multiline variant="outlined" />
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
                        color: "white",
                        textTransform: "capitalize",
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
              color: "white",
              mt: '1.5rem',
              "&:hover": {
                boxShadow: "none"
              }
            }}
          >Submit</Button>
        </Card>
      </Container>
    </Stack >
  )
}

export default SupportForm;