import * as motion from "motion/react-client";
import {
	ShieldCheck,
	Cpu,
	Zap,
	Database,
	Activity,
	ArrowRight,
} from "lucide-react";

const steps = [
	{
		title: "Secure Edge",
		desc: "Auth (JWT/OAuth2) & Rate Limiting",
		icon: <ShieldCheck className="w-5 h-5" />,
		color: "text-blue-500",
	},
	{
		title: "Scaling Layer",
		desc: "Nginx Load Balancing & Auto-scaling",
		icon: <Activity className="w-5 h-5" />,
		color: "text-cyan-500",
	},
	{
		title: "Message Queue",
		desc: "Redis/RabbitMQ for Async Tasks",
		icon: <Zap className="w-5 h-5" />,
		color: "text-yellow-500",
	},
	{
		title: "Microservices",
		desc: "Node/NestJS in K8s Clusters",
		icon: <Cpu className="w-5 h-5" />,
		color: "text-purple-500",
	},
	{
		title: "Data Persistence",
		desc: "MongoDB Aggregations & SQL Ops",
		icon: <Database className="w-5 h-5" />,
		color: "text-emerald-500",
	},
];

export default function Architecture() {
	return (
		<section id="devops" className="py-24 bg-slate-950 text-white overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
					<div className="max-w-2xl">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							Robust Systems,{" "}
							<span className="text-blue-500">Not Just UI.</span>
						</h2>
						<p className="text-slate-400">
							I specialize in building high-availability backends with
							distributed systems, optimized database queries, and automated
							CI/CD pipelines.
						</p>
					</div>
					<div className="flex gap-2">
						<div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-mono">
							CI/CD ACTIVE
						</div>
						<div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs font-mono">
							K8S HEALTHY
						</div>
					</div>
				</div>

				{/* The Pipeline Visualization */}
				<div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
					{steps.map((step, index) => (
						<div key={index} className="relative group">
							{/* Connecting Line (Desktop) */}
							{index !== steps.length - 1 && (
								<div className="hidden md:block absolute top-1/2 -right-2 translate-x-1/2 z-0">
									<motion.div
										initial={{ opacity: 0.2 }}
										animate={{ opacity: [0.2, 1, 0.2] }}
										transition={{
											duration: 2,
											repeat: Infinity,
											delay: index * 0.4,
										}}
									>
										<ArrowRight className="text-blue-500/30 w-6 h-6" />
									</motion.div>
								</div>
							)}

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 }}
								viewport={{ once: true }}
								className="relative z-10 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-colors h-full"
							>
								<div
									className={`mb-4 p-3 rounded-xl bg-slate-800 inline-block ${step.color}`}
								>
									{step.icon}
								</div>
								<h3 className="font-bold text-lg mb-2">{step.title}</h3>
								<p className="text-sm text-slate-400 leading-relaxed">
									{step.desc}
								</p>

								{/* Animated Pulse Dot */}
								<div className="absolute top-4 right-4 flex h-2 w-2">
									<span
										className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${step.color.replace(
											"text",
											"bg"
										)}`}
									></span>
									<span
										className={`relative inline-flex rounded-full h-2 w-2 ${step.color.replace(
											"text",
											"bg"
										)}`}
									></span>
								</div>
							</motion.div>
						</div>
					))}
				</div>

				{/* DevOps Skill Tags */}
				<div className="mt-12 flex flex-wrap justify-center gap-3">
					{[
						"Docker",
						"Kubernetes",
						"Redis",
						"GitHub Actions",
						"AWS",
						"Nginx",
						"RabbitMQ",
						"OAuth2",
					].map((skill) => (
						<span
							key={skill}
							className="px-3 py-1 text-xs font-mono bg-slate-800 border border-slate-700 rounded text-slate-300"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
