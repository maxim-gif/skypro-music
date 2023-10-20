export async function createUser(email, password) {
    return fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
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
    return fetch('https://skypro-music-api.skyeng.tech/user/login/', {
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
