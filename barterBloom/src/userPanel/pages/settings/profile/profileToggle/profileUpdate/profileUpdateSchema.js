import * as z from 'zod';

export const profileUpdateSchema = z.object({
    name: z.string().trim().min(1, "User name or email is required"),
    email: z.string().trim().email("Please enter a valid email"),
    mobile: z.string().min(7, "Mobile number must be at least 7 digits"),
})