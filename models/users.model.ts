import { Document, model, models, Schema } from "mongoose";

export interface IPost extends Document {
	title: string;
	slug: string; // URL friendly version of title
	content: string; // Markdown body
	excerpt: string; // Short summary for the feed
	coverImage: string; // URL to S3/Cloudfront
	tags: string[]; // e.g., ["rust", "nextjs"]
	isPublished: boolean;
	views: number; // Simple analytics
	readingTime: number;
	createdAt: Date;
	updatedAt: Date;
}

const PostSchema = new Schema<IPost>(
	{
		
	},
	{
		timestamps: true,
	}
);

const Post = models.Post || model<IPost>("Post", PostSchema);

export default Post;
