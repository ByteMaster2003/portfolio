"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Server, Code2 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	// Animation variants for staggered text reveal
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.3 },
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
			{/* Premium Background Effect */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-[10%] left-[10%] w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
				<div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="text-center max-w-4xl mx-auto"
				>
					{/* Badge */}
					<motion.div
						variants={itemVariants}
						className="flex justify-center mb-6"
					>
						<span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium flex items-center gap-2">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
							</span>
							Available for new projects
						</span>
					</motion.div>

					{/* Main Headline */}
					<motion.h1
						variants={itemVariants}
						className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/60"
					>
						Engineering <span className="text-blue-500">MERN</span> Solutions &{" "}
						<span className="text-blue-500">Cloud</span> Operations
					</motion.h1>

					{/* Subtext */}
					<motion.p
						variants={itemVariants}
						className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
					>
						Hi, I&apos;m{" "}
						<span className="text-foreground font-semibold">Vivek Sahani</span>.
						I build high-performance full-stack applications and orchestrate
						scalable DevOps pipelines with Kubernetes.
					</motion.p>

					{/* Buttons */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row items-center justify-center gap-4"
					>
						<Button
							size="lg"
							className="rounded-full px-8 h-12 text-base group"
						>
							<Link href={"#case-studies"}>
							View My Work</Link>
							<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="rounded-full px-8 h-12 text-base"
						>
							Explore DevOps Stack
						</Button>
					</motion.div>

					{/* Floating Feature Icons (Subtle) */}
					<motion.div
						variants={itemVariants}
						className="mt-20 grid grid-cols-3 gap-4 md:gap-8 border-t border-border/50 pt-10"
					>
						<div className="flex flex-col items-center gap-2">
							<Code2 className="w-6 h-6 text-blue-500" />
							<span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
								Full Stack
							</span>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Server className="w-6 h-6 text-blue-500" />
							<span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
								Infrastructure
							</span>
						</div>
						<div className="flex flex-col items-center gap-2">
							<Terminal className="w-6 h-6 text-blue-500" />
							<span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">
								Automation
							</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
