export default function NotesContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col gap-2 md:w-10/12 h-max">{children}</div>
    )
}
