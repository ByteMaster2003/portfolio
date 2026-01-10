"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, Laptop } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
	{ name: "Services", href: "#services" },
	{ name: "DevOps", href: "#devops" },
	{ name: "Case Studies", href: "#case-studies" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

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
				<Link
					href="/"
					className="flex items-center gap-2 group"
					aria-label="Logo"
				>
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
							aria-label="Navigation Menu"
						>
							{link.name}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
						</Link>
					))}
				</div>

				{/* CTA & Mobile Menu */}
				<div className="flex items-center gap-4">
					<Link
						href={"#contact"}
						aria-label="Hire Me"
						className=" cursor-pointer"
					>
						<Button
							variant="default"
							className="hidden md:flex rounded-full px-6 cursor-pointer"
							aria-label="Hire Me"
						>
							Hire Me
						</Button>
					</Link>

					{/* Mobile Menu (shadcn Sheet) */}
					<div className="md:hidden">
						<Sheet open={isOpen}>
							<SheetTrigger
								asChild
								className=" cursor-pointer"
								onClick={() => setIsOpen(true)}
							>
								<Menu className="size-7" />
							</SheetTrigger>
							<SheetContent side="right" className="w-75 sm:w-100">
								<SheetTitle></SheetTitle>
								<nav className="flex flex-col gap-6 mt-10 mx-10">
									{navLinks.map((link) => (
										<Link
											key={link.name}
											href={link.href}
											onClick={() => setIsOpen(false)}
											className="text-lg font-semibold hover:text-primary"
											aria-label="Mobile Navigation Menu"
										>
											{link.name}
										</Link>
									))}
								</nav>
								<Button
									className="mx-10 cursor-pointer"
									onClick={() => setIsOpen(false)}
								>
									Close
								</Button>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}
