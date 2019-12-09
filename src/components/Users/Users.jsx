import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Pagination,{PaginationCount} from '../common/Pagination/Pagination';


let Users = (props)=> {
	return <div className={props.isFetching ? s.usersBlock : s.usersWrapper }>
				<Pagination pageSize={props.pageSize} totalItemsCount={props.totalUsersCount} currentPage={props.currentPage} onPageChanged={props.onPageChanged} porcion={10} />
				{props.users.map( u => <User user={u} follow={props.follow} unFollow={props.unFollow} isFollowingProgress={props.isFollowingProgress} />)}
				<PaginationCount pageSize={props.pageSize} currentPage={props.currentPage} onCountChanged={props.onCountChanged} />
			</div>
}
		
export default Users;