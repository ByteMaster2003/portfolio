import { z } from "zod";
import validator from "validator";
import mailchecker from "mailchecker";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address").refine((email) => {
    return mailchecker.isValid(email);
  }, "Temporary or junk email domains are not allowed").refine((email) => {
    return validator.isEmail(email);
  }, "Invalid email format"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  turnstileToken: z.string().min(1, "Please complete the Turnstile verification"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
