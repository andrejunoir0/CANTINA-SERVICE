import React from "react";

export const Context = React.createContext();

export const Provider = () => {
    return(
        <Context.Provider value={10}>


        </Context.Provider>
    )
}