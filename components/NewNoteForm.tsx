"use client"
import { postNote } from "@/services/postNote"
import { ICategory } from "@/types/category"
import { INote } from "@/types/Note"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function NewNoteForm({ category }: { category: ICategory[] }) {
    const [newNote, setNewNote] = useState<INote>({} as INote)
    const router = useRouter()

    return (
        <form className="p-4 space-y-4 border border-gray-300 rounded-lg bg-white shadow-lg md:sticky md:top-5 h-max">
            <h2 className="text-xl font-extrabold">New Note</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="new-note-title" className="text-lg font-bold">
                    Title
                </label>
                <input
                    type="text"
                    id="new-note-title"
                    placeholder="Enter your note title here..."
                    className=" border border-gray-300 py-2 px-4 rounded-lg shadow bg-gray-50"
                    value={newNote.title}
                    onChange={(event) => {
                        setNewNote((prev) => {
                            return { ...prev, title: event.target.value }
                        })
                    }}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="new-note-category"
                    className="text-lg font-bold"
                >
                    Category
                </label>
                <select
                    name="new-note-category"
                    id="new-note-category"
                    className=" border border-gray-300 py-2 px-4 rounded-lg shadow bg-gray-50"
                    value={newNote.category}
                    onChange={(event) => {
                        setNewNote((prev) => {
                            return { ...prev, category: event.target.value }
                        })
                    }}
                >
                    <option value={""}>Without Category</option>
                    {category.map(({ id, name }) => {
                        return (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="new-note-content" className="text-lg font-bold">
                    Content
                </label>
                <textarea
                    name="new-note-content"
                    id="new-note-content"
                    cols={30}
                    rows={10}
                    placeholder="Enter your note content here..."
                    className="w-full min-w-full max-w-full max-h-40 min-h-16 border border-gray-300 py-2 px-4 rounded-lg shadow bg-gray-50"
                    value={newNote.content}
                    onChange={(event) => {
                        setNewNote((prev) => {
                            return { ...prev, content: event.target.value }
                        })
                    }}
                ></textarea>
            </div>
            <div>
                <button
                    onClick={async (event) => {
                        event.preventDefault()
                        const now = new Date()
                        setNewNote({
                            ...newNote,
                            id: String(Math.floor(Math.random() * 1000)),
                            createdAt: now.toISOString(),
                        })
                        if (newNote.title) {
                            postNote(newNote).then(() => {
                                router.refresh()
                            })
                            alert("Note added")
                        } else {
                            alert("Note need title")
                        }
                    }}
                    className="bg-black text-white py-2 p-4 rounded-lg w-full"
                >
                    Add
                </button>
            </div>
        </form>
    )
}
