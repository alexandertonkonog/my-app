import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import usersReducer from './users-reducer.js';
import authReducer from './auth-reducer.js';
import appReducer from './app-reducer.js';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
	profilePage : profileReducer,
	dialogsPage : dialogsReducer,
	usersPage : usersReducer,
	authUser : authReducer,
	form : formReducer,
	app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;