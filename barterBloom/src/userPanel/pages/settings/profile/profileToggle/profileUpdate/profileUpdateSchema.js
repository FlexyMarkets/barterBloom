import * as z from 'zod';

export const profileUpdateSchema = z.object({
    fullName: z.string().trim().min(1, "User name or email is required"),
    email: z.string().trim().email("Please enter a valid email"),
    mobile: z.string().min(7, "Mobile number must be at least 7 digits"),
    tradingMt5AcNo: z.string().trim().min(1, "User name or email is required"),
    compoundingMT5AcNo: z.string().trim().min(1, "User name or email is required"),
    country: z.string().trim().min(1, "Please select your country"),
    // trxPassword:z.string()
    walletAddress: z.string().trim().min(1, "Please enter your wallet address")
})