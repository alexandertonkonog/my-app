import {getAuth} from './auth-reducer.js';
const GET_INITIALIZED = 'GET_INITIALIZED';

export const getInitialized = () => ({type: GET_INITIALIZED});


export let getInitializedStatus = () => (dispatch) => {
	let promise = dispatch(getAuth());
	Promise.all([promise]).then(dispatch(getInitialized()))
}

let initialState = {
	initialized: false
}

const appReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_INITIALIZED: {
			return {
				...state,
				initialized: true
			}
		}
		default :
			return state;
	}
}

	
export default appReducer;