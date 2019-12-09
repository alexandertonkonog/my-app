import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from '../../../redux/profile-reducer.js';
import {Field, reduxForm} from 'redux-form'


const PostsForm = (props) => {
	return  <form onSubmit={props.handleSubmit} >
				<Field component="textarea" name="newPost" onKeyDown={props.sendEnter} />
				<div>
					<button className={s.activeButton}>Add Post</button>
					<button type="reset">Remove</button>
				</div>
			</form>
}
const ReduxPostsForm = reduxForm({form: 'postsForm'})(PostsForm)

const MyPosts = React.memo(props => {
	let postsElements = props.posts.map( p => <Post key={p.id} name={p.name} message={p.message} likeCount={p.likeCount} img={p.img} />);

	let addPost = (values)=> {
		props.addNewPost(values.newPost);
		
	}
	let sendEnter = (e, values) => {
		if(e.keyCode === 13) {
			
		}
	}
	return(
		<div className={s.Myposts}>
			<h3 className={s.postTitle}>New post:</h3>
			<ReduxPostsForm onSubmit={addPost} sendEnter={sendEnter} />
			<div className={s.posts}>
				{ postsElements }
				
			</div>
		</div>
	)
});

export default MyPosts;