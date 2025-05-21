import {
    Box,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Button,
    Typography,
    IconButton,
    Card,
    CardContent,
    Stack,
    useMediaQuery,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2"
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import { Link, useNavigate } from "react-router-dom";
import { inputStyles } from "../authPagesInputStyle";
import 'react-phone-input-2/lib/material.css';
import "../countryCodeSelector.css"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from "./signUpSchema";
import { useReferralInfoQuery, useSignUpMutation } from "../../../globalState/auth/authApis";
import { useDispatch } from "react-redux";
import { setNotification } from "../../../globalState/notification/notificationSlice";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useSearchParams } from "react-router-dom";

function Signup() {

    const [searchParams] = useSearchParams();
    const referralCode = searchParams.get("referral");

    const dispatch = useDispatch()
    const matches = useMediaQuery('(min-width:700px)');
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowCnfPassword = () => setShowCnfPassword((show) => !show);

    const [signUp, { isLoading }] = useSignUpMutation();


    const defaultValues = {
        name: "",
        email: "",
        mobile: "",
        referral: referralCode || "",
        password: "",
        cnfPassword: "",
    };

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: defaultValues
    });

    const { data, isError, error } = useReferralInfoQuery({ referralCode }, { skip: !referralCode })

    const referralInfo = data?.error?.message

    const referrarName = data?.data

    // setError("referral", isError && error?.data?.message)
    useEffect(() => {
        if (isError && error?.data?.message) {
            setError("referral", { type: "manual", message: error.data.message });
        }
    }, [isError, error, setError]);

    const onSubmit = async (data) => {

        try {
            const response = await signUp(data).unwrap();
            console.log(response?.data?.userData?.loginId)
            const userLogInId = response?.data?.userData?.loginId
            if (response.status) {
                navigate("/signin")
                dispatch(setNotification({ open: true, message: `${response?.message} and your Login id is (${userLogInId})`, severity: "success", autoHideDuration: null }));
            }

        } catch (error) {
            if (error?.data?.data) {
                Object.entries(error.data?.data).forEach(([field, message]) => {
                    setError(field, { type: "server", message });
                });
            } else {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to sign up. Please try again later.", severity: "error", autoHideDuration: 4000 }));
            }
        }
    };


    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: "url('/authPagesBgImage.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
        >
            <Stack
                sx={{
                    position: "absolute",
                    inset: 0,
                    height: "100%",
                    background: "linear-gradient(to top right, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76))",
                    opacity: .7,
                }}
            ></Stack>
            <Card
                sx={{
                    width: matches ? 600 : 500,
                    my: "5rem",
                    mx: { xs: "1rem", sm: 0 },
                    p: { xs: .5, sm: 2 },
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(80px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
            >
                <CardContent
                    sx={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
                    component={"form"}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Typography variant="h4" fontWeight="bold" align="center" color="white">Sign up</Typography>
                    <Grid container size={12} spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Full Name</InputLabel>
                            <OutlinedInput
                                size="small"
                                placeholder='Enter your full name'
                                {...register("name", { required: true })}
                                fullWidth
                                startAdornment={<InputAdornment position="start"><PersonIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
                                sx={{ ...inputStyles }}
                            />
                            {errors.name && <Typography color="error">{errors.name.message}</Typography>}
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Email</InputLabel>
                            <OutlinedInput
                                size="small"
                                placeholder='Enter your email'
                                {...register("email", { required: true })}
                                fullWidth
                                startAdornment={<InputAdornment position="start"><EmailIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
                                sx={{ ...inputStyles }}
                            />
                            {errors.email && <Typography color="error">{errors.email.message}</Typography>}
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Mobile No.</InputLabel>
                            <OutlinedInput
                                size="small"
                                placeholder='Enter your mobile no.'
                                {...register("mobile", { required: true })}
                                fullWidth
                                startAdornment={<InputAdornment position="start"><LocalPhoneIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
                                sx={{ ...inputStyles }}
                            />
                            {errors.mobile && <Typography color="error">{errors.mobile.message}</Typography>}
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Password</InputLabel>
                            <OutlinedInput
                                size="small"
                                {...register("password", { required: true })}
                                placeholder='Enter password'
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff sx={{ color: '#8703ef', fontSize: "20px" }} /> : <Visibility sx={{ color: '#8703ef', fontSize: "20px" }} />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                startAdornment={<InputAdornment position="start"><LockIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
                                sx={{ ...inputStyles }}
                            />
                            {errors.password && <Typography color="error">{errors.password.message}</Typography>}
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Confirm password</InputLabel>
                            <OutlinedInput
                                size="small"
                                {...register("cnfPassword", { required: true })}
                                placeholder='Enter confirm password'
                                fullWidth
                                type={showCnfPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showCnfPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowCnfPassword}
                                            edge="end"
                                        >
                                            {showCnfPassword ? <VisibilityOff sx={{ color: '#8703ef', fontSize: "20px" }} /> : <Visibility sx={{ color: '#8703ef', fontSize: "20px" }} />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                startAdornment={<InputAdornment position="start"><LockIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
                                sx={{ ...inputStyles }}
                            />
                            {errors.cnfPassword && <Typography color="error">{errors.cnfPassword.message}</Typography>}
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Referral Code</InputLabel>
                            <OutlinedInput
                                size="small"
                                {...register("referral")}
                                placeholder='Enter your referral code'
                                fullWidth
                                startAdornment={<InputAdornment position="start"><PeopleIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
                                sx={{ ...inputStyles }}
                            />
                            <InputLabel sx={{ mt: "2px", color: "white", fontSize: "12px" }}>Referral name: {referrarName?.name}</InputLabel>
                            {errors.referral && <Typography color="error">{errors.referral.message}</Typography>}
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        variant='contained'
                        size="small"
                        disabled={isLoading}
                        sx={{
                            textTransform: "capitalize",
                            boxShadow: "none",
                            bgcolor: "#8703ef",
                            fontSize: "1.1rem",
                            color: "white",
                            "&:hover": {
                                boxShadow: "none"
                            }
                        }}
                    >Sign up</Button>
                    <Typography textAlign="center" color="white" fontSize={"14px"}>
                        Already have an account? <Link to={"/signin"} style={{ textDecoration: "none" }}><Typography component="span" color="primary" sx={{ cursor: "pointer", color: '#8703ef' }}>Sign In</Typography></Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Signup;