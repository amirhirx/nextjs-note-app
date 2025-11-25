import { NextResponse } from "next/server"

export function GET() {
    try {
        return NextResponse.json({ notes: [] }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
