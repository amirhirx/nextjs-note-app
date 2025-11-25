import { INote } from "@/types/Note"

const url = "http://localhost:3000/api/notes"

export async function getNotes() {
    const res = await fetch(url)
    const { notes } = await res.json()
    return notes as INote[]
}
