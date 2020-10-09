
export type User = {
    username: String
    email: String
    isAuthed: Boolean
    token: String
}

type State = {
    title: string
    user: User
}
  
export const state: State = {
    title: `Mederic's Boilerplate`,
    user: {
        username: "",
        email: "",
        isAuthed: false,
        token: ""
    }
}

export const emptyUser: User = {
    username: "",
    email: "",
    isAuthed: false,
    token: ""
}