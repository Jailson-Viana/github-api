const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    follower: "", 
    followin: "",

    repositories: [],
    events: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.follower = gitHubUser.followers
        this.followin = gitHubUser.following
    },
    
    setRepositories(repositories) {
        this.repositories = repositories
    }, 

    setEvents(eventes){
        this.events = eventes
    }
}

export { user }