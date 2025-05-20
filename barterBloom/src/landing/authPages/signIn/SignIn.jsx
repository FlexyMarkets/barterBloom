// import {
//     Box,
//     InputAdornment,
//     InputLabel,
//     OutlinedInput,
//     Button,
//     Typography,
//     IconButton,
//     Card,
//     CardContent,
//     Stack,
//     FormControl,
//     FormLabel,
//     FormControlLabel,
//     Radio,
//     RadioGroup
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { inputStyles } from "../authPagesInputStyle";
// import { signinSchema } from "./signInSchema";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useSignInMutation } from "../../../globalState/auth/authApis";
// import ForgotPasswordModal from "../../Components/forgotPasswordModal/ForgotPasswordModal"
// import { setNotification } from "../../../globalState/notification/notificationSlice";
// import { useDispatch } from "react-redux";
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


// function SignIn() {

//     const [signInType, setSignInType] = useState("email")

//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const [signIn, { isLoading }] = useSignInMutation();

//     const defaultValues = {
//         email: "",
//         mobile: "",
//         password: "",
//         otp: ""
//     };

//     const { register, handleSubmit, setError, control, formState: { errors } } = useForm({
//         resolver: zodResolver(signinSchema),
//         defaultValues: defaultValues
//     });


//     const onSubmit = async (data) => {

//         try {
//             console.log(data)
//             const response = await signIn(data).unwrap();
//             console.log(response)

//             if (response?.status) {
//                 navigate("/dashboard")
//                 dispatch(setNotification({ open: true, message: response?.message, severity: "success" }));
//             }

//         } catch (error) {
//             if (error?.data?.data) {
//                 Object.entries(error.data?.data).forEach(([field, message]) => {
//                     setError(field, { type: "server", message });
//                 });
//             } else {
//                 dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to sign in. Please try again later.", severity: "error" }));
//             }
//         }
//     };


//     return (
//         <Box
//             sx={{
//                 height: "100vh",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 height: "100vh",
//                 backgroundImage: "url('/authPagesBgImage.webp')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 position: "relative",
//             }}
//         >
//             <Stack
//                 sx={{
//                     position: "absolute",
//                     inset: 0,
//                     height: "100%",
//                     background: "linear-gradient(to top right, rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.76))",
//                     opacity: 0.7,
//                 }}
//             ></Stack>
//             <Card
//                 sx={{
//                     width: { xs: 300, sm: 450 },
//                     p: { xs: .5, sm: 2 },
//                     borderRadius: 2,
//                     backgroundColor: "rgba(255, 255, 255, 0.1)",
//                     backdropFilter: "blur(80px)",
//                     boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//                     border: "1px solid rgba(255, 255, 255, 0.2)",
//                 }}
//             >
//                 <CardContent
//                     sx={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
//                     component={"form"}
//                     onSubmit={handleSubmit(onSubmit)}
//                 >
//                     <Typography variant="h4" fontWeight="bold" align="center" color="white">Sign In</Typography>
//                     <FormControl>
//                         <FormLabel sx={{ fontSize: "14px", color: "white", "&.Mui-focused": { color: "white" } }}>
//                             Select Sign in Option
//                         </FormLabel>
//                         <Controller
//                             name="contact"
//                             control={control}
//                             render={({ field }) => (
//                                 <RadioGroup
//                                     sx={{ display: "flex", flexDirection: "row" }}
//                                     {...field}
//                                     value={signInType}
//                                     onChange={(e) => setSignInType(e.target.value)}
//                                 >
//                                     <FormControlLabel
//                                         value="email"
//                                         control={<Radio sx={{ color: "#8703ef", "&.Mui-checked": { color: "#8703ef" } }} />}
//                                         label="Email"
//                                         sx={{
//                                             color: "#ffffff",
//                                             '& .MuiFormControlLabel-label': {
//                                                 color: '#ffffff'
//                                             }
//                                         }}
//                                     />
//                                     <FormControlLabel
//                                         value="mobile"
//                                         control={<Radio sx={{ color: "#8703ef", "&.Mui-checked": { color: "#8703ef" } }} />}
//                                         label="Mobile"
//                                         sx={{
//                                             color: "#ffffff",
//                                             '& .MuiFormControlLabel-label': {
//                                                 color: '#ffffff'
//                                             }
//                                         }}
//                                     />
//                                     <FormControlLabel
//                                         value="mobileWithOTP"
//                                         control={<Radio sx={{ color: "#8703ef", "&.Mui-checked": { color: "#8703ef" } }} />}
//                                         label="Mobile with OTP"
//                                         sx={{
//                                             color: "#ffffff",
//                                             '& .MuiFormControlLabel-label': {
//                                                 color: '#ffffff'
//                                             }
//                                         }}
//                                     />
//                                 </RadioGroup>
//                             )}
//                         />
//                     </FormControl>
//                     {
//                         signInType === "email"
//                             ?
//                             <Box>
//                                 <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Email</InputLabel>
//                                 <OutlinedInput
//                                     size="small"
//                                     {...register("email", { required: true })}
//                                     placeholder='Email'
//                                     fullWidth
//                                     startAdornment={<InputAdornment position="start"><EmailIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
//                                     sx={{ ...inputStyles }}
//                                 />
//                                 {errors.email && <Typography color="error">{errors.email.message}</Typography>}
//                             </Box>
//                             :
//                             <Box>
//                                 <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Mobile no.</InputLabel>
//                                 <OutlinedInput
//                                     size="small"
//                                     {...register("mobile", { required: true })}
//                                     placeholder='Mobile no.'
//                                     fullWidth
//                                     startAdornment={<InputAdornment position="start"><LocalPhoneIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
//                                     sx={{ ...inputStyles }}
//                                 />
//                                 {errors.mobile && <Typography color="error">{errors.mobile.message}</Typography>}
//                             </Box>
//                     }
//                     {
//                         signInType === "mobileWithOTP"
//                             ?
//                             <Box>
//                                 <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>OTP</InputLabel>
//                                 <OutlinedInput
//                                     size="small"
//                                     {...register("otp", { required: true })}
//                                     placeholder='Type otp'
//                                     fullWidth
//                                     startAdornment={<InputAdornment position="start"><LockIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
//                                     sx={{ ...inputStyles }}
//                                 />
//                                 {errors.otp && <Typography color="error">{errors.otp.message}</Typography>}
//                             </Box>
//                             :
//                             <Box>
//                                 <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Password</InputLabel>
//                                 <OutlinedInput
//                                     size="small"
//                                     {...register("password", { required: true })}
//                                     placeholder='********'
//                                     fullWidth
//                                     type={showPassword ? 'text' : 'password'}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label={
//                                                     showPassword ? 'hide the password' : 'display the password'
//                                                 }
//                                                 onClick={handleClickShowPassword}
//                                                 edge="end"
//                                             >
//                                                 {showPassword ? <VisibilityOff sx={{ color: '#8703ef', fontSize: "20px" }} /> : <Visibility sx={{ color: '#8703ef', fontSize: "20px" }} />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }
//                                     startAdornment={<InputAdornment position="start"><LockIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
//                                     sx={{ ...inputStyles }}
//                                 />
//                                 {errors.password && <Typography color="error">{errors.password.message}</Typography>}
//                             </Box>
//                     }
//                     <Box display="flex" justifyContent="space-between" alignItems="center">
//                         <ForgotPasswordModal btnName={"Forgot Password?"} />
//                     </Box>
//                     <Button
//                         type="submit"
//                         disabled={isLoading}
//                         size="small"
//                         variant='contained'
//                         sx={{
//                             textTransform: "capitalize",
//                             boxShadow: "none",
//                             bgcolor: "#8703ef",
//                             fontSize: "1.1rem",
//                             color: "white",
//                             "&:hover": {
//                                 boxShadow: "none"
//                             }
//                         }}
//                     >Login</Button>
//                     <Typography textAlign="center" color="white" fontSize={"14px"}>
//                         Don’t have an account? <Link to={"/signup"} style={{ textDecoration: "none" }}><Typography component="span" color="primary" sx={{ cursor: "pointer", color: '#8703ef', fontSize: "14px" }}>Sign up</Typography></Link>
//                     </Typography>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default SignIn;






















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
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { inputStyles } from "../authPagesInputStyle";
import { signinSchema } from "./signInSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignInMutation } from "../../../globalState/auth/authApis";
import ForgotPasswordModal from "../../Components/forgotPasswordModal/ForgotPasswordModal"
import { setNotification } from "../../../globalState/notification/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from '@mui/icons-material/Person';


function SignIn() {

    const { userData } = useSelector(state => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [signIn, { isLoading }] = useSignInMutation();

    const defaultValues = {
        loginId: "",
        password: "",
    };

    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: zodResolver(signinSchema),
        defaultValues: defaultValues
    });


    const onSubmit = async (data) => {

        try {
            console.log(data)
            const response = await signIn(data).unwrap();
            console.log(response)

            if (response?.status) {
                navigate("/dashboard")
                dispatch(setNotification({ open: true, message: response?.message, severity: "success", autoHideDuration: 4000 }));
            }

        } catch (error) {
            if (error?.data?.data) {
                Object.entries(error.data?.data).forEach(([field, message]) => {
                    setError(field, { type: "server", message });
                });
            } else {
                dispatch(setNotification({ open: true, message: error?.data?.message || "Failed to sign in. Please try again later.", severity: "error", autoHideDuration: 4000 }));
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
                height: "100vh",
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
                    opacity: 0.7,
                }}
            ></Stack>
            <Card
                sx={{
                    width: { xs: 300, sm: 450 },
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
                    <Typography variant="h4" fontWeight="bold" align="center" color="white">Sign In</Typography>
                    <Box>
                        <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Login Id</InputLabel>
                        <OutlinedInput
                            size="small"
                            {...register("loginId", { required: true })}
                            placeholder='LogIn id'
                            fullWidth
                            startAdornment={<InputAdornment position="start"><PersonIcon sx={{ color: '#8703ef', fontSize: "20px" }} /></InputAdornment>}
                            sx={{ ...inputStyles }}
                        />
                        {errors.loginId && <Typography color="error">{errors.loginId.message}</Typography>}
                    </Box>
                    <Box>
                        <InputLabel sx={{ mb: ".5rem", color: "white", fontSize: "14px" }}>Password</InputLabel>
                        <OutlinedInput
                            size="small"
                            {...register("password", { required: true })}
                            placeholder='********'
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
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <ForgotPasswordModal btnName={"Forgot Password?"} />
                    </Box>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        size="small"
                        variant='contained'
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
                    >Login</Button>
                    <Typography textAlign="center" color="white" fontSize={"14px"}>
                        Don’t have an account? <Link to={"/signup"} style={{ textDecoration: "none" }}><Typography component="span" color="primary" sx={{ cursor: "pointer", color: '#8703ef', fontSize: "14px" }}>Sign up</Typography></Link>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default SignIn;