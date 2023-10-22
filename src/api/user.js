import { baseUrl } from './baseURL.js'

export async function createUser(email, password) {
    return fetch(`${baseUrl}user/signup/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
            username: email,
        }),
    })
}

export async function loginUser(email, password) {
    return fetch(`${baseUrl}user/login/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
}
