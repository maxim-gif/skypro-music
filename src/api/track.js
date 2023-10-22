import {baseUrl} from './baseURL.js'

export async function getTracks() {
    const response = await fetch(
        `${baseUrl}catalog/track/all/`,
    )
    const data = await response.json()
    return data
}
