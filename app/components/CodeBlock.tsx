"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
	children: string;
	language?: string;
}

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
	const [copied, setCopied] = useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(children);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative group my-6 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
			{/* Header / Language Badge */}
			<div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
				<span className="text-xs font-mono text-zinc-400 uppercase">
					{language || "text"}
				</span>
				<Button
					variant="ghost"
					size="icon"
					className="h-8 w-8 text-zinc-400 hover:text-white transition-colors"
					onClick={onCopy}
				>
					{copied ? (
						<Check className="size-4 text-green-500" />
					) : (
						<Copy className="size-4" />
					)}
				</Button>
			</div>

			{/* Code Content */}
			<div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
				{/* Shiki will be integrated here via ReactMarkdown components */}
				<pre>
					<code className={`language-${language}`}>{children}</code>
				</pre>
			</div>
		</div>
	);
};
