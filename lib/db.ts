import mongoose from "mongoose";

type MongooseCache = {
	conn: typeof mongoose | null;
	promise: Promise<typeof mongoose> | null;
}

declare global {
	var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI environment variable");
}

// Global cache to prevent multiple connections in development
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
	global.mongoose = cached;
}

async function connectDB() {
	if (cached.conn) return cached.conn;

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI, {
				bufferCommands: false,
			})
			.then((m) => m);
	}

	try {
		cached.conn = await cached.promise;
	}
	catch (error) {
		cached.promise = null;
		throw error;
	}

	return cached.conn;
}

export default connectDB;
