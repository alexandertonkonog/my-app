import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";
const Header = (props)=> {
	return(
		<header className={s.header}>
	    	<img src={require('./../../images/item1.png')}  />
		 	{props.state.isLogin ? <button onClick={props.logout} className={s.login}>Выйти</button> : <NavLink activeClassName={s.isActive} className={s.loginexit} to="/login" >Войти</NavLink> }
	    </header>
	)
};

export default Header;