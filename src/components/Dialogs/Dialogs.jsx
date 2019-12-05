import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {reduxForm, Field} from 'redux-form';

const AddMessageForm = (props)=> {
	return  <form className={s.textareaZone} onSubmit={props.handleSubmit} >
				<Field component="textarea" name="newMessage" className={s.textarea} placeholder="Write your message" onKeyDown={props.sendEnter} />
				<button className={s.sendButton}>Send</button>
			</form>
}
const ReduxMessageForm = reduxForm({form : 'messageForm'})(AddMessageForm)

const Dialogs = (props)=> {
	let sendMessage = (values) => {
		props.addMessage(values.newMessage);
		values.newMessage= '';
	}
	let sendEnter = (e) => {
		if(e.keyCode === 13) {

		}
	}
	let DialogsElements = props.state.dialogs.map( d => <DialogsItem key={d.id} name={d.name} id={d.id} img={d.img} />);
	let MessagesElements = props.state.messages.map( m => <Message key={m.id} message={m.message} type={m.type} id={m.id} />);
	

	return(
		<div className={s.DialogsWrapper}>
			<div className={s.Dialogs}>
				<ul className={s.DialogsItems}>
					{ DialogsElements }
				</ul>
				<ul className={s.messages}>
					{ MessagesElements }
				</ul>
			</div>
			<ReduxMessageForm onSubmit={sendMessage} sendEnter={sendEnter} />
				
			
		</div>
	)
};

export default Dialogs;