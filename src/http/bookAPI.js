import { $authHost } from "./index.js";

export const fetchBooks = async (currantPage) => {
    const { data } = await $authHost.get('book?currantPage=' + currantPage, {})
    return data
}

export const fetchOneBook = async (id) => {
    const { data } = await $authHost.get('book/some/'+id, {})
    return data
}

export const searchBook = async (name, createdate, categoryName, author, page) => {
    // http://localhost:5000/api/book/search?name=update&categoryName=ужасы&author=Иоханнес&createdate=2022
    const { data } = await $authHost.get(`book/search?${'page=' + page}&${name ? 'name=' + name : ''}&${categoryName ? 'categoryName=' + categoryName : ''}&${author ? 'author=' + author : ''}&${createdate ? 'createdate=' + createdate : ''}`, {})
    return data
}

export const fetchAllAuthors = async () => {
    const { data } = await $authHost.get('book/author', {})
    return data
}