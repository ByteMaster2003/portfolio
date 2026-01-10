import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
	return (
		<footer className="py-12 border-t border-border bg-background">
			<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
				<div>
					<p className="text-lg font-bold">
						Vivek<span className="text-blue-500">Sahani</span>
					</p>
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} — Built with Next.js & Framer Motion
					</p>
				</div>

				<div className="flex gap-6">
					<Link
						href="https://github.com/ByteMaster2003"
						target="_blank"
						className="text-muted-foreground hover:text-foreground"
						aria-label="Visit my GitHub profile"
					>
						<Github size={20} />
					</Link>
					<Link
						href="https://www.linkedin.com/in/developer-vivek-sahani/"
						target="_blank"
						className="text-muted-foreground hover:text-foreground"
						aria-label="Visit my LinkedIn profile"
					>
						<Linkedin size={20} />
					</Link>
					<Link
						href="https://x.com/viveksahani2003"
						target="_blank"
						className="text-muted-foreground hover:text-foreground"
						aria-label="Visit my Twitter profile"
					>
						<Twitter size={20} />
					</Link>
				</div>

				<div className="text-sm font-mono text-muted-foreground">
					System Status: <span className="text-emerald-500">Operational</span>
				</div>
			</div>
		</footer>
	);
}
