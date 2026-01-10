import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Vivek Sahani | Full Stack Developer & DevOps Engineer",
		template: "%s | Vivek Sahani",
	},
	icons: {
		icon: "/icon.svg",
		apple: "/apple-touch-icon.png",
	},
	description:
		"Expert MERN/MEAN Stack Developer and DevOps Engineer specializing in Kubernetes, AWS, and scalable system architecture.",
	keywords: [
		"Vivek Sahani",
		"Full Stack Developer",
		"DevOps Engineer India",
		"MERN Stack Expert",
		"Kubernetes Consultant",
		"Node.js Backend Developer",
		"AWS Cloud Architect",
		"Freelance Web Developer",
	],
	authors: [{ name: "Vivek Sahani" }],
	creator: "Vivek Sahani",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://viveksahani.com",
		title: "Vivek Sahani | Full Stack & DevOps Engineering",
		description:
			"Building scalable web applications and automated cloud infrastructure.",
		siteName: "Vivek Sahani Portfolio",
		images: [
			{
				url: "/og-image.png", // Create a 1200x630 image for social sharing
				width: 1200,
				height: 630,
				alt: "Vivek Sahani Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Vivek Sahani | Full Stack & DevOps",
		description: "MERN Stack, Kubernetes, and Cloud Automation Specialist.",
		creator: "@viveksahani2003",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Vivek Sahani",
							url: "https://viveksahani.com",
							jobTitle: "Full Stack Developer & DevOps Engineer",
							knowsAbout: [
								"Web Development",
								"MERN Stack",
								"MEAN Stack",
								"DevOps",
								"Kubernetes",
								"AWS",
								"Cloud Computing",
							],
							sameAs: [
								"https://github.com/ByteMaster2003",
								"https://linkedin.com/in/developer-vivek-sahani",
							],
						}),
					}}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
