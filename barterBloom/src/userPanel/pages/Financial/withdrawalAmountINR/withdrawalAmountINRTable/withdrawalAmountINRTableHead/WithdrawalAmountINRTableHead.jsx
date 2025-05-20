import { TableRow, TableHead, TableCell } from '@mui/material';
import { withdrawalAmountINRTableHeadData } from './withdrawalAmountINRTableHeadData';

function WithdrawalAmountINRTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          withdrawalAmountINRTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default WithdrawalAmountINRTableHead;