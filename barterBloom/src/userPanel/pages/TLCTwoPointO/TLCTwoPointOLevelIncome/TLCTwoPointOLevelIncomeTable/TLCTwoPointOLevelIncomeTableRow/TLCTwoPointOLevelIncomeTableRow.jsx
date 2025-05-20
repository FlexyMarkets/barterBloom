import { TableRow, TableCell } from '@mui/material';
import { TLCTwoPointOLevelIncomeTableRowData } from "./TLCTwoPointOLevelIncomeTableRowData"


function TLCTwoPointOLevelIncomeTableRow() {

  return (
    <>
      {
        TLCTwoPointOLevelIncomeTableRowData.map((data, i) => (
          <TableRow key={i}>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Income}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Level}</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Date}</TableCell>
          </TableRow>
        ))
      }
    </>
  );

}
export default TLCTwoPointOLevelIncomeTableRow;