import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Turnstile } from '@marsidev/react-turnstile';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { LOCAL_URL } from '../helpers/variables';
import { AuthContext } from '../context/AuthContext';

function Login() {
  useEffect(() => {
    document.title = 'Yussman - Login';
  }, []);
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  const { dispatch } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();

    if (!turnstileToken) {
      setError('Please complete the CAPTCHA');
      return;
    }

    setLoading(true);
    axios
      .post(`${LOCAL_URL}/users/login`, {
        number,
        password,
        turnstileToken,
      })
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.data.user });
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.msg);
        setLoading(false);
      });
  };
  return (
    <Container>
      <div className='w-50 mx-auto mt-5 border p-5 rounded '>
        <h2 className='text-center'>Login</h2>
        <p className='text-danger'> {error}</p>
        <Form onSubmit={handleSignin}>
          <Form.Group className='mb-3' controlId='number'>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter  number'
              required
              autoFocus
              minLength={10}
              maxLength={10}
              value={number}
              autoComplete='off'
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className='mb-3'>
            <Turnstile
              siteKey='0x4AAAAAAA1VaDipmssLJgnP'
              onVerify={(token) => setTurnstileToken(token)}
            />
          </div>
          <Button variant='primary' type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
