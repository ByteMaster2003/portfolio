"use client";

import {
	GitHub as GitHubIcon,
	OpenInNewOutlined as OpenInNewIcon,
} from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import TerminalPrompt from "../components/TerminalPrompt.jsx";
import CommandHelp from "../components/CommandHelp.jsx";
import { projects } from "../constants/projects.js";

const MotionCard = motion.create(Card);

export default function Projects({
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
			<TerminalPrompt prompt={"projects"} cursor={false} />

			<Box className="flex flex-col gap-4 my-4">
				{promptDone &&
					projects.map((project, index) => (
						<MotionCard
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="flex flex-col md:flex-row bg-black border border-green-700 shadow-xl"
						>
							<Box className="w-full md:w-80 flex-shrink-0">
								<CardMedia
									component="img"
									image={project.image}
									alt={project.title}
									className="h-full object-cover"
								/>
							</Box>

							<CardContent className="flex flex-col justify-between bg-black text-left">
								<Box>
									<Typography
										variant="h6"
										fontFamily="monospace"
										className="text-green-400"
									>
										{project.title}
									</Typography>
									<Typography
										fontFamily="monospace"
										className="text-gray-300 mt-2 break-all"
									>
										{project.description}
									</Typography>

									<Typography
										fontFamily="monospace"
										className="text-gray-300 pt-2 break-all"
									>
										{project.techs.map((tech) => (
											<span className="text-pink-600" key={tech}>
												#{tech}&nbsp;
											</span>
										))}
									</Typography>
								</Box>

								<Box className="mt-4 flex gap-4">
									{project.github && (
										<Button
											href={project.github}
											target="_blank"
											startIcon={<GitHubIcon />}
											className="text-green-400"
										>
											GitHub
										</Button>
									)}
									{project.live && (
										<Button
											href={project.live}
											target="_blank"
											startIcon={<OpenInNewIcon />}
											className="text-green-400"
										>
											Live
										</Button>
									)}
								</Box>
							</CardContent>
						</MotionCard>
					))}
			</Box>

			{/* Display Help */}
			{displayHelp && <CommandHelp />}

			{headLineDone && <TerminalPrompt prompt={command} cursor={true} />}
		</>
	);
}
