import React, {useState, useEffect} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
	
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(()=>{
		setStatus(props.status);
	}, [props.status])


	let focusStatus=() => {
		setEditMode(true);
	}
	let outFocusStatus = (e) => {
		setEditMode(false);
		if(status!==props.status) {
			props.updateUserStatus(status);
		}	
	}
	let statusChanged = (e) => {
		setStatus(e.currentTarget.value)
	}

	
	return  <>
			{ editMode ?
				<input type="text" value={status} autoFocus={true} onBlur={outFocusStatus} onChange={statusChanged} /> :
				<p className={s.statusP} onClick={focusStatus} >{props.status ? props.status : 'Изменить статус'}</p>
			}
			</>
	

}


export default ProfileStatus;