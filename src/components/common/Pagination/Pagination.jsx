import React,{useState} from 'react';
import s from './Pagination.module.css';
import gif from '../../../images/gif.gif';

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, porcion})=> {
	let pagesCount = Math.ceil(totalItemsCount/ pageSize);
	let pages = [];
	for(let i=1; i<=pagesCount; i++){
		pages.push(i);
	}
	const [currentItem, setCurrentItem] = useState(currentPage);
	let changeCurrentItem = (item) => {
		setCurrentItem(currentItem+item);
		onPageChanged(currentItem+item);
	}
	console.log(pagesCount)
	return  <div className={s.pagination} >
				{currentItem>porcion && <span onClick={(e)=>{changeCurrentItem(-porcion)}} >Назад</span>}
				{ pages.filter(p => p >= currentItem && p < currentItem+porcion).map( p => <span className={currentPage===p && s.currentPage} onClick={(e)=>{onPageChanged(p)}} >{p}</span>) }
				{currentItem<pagesCount-porcion &&<span onClick={(e)=>{changeCurrentItem(porcion)}} >Вперед</span>}
		    </div>
};

export default Pagination;

export const PaginationCount = ({pageSize, currentPage, onCountChanged})=> {
	let pages = [5,10,20,30,40,50];
	return  <div className={s.countProfile} >
				<p>Количество профилей на странице:</p>
				<div className={s.countProfileInside} >
					{pages.map( p => <span className={pageSize === p && s.currentPage} onClick={(e)=>{onCountChanged(p)}} >{p}</span>)}
				</div>
			</div>
};

