import { Stack, Container, Typography } from '@mui/material';
import WithdrawalAmountINRNotice from './withdrawalAmountINRNotice/WithdrawalAmountINRNotice';
import WithdrawalAmountINRForm from "./withdrawalAmountINRForm/WithdrawalAmountINRForm"
import WithdrawalAmountINRTable from './withdrawalAmountINRTable/WithdrawalAmountINRTable';

function WithdrawalAmountINR() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Withdrawal Amount (INR)</Typography></Container>
      <WithdrawalAmountINRNotice />
      <WithdrawalAmountINRForm />
      <WithdrawalAmountINRTable />
    </Stack>
  )
}

export default WithdrawalAmountINR;