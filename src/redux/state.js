import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
let store = {
	_callSubscriber() {},
	_state : {
		profilePage : {
			posts : [
				{id : 0, name: 'Алексей', likeCount: 5, img: '_rvhkpsWXLU.jpg', message: 'my first post'},
				{id : 1, name: 'Александр', likeCount: 5, img: 'iljF9y0ftGE1.jpg', message: 'my second post'},
				{id : 2, name: 'Василий', likeCount: 5, img: 'а.jpg', message: 'how are you'},
				{id : 3, name: 'Иннокентий', likeCount: 5, img: 'в.jpg', message: 'privet'},
			],
			newPostText : '',
		},
		messagesPage : {
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
			],
			newMessageBody : '',
		}	
	},



	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},



	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
		this._callSubscriber(this._state);
	},
}
export default store;