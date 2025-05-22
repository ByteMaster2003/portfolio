"use client";

import { Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

import TerminalPrompt from "../components/TerminalPrompt.jsx";
import CommandHelp from "../components/CommandHelp.jsx";
import { headlines } from "../constants/headline.js";

export default function HeadlineContent({
	handleCommand,
}) {
	const [displayHelp, setDisplayHelp] = useState(false);
	const [command, setCommand] = useState("");
	const [promptDone, setPromptDone] = useState(false);
	const [headLineDone, setHeadLineDone] = useState(false);

	setTimeout(() => {
		setPromptDone(true);
	}, 500);
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
			<TerminalPrompt prompt={"whoami"} cursor={false} />

			{/* Display Headlines */}
			{promptDone &&
				headlines.map((line, index) => (
					<Typography
						key={index}
						fontFamily={"monospace"}
						variant="h6"
						className="text-gray-400"
					>
						<Typewriter words={[line]} cursorStyle="|" typeSpeed={20} />
					</Typography>
				))}

			{/* Display Help */}
			{displayHelp && <CommandHelp />}

			{headLineDone && <TerminalPrompt prompt={command} cursor={true} />}
		</>
	);
}
