import {
    Button, Card, Divider, Stack,
    Typography, TextField, InputLabel, Container
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { initiateSocketConnection } from './TRCDepositENV';
import TRCDepositQR from './TRCDepositQR';


const formSchema = z.object({
    network: z.string().min(1, 'Please type network type').refine(val => ['TRON', 'BINANCE'].includes(val.toUpperCase()), {
        message: 'Network must be either TRON or BINANCE',
    }),
    amount: z.coerce.number().positive('Amount must be greater than 0')
});

function TRCDepositForm() {

    const dispatch = useDispatch()

    const { depositQRData } = useSelector(state => state.payment)

    const { token } = useSelector(state => state.auth);

    const defaultValues = {
        network: '',
        amount: ''
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues
    });

    const onSubmit = async (data) => {

        try {
            const result = await initiateSocketConnection({
                token,
                network: data.network.toUpperCase(),
                amount: parseFloat(data.amount),
                dispatch
            });

            reset(defaultValues)

            console.log('✅ Final Payment Status Received:', result);
            alert('Payment processed successfully!');
            reset();
        } catch (err) {
            setError(err.message || 'An error occurred during payment processing');
        }
    };

    return (
        <Stack>
            <Container>
                <Card
                    sx={{
                        boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                        borderRadius: "1.2rem",
                        padding: { xs: "1rem", md: "2rem" },
                    }}
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography mx={{ xs: "1rem", md: "0" }}>Fill Details</Typography>
                    <Divider sx={{ my: "1.2rem" }} />

                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Select Network *</InputLabel>
                            <TextField
                                size='small'
                                fullWidth
                                placeholder="Enter Network (TRON or BINANCE)"
                                variant="outlined"
                                {...register("network")}
                            />
                            {errors.network && <Typography color="error" fontSize={"14px"}>{errors.network.message}</Typography>}
                        </Grid>
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                            <InputLabel sx={{ mb: ".5rem" }}>Amount in USD *</InputLabel>
                            <TextField
                                size='small'
                                fullWidth
                                placeholder="Enter Amount"
                                variant="outlined"
                                type="number"
                                {...register("amount")}
                            />
                            {errors.amount && <Typography color="error" fontSize={"14px"}>{errors.amount.message}</Typography>}
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        variant='contained'
                        disabled={depositQRData}
                        sx={{
                            textTransform: "capitalize",
                            boxShadow: "none",
                            bgcolor: "#17433d",
                            color: "white",
                            mt: '1.5rem',
                            "&:hover": {
                                boxShadow: "none",
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Card>
                {depositQRData && <TRCDepositQR />}
            </Container>
        </Stack>
    );
}

export default TRCDepositForm;