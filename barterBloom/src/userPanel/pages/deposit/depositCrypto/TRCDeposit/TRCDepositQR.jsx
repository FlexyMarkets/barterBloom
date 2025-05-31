import {
    Card,
    CardContent,
    Stack,
    Typography,
    Tooltip,
    IconButton
} from "@mui/material";
import { useSelector } from "react-redux";
import CountdownTimer from "../../../../userPanelComponent/CountdownTimer";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useState } from "react";
import { QRCodeCanvas } from 'qrcode.react';

function TRCDepositQR() {

    const { depositQRData } = useSelector(state => state.payment)

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
            <Card
                sx={{
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                    borderRadius: "2rem",
                    height: "100%",
                    padding: { xs: "1rem", md: "2rem" }
                }}>
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
                    {depositQRData ? (
                        <QRCodeCanvas
                            value={depositQRData?.payment_address}
                            size={200}
                            bgColor="#ffffff"
                            fgColor="#000000"
                            level="H"
                            includeMargin
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
                        <Typography>Deposit Address: {depositQRData?.payment_address}</Typography>
                        <Tooltip title={copied ? "Copied!" : "Copy"}>
                            <IconButton onClick={() => handleCopy(depositQRData?.payment_address)}>
                                <ContentCopyOutlinedIcon sx={{ fontSize: "20px" }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
}

export default TRCDepositQR;