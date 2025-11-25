import { ICategory } from "@/types/category"

const url = "http://localhost:3000/api/category"

export async function getCategories() {
    const res = await fetch(url)
    const { category } = await res.json()
    return category as ICategory[]
}
