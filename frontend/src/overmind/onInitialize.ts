import { OnInitialize } from 'overmind'
import { emptyUser, User } from './state'
import axios from 'axios'

export const onInitialize: OnInitialize = async ({ state }, overmind) => {
  overmind.addMutationListener((mutation) => {
    if (mutation.path.indexOf('user') === 0) {
      localStorage.setItem('lifebeatUser', JSON.stringify(state.user))
    }
  })
  const localUser = localStorage.getItem('lifebeatUser')
  let shouldLogOut = true
  if (localUser) {
    const parsed = JSON.parse(localUser) as User
    if (parsed.token) {
      const config = {
        headers: { Authorization: `Bearer ${parsed.token}` }
      };
      try {
        const test = await axios.post('http://localhost:4000',
          {
            query: `
              query connected {
                me {
                  email
                  name
                }
              }
              `
          },
          config
        )
        if (test.data.data) {
          const data = test.data.data
          if (data.me.email === parsed.email) {
            shouldLogOut = false
            state.user = parsed
          }
        }
      } catch (error) {
        //console.log(error)
      }
    }
  }
  if (shouldLogOut) {
    localStorage.clear()
    state.user = emptyUser
  }
}

