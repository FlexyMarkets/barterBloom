import { Stack, Container, Typography } from '@mui/material';
import TLCTwoPointOICOWallet from './TLCTwoPointOICOWallet/TLCTwoPointOICOWallet.jsx';
import TLCTwoPointOICOForm from './TLCTwoPointOICOForm/TLCTwoPointOICOForm';
import TLCTwoPointOICOTable from './TLCTwoPointOICOTable/TLCTwoPointOICOTable';
import TLCTwoPointOICOTotal from './TLCTwoPointOICOTotal/TLCTwoPointOICOTotal';

function TLCTwoPointOICO() {
  return (
    <Stack  mt={"100px"}>
      <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>TLC2.0 ICO</Typography></Container>
      <TLCTwoPointOICOWallet />
      <TLCTwoPointOICOForm />
      <TLCTwoPointOICOTotal />
      <TLCTwoPointOICOTable />
    </Stack>
  )
}

export default TLCTwoPointOICO;