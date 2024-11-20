import { Container, Tab, Tabs } from 'react-bootstrap';
import Home from '../components/register/Home';
import Expence from '../components/register/Expence';
import Final from '../components/register/Final';
import { useEffect } from 'react';
import All from '../components/register/All';

function Register() {
  useEffect(() => {
    document.title = 'Yussman - Register';
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
