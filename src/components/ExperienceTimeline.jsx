"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "motion/react"

import TerminalPrompt from "../components/TerminalPrompt.jsx";
import CommandHelp from "../components/TerminalPrompt.jsx";
import { experiences } from "../constants/exp.js";

const MotionBox = motion.create(Box);

export default function ExperienceTimeline({
	handleCommand,
}) {
	const [displayHelp, setDisplayHelp] = useState(false);
	const [command, setCommand] = useState("");
	const [promptDone, setPromptDone] = useState(false);
	const [headLineDone, setHeadLineDone] = useState(false);

	setTimeout(() => {
		setPromptDone(true);
	}, 1000);
	setTimeout(() => {
		setHeadLineDone(true);
	}, 2500);

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key === "Enter") {
				const trimedCommand = command.trim().toLowerCase();
				if (trimedCommand == "help") {
					setDisplayHelp(true);
				} else {
					handleCommand(command.trim().toLowerCase());
				}
				setCommand("");
			} else if (e.key === "Backspace") {
				setCommand((prev) => prev.slice(0, -1));
			} else if (e.key.length === 1) {
				setCommand((prev) => prev + e.key);
			}
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => window.removeEventListener("keydown", handleKeyPress);
	}, [command, handleCommand]);

	return (
		<>
			<TerminalPrompt prompt={"experiences"} cursor={false} />

			<Box className="relative pl-8">
				{promptDone &&
					experiences.map((exp, index) => (
						<MotionBox
							key={index}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.2, duration: 0.5 }}
							viewport={{ once: true }}
							className="mb-10"
						>
							<Typography
								variant="h6"
								fontFamily="monospace"
								className="text-white"
							>
								{exp.role} @{exp.company}
							</Typography>
							<Typography
								variant="subtitle2"
								fontFamily="monospace"
								className="text-gray-400"
							>
								{exp.location}
							</Typography>
							<Typography
								variant="subtitle2"
								fontFamily="monospace"
								className="text-gray-400"
							>
								{exp.period}
							</Typography>
							{exp.descriptions.map((desc) => (
								<Typography
									key={desc}
									fontFamily="monospace"
									className="text-gray-300 mt-2"
								>
									{desc}
								</Typography>
							))}
						</MotionBox>
					))}
			</Box>

			{/* Display Help */}
			{displayHelp && <CommandHelp />}

			{headLineDone && <TerminalPrompt prompt={command} cursor={true} />}
		</>
	);
}
