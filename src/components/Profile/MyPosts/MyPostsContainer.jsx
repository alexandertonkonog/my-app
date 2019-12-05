import React from 'react';
import {addNewPost} from '../../../redux/profile-reducer.js';
import MyPosts from './MyPosts.jsx';
import {connect} from 'react-redux';
let mapStateToProps = (state)=> {
	return {
		posts : state.profilePage.posts,
	}
};

const MyPostsContainer = connect(mapStateToProps,{addNewPost})(MyPosts);
export default MyPostsContainer;