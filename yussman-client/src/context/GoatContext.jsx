import { createContext, useEffect, useReducer } from 'react';
import { io } from 'socket.io-client';

import { BASE_URL } from '../helpers/variables';

export const GoatContext = createContext();
const goatReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SUPPLIERS':
      return {
        suppliers: action.payload,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const GoatContextProvider = ({ children }) => {
  const [suppliers, dispatch] = useReducer(goatReducer, { suppliers: null });

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('suppliers', (supliers) => {
      dispatch({ type: 'SET_SUPPLIERS', payload: supliers });
    });
  }, []);

  return (
    <GoatContext.Provider value={[suppliers.suppliers, dispatch]}>
      {children}
    </GoatContext.Provider>
  );
};
