import { createContext, useEffect, useReducer, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

import { BASE_URL, CHANSA_RESTAURANT_URL } from '../helpers/variables';

export const ChansaRestaurantContext = createContext();
const restaurantReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SHIFT':
      return {
        shift: action.payload,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const ChansaRestaurantContextProvider = ({ children }) => {
  const [shift, dispatch] = useReducer(restaurantReducer, { shift: null });
  const [updatedStock, setUpdatedStock] = useState({});

  useEffect(() => {
    axios.get(CHANSA_RESTAURANT_URL).then((response) => {
      sumReceivedAmounts(response.data);
    });
  }, []);

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('chansarestaurant', (data) => {
      dispatch({ type: 'SET_SHIFT', payload: data });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sumReceivedAmounts = (data) => {
    if (data !== null) {
      const receivedMap = {};
      if (data.received && Array.isArray(data.received)) {
        data.received.forEach((transaction) => {
          const code = transaction.code;
          const amount = transaction.amount;
          if (receivedMap[code] === undefined) {
            receivedMap[code] = amount;
          } else {
            receivedMap[code] += amount;
          }
        });
      }
      // Update the stock array with the summed received amounts
      const updatedData = {
        ...data,
        stock: data.stock.map((prod) => {
          const code = prod.code;
          if (receivedMap[code] !== undefined) {
            return {
              ...prod,
              received: receivedMap[code],
            };
          }
          return prod;
        }),
      };

      updatedData.stock.sort((a, b) => a.name.localeCompare(b.name));
      setUpdatedStock(updatedData);
    }
  };

  useEffect(() => {
    sumReceivedAmounts(shift.shift);
  }, [shift.shift]);

  return (
    <ChansaRestaurantContext.Provider value={{ shift: updatedStock, dispatch }}>
      {children}
    </ChansaRestaurantContext.Provider>
  );
};