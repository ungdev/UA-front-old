import { toast } from 'react-toastify';
import axios from '../lib/axios';
import fail from '../lib/store.fail';
import errorToString from '../lib/errorToString';

import { saveToken } from './login';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const register = user => {
  return async dispatch => {
    if (user.password !== user.password2) {
      return fail(dispatch, 'PASSWORD_MISMATCH');
    }

    try {
      await axios.post('user', user);
      toast.success('Inscription réussie');
    } catch (err) {
      console.log(err.response.data);
      toast.error(errorToString(err.response.data.error));
    }
  };
};

export const validate = token => {
  return async dispatch => {
    try {
      const res = await axios.post('user/validate', { token });

      await dispatch(saveToken(res.data.token));
      toast.success('Inscription validée');
    } catch (err) {
      console.log(err.response.data);
      toast.error(errorToString(err.response.data.error));
    }
  };
};
