"use server"

import nodemailer from "nodemailer";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";

async function verifyTurnstile(token: string) {
	const secret = process.env.TURNSTILE_SECRET_KEY;
	const response = await fetch(
		"https://challenges.cloudflare.com/turnstile/v0/siteverify",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: `secret=${secret}&response=${token}`,
		}
	);

	const outcome = await response.json();
	return outcome.success;
}

const transporter = nodemailer.createTransport({
	host: 'smtp.zoho.in',
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
	authMethod: 'LOGIN',
});

export async function SendEmail(data: ContactFormData) {
    // Validate data using Zod schema
    const result = contactSchema.safeParse(data);
    if (!result.success) {
        return { success: false, error: "Invalid form data" };
    }

    const { name, email, service, message, turnstileToken } = result.data;

	try {
        // Verify Turnstile
        const isHuman = await verifyTurnstile(turnstileToken);
        if (!isHuman) {
            return { success: false, error: "Captcha verification failed" };
        }

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: "viveksahani39266@gmail.com",
            subject: `New Project Inquiry from ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}
Service: ${service}
Message: ${message}
            `,
            html: `
<h3>New Project Inquiry</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

		return { success: true };
	} catch (error) {
		console.error("Email sending failed:", error);
		return { success: false, error: "Failed to send email" };
	}
}
