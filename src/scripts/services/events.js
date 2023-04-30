import { baseUrl, eventsQuantity } from '../variables.js'

async function userEvents(userName) {
    const url = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`)
    return await url.json()
}

export { userEvents } 