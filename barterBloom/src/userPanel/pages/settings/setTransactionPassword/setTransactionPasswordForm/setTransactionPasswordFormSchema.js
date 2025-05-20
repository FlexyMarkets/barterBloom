import * as z from "zod";

export const setTransactionPasswordFormSchema = z
    .object({
        securityQuestion: z.string().min(8, "Please select security question"),
        answer: z.string().min(1, "Please type your answer").min(3, "Answer mush include at least 3 characters"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                "Password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character"
            ),
        cnfPassword: z.string().min(8, "Password must be at least 8 characters"),
    })
    .refine((data) => data.password === data.cnfPassword, {
        message: "Passwords do not match",
        path: ["cnfPassword"],
    });
