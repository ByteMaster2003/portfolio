import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";

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
	alternates: {
		canonical: "https://viveksahani.com/blog",
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
