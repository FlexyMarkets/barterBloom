import { TableRow, TableHead, TableCell } from '@mui/material';
import { supportTableHeadData } from './supportTableHeadData';

function SupportTableHead() {
  return (
    <TableHead>
      <TableRow>
        {
          supportTableHeadData.map((data, i) => (
            <TableCell key={i} sx={{ whiteSpace: "nowrap", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}>{data}</TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}

export default SupportTableHead;