"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "sonner";
import { track } from "@vercel/analytics";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SendEmail } from "../actions/sendEmail";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			service: "",
			message: "",
			turnstileToken: "",
		},
	});

	async function onSubmit(data: ContactFormData) {
		setIsSubmitting(true);
		try {
			const result = await SendEmail(data);

			if (result.success) {
				toast.success("Message sent! I'll get back to you soon.", {
					position: "top-center",
				});
				track("contact_form_success", { service: data.service });
				reset();
			} else {
				toast.error(result.error || "Something went wrong. Please try again.", {
					position: "top-center",
				});
				track("contact_form_error", { error: result.error });
			}
		} catch (error) {
			toast.error("An unexpected error occurred.", {
				position: "top-center",
			});
			track("contact_form_exception");
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<section id="contact" className="py-24 bg-background">
			<div className="container mx-auto px-6 max-w-4xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
						Let&apos;s build something{" "}
						<span className="text-blue-500">stable.</span>
					</h2>
					<p className="text-muted-foreground">
						Looking for a full-stack expert or DevOps consultant? Let&apos;s
						talk about your project.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div>
							<h3 className="text-xl font-bold mb-2 text-foreground">
								Contact Details
							</h3>
							<p className="text-muted-foreground">contact@viveksahani.com</p>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-2 text-foreground">
								Location
							</h3>
							<p className="text-muted-foreground">
								Available Worldwide (Remote)
							</p>
						</div>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div>
							<Input
								{...register("name")}
								placeholder="Your Name"
								className="bg-secondary/50 border-border"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
							)}
						</div>
						<div>
							<Input
								{...register("email")}
								type="email"
								placeholder="Email Address"
								className="bg-secondary/50 border-border"
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
							)}
						</div>
						<div>
							<Select onValueChange={(value) => setValue("service", value)}>
								<SelectTrigger className="bg-secondary/50 border-border">
									<SelectValue placeholder="Interested In" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="fullstack">
										Full Stack (MERN/MEAN)
									</SelectItem>
									<SelectItem value="devops">DevOps & K8s</SelectItem>
									<SelectItem value="backend">System Optimization</SelectItem>
								</SelectContent>
							</Select>
							{errors.service && (
								<p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
							)}
						</div>
						<div>
							<Textarea
								{...register("message")}
								placeholder="Briefly describe your project..."
								className="bg-secondary/50 border-border min-h-30"
							/>
							{errors.message && (
								<p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
							)}
						</div>

						<div className="flex justify-center">
							<Turnstile
								siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
								onSuccess={(token) => setValue("turnstileToken", token)}
							/>
						</div>
						{errors.turnstileToken && (
							<p className="text-red-500 text-sm text-center">
								{errors.turnstileToken.message}
							</p>
						)}

						<Button
							type="submit"
							disabled={isSubmitting}
							className="w-full h-12 text-lg font-bold bg-blue-600 hover:bg-blue-700"
						>
							{isSubmitting ? "Sending..." : "Launch Inquiry"}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
