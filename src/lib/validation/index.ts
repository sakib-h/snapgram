import * as z from "zod";

export const signUpValidation = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name must be at most 50 characters long" }),
    username: z.string().min(2).max(50),
});
