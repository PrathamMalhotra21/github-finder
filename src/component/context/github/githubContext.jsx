import { createContext, useReducer } from 'react';
import GithubReducers from './githubReducers';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    const initalState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    };

    const [state, dispatch] = useReducer(GithubReducers, initalState);

    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        });
    }

    return (
        <GithubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubContext;