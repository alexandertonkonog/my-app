import {profileAPI} from '../api/api.js';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const IS_FETCHING = 'IS_FETCHING';
const GET_STATUS = 'GET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

export const addNewPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});
export const updateStatus = (status) => ({type: UPDATE_STATUS, status});
export const getStatus = (data) => ({type: GET_STATUS, data});

export let getUserStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(data => {
		dispatch(getStatus(data));	
	})
}
export let updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(data => {
		if(data.resultCode === 0 ) {
			dispatch(getStatus(status));	
		}
	})
}

export let getProfile = (userId) => (dispatch) => {
	toggleIsFetching(true);
	profileAPI.getProfile(userId).then(data => {
		toggleIsFetching(false);
		dispatch(setUserProfile(data));	
	})
}

let initialState = {
	posts : [
				{id : 0, name: 'Алексей', likeCount: 5, img: '_rvhkpsWXLU.jpg', message: 'my first post'},
				{id : 1, name: 'Александр', likeCount: 5, img: 'iljF9y0ftGE1.jpg', message: 'my second post'},
				{id : 2, name: 'Василий', likeCount: 5, img: 'а.jpg', message: 'how are you'},
				{id : 3, name: 'Иннокентий', likeCount: 5, img: 'в.jpg', message: 'privet'},
			],
	profile: null,
	isFetching: true,
	status: null,
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST: {
			let newPost = {
				id : 5,
				name : 'Александр',
				likeCount: 0,
				img: '_rvhkpsWXLU.jpg', 
				message: action.post,
			}
			return {
				...state,
				newPostText : '',
				posts : [ newPost, ...state.posts],
			}
		}
		case GET_STATUS: {
			return {
				...state,
				status : action.data,
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile : action.profile,
			};
		}
		case IS_FETCHING: {
			return {
				...state, 
				isFetching: action.isFetching
			}
		}
		default :
			return state;
	}
}

	
export default profileReducer;