import { Card, Container, Stack, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


const directTeamCountData = [
    {
        icon: <CircleIcon sx={{ color: "green", fontSize: "1.2rem" }} />,
        type: "Direct Bot",
        count: "17"
    },
    {
        icon: <CircleIcon sx={{ color: "orange", fontSize: "1.2rem" }} />,
        type: "Team Bot",
        count: "348"
    }
]

function DirectTeamCount() {
    return (
        <Stack>
            <Container>
                <Card
                    sx={{
                        p: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5rem",
                        borderRadius: "2rem",
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    }}
                >
                    <Typography mb={"1rem"}>Direct Team</Typography>
                    {
                        directTeamCountData.map((data, i) => (
                            <Stack key={i} sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Stack sx={{ flexDirection: "row", alignItems: "center", gap: ".5rem" }}>
                                    <Typography lineHeight={"0"}>{data.icon}</Typography>
                                    <Typography>{data.type}</Typography>
                                </Stack>
                                <Stack>
                                    <Typography>{data.count}</Typography>
                                </Stack>
                            </Stack>
                        ))
                    }
                </Card>
            </Container>
        </Stack>
    )
}

export default DirectTeamCount;