"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function SendEmail(formData: FormData) {
	const senderEmail = formData.get("email") as string;
	const message = formData.get("message") as string;
	const service = formData.get("service") as string;
	const name = formData.get("name") as string;

	try {
		const { data, error } = await resend.emails.send({
			from: `Portfolio Contact <contact@viveksahani.com>`,
			to: ["viveksahani39266@gmail.com"],
			subject: "New Project Inquiry",
			replyTo: senderEmail,
			text: `
        Name: ${name}
        Email: ${senderEmail}
        Service: ${service}
        Message: ${message}
      `,
		});

		if (error) {
			return { success: false, error };
		}

		return { success: true, ...data };
	} catch (error) {
		return { success: false, error };
	}
}
