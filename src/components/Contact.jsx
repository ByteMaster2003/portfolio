import { useState } from "react";
import {
	LinkedIn as LinkedInIcon,
	GitHub as GitHubIcon,
	Email as EmailIcon,
} from "@mui/icons-material";
import { Box, Button, TextField, Link } from "@mui/material";
import { motion } from "motion/react";

import TerminalPrompt from "../components/TerminalPrompt.jsx";
import { socials } from "../constants/socials.js";

const MotionBox = motion.create(Box);
const socialComp = {
	GitHub: <GitHubIcon fontSize="large" />,
	LinkedIn: <LinkedInIcon fontSize="large" />,
	Email: <EmailIcon fontSize="large" />,
};

export default function Contact() {
	const [promptDone, setPromptDone] = useState(false);

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
					className="max-w-2xl flex flex-col md:px-4 my-8 gap-4"
				>
					{socials.map((link, index) => (
						<Link href={link.prefix + link.href} target="_blank" key={index}>
							{socialComp[link.name]} {link.href}
						</Link>
					))}
				</MotionBox>
			)}
		</>
	);
}
