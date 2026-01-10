"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, Laptop } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
	{ name: "Services", href: "#services" },
	{ name: "DevOps", href: "#devops" },
	{ name: "Case Studies", href: "#case-studies" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll effect for glassmorphism
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container mx-auto px-6 flex items-center justify-between">
				{/* Logo Section */}
				<Link href="/" className="flex items-center gap-2 group">
					<div className="bg-primary p-1.5 rounded-lg">
						<Laptop className="w-5 h-5 text-primary-foreground" />
					</div>
					<span className="text-xl font-bold tracking-tight">
						Vivek<span className="text-blue-500">Sahani</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
						>
							{link.name}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
						</Link>
					))}
				</div>

				{/* CTA & Mobile Menu */}
				<div className="flex items-center gap-4">
					<Button
						variant="default"
						className="hidden md:flex rounded-full px-6"
					>
						<Link href={"#contact"}>Hire Me</Link>
					</Button>

					{/* Mobile Menu (shadcn Sheet) */}
					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="w-6 h-6" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-75 sm:w-100">
								<nav className="flex flex-col gap-6 mt-10">
									{navLinks.map((link) => (
										<Link
											key={link.name}
											href={link.href}
											className="text-lg font-semibold hover:text-primary"
										>
											{link.name}
										</Link>
									))}
									<Button className="w-full mt-4">Get a Quote</Button>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}
