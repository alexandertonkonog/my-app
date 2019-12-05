import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
const Profile = (props)=> {
	return(
		<div className="">
			<ProfileInfo state={props.state} status={props.status} updateUserStatus={props.updateUserStatus} />
          	<MyPostsContainer />
    	</div>
	)
};

export default Profile;