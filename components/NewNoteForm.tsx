import { ICategory } from "@/types/category"

export default function NewNoteForm({ category }: { category: ICategory[] }) {
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
                ></textarea>
            </div>
            <div>
                <button className="bg-black text-white py-2 p-4 rounded-lg w-full">
                    Add
                </button>
            </div>
        </form>
    )
}
