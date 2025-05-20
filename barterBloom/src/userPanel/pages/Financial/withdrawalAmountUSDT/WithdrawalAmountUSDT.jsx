import { Stack, Container, Typography } from '@mui/material';
import WithdrawalAmountUSDTNotice from './withdrawalAmountUSDTNotice/WithdrawalAmountUSDTNotice';
import WithdrawalAmountUSDTForm from "./withdrawalAmountUSDTForm/WithdrawalAmountUSDTForm"
import WithdrawalAmountUSDTTable from './withdrawalAmountUSDTTable/WithdrawalAmountUSDTTable';

function WithdrawalAmountUSDT() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Withdrawal Amount (USDT)</Typography></Container>
      <WithdrawalAmountUSDTNotice />
      <WithdrawalAmountUSDTForm />
      <WithdrawalAmountUSDTTable />
    </Stack>
  )
}

export default WithdrawalAmountUSDT;