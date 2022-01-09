import axios from 'axios';
import { setUser } from '../reducers/userReducer';
import { reg } from '../reducers/userReducer';
import { regErrors } from '../reducers/userReducer';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data.user));

      localStorage.setItem('token', response.data.token);
      // alert('login');
      // console.log(response.data);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const registration = (userName, surName, email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
        userName,
        surName,
        email,
        password,
      });
      // alert(response.data.message);
      dispatch(reg(response.data));
    } catch (e) {
      // alert(e.response.data.message);
      dispatch(regErrors(e.response.data));
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      // alert('auth');
    } catch (e) {
      alert(e.response.data.message);
      localStorage.removeItem('token');
    }
  };
};
