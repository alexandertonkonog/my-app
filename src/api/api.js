import * as axios from 'axios';

let itemsAPI = {
	url : 'https://social-network.samuraijs.com/api/1.0/',
	params : {
		withCredentials: true,
		headers: {
			'API-KEY': 'e3a71689-ba98-4018-ac2b-4c4e2edfadbe'
		}
	}
}
export const usersAPI = {
	getUsers(count, page) { return axios.get(`${itemsAPI.url}users?count=${count}&page=${page}`, itemsAPI.params ).then( response => response.data) },
	postFollow(id) { return axios.post(`${itemsAPI.url}follow/${id}`, {}, itemsAPI.params ).then( response => response.data) },
	deleteFollow(id) { return  axios.delete(`${itemsAPI.url}follow/${id}`, itemsAPI.params ).then( response => response.data) },
}
export const profileAPI = {
	getProfile(userId) {return axios.get(`${itemsAPI.url}profile/${userId}`, itemsAPI.params).then( response => response.data)},
	getAuth() {return axios.get(`${itemsAPI.url}auth/me`, itemsAPI.params).then( response => response.data)},

	getStatus(userId) { return axios.get(`${itemsAPI.url}profile/status/${userId}`, itemsAPI.params).then(response => response.data)},
	updateStatus(status) { return axios.put(`${itemsAPI.url}profile/status`, {status}, itemsAPI.params).then( response => response.data)},
	
}
export const loginAPI = {
	login({email, password, rememberMe}) {return axios.post(`${itemsAPI.url}auth/login`, {email, password, rememberMe}, itemsAPI.params ).then( response => response.data)},
	logout() {return  axios.delete(`${itemsAPI.url}auth/login`, itemsAPI.params ).then( response => response.data)}
}