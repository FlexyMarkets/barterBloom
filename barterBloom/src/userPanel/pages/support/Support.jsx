import { Stack, Container, Typography } from '@mui/material';
import SupportForm from "./supportForm/SupportForm"
import SupportTable from "./supportTable/SupportTable"

function Support() {
    return (
        <Stack  mt={"100px"}>
            <Container><Typography variant="h4" fontWeight="bold" mb={"2rem"}>Support</Typography></Container>
            <SupportForm />
            <SupportTable />
        </Stack>
    )
}

export default Support;