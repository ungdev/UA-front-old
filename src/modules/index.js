import { combineReducers } from 'redux';
import router from './router';
import canLogin from './canLogin';
import login from './login';
import register from './register';
import user from './user';
import payment from './payment';
import teams from './teams';
import spotlights from './spotlights';
import forgot from './forgot';
import metadatas from './metadatas';

export default combineReducers({
  router,
  canLogin,
  login,
  register,
  user,
  payment,
  teams,
  spotlights,
  forgot,
  metadatas,
});
