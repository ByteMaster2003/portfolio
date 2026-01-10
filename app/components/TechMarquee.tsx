import * as motion from "motion/react-client";

const tech = [
	"MongoDB",
	"Express",
	"React",
	"Node.js",
	"Angular",
	"Next.js",
	"Docker",
	"Kubernetes",
	"AWS",
	"TypeScript",
	"Tailwind CSS",
	"Redis",
];

export default function TechMarquee() {
	return (
		<div className="py-12 bg-secondary/30 border-y border-border overflow-hidden">
			<div className="flex whitespace-nowrap">
				<motion.div
					initial={{ x: 0 }}
					animate={{ x: "-50%" }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="flex gap-12 items-center min-w-full"
				>
					{/* We double the array to create a seamless loop */}
					{[...tech, ...tech].map((item, i) => (
						<span
							key={i}
							className="text-2xl md:text-4xl font-bold text-muted-foreground/40 hover:text-blue-500 transition-colors cursor-default"
						>
							{item}
						</span>
					))}
				</motion.div>
			</div>
		</div>
	);
}
