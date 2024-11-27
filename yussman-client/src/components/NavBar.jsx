import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Theme from './Theme';
import { Button } from 'react-bootstrap';

import { useContext, useEffect } from 'react';

import { AuthContext } from '../context/AuthContext';

function NavBar() {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  };

  useEffect(() => {
    let inactivityTimer;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        handleLogout();
      }, 60_000 * 20);
    };

    const handleActivity = () => {
      resetInactivityTimer();
    };

    resetInactivityTimer();

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
      clearTimeout(inactivityTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navbar expand='lg' bg='black' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to={'/'}>
            Yussman
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        {user && (
          <Navbar.Collapse id='basic-navbar-nav'>
            {' '}
            <Nav className='me-auto'>
              <Nav.Link as={Link} to={'/register'}>
                Register
              </Nav.Link>
              <Nav.Link as={Link} to={'/store'}>
                Store
              </Nav.Link>
              <Nav.Link as={Link} to={'/restaurant'}>
                Restaurant
              </Nav.Link>
              <Nav.Link as={Link} to={'/shopa1'}>
                Shop A1
              </Nav.Link>
              <Nav.Link as={Link} to={'/shopa2'}>
                Shop A2
              </Nav.Link>
              <Nav.Link as={Link} to={'/shopb'}>
                Shop B
              </Nav.Link>
              <NavDropdown title='Chinsali' id='basic-nav-dropdown'>
                <NavDropdown.Item as={Link} to={'/chinsalirestaurant'}>
                  Restaurant
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/chinsalistore'}>
                  Store
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link as={Link} to={'/shopc'}>
                Shop C
              </Nav.Link>
              <Nav.Link as={Link} to={'/shopw'}>
                Shop W
              </Nav.Link> */}
              <Nav.Link as={Link} to={'/goat'}>
                Goat
              </Nav.Link>
              <Nav.Link as={Link} to={'/credit'}>
                Credit
              </Nav.Link>
              <Nav.Link as={Link} to={'/employees'}>
                Employees
              </Nav.Link>
              {user.role === 'admin' && (
                <>
                  <Nav.Link as={Link} to={'/users'}>
                    Users
                  </Nav.Link>
                </>
              )}
            </Nav>
            <div className='d-flex align-items-center '>
              <span className='me-2 text-capitalize'>{user.firstName}</span>
              <Button
                variant='outline-info'
                className='me-2'
                onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Navbar.Collapse>
        )}
        <Theme />
      </Container>
    </Navbar>
  );
}

export default NavBar;
