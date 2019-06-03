import { toast } from 'react-toastify';
import axios from '../lib/axios';
import errorToString from '../lib/errorToString';
import { fetchUser, SET_USER, SET_PRICES } from './user';
import { SET_TEAMS } from './teams';
import { SET_SPOTLIGHTS } from './spotlights';

import { push } from './router';

export const SET_TOKEN = 'login/SET_TOKEN';

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export const autoLogin = (redirect = '/') => {
  return async dispatch => {
    if (localStorage.hasOwnProperty('arena-2018-token')) {
      dispatch({
        type: SET_TOKEN,
        payload: localStorage.getItem('arena-2018-token'),
      });

      return dispatch(fetchUser());
    }
    return dispatch(logout(redirect));
  };
};

export const tryLogin = user => {
  return async dispatch => {
    try {
      const res = await axios.put('user/login', user);

      dispatch(saveToken(res.data.token));
      dispatch(push('/dashboard'));
      toast.success('Connexion validée');
    } catch (err) {
      console.log(err.response.data);
      toast.error(errorToString(err.response.data.error));
    }
  };
};

export const saveToken = token => {
  return async dispatch => {
    dispatch({
      type: SET_TOKEN,
      payload: token,
    });

    localStorage.setItem('arena-2018-token', token);
  };
};

export const logout = (redirect = '/') => {
  return async dispatch => {
    dispatch({ type: SET_TOKEN, payload: null });
    dispatch({ type: SET_USER, payload: null });
    dispatch({ type: SET_SPOTLIGHTS, payload: null });
    dispatch({ type: SET_TEAMS, payload: null });
    dispatch({ type: SET_PRICES, payload: null });

    localStorage.removeItem('arena-2018-token');
    return dispatch(push(redirect));
  };
};
