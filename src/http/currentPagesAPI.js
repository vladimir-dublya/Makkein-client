import { $authHost } from "./index.js";

export const fetchCurrentPages = async () => {
    const { data } = await $authHost.get('book/count/', {})
    return data
}




