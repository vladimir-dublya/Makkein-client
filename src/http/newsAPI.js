import { $authHost } from "./index.js";

export const fetchNews = async () => {
    const { data } = await $authHost.get('news', {})
    return data
}

export const fetchOneNews = async(id) => {
    const {data} = await $authHost.get('news/some/' + id, {})
    return data
}

export const fetchThreeNews = async() => {
    const {data} = await $authHost.get('news/lastnews', {})
    return data
}
