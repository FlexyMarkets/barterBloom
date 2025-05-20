import { TableRow, TableCell } from '@mui/material';
import { withdrawalAmountINRTableRowData } from './withdrawalAmountINRTableRowData';

function WithdrawalAmountINRTableRow() {

  return (
    <>
      {
        withdrawalAmountINRTableRowData.map((data, i) => (
          <TableRow key={i}>
            {/* <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.TLC}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Price}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Amount}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Particular}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell> */}
          </TableRow>
        ))
      }
    </>
  );

}
export default WithdrawalAmountINRTableRow;