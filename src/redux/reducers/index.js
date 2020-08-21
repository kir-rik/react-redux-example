import { combineReducers } from 'redux';
import userInfoSubstore from './userInfoSubstore';
// и все остальные сабсторы/редюсеры

export default combineReducers({ userInfoSubstore /* и все остальные сабсторы/редюсеры */ });
