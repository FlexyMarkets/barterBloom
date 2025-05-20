import { Stack, Container, Typography } from '@mui/material';
import TLCTwoPointOProfitTotal from './TLCTwoPointOProfitTotal/TLCTwoPointOProfitTotal';
import TLCTwoPointOProfitTable from './TLCTwoPointOProfitTable/TLCTwoPointOProfitTable';


function TLCTwoPointOProfit() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>TLC2.0 Profit</Typography></Container>
      <TLCTwoPointOProfitTotal />
      <TLCTwoPointOProfitTable />
    </Stack>
  )
}

export default TLCTwoPointOProfit;