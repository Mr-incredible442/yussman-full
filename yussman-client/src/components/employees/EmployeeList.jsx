import { useEffect, useState, useContext } from 'react';

import { Button, Container, Table } from 'react-bootstrap';

import NewEmployeeModal from './modals/NewEmployeeModal';

import { EmployeeContext } from '../../context/EmployeeContext';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

function EmployeeList() {
  const [employeesList, setEmployeesList] = useState([]);
  const [employeesTransactions, setEmployeesTransactions] = useState([]);

  const { employees, paidTransactions, unpaidTransactions } =
    useContext(EmployeeContext);
  const { user } = useContext(AuthContext);

  const getEmployeeTransactions = (id) => {
    const employeeTransactions = employeesTransactions.filter(
      (transaction) => transaction.employeeId._id === id,
    );
    const updated = employeesList.map((employee) => {
      if (employee._id === id) {
        employee.transactions = employeeTransactions;
      }
      return employee;
    });
    setEmployeesList(updated);
  };

  useEffect(() => {
    setEmployeesList(employees);
    if (employeesList && employeesList.length > 0) {
      employeesList.map((employee) => {
        getEmployeeTransactions(employee._id);
      });
    }

    setEmployeesTransactions([...paidTransactions, ...unpaidTransactions]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employees, paidTransactions, unpaidTransactions]);

  useEffect(() => {
    if (!employees || !unpaidTransactions || !paidTransactions) return;

    // Calculate and update creditOwed for each employee
    const updatedEmployeesList = employees.map((employee) => {
      const employeeTransactions = employeesTransactions.filter(
        (transaction) => transaction.employeeId._id === employee._id,
      );

      const credit = employeeTransactions
        .filter((transaction) => transaction.status === 'credit')
        .reduce((total, current) => total + current.amount, 0);

      const shortage = (employee.transactions || [])
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

    setEmployeesList(updatedEmployeesList);
  }, [employees, unpaidTransactions, paidTransactions, employeesTransactions]);

  useEffect(() => {
    if (!employees || !unpaidTransactions || !paidTransactions) return;

    // Calculate and update creditOwed for each employee
    const updatedEmployeesList = employees.map((employee) => {
      const employeeTransactions = employeesTransactions.filter(
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

    setEmployeesList(updatedEmployeesList);
  }, [employees, unpaidTransactions, paidTransactions, employeesTransactions]);

  if (employeesList === null) return;

  //get employee transactions and add them to an employee id matches

  return (
    <Container>
      {user && user.role === 'admin' && (
        <div className='d-flex justify-content-center align-items-center mt-3'>
          <NewEmployeeModal />
        </div>
      )}

      <Table className='my-3 text-center text-capitalize'>
        <thead>
          <tr>
            <th>Code</th>
            <th>NRC</th>
            <th>Phone</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Credit</th>
            <th>Status</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {employeesList &&
            employeesList.length > 0 &&
            employeesList
              .sort((a, b) =>
                a.status === 'inactive' ? 1 : b.status === 'inactive' ? -1 : 0,
              )
              .map((employee) => {
                return (
                  <tr
                    key={employee._id}
                    className={
                      employee.status === 'inactive'
                        ? 'border border-3 border-secondary-subtle text-decoration-line-through text-muted'
                        : ''
                    }>
                    <td>{employee.code}</td>
                    <td>{employee.nrc}</td>
                    <td>{employee.number}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>
                      K
                      {(employee.dailySalary !== null &&
                      employee.dailySalary !== undefined
                        ? employee.dailySalary.toFixed(2)
                        : '0.00'
                      ).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </td>
                    <td
                      className={`border-2 ${
                        employee.creditOwed > 0
                          ? 'border border-3 border-info-subtle'
                          : employee.creditOwed < 0
                          ? 'text-danger'
                          : ''
                      }`}>
                      K
                      {(employee.creditOwed !== null &&
                      employee.creditOwed !== undefined
                        ? employee.creditOwed.toFixed(2)
                        : '0.00'
                      ).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </td>
                    <td>{employee.status}</td>
                    <td>{employee.section}</td>
                    <td className='d-flex justify-content-center'>
                      <Link
                        to={`/employees/${employee._id}`}
                        style={{ textDecoration: 'none' }}>
                        <Button variant='outline-primary me-1' size='sm'>
                          V
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </Table>
    </Container>
  );
}

export default EmployeeList;
