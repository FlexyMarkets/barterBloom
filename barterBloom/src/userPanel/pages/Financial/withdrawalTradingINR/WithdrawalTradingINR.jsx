import { Stack, Container, Typography } from '@mui/material';
import WithdrawalTradingINRNotice from './withdrawalTradingINRNotice/WithdrawalTradingINRNotice';
import WithdrawalTradingINRForm from "./withdrawalTradingINRForm/WithdrawalTradingINRForm"
import WithdrawalTradingINRTable from './withdrawalTradingINRTable/WithdrawalTradingINRTable';

function WithdrawalTradingINR() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Withdrawal Trading (INR)</Typography></Container>
      <WithdrawalTradingINRNotice />
      <WithdrawalTradingINRForm />
      <WithdrawalTradingINRTable />
    </Stack>
  )
}

export default WithdrawalTradingINR;