import { Stack, Container, Typography } from '@mui/material';
import DirectTeamCount from './directTeamCount/DirectTeamCount';
import DirectTeamTable from './directTeamTable/DirectTeamTable';

function DirectTeam() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Direct Team</Typography></Container>
            <DirectTeamCount />
            <DirectTeamTable />
        </Stack>
    )
}

export default DirectTeam;