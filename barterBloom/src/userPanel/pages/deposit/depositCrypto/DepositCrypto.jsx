import { Stack, Container, Typography } from "@mui/material";
import DepositCryptoForm from "./depositCryptoForm/DepositCryptoForm.jsx"
import DepositCryptoNotice from "./depositCryptoNotice/DepositCryptoNotice.jsx";
import DepositCryptoQRs from "./depositCryptoQRs/DepositCryptoQRs.jsx"

function DepositCrypto() {
  return (
    <Stack   mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Deposit Crypto</Typography></Container>
      <DepositCryptoNotice />
      <DepositCryptoQRs />
      <DepositCryptoForm />
    </Stack>
  )
}

export default DepositCrypto;