import { createContext, useReducer } from "react";
import AlertReducers from "./AlertReducers";

const AlertContext = createContext();

export function AlertProvider({ children }) {
    const initalState = null;

    const [state, dispatch] = useReducer(AlertReducers, initalState);

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type }
        });

        setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 5000);
    }

    return (
        <AlertContext.Provider value={{
            alert: state,
            setAlert
        }}>
            {children}
        </AlertContext.Provider>
    );
}

export default AlertContext;