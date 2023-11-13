import * as z from "zod";

export const SignUpValidation = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 3 characters long" })
        .max(50, { message: "Name must be at most 50 characters long" }),
    username: z
        .string()
        .min(2, { message: "Name must be at least 3 characters long" }),

    email: z.string().email({ message: "Invalid email" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
});
export const SignInValidation = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
});
export const PostValidation = z.object({
    caption: z
        .string()
        .min(5, { message: "Caption must be at least 5 characters long" })
        .max(2200, { message: "Caption must be at most 2200 characters long" }),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
});
