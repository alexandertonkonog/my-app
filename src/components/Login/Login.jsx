import React from 'react';
import s from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import {FormInput} from '../../components/common/FormInput/FormInput.jsx'
import {reqiured, maxLength} from '../../validation/validation.js'
import {login} from '../../redux/auth-reducer.js';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";


let maxLength10 = maxLength(30);


const Login = (props)=> {

	let loginSubmit = (formData) => {
		props.login(formData)
	}
	if(props.isLogin) {
		return <Redirect to='/profile' />
	}	
	return <div>
				<h1>LOGIN</h1>
				<LoginReduxForm onSubmit={loginSubmit} />
			</div>
	
};
const LoginForm = (props) => {
	return  <form onSubmit={props.handleSubmit}>
				<div><Field className={s.text} type="text" placeholder="email" name="email" component={FormInput} 
					validate={[reqiured, maxLength10]} /></div>
				<div><Field className={s.text} type="password" placeholder="password" name="password" component={FormInput} validate={[reqiured, maxLength10]} /></div>
				<div><Field className={s.check} type="checkbox" component="input" name="rememberMe" /> <span className={s.remember}> Remember me </span></div>
				{props.error?<div className={s.error}>{props.error}</div>:''}
				<div><button className={s.button} >LOG IN</button></div>
			</form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


let mapStateToProps = (state) => {
	return {
		isLogin: state.authUser.isLogin
	}
}


export default connect(mapStateToProps,{login})(Login);


