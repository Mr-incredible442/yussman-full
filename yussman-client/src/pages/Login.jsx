import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Turnstile from 'react-turnstile';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

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
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');

  const { dispatch } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!turnstileToken) {
      setError('Please complete the CAPTCHA');
      setLoading(false);
      return;
    }

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
        setError(err.response?.data?.msg || 'An error occurred');
        setLoading(false);
      });
  };

  return (
    <Container>
      <div className='w-50 mx-auto mt-5 border p-5 rounded'>
        <h2 className='text-center'>Login</h2>
        <p className='text-danger'>{error}</p>
        <Form onSubmit={handleSignin}>
          <Form.Group className='mb-3' controlId='number'>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter number'
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

          <div
            className='mb-3'
            style={{
              width: '300px',
              height: '65px',
              border: '1px solid #515252',
            }}>
            {!captchaLoaded && (
              <Spinner animation='border' role='status' className='ms-4 mt-3'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            )}
            <Turnstile
              sitekey='0x4AAAAAAA1VaDipmssLJgnP'
              onVerify={(token) => setTurnstileToken(token)}
              onError={() =>
                setError('CAPTCHA failed to load. Please refresh the page.')
              }
              onExpire={() => {
                setTurnstileToken('');
                setError('CAPTCHA expired. Please try again.');
              }}
              onLoad={() => setCaptchaLoaded(true)}
              fixedSize={true}
            />
          </div>
          <Button
            variant='primary'
            type='submit'
            disabled={loading || !turnstileToken || !captchaLoaded}>
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
