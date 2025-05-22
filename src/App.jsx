"use client";

import {
	KeyboardDoubleArrowDownOutlined as ScrollDownIcon,
	KeyboardDoubleArrowUpOutlined as ScrollUpIcon,
} from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import AboutContent from "./components/AboutContent.jsx";
import HeadlineContent from "./components/HeadlineContent.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const MotionBox = motion.create(Box);

const COMMANDS = {
	headline: {
		index: 0,
		component: HeadlineContent,
	},
	about: {
		index: 1,
		component: AboutContent,
	},
	experiences: {
		index: 2,
		component: ExperienceTimeline,
	},
	projects: {
		index: 3,
		component: Projects,
	},
	contact: {
		index: 4,
		component: Contact,
	},
};

export default function App() {
	const [section, setSection] = useState(0);
	const scrollRef = useRef(null);
	const toolTipRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollRef,
		offset: ["start start", "end end"],
	});

	const sectionIndex = useTransform(scrollYProgress, [0, 1], [0, 5]);
	const activeSection = useSpring(sectionIndex);

	const handleCommand = (command) => {
		const cmd = command.trim().toLowerCase();
		if (cmd === "resume") {
			window.open(
				"https://drive.google.com/file/d/1g0cQnEHCPr21mjOzdPKrf8WXCloL_PyG/view?usp=sharing",
				"_blank"
			);
			return;
		}
		const res = COMMANDS[cmd];
		if (!res) {
			return alert(`Command not found: ${cmd}`);
		}

		setSection(res.index);
	};

	const contentMap = [
		<HeadlineContent key={0} handleCommand={handleCommand} />,
		<AboutContent key={1} handleCommand={handleCommand} />,
		<ExperienceTimeline key={2} handleCommand={handleCommand} />,
		<Projects key={3} handleCommand={handleCommand} />,
		<Contact key={3} />,
	];

	useMotionValueEvent(activeSection, "change", (v) => {
		const rounded = Math.floor(v);
		if (rounded !== section && rounded < contentMap.length) {
			setSection(rounded);
		}
	});

	const HandleScrollDownClick = () => {
		if (section < Object.keys(COMMANDS).length - 1) {
			setSection((prev) => {
				if (scrollRef.current) {
					window.scrollBy({
						top: scrollRef.current?.clientHeight / 5,
						behavior: "smooth",
					});
				}
				return prev + 1;
			});
		}
	};

	const HandleScrollUpClick = () => {
		if (section > 0) {
			setSection((prev) => {
				if (scrollRef.current) {
					window.scrollBy({
						top: -scrollRef.current?.clientHeight / 5,
						behavior: "smooth",
					});
				}
				return prev - 1;
			});
		}
	};

	return (
		<Box
			component={"div"}
			ref={scrollRef}
			className="relative h-[500vh] bg-gray-900"
		>
			<MotionBox className="sticky top-8 lg:top-20 h-[90vh] lg:h-[80vh] flex justify-center">
				<AnimatePresence mode="wait">
					<MotionBox
						key={section}
						initial={{
							opacity: 0.5,
						}}
						animate={{ opacity: 1, y: 0 }}
						exit={{
							opacity: 0.5,
						}}
						transition={{ type: "spring", stiffness: 100, damping: 20 }}
						className="w-[95%] lg:w-[80%] bg-black p-6 rounded-lg shadow-xl overflow-auto"
					>
						{contentMap[section]}
						{section != 0 && (
							<motion.span
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute -top-8 left-1/2 transform -translate-x-1/2"
							>
								<Tooltip title="Scroll Up" ref={toolTipRef}>
									<IconButton onClick={HandleScrollUpClick}>
										<ScrollUpIcon fontSize="large" className="text-gray-200" />
									</IconButton>
								</Tooltip>
							</motion.span>
						)}
						{section != contentMap.length - 1 && (
							<motion.span
								animate={{ y: [0, 10, 0] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
							>
								<Tooltip title="Scroll Down">
									<IconButton onClick={HandleScrollDownClick}>
										<ScrollDownIcon
											fontSize="large"
											className="text-gray-200"
										/>
									</IconButton>
								</Tooltip>
							</motion.span>
						)}
					</MotionBox>
				</AnimatePresence>
			</MotionBox>
		</Box>
	);
}
