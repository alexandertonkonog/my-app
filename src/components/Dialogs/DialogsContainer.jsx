import React from 'react';
import { addMessage } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirectComponent.js';

let mapStateToProps = (state) => {
	return {
		state : state.dialogsPage,
	}
}
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps,{addMessage})(AuthRedirectComponent);
export default DialogsContainer;