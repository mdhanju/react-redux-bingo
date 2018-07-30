import { combineReducers } from 'redux';
import app from './appReducers';
import tickets from './ticketReducers';

export default combineReducers({
	app,
	tickets
})
