// import { Button, Stack } from '@mui/material'
// import { TextField, InputLabel, OutlinedInput, IconButton, InputAdornment } from '@mui/material'
// import { useState } from 'react';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Grid from "@mui/material/Grid2"
// import SearchableDropdown from "../../../../../userPanelComponent/SearchableDropdown"
// import { allCountries } from './profileUpdateData';
// import { useSelector, useDispatch } from 'react-redux';
// import { profileUpdateSchema } from './profileUpdateSchema';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useVerifyEmailAndMobileMutation, useVerifyEmailAndMobileOtpMutation } from '../../../../../../globalState/auth/authApis';
// import { setNotification } from '../../../../../../globalState/notification/notificationSlice';
// import { useUpdateProfileMutation } from '../../../../../../globalState/settings/profileSettingApi';
// import { setUserData } from '../../../../../../globalState/auth/authSlice';

// function ProfileUpdate() {

//     const dispatch = useDispatch()

//     const { userData } = useSelector(state => state.auth)

//     const [verifyingType, setVerifyingType] = useState(null);
//     const [otp, setOtp] = useState("")
//     const [otpVerifyType, setOtpVerifyType] = useState(null)
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const defaultValues = {
//         fullName: userData?.name || "",
//         email: userData?.email || "",
//         mobile: userData?.mobile || "",
//         tradingMt5AcNo: userData?.tradingMt5AcNo || "",
//         compoundingMT5AcNo: userData?.compoundingMT5AcNo || "",
//         country: userData?.country || "",
//         walletAddress: userData?.walletAddress || ""
//     };

//     const { register, handleSubmit, reset, watch, setValue, setError, formState: { errors } } = useForm({
//         resolver: zodResolver(profileUpdateSchema),
//         defaultValues: defaultValues
//     });

//     const [updateProfile, { isLoading }] = useUpdateProfileMutation()

//     const onSubmit = async (data) => {
//         console.log(errors)

//         try {

//             console.log(data)
//             const response = await updateProfile(data).unwrap();

//             if (response.status) {
//                 dispatch(setUserData(response?.data))
//                 dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
//             }

//         } catch (error) {
//             if (error?.data?.data) {
//                 Object.entries(error?.data?.data).forEach(([field, message]) => {
//                     setError(field, { type: "server", message });
//                 });
//             } else {
//                 dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
//             }
//         }
//     };

//     const [verifyEmailAndMobile] = useVerifyEmailAndMobileMutation();
//     const [verifyEmailAndMobileOtp] = useVerifyEmailAndMobileOtpMutation();

//     async function handleVerify(type) {
//         try {
//             setVerifyingType(type);
//             const value = watch(type);

//             const response = await verifyEmailAndMobile({ [type]: value }).unwrap();

//             if (response?.status) {
//                 dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
//                 setOtpVerifyType(type);
//             }
//         } catch (error) {
//             if (error.data?.data) {
//                 Object.entries(error.data.data).forEach(([field, message]) => {
//                     setError(field, { type: "server", message });
//                 });
//             } else {
//                 dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
//             }
//         } finally {
//             setVerifyingType(null);
//         }
//     }


//     async function handleOtpVerify(type) {
//         try {
//             setOtpVerifyType(() => type);

//             const value = type === "email" ? watch("email") : watch("mobile");

//             const response = await verifyEmailAndMobileOtp({
//                 [type]: value,
//                 otp,
//             }).unwrap();

//             if (response?.status) {
//                 dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
//                 setOtp("");
//                 setOtpVerifyType(null);
//                 setValue(type, value);
//                 reset(defaultValues)
//             }
//         } catch (error) {
//             if (error.data?.data) {
//                 Object.entries(error.data.data).forEach(([field, message]) => {
//                     setError(field, { type: "server", message });
//                 });
//             } else {
//                 dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
//             }
//         }
//     }



//     return (
//         <Stack
//             mt={"2rem"}
//             gap={"2rem"}
//             component={"form"}
//             onSubmit={handleSubmit(onSubmit)}
//         >
//             <Grid
//                 container
//                 size={12}
//                 spacing={3}
//             >
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>Name</InputLabel>
//                     <TextField
//                         size='small'
//                         placeholder='Your name'
//                         fullWidth
//                         variant="outlined"
//                         {...register("fullName", { required: true })}
//                     />
//                 </Grid>
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>{otpVerifyType === "email" ? "Email otp" : "Email"}</InputLabel>
//                     {
//                         otpVerifyType === "email"
//                             ?
//                             <OutlinedInput
//                                 size='small'
//                                 placeholder='Your OTP'
//                                 name='otp'
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                                 fullWidth
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <Button
//                                             onClick={() => handleOtpVerify('email')}
//                                             disabled={!otp}
//                                             size='small'
//                                             variant='contained'
//                                             edge="end"
//                                             sx={{
//                                                 height: "100%",
//                                                 boxShadow: "none",
//                                                 bgcolor: "primary.main",
//                                                 color: "white",
//                                                 textTransform: "capitalize",
//                                                 "&:hover": { boxShadow: "none" }
//                                             }}
//                                         >
//                                             Verify
//                                         </Button>
//                                     </InputAdornment>
//                                 }
//                             />
//                             :
//                             <OutlinedInput
//                                 size='small'
//                                 placeholder='Your email'
//                                 {...register("email", { required: true })}
//                                 fullWidth
//                                 endAdornment={
//                                     userData?.isEmailVerified ? null
//                                         :
//                                         <InputAdornment position="end">
//                                             <Button
//                                                 onClick={() => handleVerify('email')}
//                                                 disabled={verifyingType === 'email'}
//                                                 size='small'
//                                                 variant='contained'
//                                                 edge="end"
//                                                 sx={{
//                                                     height: "100%",
//                                                     boxShadow: "none",
//                                                     bgcolor: "primary.main",
//                                                     color: "white",
//                                                     textTransform: "capitalize",
//                                                     "&:hover": { boxShadow: "none" }
//                                                 }}
//                                             >
//                                                 {verifyingType === 'email' ? "Sending..." : "Verify"}
//                                             </Button>
//                                         </InputAdornment>
//                                 }
//                             />
//                     }
//                 </Grid>
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>Country</InputLabel>
//                     <SearchableDropdown
//                         options={allCountries}
//                         placeholder="Select Country"
//                         value={watch("country")}
//                         onChange={(value) => setValue("country", value)}
//                     />
//                 </Grid>
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>{otpVerifyType === "mobile" ? "Mobile otp" : "Mobile"}</InputLabel>
//                     {
//                         otpVerifyType === "mobile"
//                             ?
//                             <OutlinedInput
//                                 size='small'
//                                 placeholder='Your OTP'
//                                 name='otp'
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                                 fullWidth
//                                 endAdornment={
//                                     <InputAdornment position="end">
//                                         <Button
//                                             onClick={() => handleOtpVerify('mobile')}
//                                             disabled={!otp}
//                                             size='small'
//                                             variant='contained'
//                                             edge="end"
//                                             sx={{
//                                                 height: "100%",
//                                                 boxShadow: "none",
//                                                 bgcolor: "primary.main",
//                                                 color: "white",
//                                                 textTransform: "capitalize",
//                                                 "&:hover": { boxShadow: "none" }
//                                             }}
//                                         >
//                                             Verify
//                                         </Button>
//                                     </InputAdornment>
//                                 }
//                             />
//                             :
//                             <OutlinedInput
//                                 size='small'
//                                 placeholder='Your mobile'
//                                 {...register("mobile", { required: true })}
//                                 fullWidth
//                                 endAdornment={
//                                     userData?.isMobileVerified ? null
//                                         :
//                                         <InputAdornment position="end">
//                                             <Button
//                                                 onClick={() => handleVerify('mobile')}
//                                                 disabled={verifyingType === 'mobile'}
//                                                 size='small'
//                                                 variant='contained'
//                                                 edge="end"
//                                                 sx={{
//                                                     height: "100%",
//                                                     boxShadow: "none",
//                                                     bgcolor: "primary.main",
//                                                     color: "white",
//                                                     textTransform: "capitalize",
//                                                     "&:hover": { boxShadow: "none" }
//                                                 }}
//                                             >
//                                                 {verifyingType === 'mobile' ? "Sending..." : "Verify"}
//                                             </Button>
//                                         </InputAdornment>
//                                 }
//                             />
//                     }
//                 </Grid>
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>Trading MT5 A/c No.</InputLabel>
//                     <TextField
//                         size='small'
//                         placeholder='Your Trading MT5 A/c No.'
//                         fullWidth
//                         {...register("tradingMt5AcNo", { required: true })}
//                         variant="outlined"
//                     />
//                 </Grid>
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>Compounding MT5 A/c No.</InputLabel>
//                     <TextField
//                         size='small'
//                         placeholder='Compounding MT5 A/c No.'
//                         fullWidth
//                         {...register("compoundingMT5AcNo", { required: true })}
//                         variant="outlined"
//                     />
//                 </Grid>
//                 {/* <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>Transaction Password </InputLabel>
//                     <OutlinedInput
//                         size='small'
//                         placeholder='********'
//                         fullWidth
//                         type={showPassword ? 'text' : 'password'}
//                         endAdornment={
//                             <InputAdornment position="end">
//                                 <IconButton
//                                     aria-label={
//                                         showPassword ? 'hide the password' : 'display the password'
//                                     }
//                                     onClick={handleClickShowPassword}
//                                     edge="end"
//                                 >
//                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                 </IconButton>
//                             </InputAdornment>
//                         }
//                     />
//                 </Grid> */}
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>Wallet Address</InputLabel>
//                     <TextField
//                         size='small'
//                         placeholder='Enter your wallet address'
//                         fullWidth
//                         {...register("walletAddress", { required: true })}
//                         variant="outlined"
//                     />
//                 </Grid>
//                 <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
//                     <InputLabel sx={{ mb: ".5rem" }}>One Time Password</InputLabel>
//                     <OutlinedInput
//                         size='small'
//                         placeholder='Enter OTP'
//                         fullWidth
//                         endAdornment={
//                             <InputAdornment position="end">
//                                 <Button
//                                     size='small'
//                                     variant='contained'
//                                     edge="end"
//                                     sx={{
//                                         height: "100%",
//                                         boxShadow: "none",
//                                         bgcolor: "primary.main",
//                                         color: "white",
//                                         textTransform: "capitalize",
//                                         "&:hover": { boxShadow: "none" }
//                                     }}
//                                 >
//                                     OTP
//                                 </Button>
//                             </InputAdornment>
//                         }
//                     />
//                 </Grid>
//             </Grid>
//             <Button
//                 type="submit"
//                 size="small"
//                 disabled={isLoading}
//                 variant="contained"
//                 sx={{
//                     textTransform: "capitalize",
//                     boxShadow: "none",
//                     bgcolor: "primary.main",
//                     color: "white",
//                     alignSelf: "flex-start",
//                     "&:hover": {
//                         boxShadow: "none"
//                     }
//                 }}
//             >
//                 Update
//             </Button>
//         </Stack>
//     )
// }

// export default ProfileUpdate;























import { Button, Stack } from '@mui/material'
import { TextField, InputLabel, OutlinedInput, InputAdornment } from '@mui/material'
import { useState } from 'react';
import Grid from "@mui/material/Grid2"
import { useSelector, useDispatch } from 'react-redux';
import { profileUpdateSchema } from './profileUpdateSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useVerifyEmailAndMobileMutation, useVerifyEmailAndMobileOtpMutation } from '../../../../../../globalState/auth/authApis';
import { setNotification } from '../../../../../../globalState/notification/notificationSlice';
import { useUpdateProfileMutation } from '../../../../../../globalState/settings/profileSettingApi';
import { setUserData } from '../../../../../../globalState/auth/authSlice';

function ProfileUpdate() {

    const dispatch = useDispatch()

    const { userData } = useSelector(state => state.auth)

    const [verifyingType, setVerifyingType] = useState(null);
    const [otp, setOtp] = useState("")
    const [otpVerifyType, setOtpVerifyType] = useState(null)

    const defaultValues = {
        name: userData?.name || "",
        email: userData?.email || "",
        mobile: userData?.mobile || "",
    };

    const { register, handleSubmit, reset, watch, setValue, setError, formState: { errors } } = useForm({
        resolver: zodResolver(profileUpdateSchema),
        defaultValues: defaultValues
    });

    const [updateProfile, { isLoading }] = useUpdateProfileMutation()

    const onSubmit = async (data) => {

        try {

            console.log(data)
            const response = await updateProfile(data).unwrap();
            console.log(response)

            if (response.status) {
                dispatch(setUserData(response?.data))
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
            }

        } catch (error) {
            if (error?.data?.data) {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }))
            }
        }
    };

    const [verifyEmailAndMobile] = useVerifyEmailAndMobileMutation();
    const [verifyEmailAndMobileOtp] = useVerifyEmailAndMobileOtpMutation();

    async function handleVerify(type) {
        try {
            setVerifyingType(type);
            const value = watch(type);

            const response = await verifyEmailAndMobile({ [type]: value }).unwrap();

            if (response?.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                setOtpVerifyType(type);
            }
        } catch (error) {
            if (error.data?.data) {
                Object.entries(error.data.data).forEach(([field, message]) => {
                    setError(field, { type: "server", message });
                });
            } else {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        } finally {
            setVerifyingType(null);
        }
    }


    async function handleOtpVerify(type) {
        try {
            setOtpVerifyType(() => type);

            const value = type === "email" ? watch("email") : watch("mobile");

            const response = await verifyEmailAndMobileOtp({
                [type]: value,
                otp,
            }).unwrap();

            if (response?.status) {
                dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
                setOtp("");
                setOtpVerifyType(null);
                setValue(type, value);
                reset(defaultValues)
            }
        } catch (error) {
            if (error.data?.data) {
                Object.entries(error.data.data).forEach(([field, message]) => {
                    setError(field, { type: "server", message });
                });
            } else {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to submit. Please try again later.", severity: "error" }));
            }
        }
    }



    return (
        <Stack
            mt={"2rem"}
            gap={"2rem"}
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Grid
                container
                size={12}
                spacing={3}
            >
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <InputLabel sx={{ mb: ".5rem" }}>Name</InputLabel>
                    <TextField
                        size='small'
                        placeholder='Your name'
                        fullWidth
                        variant="outlined"
                        {...register("name", { required: true })}
                    />
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <InputLabel sx={{ mb: ".5rem" }}>{otpVerifyType === "email" ? "Email otp" : "Email"}</InputLabel>
                    {
                        otpVerifyType === "email"
                            ?
                            <OutlinedInput
                                size='small'
                                placeholder='Your OTP'
                                name='otp'
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button
                                            onClick={() => handleOtpVerify('email')}
                                            disabled={!otp}
                                            size='small'
                                            variant='contained'
                                            edge="end"
                                            sx={{
                                                height: "100%",
                                                boxShadow: "none",
                                                bgcolor: "primary.main",
                                                color: "white",
                                                textTransform: "capitalize",
                                                "&:hover": { boxShadow: "none" }
                                            }}
                                        >
                                            Verify
                                        </Button>
                                    </InputAdornment>
                                }
                            />
                            :
                            <OutlinedInput
                                size='small'
                                placeholder='Your email'
                                {...register("email", { required: true })}
                                fullWidth
                                endAdornment={
                                    userData?.isEmailVerified ? null
                                        :
                                        <InputAdornment position="end">
                                            <Button
                                                onClick={() => handleVerify('email')}
                                                disabled={verifyingType === 'email'}
                                                size='small'
                                                variant='contained'
                                                edge="end"
                                                sx={{
                                                    height: "100%",
                                                    boxShadow: "none",
                                                    bgcolor: "primary.main",
                                                    color: "white",
                                                    textTransform: "capitalize",
                                                    "&:hover": { boxShadow: "none" }
                                                }}
                                            >
                                                {verifyingType === 'email' ? "Sending..." : "Verify"}
                                            </Button>
                                        </InputAdornment>
                                }
                            />
                    }
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                    <InputLabel sx={{ mb: ".5rem" }}>{otpVerifyType === "mobile" ? "Mobile otp" : "Mobile"}</InputLabel>
                    {
                        otpVerifyType === "mobile"
                            ?
                            <OutlinedInput
                                size='small'
                                placeholder='Your OTP'
                                name='otp'
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button
                                            onClick={() => handleOtpVerify('mobile')}
                                            disabled={!otp}
                                            size='small'
                                            variant='contained'
                                            edge="end"
                                            sx={{
                                                height: "100%",
                                                boxShadow: "none",
                                                bgcolor: "primary.main",
                                                color: "white",
                                                textTransform: "capitalize",
                                                "&:hover": { boxShadow: "none" }
                                            }}
                                        >
                                            Verify
                                        </Button>
                                    </InputAdornment>
                                }
                            />
                            :
                            <OutlinedInput
                                size='small'
                                placeholder='Your mobile'
                                {...register("mobile", { required: true })}
                                fullWidth
                                endAdornment={
                                    userData?.isMobileVerified ? null
                                        :
                                        <InputAdornment position="end">
                                            <Button
                                                onClick={() => handleVerify('mobile')}
                                                disabled={verifyingType === 'mobile'}
                                                size='small'
                                                variant='contained'
                                                edge="end"
                                                sx={{
                                                    height: "100%",
                                                    boxShadow: "none",
                                                    bgcolor: "primary.main",
                                                    color: "white",
                                                    textTransform: "capitalize",
                                                    "&:hover": { boxShadow: "none" }
                                                }}
                                            >
                                                {verifyingType === 'mobile' ? "Sending..." : "Verify"}
                                            </Button>
                                        </InputAdornment>
                                }
                            />
                    }
                </Grid>
            </Grid>
            <Button
                type="submit"
                size="small"
                disabled={isLoading}
                variant="contained"
                sx={{
                    textTransform: "capitalize",
                    boxShadow: "none",
                    bgcolor: "primary.main",
                    color: "white",
                    alignSelf: "flex-start",
                    "&:hover": {
                        boxShadow: "none"
                    }
                }}
            >
                Update
            </Button>
        </Stack >
    )
}

export default ProfileUpdate;