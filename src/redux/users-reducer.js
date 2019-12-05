import {usersAPI} from '../api/api.js';


const FOLLOWED = 'FOLLOWED';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT = 'SET_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';
export const changeFollow = (userID) => ({type: FOLLOWED, userID});
export const addUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setCount = (countItem) => ({type: SET_COUNT, countItem});
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching});
export const followingProgress = (isFetching, userId) => ({type: FOLLOWING_PROGRESS, isFetching, userId});

export let getUsers = (pageSize, currentPage) => (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setCurrentPage(currentPage));
	dispatch(setCount(pageSize));
	usersAPI.getUsers(pageSize, currentPage)
	.then(data => {
		dispatch(toggleIsFetching(false));
		dispatch(addUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));		
	})
}
export let follow = (id) => (dispatch) => {
	dispatch(followingProgress(true, id));
		usersAPI.postFollow(id)
		.then(data => {
			if(data.resultCode == 0) {
				dispatch(changeFollow(id));
			}
			dispatch(followingProgress(false, id));
		})
}
export let unFollow = (id) => (dispatch) => {
	dispatch(followingProgress(true, id));
		usersAPI.deleteFollow(id)
		.then(data => {
			if(data.resultCode == 0) {
				dispatch(changeFollow(id));
			}
			dispatch(followingProgress(false, id));
		})
}


let initialState = {
	users : [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	isFollowingProgress: []
}
const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOWED: {
			return {
				...state,
				users : state.users.map( u => {
					if(u.id === action.userID){
						return {
							...u,
							followed: !u.followed
						};
					}else {
						return u;
					}
				})

			}
		}
		case SET_USERS: {
			return {
				...state, 
				users : action.users
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state, 
				currentPage: action.currentPage,
			}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state, 
				totalUsersCount: action.count,
			}
		}
		case SET_COUNT: {
			return {
				...state, 
				pageSize: action.countItem,
			}
		}
		case IS_FETCHING: {
			return {
				...state, 
				isFetching: action.isFetching
			}
		}
		case FOLLOWING_PROGRESS: {
			return {
				...state,
				isFollowingProgress : action.isFetching ?
				[...state.isFollowingProgress, action.userId] :
				state.isFollowingProgress.filter(id => id != action.userId)
			}
		}
		default :
			return state;
	}
}

	
export default usersReducer;