import { Stack, Typography, Container } from "@mui/material";
import TopTenTransactionHistoryTable from "./topTenTransactionHistoryTable/TopTenTransactionHistoryTable";

function TopTenTransactionHistory() {
  return (
    <Stack>
      <Container><Typography variant="h6" fontWeight="bold">Top 10 transaction history</Typography></Container>
      <TopTenTransactionHistoryTable />
    </Stack>
  )
}

export default TopTenTransactionHistory;