import { baseUrl, eventsQuantity } from '../variables.js'

async function userEvents(userName) {
    const url = await fetch(`${baseUrl}/${userName}/events`)
    const events = await url.json();
    return events.filter(even => even.type === "CreateEvent" || even.type === "PushEvent").slice(0, eventsQuantity);
}

export { userEvents } 