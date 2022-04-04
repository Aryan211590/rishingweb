import React, { createContext, useContext, useReducer } from "react";

//Prepares the DataLayer
export const StateContext = createContext();

// Wrap our App and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
