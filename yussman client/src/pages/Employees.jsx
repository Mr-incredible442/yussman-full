import { useEffect } from 'react';

import { Container, Tab, Tabs } from 'react-bootstrap';

import EmployeeList from '../components/employees/EmployeeList';
import Paid from '../components/employees/Paid';
import Salary from '../components/employees/Salary';

function Employees() {
  useEffect(() => {
    document.title = 'Yussman - Employees';
  }, []);

  return (
    <Container fluid className='py-3'>
      <Tabs justify>
        <Tab eventKey='salary' title='Salary'>
          <Salary />
        </Tab>
        <Tab eventKey='paid' title='Paid'>
          <Paid />
        </Tab>
        <Tab eventKey='employeeList' title='Employee List'>
          <EmployeeList />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Employees;
