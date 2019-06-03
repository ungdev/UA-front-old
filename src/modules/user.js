import { toast } from 'react-toastify';
import axios from '../lib/axios';
import errorToString from '../lib/errorToString';

import { logout, SET_TOKEN } from './login';
import { SET_SPOTLIGHTS } from './spotlights';

import { push } from './router';

export const SET_USER = 'user/SET_USER';
export const SET_PRICES = 'user/SET_PRICES';

const initialState = {
  user: null,
  prices: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_PRICES:
      if (!action.payload) {
        return state;
      }

      const prices = {};

      for (const [key, value] of Object.entries(action.payload)) {
        prices[key] = parseFloat(value);
      }

      prices.partners = action.payload.partners.split(',');

      return {
        ...state,
        prices,
      };
    default:
      return state;
  }
};

export const fetchUser = () => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token;

    if (!authToken || authToken.length === 0) {
      return;
    }

    try {
      const res = await axios.get('user', { headers: { 'X-Token': authToken } });
      dispatch({ type: SET_USER, payload: res.data.user });
      dispatch({ type: SET_TOKEN, payload: res.data.token });
      dispatch({ type: SET_SPOTLIGHTS, payload: res.data.spotlights });
      dispatch({ type: SET_PRICES, payload: res.data.prices });
    } catch (err) {
      console.log(err);
      dispatch(logout());
    }
  };
};

export const sendTicket = () => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token;

    if (!authToken || authToken.length === 0) {
      return;
    }

    try {
      toast.success('Envoi en cours...');
      await axios.get('user/ticket', { headers: { 'X-Token': authToken } });
      toast.success('Le mail a été envoyé !');
    } catch (err) {
      console.log(err);
      return toast.error(errorToString(err.response.data.error));
    }
  };
};

export const editUser = newUserData => {
  return async (dispatch, getState) => {
    const authToken = getState().login.token;

    if (!authToken || authToken.length === 0) {
      return;
    }

    if (newUserData.password !== newUserData.password2) {
      toast.error(errorToString('PASSWORD_MISMATCH'));
    }

    try {
      if (newUserData.gender) newUserData.gender = newUserData.gender.value;
      else newUserData.gender = 'N/A';

      const res = await axios.put('user', newUserData, { headers: { 'X-Token': authToken } });
      dispatch({
        type: SET_USER,
        payload: {
          ...getState().user.user,
          ...res.data.user,
        },
      });
      toast.success('Compte édité avec succès');
      dispatch(push('/dashboard'));
    } catch (err) {
      console.log(err.response.data);
      toast.error(errorToString(err.response.data.error));
    }
  };
};
