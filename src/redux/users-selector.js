import {createSelector} from 'reselect';



let getUsers= (state) => {
	return state.usersPage.users;
}
export let getCurrentPage = (state)=> {
	return state.usersPage.currentPage;
}
export let getTotalUsersCount = (state)=> {
	return state.usersPage.totalUsersCount;
}
export let getPageSize = (state)=> {
	return state.usersPage.pageSize;
}
export let getIsFetching = (state)=> {
	return state.usersPage.isFetching;
}
export let getIsFollowingProgress = (state)=> {
	return state.usersPage.isFollowingProgress;
}
export let getAllUsers = createSelector(getUsers, (users)=>{
	return users.filter(u => true)
});