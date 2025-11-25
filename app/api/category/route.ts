import { ICategory } from "@/types/category"
import { NextResponse } from "next/server"

const categories: ICategory[] = [
    { id: "tasks", name: "Tasks" },
    { id: "ideas", name: "Ideas" },
    { id: "work", name: "Work" },
    { id: "personal", name: "Personal" },
    { id: "projects", name: "Projects" },
]

export function GET() {
    try {
        return NextResponse.json({ category: categories }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
