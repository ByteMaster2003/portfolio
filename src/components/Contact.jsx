import { useState } from "react";
import {
	LinkedIn as LinkedInIcon,
	GitHub as GitHubIcon,
} from "@mui/icons-material";
import { Box, Button, TextField, Link } from "@mui/material";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { nanoid } from "nanoid";
import axios from "axios";

import TerminalPrompt from "../components/TerminalPrompt.jsx";
import { socials } from "../constants/socials.js";

const MotionBox = motion.create(Box);
const socialComp = {
	github: <GitHubIcon fontSize="large" />,
	linkedin: <LinkedInIcon fontSize="large" />,
};

export default function Contact() {
	const [promptDone, setPromptDone] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const contactSchema = z.object({
		name: z
			.string()
			.min(1, "Name is required")
			.min(3, "name must be at least 3 characters"),
		email: z
			.string()
			.min(1, "Email is required")
			.email("Invalid email address"),
		message: z
			.string()
			.min(1, "Message is required")
			.min(3, "message must be at least 3 characters"),
	});

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(contactSchema),
		mode: "all",
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data) => {
		setIsSubmitting(true);
		const formState = nanoid();
		const payload = {
			name: data.name,
			email: data.email,
			message: data.message,
			state: formState,
		};

		const response = await axios.post(
			"https://viveksahani.com/send_message",
			payload
		);
		if (response.data?.statusCode != 200) {
			toast.error(response.data?.message || "Something went wrong!", { position: "top-center" })
		}
		if (response.data?.data?.state !== formState) {
			toast.error("Potential CSRF Attack! Please don't do this", { position: "top-center" })
		}
		toast.success(response.data?.message, { position: "top-center" })

		reset();
		setIsSubmitting(false);
	};

	setTimeout(() => {
		setPromptDone(true);
	}, 1000);

	return (
		<>
			<TerminalPrompt prompt={"contact"} cursor={false} />
			{promptDone && (
				<MotionBox
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-2xl flex flex-col justify-center md:px-4 my-8"
				>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col gap-8"
					>
						<TextField
							label="Name"
							fullWidth
							{...register("name")}
							variant="standard"
							color="success"
							sx={{
								input: { color: "#FFF" },
							}}
							focused
							error={!!errors.name}
							helperText={errors.name?.message}
						/>
						<TextField
							label="Email"
							fullWidth
							{...register("email")}
							variant="standard"
							color="success"
							sx={{
								input: { color: "#FFF" },
							}}
							focused
							error={!!errors.email}
							helperText={errors.email?.message}
						/>
						<TextField
							label="Message"
							fullWidth
							multiline
							rows={3}
							{...register("message")}
							variant="standard"
							color="success"
							sx={{
								textarea: { color: "#FFF" },
							}}
							focused
							error={!!errors.message}
							helperText={errors.message?.message}
						/>

						<Button
							loading={isSubmitting}
							type="submit"
							variant="contained"
							color="success"
						>
							Send Message
						</Button>
					</form>

					<Box
						component="div"
						className="flex justify-center items-center gap-4 mt-8"
					>
						{socials.map((link, index) => (
							<Link key={index} href={link.href} target="_blank">
								{socialComp[link.name]}
							</Link>
						))}
					</Box>
				</MotionBox>
			)}
		</>
	);
}
