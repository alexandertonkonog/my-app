import {profileAPI, loginAPI} from '../api/api.js';
import {stopSubmit} from 'redux-form';
const SET_USER_LOGIN = 'SET_USER_LOGIN';
const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
export const setUserLogin = (data) => ({type: SET_USER_LOGIN, data });
export const removeUserLogin = () => ({type: REMOVE_USER_DATA });

let initialState = {
	data : {
		id: null,
		email: null,
		login: null
	},
	isLogin: false
}

export let getAuth = ()=>(dispatch)=> {
	return profileAPI.getAuth()
	.then(data => {
		dispatch(setUserLogin(data));	
	})
}

export let login = ({email, password, rememberMe}) => (dispatch) => {
	loginAPI.login({email, password, rememberMe})
	.then(data => {
		if (data.resultCode === 0) {
			dispatch(getAuth());
		}else {
			let message = data.messages.length>0?data.messages[0]:'Email or password are incorrected';
			dispatch(stopSubmit('login',{_error: message}))
		}	
	})
}

export let logout = () => (dispatch) => {
	loginAPI.logout()
	.then(data => {
		dispatch(removeUserLogin());
	})
}

const authReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_USER_LOGIN: {
			if (action.data.resultCode === 0) {
				return {
					...state,
					data: action.data.data,
					isLogin: true,
				}
			}else {
				return state;
			}
		}
		case REMOVE_USER_DATA: {
			return {
				...state,
				isLogin: false,
				data : {
					id: null,
					email: null,
					login: null,
				}
			}
		}
		default :
			return state;
	}
}

	
export default authReducer;