import { INote } from "@/types/Note"
import { NextResponse } from "next/server"

const notes: INote[] = []

export async function GET() {
    try {
        return NextResponse.json({ notes }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const { title, content, category, createdAt } = await req.json()
        const newNote: INote = {
            id: String(Math.random() * 100),
            title,
            content,
            category,
            createdAt,
        }

        notes.push(newNote)

        return NextResponse.json(
            { message: "Your note added successfuly" },
            { status: 200 }
        )
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
