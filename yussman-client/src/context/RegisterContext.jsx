/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

import { REGISTER_URL, BASE_URL } from '../helpers/variables';

export const RegisterContext = createContext();

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SHIFT':
      return {
        shift: action.payload,
      };
    default:
      return state;
  }
};

export const RegisterContextProvider = ({ children }) => {
  const [shift, dispatch] = useReducer(RegisterReducer, { shift: null });
  const [updatedStock, setUpdatedStock] = useState({});

  useEffect(() => {
    axios.get(REGISTER_URL).then((response) => {
      sumReceivedAmounts(response.data);
    });
  }, []);

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('register', (data) => {
      dispatch({ type: 'SET_SHIFT', payload: data });
    });
  }, []);

  const sumReceivedAmounts = (data) => {
    if (data !== null) {
      // const sortedStock = data.stock.sort((a, b) =>
      //   a.name.localeCompare(b.name),
      // );
      // const updatedData = { ...data, stock: sortedStock };
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
    <RegisterContext.Provider value={{ RegisterShift: updatedStock, dispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};