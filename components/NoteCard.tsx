import { INote } from "@/types/Note"

export default function NoteCard({
    title,
    content,
    category,
    createdAt,
}: INote) {
    return (
        <article className="bg-white rounded-lg space-y-2 border border-gray-300 shadow relative flex flex-col justify-between">
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                {content && <p className="text-gray-700">{content}</p>}
            </div>
            <div className="w-full flex justify-between items-center border-t border-t-gray-300 text-xs opacity-95 rounded-b-lg py-2 px-4 font-semibold">
                {category && (
                    <span className="bg-black text-white rounded-xl py-1 px-2">
                        {category}
                    </span>
                )}
                <span className="bg-black text-white rounded-xl py-1 px-2 ml-auto">
                    {createdAt}
                </span>
            </div>
        </article>
    )
}
