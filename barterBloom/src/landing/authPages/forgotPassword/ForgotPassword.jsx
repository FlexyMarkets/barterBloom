import { Box, styled, Stepper, Step, StepLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import ForgotPasswordContact from './ForgotPasswordContact';
import ForgotPasswordOTP from './ForgotPasswordOTP';
import CreateNewPassword from './CreateNewPassword';


const steps = ['Send OTP', 'Verify OTP', 'Reset Password'];

const CustomStepLabel = styled(StepLabel)(() => ({
    '& .Mui-active': {
        color: '#8703ef !important',
    },
    '& .Mui-completed': {
        color: '#8703ef !important',
    },
}));

function ForgotPassword({ onClose }) {

    const { forgotPasswordActiveStep } = useSelector((state) => state.auth);

    const stepIndexMap = {
        sendOTP: 0,
        verifyOTP: 1,
        resetPassword: 2
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel activeStep={stepIndexMap[forgotPasswordActiveStep]}>
                {steps.map((label) => (
                    <Step key={label}>
                        <CustomStepLabel>{label}</CustomStepLabel>
                    </Step>
                ))}
            </Stepper>
            {forgotPasswordActiveStep === "sendOTP" && <ForgotPasswordContact />}
            {forgotPasswordActiveStep === "verifyOTP" && <ForgotPasswordOTP />}
            {forgotPasswordActiveStep === "resetPassword" && <CreateNewPassword onClose={onClose} />}
        </Box>
    );
}

export default ForgotPassword;