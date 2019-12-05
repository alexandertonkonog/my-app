import React from 'react';
import s from './Header.module.css';
import Header from './Header';
import { logout} from '../../redux/auth-reducer.js';
import {connect} from 'react-redux';


class HeaderContainer extends React.Component {
	render(){
		return <Header {...this.props} state={this.props.state} />
	}
}
let mapStateToProps = (state)=> {
	return {state: state.authUser}
}


export default connect(mapStateToProps,{ logout} ) (HeaderContainer);