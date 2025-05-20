import { Stack, Container, Typography } from '@mui/material';
import WithdrawalTradingUSDTNotice from './withdrawalTradingUSDTNotice/WithdrawalTradingUSDTNotice';
import WithdrawalTradingUSDTForm from "./withdrawalTradingUSDTForm/WithdrawalTradingUSDTForm"
import WithdrawalTradingUSDTTable from './withdrawalTradingUSDTTable/WithdrawalTradingUSDTTable';

function WithdrawalTradingUSDT() {
  return (
    <Stack mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Withdrawal Trading (USDT)</Typography></Container>
      <WithdrawalTradingUSDTNotice />
      <WithdrawalTradingUSDTForm />
      <WithdrawalTradingUSDTTable />
    </Stack>
  )
}

export default WithdrawalTradingUSDT;