import React from 'react';
import s from './Nav.module.css';
import { NavLink } from "react-router-dom";
const Nav = ()=> {
	return(
		 <nav className={s.nav}>
          <ul>
            <NavLink activeClassName={s.isActive} className={s.item} to="/profile"><li >Profile</li></NavLink>
            <NavLink activeClassName={s.isActive} className={s.item} to="/dialogs"><li >Messages</li></NavLink>
            <NavLink activeClassName={s.isActive} className={s.item} to="/users"><li >Users</li></NavLink>
            <NavLink activeClassName={s.isActive} className={s.item} to="/news"><li >News</li></NavLink>
            <NavLink activeClassName={s.isActive} className={s.item} to="/music"><li >Music</li></NavLink>
            <NavLink activeClassName={s.isActive} className={s.item} to="/settings"><li >Settings</li></NavLink>
          </ul>
        </nav>
        

	)
};

export default Nav;