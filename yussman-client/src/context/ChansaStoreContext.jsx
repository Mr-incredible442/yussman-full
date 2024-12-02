/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

import { CHANSA_STORE_URL, BASE_URL } from '../helpers/variables';

export const ChansaStoreContext = createContext();

const chansaStoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SHIFT':
      return {
        shift: action.payload,
      };
    default:
      return state;
  }
};

export const ChansaStoreContextProvider = ({ children }) => {
  const [shift, dispatch] = useReducer(chansaStoreReducer, { shift: null });
  const [updatedStock, setUpdatedStock] = useState({});

  useEffect(() => {
    axios.get(CHANSA_STORE_URL).then((response) => {
      sumReceivedAmounts(response.data);
    });
  }, []);

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('chansastore', (data) => {
      dispatch({ type: 'SET_SHIFT', payload: data });
    });
  }, []);

  const sumReceivedAmounts = (data) => {
    if (data !== null) {
      const receivedMap = {};
      const issuedMap = {};

      if (data.received && Array.isArray(data.received)) {
        data.received.forEach((transaction) => {
          const { code, quantity } = transaction;
          receivedMap[code] = (receivedMap[code] || 0) + quantity;
        });
      }

      if (data.issued && Array.isArray(data.issued)) {
        data.issued.forEach((transaction) => {
          const { code, quantity } = transaction;
          issuedMap[code] = (issuedMap[code] || 0) + quantity;
        });
      }

      let updatedData = {
        ...data,
        stock: data.stock.map((prod) => {
          const { code, ostock, damage } = prod;
          const received = receivedMap[code] || 0;
          const issued = issuedMap[code] || 0;

          const cstock = ostock + received - damage - issued;

          return {
            ...prod,
            received,
            issued,
            cstock,
          };
        }),
      };

      updatedData.stock.sort((a, b) => a.name.localeCompare(b.name));
      setUpdatedStock(updatedData);
    }
  };

  useEffect(() => {
    sumReceivedAmounts(shift.shift);
  }, [shift.shift]);

  if (updatedStock === null) {
    return null;
  }

  return (
    <ChansaStoreContext.Provider value={{ storeShift: updatedStock, dispatch }}>
      {children}
    </ChansaStoreContext.Provider>
  );
};
