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
    
    const { data } = await $authHost.get(`book/search?${name ? 'name=' + name.trim() : ''}${categoryName ? '&categoryName=' + categoryName : ''}${author ? '&author=' + author : ''}${createdate ? '&createdate=' + createdate : ''}${page ? '&page=' + page : ''}`, {})
    return data
}

export const fetchAllAuthors = async () => {
    const { data } = await $authHost.get('book/author', {})
    return data
}

export const count = async () => {
    const { data } = await $authHost.get('book/count', {})
    return data
}

export const addBook = async ({author,bookURL,category,createDate,name,text}, img) => {
    console.log({author,bookURL,category,coverURL: img,createDate,name,text});
    const { data } = await $authHost.post('book/addBook', {author,bookURL,category,coverURL: img,createDate,name,text})
    return data
}

export const addImage = async (img) => { 
    const {data} = await $authHost.post('/upload', img);
    return data
}