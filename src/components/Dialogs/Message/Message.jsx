import React from 'react';
import s from './Message.module.css';
const Message = (props)=> {
	return(
		<li className={s.dialog}> <span className={s.message+" "+props.type} >{props.message}</span></li>
	)
}
export default Message;