import React from 'react';
import s from './User.module.css';
import { NavLink } from "react-router-dom";
import swap from '../../../images/swap.jpg';



let User = ({follow, unFollow, isFollowingProgress, user})=> {
	return <div className={s.userItem} >
					<NavLink to={'/profile/'+user.id} >
						<img src={user.photos.small ? user.photos.small : swap} alt={user.name} className={s.userImg} />
					</NavLink>
					<div className={s.userDes}>
						<NavLink className={s.userName} to={'/profile/'+user.id} >{user.name}</NavLink>
						<p>{user.location ? user.location.city : 'Город'}, {user.location ? user.location.country : 'Страна'}</p>
						<p>{user.status ? user.status : 'I am in the it Protection'}</p>
					</div>
					<div className={s.buttonArea}>
						{user.followed ? 
							<button disabled={isFollowingProgress.some(id => id === user.id)} className={s.button} key={user.id} onClick={()=>{unFollow(user.id)}}>Unfollow</button> : 
							<button disabled={isFollowingProgress.some(id => id === user.id)} className={s.activeButton} key={user.id} onClick={()=>{follow(user.id)}}>Follow</button>
						}
					</div>
				</div>
}
		
export default User;