import React,{createContext} from "react";

const initialState = {
    name:"",
    setName: () => {},
};

export const UserContext = createContext(initialState);