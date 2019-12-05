import React from 'react';
import s from './Users.module.css';
import { NavLink } from "react-router-dom";
import swap from '../../images/swap.jpg'

let Users = (props)=> {
	let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize);
	let pages = [];
	for(let i=1; i<=pagesCount; i++){
		pages.push(i);
	}
	let chooseImg = (img)=> {
		if(img) {
			return img.small;
		}else {
			return require('../../images/swap.jpg');
		}
	}
	let follow = (id) => {
		props.follow(id)
	}
	let unFollow = (id) => {
		props.unFollow(id)
	}
	return <div className={props.isFetching ? s.usersBlock : s.usersWrapper }>
			<div className={s.pagination} >
				{ pages.map( p => <span className={props.currentPage===p && s.currentPage} onClick={(e)=>{props.onPageChanged(p)}} >{p}</span>) }
			</div>
		{props.users.map( u => 
			<div className={s.userItem} >
				<NavLink to={'/profile/'+u.id} >
				<img src={u.photos.small ? u.photos.small : swap} alt={u.name} className={s.userImg} />
				</NavLink>
				<div className={s.userDes}>
					<NavLink className={s.userName} to={'/profile/'+u.id} >{u.name}</NavLink>
					<p>{u.location ? u.location.city : 'Город'}, {u.location ? u.location.country : 'Страна'}</p>
					<p>{u.status ? u.status : 'I am in the it Protection'}</p>
				</div>
				<div className={s.buttonArea}>
					{u.followed ? 
						<button disabled={props.isFollowingProgress.some(id => id === u.id)} className={s.button} key={u.id} onClick={()=>{unFollow(u.id)}}>Unfollow</button> : 
						<button disabled={props.isFollowingProgress.some(id => id === u.id)} className={s.activeButton} key={u.id} onClick={()=>{follow(u.id)}}>Follow</button>
					}
				</div>
			</div>
		)}
		<div className={s.countProfile} >
			<p>Количество профилей на странице:</p>
			<div className={s.countProfileInside} >
				<span className={props.pageSize === 5 && s.currentPage} onClick={(e)=>{props.onCountChanged(5)}} >5</span>
				<span className={props.pageSize === 10 && s.currentPage} onClick={(e)=>{props.onCountChanged(10)}} >10</span>
				<span className={props.pageSize === 20 && s.currentPage} onClick={(e)=>{props.onCountChanged(20)}} >20</span>
				<span className={props.pageSize === 30 && s.currentPage} onClick={(e)=>{props.onCountChanged(30)}} >30</span>
				<span className={props.pageSize === 40 && s.currentPage} onClick={(e)=>{props.onCountChanged(40)}} >40</span>
				<span className={props.pageSize === 50 && s.currentPage} onClick={(e)=>{props.onCountChanged(50)}} >50</span>
			</div>
		</div>
	</div>
}
		
export default Users;