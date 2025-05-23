import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const COUNTDOWN_KEY = 'countdown_end_time';
const TIMEOUT_FLAG_KEY = 'countdown_has_timed_out';
const COUNTDOWN_DURATION = 15 * 60 * 1000;

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(0);
    const [hasTimedOut, setHasTimedOut] = useState(false);

    useEffect(() => {
        const hasTimedOutFlag = localStorage.getItem(TIMEOUT_FLAG_KEY);

        if (hasTimedOutFlag === 'true') {
            setHasTimedOut(true);
            return;
        }

        let endTime = localStorage.getItem(COUNTDOWN_KEY);
        if (!endTime) {
            endTime = Date.now() + COUNTDOWN_DURATION;
            localStorage.setItem(COUNTDOWN_KEY, endTime);
        } else {
            endTime = parseInt(endTime, 10);
        }

        let timer;

        const updateTimer = () => {
            const now = Date.now();
            const difference = Math.max(0, Math.floor((endTime - now) / 1000));
            setTimeLeft(difference);

            if (difference <= 0) {
                clearInterval(timer);
                setHasTimedOut(true);
                localStorage.removeItem(COUNTDOWN_KEY);
                localStorage.setItem(TIMEOUT_FLAG_KEY, 'true');
            }
        };

        updateTimer();
        timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <Box sx={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
            <Typography>Time Left:</Typography>
            <Typography fontSize={"1.2rem"} fontWeight={600} color={hasTimedOut ? 'error' : 'text.primary'}>
                {hasTimedOut ? 'Time Out' : formatTime(timeLeft)}
            </Typography>
        </Box>
    );
}

export default CountdownTimer;