import { Stack, Container, Typography } from '@mui/material';
import TLCTwoPointOLevelIncomeTable from "./TLCTwoPointOLevelIncomeTable/TLCTwoPointOICOLevelIncomeTable"
import TLCTwoPointOLevelIncomeTotal from './TLCTwoPointOLevelIncomeTotal/TLCTwoPointOICOLevelIncomeTotal';


function TLCTwoPointOLevelIncome() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>TLC2.0 Level Income</Typography></Container>
      <TLCTwoPointOLevelIncomeTotal />
      <TLCTwoPointOLevelIncomeTable />
    </Stack>
  )
}

export default TLCTwoPointOLevelIncome;