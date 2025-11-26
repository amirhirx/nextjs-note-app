import EmptyTask from "@/components/EmptyNotes"
import NewNoteForm from "@/components/NewNoteForm"
import NoteCard from "@/components/NoteCard"
import NotesContainer from "@/components/NotesContainer"
import { getCategories } from "@/services/getCategories"
import { getNotes } from "@/services/getNotes"

export default async function Home() {
    const notes = await getNotes()
    const category = await getCategories()

    return (
        <div className="p-4 md:p-8 flex flex-col lg:flex-row lg:justify-around gap-4">
            {notes && notes.length > 0 ? (
                <NotesContainer>
                    {notes.map(({ ...note }) => {
                        return <NoteCard key={note.id} {...note} />
                    })}
                </NotesContainer>
            ) : (
                <EmptyTask />
            )}

            <NewNoteForm category={category} />
        </div>
    )
}
