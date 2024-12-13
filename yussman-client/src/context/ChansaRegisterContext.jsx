/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from 'react';
import { io } from 'socket.io-client';
import apiCall from '../helpers/apiCall';

import { CHANSA_REGISTER_URL, BASE_URL } from '../helpers/variables';

export const ChansaRegisterContext = createContext();

const ChansaRegisterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SHIFT':
      return {
        shift: action.payload,
      };
    default:
      return state;
  }
};

export const ChansaRegisterContextProvider = ({ children }) => {
  const [shift, dispatch] = useReducer(ChansaRegisterReducer, {
    shift: null,
  });
  const [updatedStock, setUpdatedStock] = useState({});

  useEffect(() => {
    apiCall.get(CHANSA_REGISTER_URL).then((response) => {
      sumReceivedAmounts(response.data);
    });
  }, []);

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('chansaregister', (data) => {
      dispatch({ type: 'SET_SHIFT', payload: data });
    });
  }, []);

  const sumReceivedAmounts = (data) => {
    if (data !== null) {
      setUpdatedStock(data);
    }
  };

  useEffect(() => {
    sumReceivedAmounts(shift.shift);
  }, [shift.shift]);

  if (updatedStock === null) {
    return null;
  }

  return (
    <ChansaRegisterContext.Provider
      value={{ RegisterShift: updatedStock, dispatch }}>
      {children}
    </ChansaRegisterContext.Provider>
  );
};
