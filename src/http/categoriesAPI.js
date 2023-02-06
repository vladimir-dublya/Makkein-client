import { $authHost } from "./index.js";

export const fetchCategories = async () => {
    const { data } = await $authHost.get('categories', {})
    return data
}

