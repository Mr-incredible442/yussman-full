import axios from 'axios';

// Create an Axios instance
const apiCall = axios.create();

// Add a request interceptor
apiCall.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiCall;
