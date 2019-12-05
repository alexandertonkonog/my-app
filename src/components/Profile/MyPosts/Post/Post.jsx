import React from 'react';
import s from './Post.module.css';
const Post = (props)=> {
	return(
		<div className={s.item}>
			<img src={require('./../../../../images/'+props.img)}  />
			<div className={s.postContent}>
				<div>
					<p className={s.itemName}>{props.name}</p>
					<p>{props.message}</p>
				</div>
				<p className={s.likeCount}>&#9829;<span>{props.likeCount}</span></p>
			</div>
			
		</div>

	)
};

export default Post;