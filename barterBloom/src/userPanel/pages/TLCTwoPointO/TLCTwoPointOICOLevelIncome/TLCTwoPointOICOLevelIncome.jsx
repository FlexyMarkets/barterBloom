import { Stack, Container, Typography } from '@mui/material';
import TLCTwoPointOICOLevelIncomeTable from './TLCTwoPointOICOLevelIncomeTable/TLCTwoPointOICOLevelIncomeTable';
import TLCTwoPointOICOLevelIncomeTotal from './TLCTwoPointOICOLevelIncomeTotal/TLCTwoPointOICOLevelIncomeTotal';

function TLCTwoPointOICOLevelIncome() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>TLC2.0 ICO Level Income</Typography></Container>
      <TLCTwoPointOICOLevelIncomeTotal />
      <TLCTwoPointOICOLevelIncomeTable />
    </Stack>
  )
}

export default TLCTwoPointOICOLevelIncome;