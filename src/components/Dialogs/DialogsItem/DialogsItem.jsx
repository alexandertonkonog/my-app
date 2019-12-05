import React from 'react';
import s from './DialogsItem.module.css';
import { NavLink } from "react-router-dom";
const DialogsItem = (props)=> {
	return(
		<li>
			<NavLink to={"/dialogs/"+props.id} className={s.DialogsItem}><img src={require('./../../../images/'+props.img)} className={s.avatar} /><p className={s.description} >{props.name}</p></NavLink>
		</li>
	)
}
export default DialogsItem;