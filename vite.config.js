import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";
import path from "path";

function replaceIndexHtmlPlugin() {
	return {
		name: "replace-index-html",
		closeBundle() {
			const distPath = path.resolve("dist/index.html");
			const seoHtmlPath = path.resolve("seo/index.html");

			if (fs.existsSync(seoHtmlPath)) {
				fs.copyFileSync(seoHtmlPath, distPath);
				console.log("✅ index.html replaced with SEO version");
			} else {
				console.warn("⚠️ SEO index.html not found!");
			}
		},
	};
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), replaceIndexHtmlPlugin()],
	server: {
		port: 3000,
	},
	build: {
		rollupOptions: {
			output: {
				entryFileNames: "assets/index.js",
				assetFileNames: "assets/[name].[ext]",
			},
		},
	},
});
