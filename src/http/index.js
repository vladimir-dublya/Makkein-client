import axios from "axios";

// const $host = axios.create({
//     baseURL: process.env.REACT_APP_API_URL
//     // обычные не требуют авторизации
// })

const $authHost = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'http://localhost:5000/api/'
    // headerAuthorization + token
})

export {
    $authHost
}

