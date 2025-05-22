"use client";

import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { motion } from "motion/react";

import TerminalPrompt from "../components/TerminalPrompt.jsx";
import CommandHelp from "../components/CommandHelp.jsx";
import { aboutLines } from "../constants/about.js";

const MotionTypography = motion.create(Typography);

export default function AboutContent({
	handleCommand,
}) {
	const [displayHelp, setDisplayHelp] = useState(false);
	const [command, setCommand] = useState("");
	const [promptDone, setPromptDone] = useState(false);
	const [aboutSectionDone, setAboutSectionDone] = useState(false);

	setTimeout(() => {
		setPromptDone(true);
	}, 1000);
	setTimeout(() => {
		setAboutSectionDone(true);
	}, 1500);

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
			<TerminalPrompt prompt={"about"} cursor={false} />

			{/* Display about information */}
			{promptDone &&
				aboutLines.map((line, index) => (
					<MotionTypography
						key={index}
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.2, duration: 0.5 }}
						viewport={{ once: true }}
						className="text-gray-400 pb-8"
						fontFamily={"monospace"}
						variant="h6"
					>
						{line}
					</MotionTypography>
				))}

			{/* Display Help */}
			{displayHelp && <CommandHelp />}

			{aboutSectionDone && (
				<TerminalPrompt prompt={command || ""} cursor={true} />
			)}
		</>
	);
}
