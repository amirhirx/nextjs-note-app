import { INote } from "@/types/Note"

const url = "http://localhost:3000/api/notes"

export async function postNote(note: INote) {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
    })

    if (res.ok) {
        return res.json()
    } else {
        throw new Error("Failed to add noted!")
    }
}
