import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePaginationComponent from '../../../../userPanelComponent/TablePaginationComponent';
import TLCTwoPointOLevelIncomeTableRow from "./TLCTwoPointOLevelIncomeTableRow/TLCTwoPointOLevelIncomeTableRow"
import TLCTwoPointOLevelIncomeTableHead from "./TLCTwoPointOLevelIncomeTableHead/TLCTwoPointOLevelIncomeTableHead"
import TLCTwoPointOLevelIncomeTableToolbar from "./TLCTwoPointOLevelIncomeTableToolbar/TLCTwoPointOLevelIncomeTableToolbar"


function TLCTwoPointOICOLevelIncomeTable() {

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                >
                    <TLCTwoPointOLevelIncomeTableToolbar />
                    <TableContainer>
                        <Table sx={{ minWidth: 800 }}>
                            <TLCTwoPointOLevelIncomeTableHead />
                            <TableBody>
                                <TLCTwoPointOLevelIncomeTableRow />
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePaginationComponent />
                </Card>
            </Container>
        </Stack>
    );
}

export default TLCTwoPointOICOLevelIncomeTable;