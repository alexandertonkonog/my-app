
const SEND_MESSAGE = 'SEND_MESSAGE';
export const addMessage = (message) => ({type: SEND_MESSAGE, message});


let initialState = {
	messages : [
		{id : 0, message: 'Hi', type:'me'},
		{id : 1, message: 'Hello', type:'other'},
		{id : 2, message: 'How are you?', type:'me'},
		{id : 3, message: 'norm', type:'other'},
	],
	dialogs : [
		{id : 0, name: 'Алексей', img: '_rvhkpsWXLU.jpg', message: 'my first post'},
		{id : 1, name: 'Александр', img: 'iljF9y0ftGE1.jpg', message: 'my second post'},
		{id : 2, name: 'Василий', img: 'а.jpg', message: 'how are you'},
		{id : 3, name: 'Иннокентий', img: 'в.jpg', message: 'privet'},
	]
}

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEND_MESSAGE: {
			let newMessage = {
				id : 0, 
				message: action.message, 
				type: 'me',
			};
			return {
				...state, 
				messages : [ ...state.messages, newMessage]
			};
			
		}
		default :
			return state;
	}
}

	
export default dialogsReducer;