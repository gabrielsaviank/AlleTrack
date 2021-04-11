import React, { useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  // Helper
  const Provider = ({ children }) => {
    // Reducer Call
    const [state, dispatch] = useReducer(reducer, defaultValue);

    // Actions to Dispatch to the Reducer (This will change the state)
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    // Makes all data available to other components
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};


// Provider is the component
// Context will be what we'll use to have access to the information (child)