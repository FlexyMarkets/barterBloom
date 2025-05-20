import { TableRow, TableCell } from '@mui/material';
import { directTeamTableRowData } from './directTeamTableRowData';

function DirectTeamTableRow() {

    return (
        <>
            {
                directTeamTableRowData.map((data, i) => (
                    <TableRow key={i}>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['S/N']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['User ID']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Name}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Subscription}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Trading}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Compounding}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Position}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Status}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Direct Business']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Team Business']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Total Bot']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Trading Business']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Compounding Business']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data.Rank}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Joining Date']}</TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{data['Activation Date']}</TableCell>
                    </TableRow>
                ))
            }
        </>
    );

}
export default DirectTeamTableRow;