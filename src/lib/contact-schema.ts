import { z } from "zod";

export const contactSchema = z.object({
  owner: z.string().trim().min(1, "Please enter your name.").max(100, "Please use 100 characters or fewer."),
  email: z.string().trim().max(254, "Please use a shorter email address.").pipe(z.email("Please enter a valid email address.")),
  dog: z.string().trim().min(1, "Please enter your dog’s name.").max(100, "Please use 100 characters or fewer."),
  location: z.string().trim().min(1, "Please share your cross streets.").max(120, "Please use 120 characters or fewer."),
  message: z.string().trim().max(1500, "Please use 1,500 characters or fewer."),
});

export type ContactDetails = z.infer<typeof contactSchema>;
