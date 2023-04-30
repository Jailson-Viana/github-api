import { getRepositories } from "../scripts/services/repositories.js"
import { getUser } from "../scripts/services/user.js"
import { userEvents } from "../scripts/services/events.js"
import { user } from "../scripts/objects/user.js"
import { screen } from "../scripts/objects/screen.js"

document.getElementById("btn-search").addEventListener('click', () => {
    const userName = document.getElementById("input-search").value;

    if (validateEmptyInput(userName)) return
    getUserData(userName)
})

document.getElementById("input-search").addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterkeyPressed = key === 13

    if (isEnterkeyPressed) {
        if (validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert("preencha o campo com o nome do usuário do GitHub")
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFoud()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await userEvents(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)
    screen.renderUser(user)
}



