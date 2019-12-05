import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus.jsx';
import swap from '../../../images/swap.jpg'
const ProfileInfo = (props)=> {	
	let checkObj = (obj)=> {
		let array = []
		for(let key in obj) {
			if (obj[key]) {
				array.push(<li><a href={obj[key]}><div className={s.linkCircle}></div>{key}</a></li>);
			}
		}
		return array;
	}
	if(!props.state) {
		return <Preloader />
	}
	return(
		<div className={s.profile}>
			<img className={s.ava} src={props.state.photos.large?props.state.photos.large:swap}  />
			<div className={s.inside}>
				<div className={s.info}>
					<div className={s.profileDes}>
						<h3 className={s.name}>{props.state.fullName}</h3>
						<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
						<p className={s.job}>{props.state.lookingForAJob?'Ищу работу':'Не ищу работу'}</p>
						<p className={s.whatjob}>{props.state.lookingForAJobDescription?props.state.lookingForAJobDescription:''}</p>
					</div>
					<div className={s.links}>
						<h3 className={s.name}>Контакты</h3>
						<ul>
							{checkObj(props.state.contacts)}
						</ul>
					</div>
				</div>
				<div className={s.message}>
					<button className={s.button} onClick={()=>{}}>Написать</button>
					<button className={s.button} onClick={()=>{}}>Позвонить</button>
				</div>
			</div>
		</div>
		
	)
	
	
	
};

export default ProfileInfo;