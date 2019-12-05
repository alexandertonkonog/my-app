import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader.jsx';
import Profile from './Profile.jsx';
import { getProfile, toggleIsFetching, getUserStatus, updateUserStatus} from '../../redux/profile-reducer.js';
import {withRouter} from 'react-router-dom';
import {setUserLogin} from '../../redux/auth-reducer.js';
import {withAuthRedirect} from '../../hoc/withAuthRedirectComponent.js';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if(!userId) {
			userId = this.props.userId
			if(!userId) {
				this.props.history.push('/login');
			}
		}
		this.props.getProfile(userId);
		this.props.getUserStatus(userId);
	}
	render() {
		return <>
				<Profile {...this.props} profile={this.props.state} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
			</>
	}
}


let mapStateToProps = (state)=> {
	return {state: state.profilePage.profile, isFetching: state.profilePage.isFetching, status: state.profilePage.status, userId: state.authUser.data.id }
}

export default compose(connect(mapStateToProps,{getProfile,toggleIsFetching, getUserStatus, updateUserStatus}),/*withAuthRedirect,*/ withRouter)(ProfileContainer);