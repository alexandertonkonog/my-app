import React from 'react';
import {changeFollow, followingProgress, getUsers, toggleIsFetching, follow, unFollow } from '../../redux/users-reducer.js';
import Users from './Users.jsx';
import {connect} from 'react-redux';
import s from './Users.module.css';
import Preloader from '../common/Preloader/Preloader.jsx';
import {withAuthRedirect} from '../../hoc/withAuthRedirectComponent.js';
import {compose} from 'redux';
import {getCurrentPage,getTotalUsersCount,getPageSize,getAllUsers,getIsFetching,getIsFollowingProgress} from '../../redux/users-selector.js';

class UsersContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getUsers(this.props.pageSize, this.props.currentPage);
	}
	onPageChanged = (currentPage) => {
		this.props.getUsers(this.props.pageSize, currentPage);
	}
	onCountChanged = (countItem) => {
		this.props.getUsers(countItem, this.props.currentPage);
	}
	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users 	onPageChanged={this.onPageChanged}
					onCountChanged={this.onCountChanged}
					changeFollow={this.props.changeFollow}
					currentPage={this.props.currentPage}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					users={this.props.users}
					isFetching={this.props.isFetching}
					isFollowingProgress={this.props.isFollowingProgress}
					followingProgress={this.props.followingProgress}
					follow={this.props.follow}   
					unFollow={this.props.unFollow}   />	
			</>		 
						
	}
	
};

let mapStateToProps = (state)=> {
	return {
		currentPage: getCurrentPage(state),
		totalUsersCount: getTotalUsersCount(state),
		pageSize: getPageSize(state),
		users: getAllUsers(state),
		isFetching: getIsFetching(state),
		isFollowingProgress: getIsFollowingProgress(state)
	}
};

export default compose(connect(mapStateToProps,{changeFollow,toggleIsFetching,followingProgress,getUsers,follow,unFollow}),withAuthRedirect)(UsersContainer);