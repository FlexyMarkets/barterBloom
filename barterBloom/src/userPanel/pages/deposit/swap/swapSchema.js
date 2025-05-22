import * as z from 'zod';

export const swapSchema = z.object({
    amount: z.string().min(1, "Please type your deposit amount"),
    password: z.string().min(1,"Please type your transaction password")
})