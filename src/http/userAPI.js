import { $authHost } from "./index.js";

export const createUser = async (login, password, role) => {
    const { data } = await $authHost.post('user/', {login, password, role}).catch(error => {throw error.response.data.message
        });

    return data

}

export const loginUser = async (login,password) => {
    const { data } = await $authHost.post('user/login', {login, password});

    return data
}