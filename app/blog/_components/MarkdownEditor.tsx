"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Eye, Code, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MarkdownEditor = () => {
	const [markdown, setMarkdown] = useState("");
	const [isPreviewOnly, setIsPreviewOnly] = useState(false);

	return (
		<div className="flex flex-col h-[calc(100vh-12rem)] border rounded-xl overflow-hidden bg-background shadow-sm">
			{/* Editor Toolbar */}
			<div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
				<div className="flex items-center gap-2">
					<Tabs defaultValue="edit" className="w-50">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="edit" onClick={() => setIsPreviewOnly(false)}>
								<Code className="w-4 h-4 mr-2" /> Editor
							</TabsTrigger>
							<TabsTrigger
								value="preview"
								onClick={() => setIsPreviewOnly(true)}
							>
								<Eye className="w-4 h-4 mr-2" /> Preview
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>

				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={() => console.log("Saving...", markdown)}
					>
						<Save className="w-4 h-4 mr-2" /> Save Draft
					</Button>
				</div>
			</div>

			<div className="flex flex-1 overflow-hidden">
				{/* Input Area */}
				<div
					className={`flex-1 border-r ${isPreviewOnly ? "hidden" : "block"}`}
				>
					<Textarea
						value={markdown}
						onChange={(e) => setMarkdown(e.target.value)}
						placeholder="Write in Markdown..."
						className="w-full h-full resize-none border-none focus-visible:ring-0 p-6 font-mono text-sm leading-relaxed"
					/>
				</div>

				{/* Preview Area */}
				<div
					className={`flex-1 overflow-y-auto p-8 bg-white dark:bg-zinc-950 ${
						!isPreviewOnly ? "hidden md:block" : "block"
					}`}
				>
					<article className="prose prose-zinc dark:prose-invert max-w-none">
						<ReactMarkdown>{markdown}</ReactMarkdown>
					</article>
				</div>
			</div>
		</div>
	);
};

export default MarkdownEditor;
