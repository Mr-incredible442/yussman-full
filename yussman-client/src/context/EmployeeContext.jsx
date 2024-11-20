import { createContext, useEffect, useReducer } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

import { BASE_URL, EMPLOYEE_URL } from '../helpers/variables';

export const EmployeeContext = createContext();

const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return {
        employees: action.payload,
      };
    default:
      return state;
  }
};

const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        transactions: action.payload,
      };
    default:
      return state;
  }
};

// Calculate creditOwed for each employee
const calculateCreditOwed = (employees, transactions) => {
  return employees.map((employee) => {
    const employeeTransactions = transactions.filter(
      (transaction) => transaction.employeeId._id === employee._id,
    );

    const credit = employeeTransactions
      .filter((transaction) => transaction.status === 'credit')
      .reduce((total, current) => total + current.amount, 0);

    const shortage = employeeTransactions
      .filter((transaction) => transaction.status === 'shortage')
      .reduce((total, current) => total + current.amount, 0);

    const deductions = employeeTransactions
      .filter((transaction) => transaction.status === 'salary')
      .reduce((total, current) => total + current.deduction, 0);

    return {
      ...employee,
      creditOwed: credit + shortage - deductions,
    };
  });
};

// eslint-disable-next-line react/prop-types
export const EmployeeContextProvider = ({ children }) => {
  const [employees, employeeDispatch] = useReducer(employeeReducer, {
    employees: null,
  });

  const [transactions, transactionDispatch] = useReducer(transactionReducer, {
    transactions: null,
  });

  useEffect(() => {
    const getEmployees = async () => {
      const { data } = await axios.get(`${EMPLOYEE_URL}/getemployees`);
      employeeDispatch({ type: 'SET_EMPLOYEES', payload: data });
    };
    getEmployees();
  }, []);

  useEffect(() => {
    const getTransactions = async () => {
      const { data } = await axios.get(`${EMPLOYEE_URL}/gettransactions`);
      transactionDispatch({ type: 'SET_TRANSACTIONS', payload: data });
    };
    getTransactions();
  }, []);

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('employees', (data) => {
      employeeDispatch({ type: 'SET_EMPLOYEES', payload: data });
    });
  }, []);

  useEffect(() => {
    const socket = io(BASE_URL);
    socket.on('employeeTransactions', (data) => {
      transactionDispatch({ type: 'SET_TRANSACTIONS', payload: data });
    });
  }, []);

  // Group transactions by paid status, sort by status and date
  const processTransactions = (transactions) => {
    // If transactions is null, default to an empty array
    transactions = transactions || [];

    const paidTransactions = [];
    const unpaidTransactions = [];

    transactions.forEach((transaction) => {
      if (transaction.paid) {
        paidTransactions.push(transaction);
      } else {
        unpaidTransactions.push(transaction);
      }
    });

    // Sort paid transactions by status (benefit, credit, salary, shortage) and date
    const sortedPaidTransactions = paidTransactions.sort((a, b) => {
      const statusOrder = {
        benefit: 1,
        credit: 2,
        allowance: 3,
        salary: 4,
        shortage: 5,
      };
      return statusOrder[a.status] - statusOrder[b.status];
    });

    // Sort unpaid transactions by status (benefit, credit, salary shortage) and date
    const sortedUnpaidTransactions = unpaidTransactions.sort((a, b) => {
      const statusOrder = {
        benefit: 1,
        credit: 2,
        allowance: 3,
        salary: 4,
        shortage: 5,
      };
      return statusOrder[a.status] - statusOrder[b.status];
    });

    return {
      groupedPaidTransactions: sortedPaidTransactions,
      unpaidTransactions: sortedUnpaidTransactions,
    };
  };

  const { groupedPaidTransactions: paidTransactions, unpaidTransactions } =
    processTransactions(transactions.transactions);

  // Calculate creditOwed and update employees list
  const updatedEmployees = employees.employees
    ? calculateCreditOwed(employees.employees, transactions.transactions || [])
    : [];

  return (
    <EmployeeContext.Provider
      value={{
        employees: updatedEmployees,
        paidTransactions,
        unpaidTransactions,
      }}>
      {children}
    </EmployeeContext.Provider>
  );
};
