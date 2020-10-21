import {carReducer} from './carReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  cars: carReducer,
});
