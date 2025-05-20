import { TableRow, TableHead, TableCell } from '@mui/material';
import { withdrawalAmountUSDTTableHeadData } from './withdrawalAmountUSDTTableHeadData';

function WithdrawalAmountUSDTTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          withdrawalAmountUSDTTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WithdrawalAmountUSDTTableHead;