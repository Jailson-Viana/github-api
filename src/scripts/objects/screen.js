const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        /*Renderisando os dados do pefil*/
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="foto do perfil"/>
                                            <div class="data">
                                                <h1> ${user.name ?? 'Não possui nome cadastrado😥'}<h1/>
                                                <p>${user.bio ?? 'Não possui bio cadastrada😥'}</p>

                                                <div class="seguindo-seguidor">
                                                    <p>👀 Seguidores - ${user.follower}</p>
                                                    <p>👥 Seguindo - ${user.followin}</p>
                                                </div>
                                            </div>
                                        </div>`

        /*Renderisando os dados dos repositórios*/
        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <div class="informacoes">
                                                                        <p>🍴${repo.forks}</p>
                                                                        <p>⭐ ${repo.stargazers_count}</p>
                                                                        <p>👀 ${repo.watchers}</p>
                                                                        <p>👨‍💻 ${repo.language ?? "'Não existe'"}</p>
                                                                    </div>
                                                                </li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        /*Renderisando os dados dos eventos*/
        let eventsItens = ""
        user.events.forEach(even => {

            if (even.type === 'PushEvent') {
                eventsItens += `<p> <strong class="negritar">${even.repo.name}</strong> - ${even.payload.commits[0].message}</p>`
            } else {
                eventsItens += `<p> <strong class="negritar">${even.repo.name}</strong> - ${even.payload.ref_type += "(Evento do tipo CreateEvent)"}</p>`
            }
        })

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="evento">
                                                <h2 class="titulo">Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                          </div>`
        }
    },

    renderNotFoud() {
        this.userProfile.innerHTML = "<h3>Usuário não encontado, tente outro por favor!</h3>"
    }
}

export { screen }