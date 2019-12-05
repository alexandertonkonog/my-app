import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { Route, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getInitializedStatus} from './redux/app-reducer.js';
import Preloader from './components/common/Preloader/Preloader.jsx';

class App extends React.Component {
	componentDidMount() {
		this.props.getInitializedStatus();
	}
    render() {
    	if(!this.props.initialized) {
    		return <Preloader />
    	}
     	return <div className="app-wrapper">
			        <HeaderContainer />
			        <Nav />
			        <main className="app-wrapper-content">
			        	<Route path="/dialogs" 
			        		render={ ()=> <DialogsContainer /> } />
			        	<Route path="/profile/:userId?" 
			        		render={ ()=> <ProfileContainer /> } />
			        	<Route path="/users" 
			        		render={ ()=> <UsersContainer /> } />
			    		<Route path="/login" 
			    			render={ ()=> <Login /> } />
			        </main>
			   </div>
	}        
};

let mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(withRouter, connect(mapStateToProps , {getInitializedStatus}))(App);
