"use client";

import { Typography } from "@mui/material";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const MotionTypewriter = motion.create(Typewriter);

export default function TerminalPrompt({
	prompt,
	cursor,
}) {
	return (
		<>
			<Typography
				fontFamily={"monospace"}
				variant="h6"
				className="text-gray-400"
			>
				<span className="text-green-400">user@vivek:~$&nbsp;</span>

				{cursor ? (
					<>
						{prompt || <span className="text-gray-600 font-light">Type `help` to learn more</span>}
						<MotionTypewriter words={[""]} cursor cursorStyle="|" />
					</>
				) : (
					<MotionTypewriter
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ delay: 0.3 }}
						words={[prompt]}
						cursor={cursor}
						cursorStyle="|"
						typeSpeed={70}
					/>
				)}
			</Typography>
		</>
	);
}
