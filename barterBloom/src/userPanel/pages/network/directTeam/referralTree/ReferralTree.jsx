import { Card, Container, Stack, Typography } from '@mui/material';
import Loading from '../../../../userPanelComponent/Loading';

function ReferralTree({ listData, onClick, loadingListData }) {

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
                    {
                        loadingListData
                            ?
                            <Loading />
                            :
                            <Typography>
                                {Object.keys(listData).map((item, i) => (
                                    <Typography key={i} onClick={onClick}>{item}</Typography>
                                ))}
                            </Typography>
                    }
                </Card>
            </Container>
        </Stack>
    )

}

export default ReferralTree;