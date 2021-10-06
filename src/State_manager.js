import React , { useContext, createContext , useReducer} from "react";

export const DataLayer = createContext();

export const StateProvider = ({reducer , initialState, children}) =>(
    <DataLayer.Provider value={ useReducer(reducer, initialState)}>
        {children}
    </DataLayer.Provider>
) ;

export const App_State = () => useContext(DataLayer)