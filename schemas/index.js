import * as z from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  phone: z.string().length(10, {
    message: "Phone number must be exactly 10 digits",
  }),
  rollno: z.string().optional(), // No constraints
  institute: z.string().optional(), // No constraints
});
