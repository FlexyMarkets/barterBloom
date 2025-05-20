import { TableRow, TableHead, TableCell } from '@mui/material';
import { withdrawalTradingUSDTTableHeadData } from './withdrawalTradingUSDTTableHeadData';

function WithdrawalTradingUSDTTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          withdrawalTradingUSDTTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WithdrawalTradingUSDTTableHead;