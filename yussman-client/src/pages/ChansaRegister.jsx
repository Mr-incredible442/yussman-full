import { useEffect } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import Home from '../components/chansaRegister/Home';
import Expence from '../components/chansaRegister/Expence';
import Final from '../components/chansaRegister/Final';
import All from '../components/chansaRegister/All';

function Register() {
  useEffect(() => {
    document.title = 'Yussman -Chansa Register';
  }, []);

  return (
    <Container className='my-5' fluid>
      <Tabs defaultActiveKey='stock' justify>
        <Tab eventKey='stock' title='Stock'>
          <Home />
        </Tab>
        <Tab eventKey='expence' title='Expence'>
          <Expence />
        </Tab>
        <Tab eventKey='final' title='Final'>
          <Final />
        </Tab>
        <Tab eventKey='all' title='All'>
          <All />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Register;
