import * as motion from "motion/react-client";
import { User, Zap, Rocket } from "lucide-react";

export default function About() {
	const stats = [
		{ label: "Tech Stack", value: "MERN / MEAN" },
		{ label: "Infrastructure", value: "K8s / AWS" },
		{ label: "Specialty", value: "Fintech & AI" },
		{ label: "Availability", value: "Freelance / Ops" },
	];

	return (
		<section id="about" className="py-24 relative overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="flex items-center gap-2 text-blue-500 font-mono text-sm mb-4">
							<User className="w-4 h-4" />
							<span>THE ARCHITECT</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
							I don’t just write code. <br />
							<span className="text-muted-foreground">
								I build systems that scale.
							</span>
						</h2>

						<div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
							<p>
								My journey began at the intersection of{" "}
								<span className="text-foreground font-medium">
									Fintech reliability
								</span>{" "}
								and{" "}
								<span className="text-foreground font-medium">
									E-commerce scalability
								</span>
								. I’ve spent my career helping startups bridge the gap between a
								frontend that looks premium and a backend that is bulletproof.
							</p>

							<p>
								Whether it’s optimizing{" "}
								<span className="text-blue-500 font-mono">
									MongoDB aggregation pipelines
								</span>{" "}
								for an NBFC or architecting{" "}
								<span className="text-blue-500 font-mono">
									AWS SQS decoupled workers
								</span>{" "}
								for AI processing, I focus on the technical details that prevent
								downtime and drive business growth.
							</p>

							<p>
								As a freelancer, I operate as your{" "}
								<span className="italic text-foreground underline decoration-blue-500/30">
									on-demand CTO
								</span>
								. I handle everything from the initial UI sketch in Tailwind to
								the final Kubernetes deployment.
							</p>
						</div>
					</motion.div>

					{/* Visual / Stats Card */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="relative"
					>
						{/* The "Stats" Glass Card */}
						<div className="relative z-10 p-8 rounded-3xl border border-border bg-linear-to-br from-background to-secondary/30 backdrop-blur-xl shadow-2xl">
							<div className="grid grid-cols-2 gap-8">
								{stats.map((stat, index) => (
									<div key={index} className="space-y-1">
										<p className="text-xs font-mono text-blue-500 uppercase tracking-widest">
											{stat.label}
										</p>
										<p className="text-xl font-bold text-foreground">
											{stat.value}
										</p>
									</div>
								))}
							</div>

							<div className="mt-12 pt-8 border-t border-border">
								<h4 className="text-sm font-bold mb-4 flex items-center gap-2 text-foreground">
									<Zap className="w-4 h-4 text-yellow-500" /> My Philosophy
								</h4>
								<ul className="space-y-4">
									{[
										"Performance is not a feature, it's a requirement.",
										"If it isn't automated, it isn't finished.",
										"Data integrity over everything.",
									].map((item, i) => (
										<li
											key={i}
											className="flex items-start gap-3 text-sm text-muted-foreground"
										>
											<Rocket className="w-4 h-4 mt-0.5 text-blue-500" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Background Decorative Element */}‰
						<div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] z-0" />
						<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] z-0" />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
