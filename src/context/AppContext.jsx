// React Import
import { createContext, useReducer } from "react";

export const AppContext = createContext();

const SET_SHOW_SIDE_MENU = 'SET_SHOW_SIDE_MENU';

// Reducer for handling different case
export const AppContextReducer = (state, action) =>{
    switch(action.type){
        case SET_SHOW_SIDE_MENU:
            return { ...state, showSideMenu: action.payload };

        default:
            return state;
    }
}

// Provider wrapper
export const AppContextProvider = ({ children }) =>{
    const [ state, dispatch ] = useReducer(AppContextReducer, {
        showSideMenu: false
    });

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}