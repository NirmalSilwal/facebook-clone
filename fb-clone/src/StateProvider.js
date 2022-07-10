import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // preparing data layer

// higher order component - we'll use this to wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); // to pull data from data layer
