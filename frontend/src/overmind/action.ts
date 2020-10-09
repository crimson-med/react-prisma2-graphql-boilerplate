import { Action } from 'overmind'
import { emptyUser, User } from './state';

/**
 * Setting the user.
 *
 * @param user  - The user object
 * 
 **/
export const setUser: Action<{ user: User }> = ({ state }, { user }) => {
    state.user = user;
}

/**
 * Save the state
 *
 * @param user  - The user object
 * 
 **/
export const saveState: Action = ({ state }) => {
    localStorage.setItem('lifebeatUser', JSON.stringify(state.user));
}

/**
 * Save the state
 *
 * @param user  - The user object
 * 
 **/
export const signOut: Action = ({ state }) => {
    state.user = emptyUser
    localStorage.removeItem('lifebeatUser');
}