export async function GET(req: Request) {
	const auth = req.headers.get("authorization")

	return Response.json({
		projectName: "Next.js",
	});
}

export async function POST(req: Request) {
	const data = await req.json();

	return Response.json({
		projectName: "Next.js",
	});
}
