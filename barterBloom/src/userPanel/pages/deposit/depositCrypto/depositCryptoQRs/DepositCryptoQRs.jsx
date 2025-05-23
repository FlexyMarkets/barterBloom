import {
    Card,
    CardContent,
    Container,
    Stack,
    Typography,
    Tooltip,
    IconButton
} from "@mui/material";
import { useSelector } from "react-redux";
import CountdownTimer from "../../../../userPanelComponent/CountdownTimer";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useState } from "react";

function DepositCryptoQRs() {

    const { depositQRData } = useSelector(state => state.wallet);
    const depositQR = depositQRData;

    console.log(depositQR);

    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <Stack mt={"2rem"}>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "2rem",
                        height: "100%",
                        padding: { xs: "1rem", md: "2rem" }
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "1rem",
                            wordBreak: "break-word"
                        }}
                    >
                        <Typography variant='h6'>Scan QR Code to Complete Deposit</Typography>
                        {depositQR ? (
                            <img
                                src={depositQR?.data}
                                alt="Deposit QR"
                                style={{
                                    maxWidth: "150px",
                                    width: "100%",
                                    height: "auto",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px"
                                }}
                            />
                        ) : (
                            <Typography color="text.secondary">
                                QR Code not available
                            </Typography>
                        )}
                        <CountdownTimer />
                        <Stack
                            sx={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Typography>Deposit Address: {depositQR?.depositAddress}</Typography>
                            <Tooltip title={copied ? "Copied!" : "Copy"}>
                                <IconButton onClick={() => handleCopy(depositQR?.depositAddress)}>
                                    <ContentCopyOutlinedIcon sx={{ fontSize: "20px" }} />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Stack>
    );
}

export default DepositCryptoQRs;