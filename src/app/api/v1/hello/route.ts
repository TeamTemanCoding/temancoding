import { NextResponse } from "next/server";

export function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name") || "Guest";

    return NextResponse.json({ message: `Hello, ${name}!` });
}
