"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowUpRight,
	CheckCircle2,
	AlertCircle,
	Terminal,
} from "lucide-react";

const workHistory = [
	{
		company: "E-commerce AI Startup",
		role: "Backend & Infrastructure Lead",
		problem:
			"Processing massive bulk product uploads was crashing the main Node.js server and slowing down the UI.",
		solution:
			"Architected a decoupled system using AWS SQS. Moved heavy AI normalization to a separate service, ensuring the main API remained responsive.",
		tech: ["Node.js", "AWS SQS", "AI Hooks", "Worker Threads"],
		impact: "100% System stability during peak uploads; 0% message loss.",
	},
	{
		company: "Fintech NBFC Platform",
		role: "Lead Backend Engineer",
		problem:
			"The client needed an audit-ready system for ChitFunds with complex financial ledgers and slow reporting queries.",
		solution:
			"Designed an immutable transaction schema and optimized MongoDB aggregation pipelines for real-time financial analytics.",
		tech: ["MERN Stack", "MongoDB Aggregation", "RBAC", "Financial Logic"],
		impact:
			"60% reduction in query latency; successfully passed security audit.",
	},
	{
		company: "Fintech Startup (Freelance)",
		role: "Full Stack Developer",
		problem:
			"Needed a high-trust landing page that loaded instantly to convert cold leads into sign-ups.",
		solution:
			"Developed a Next.js site with server-side rendering and premium Framer Motion interactions to build brand authority.",
		tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
		impact:
			"98/100 Lighthouse performance score; 25% increase in lead conversion.",
	},
];

export default function Experiences() {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section id="case-studies" className="py-24 bg-background">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
					Selected <span className="text-blue-500">Case Studies</span>
				</h2>

				<div className="flex flex-col border-t border-border">
					{workHistory.map((item, index) => (
						<div
							key={index}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							className="px-5 relative border-b border-border py-12 cursor-pointer group"
						>
							{/* The Header (Visible by default) */}
							<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
								<div>
									<span className="text-sm font-mono text-blue-500 mb-2 block uppercase tracking-widest">
										{item.role}
									</span>
									<h3 className="text-2xl md:text-4xl font-semibold group-hover:translate-x-4 transition-transform duration-300">
										{item.company}
									</h3>
								</div>
								<div className="flex items-center gap-4">
									<div className="hidden md:flex gap-2">
										{item.tech.slice(0, 2).map((t) => (
											<span
												key={t}
												className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
											>
												{t}
											</span>
										))}
									</div>
									<ArrowUpRight
										className={`w-8 h-8 transition-all duration-300 ${
											hoveredIndex === index
												? "rotate-45 text-blue-500"
												: "text-muted-foreground"
										}`}
									/>
								</div>
							</div>

							{/* The Reveal Content */}
							<AnimatePresence>
								{hoveredIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.4, ease: "easeInOut" }}
										className="overflow-hidden"
									>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 pb-4">
											<div className="space-y-4">
												<div className="flex gap-3">
													<AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
													<p className="text-muted-foreground text-sm leading-relaxed">
														<strong className="text-foreground">
															The Challenge:
														</strong>{" "}
														{item.problem}
													</p>
												</div>
												<div className="flex gap-3">
													<CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
													<p className="text-muted-foreground text-sm leading-relaxed">
														<strong className="text-foreground">
															The Solution:
														</strong>{" "}
														{item.solution}
													</p>
												</div>
											</div>
											<div className="bg-secondary/30 p-6 rounded-2xl border border-border">
												<div className="flex items-center gap-2 mb-3 text-blue-500">
													<Terminal className="w-4 h-4" />
													<span className="text-xs font-bold uppercase tracking-tighter">
														Impact Log
													</span>
												</div>
												<p className="text-lg font-medium text-foreground italic">
													&quot;{item.impact}&quot;
												</p>
												<div className="mt-4 flex flex-wrap gap-2">
													{item.tech.map((t) => (
														<span
															key={t}
															className="text-[10px] font-mono bg-background px-2 py-1 rounded border border-border"
														>
															{t}
														</span>
													))}
												</div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>

							{/* Hover Background Accent */}
							<div
								className={`absolute inset-0 bg-blue-500/5 z-0 transition-opacity duration-300 ${
									hoveredIndex === index ? "opacity-100" : "opacity-0"
								}`}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
