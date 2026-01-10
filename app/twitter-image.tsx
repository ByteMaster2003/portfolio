import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Vivek Sahani | Full Stack & DevOps Architect";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#020617", // slate-950
					fontFamily: "sans-serif",
					position: "relative",
					overflow: "hidden",
				}}
			>
				{/* Background Tech Illustration (Abstract Gradients) */}
				<div
					style={{
						position: "absolute",
						top: -150,
						left: -150,
						width: 600,
						height: 600,
						borderRadius: 300,
						background:
							"radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						bottom: -150,
						right: -150,
						width: 600,
						height: 600,
						borderRadius: 300,
						background:
							"radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
					}}
				/>

				{/* Content Container */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						textAlign: "center",
						zIndex: 10,
					}}
				>
					{/* Tagline */}
					<div
						style={{
							fontSize: 24,
							fontWeight: 600,
							color: "#3b82f6",
							letterSpacing: "0.2em",
							marginBottom: 20,
							textTransform: "uppercase",
						}}
					>
						Full Stack & DevOps Architect
					</div>

					{/* Name */}
					<div
						style={{
							fontSize: 80,
							fontWeight: 900,
							color: "white",
							display: "flex",
							marginBottom: 10,
						}}
					>
						Vivek{" "}
						<span style={{ color: "#3b82f6", marginLeft: 16 }}>Sahani</span>
					</div>

					{/* Description */}
					<div
						style={{
							fontSize: 32,
							color: "#94a3b8",
							maxWidth: "800px",
							lineHeight: 1.4,
						}}
					>
						Building resilient systems with MERN Stack & Kubernetes
					</div>

					{/* Tech Badges */}
					<div style={{ display: "flex", gap: 20, marginTop: 40 }}>
						{["Next.js", "Node.js", "Docker", "AWS"].map((tech) => (
							<div
								key={tech}
								style={{
									padding: "8px 20px",
									borderRadius: "12px",
									border: "1px solid rgba(148, 163, 184, 0.2)",
									background: "rgba(255, 255, 255, 0.05)",
									color: "#cbd5e1",
									fontSize: 20,
									fontWeight: 500,
								}}
							>
								{tech}
							</div>
						))}
					</div>
				</div>

				{/* Branding Footer */}
				<div
					style={{
						position: "absolute",
						bottom: 40,
						fontSize: 20,
						color: "#475569",
						fontWeight: 500,
					}}
				>
					viveksahani.com
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
