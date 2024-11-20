import { createContext, useEffect, useReducer } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

import { BASE_URL, CREDIT_URL } from '../helpers/variables';

export const CreditContext = createContext();
const creditReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CREDIT':
      return {
        credit: action.payload,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const CreditContextProvider = ({ children }) => {
  const [credit, dispatch] = useReducer(creditReducer, { credit: null });

  useEffect(() => {
    axios.get(CREDIT_URL).then((response) => {
      dispatch({ type: 'SET_CREDIT', payload: response.data });
    });
  }, []);

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('credit', (data) => {
      dispatch({ type: 'SET_CREDIT', payload: data });
    });
  }, []);

  // console.log(credit.credit);

  return (
    <CreditContext.Provider value={{ credit: credit.credit, dispatch }}>
      {children}
    </CreditContext.Provider>
  );
};
