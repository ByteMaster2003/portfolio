"use client";

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
import { toast } from "sonner";
import { SendEmail } from "../actions/sendEmail";

export default function Contact() {
	async function handleSubmit(formData: FormData) {
		const { success } = await SendEmail(formData);

		if (success) {
			toast.success("Message sent! I'll get back to you soon.", {
				position: "top-center",
			});
		} else {
			toast.error("Something went wrong. Please try again.", {
				position: "top-center",
			});
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

					<form action={handleSubmit} className="space-y-4">
						<Input
							name="name"
							placeholder="Your Name"
							className="bg-secondary/50 border-border"
						/>
						<Input
							name="email"
							type="email"
							placeholder="Email Address"
							className="bg-secondary/50 border-border"
						/>
						<Select name="service">
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
						<Textarea
							name="message"
							placeholder="Briefly describe your project..."
							className="bg-secondary/50 border-border min-h-30"
						/>
						<Button
							type="submit"
							className="w-full h-12 text-lg font-bold bg-blue-600 hover:bg-blue-700"
						>
							Launch Inquiry
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
