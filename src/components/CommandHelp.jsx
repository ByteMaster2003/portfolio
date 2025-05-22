import { Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

import TerminalPrompt from "../components/TerminalPrompt.jsx";
import { helpMessages } from "../constants/help.js";

export default function CommandHelp() {
	return (
		<>
			<TerminalPrompt prompt={"help"} cursor={false} />
			<Typography
				fontFamily={"monospace"}
				variant="h6"
				className="text-gray-200 pl-8"
			>
				Available Commands:
			</Typography>
			<p> &nbsp; </p>
			{Object.entries(helpMessages).map(([key, value]) => (
				<Typography
					key={key}
					fontFamily={"monospace"}
					variant="h6"
					className="text-gray-400 pl-8"
				>
					{key == "Note" ? (
						<>
							<p> &nbsp; </p>
							<span className="text-red-700 mt-8">{`${key}: `}</span>
						</>
					) : (
						<span className="text-orange-400">{`${key}: `}</span>
					)}
					<Typewriter words={[value]} cursorStyle="|" typeSpeed={20} />
				</Typography>
			))}
		</>
	);
}
