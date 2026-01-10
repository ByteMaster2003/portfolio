import * as motion from "motion/react-client";
import { Database, Globe, Container, GitMerge, Cpu } from "lucide-react";

const services = [
	{
		title: "Full Stack Development",
		description:
			"Building high-performance web applications using the MERN & MEAN stack. Scalable from day one.",
		icon: <Globe className="w-8 h-8 text-blue-500" />,
		className: "md:col-span-2 md:row-span-1 bg-blue-500/5",
	},
	{
		title: "Kubernetes & Cloud",
		description: "Orchestrating containerized environments for maximum uptime.",
		icon: <Container className="w-8 h-8 text-cyan-500" />,
		className: "md:col-span-1 md:row-span-2 bg-cyan-500/5",
	},
	{
		title: "CI/CD Pipelines",
		description: "Automated testing and deployment workflows that save time.",
		icon: <GitMerge className="w-8 h-8 text-purple-500" />,
		className: "md:col-span-1 md:row-span-1 bg-purple-500/5",
	},
	{
		title: "Backend Architecture",
		description: "Robust Node.js & Express systems with MongoDB/PostgreSQL.",
		icon: <Database className="w-8 h-8 text-emerald-500" />,
		className: "md:col-span-1 md:row-span-1 bg-emerald-500/5",
	},
	{
		title: "System Design",
		description:
			"Planning complex infrastructures that scale with your user base.",
		icon: <Cpu className="w-8 h-8 text-orange-500" />,
		className: "md:col-span-2 md:row-span-1 bg-orange-500/5",
	},
];

export default function Services() {
	return (
		<section id="services" className="py-24 relative">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4">Core Services</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Specialized in building modern web applications and automating cloud
						infrastructure for global scale.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className={`${service.className} group relative overflow-hidden rounded-3xl border border-border p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all`}
						>
							{/* Abstract background flare on hover */}
							<div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />

							<div className="flex flex-col h-full justify-between relative z-10">
								<div>
									<div className="mb-4 inline-block p-3 rounded-2xl bg-background border border-border shadow-sm">
										{service.icon}
									</div>
									<h3 className="text-xl font-bold mb-2">{service.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{service.description}
									</p>
								</div>

								{/* Subtle "Learn More" link for premium feel */}
								<div className="text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
									Learn more <div className="w-8 h-px bg-primary" />
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
