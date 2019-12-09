import React,{useState} from 'react';
import s from './Pagination.module.css';
import gif from '../../../images/gif.gif';

const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, porcion})=> {
	let pagesCount = Math.ceil(totalItemsCount/ pageSize);
	let pages = [];
	for(let i=1; i<=pagesCount; i++){
		pages.push(i);
	}
	let portionCount = Math.ceil(pagesCount/ porcion);
	const [porcionNum, setPorcionNum] = useState(1);
	let leftBorder = (porcionNum-1)*porcion+1;
	let rightBorder = porcionNum * porcion;
	
	return  <div className={s.pagination} >
				{porcionNum > 1 && <span onClick={(e)=>{setPorcionNum(porcionNum-1)}} >Назад</span>}
				{pages.filter(p => p >= leftBorder && p <= rightBorder).map( p => <span key={p} className={currentPage===p && s.currentPage} onClick={(e)=>{onPageChanged(p)}} >{p}</span>)}
				{portionCount > porcionNum && <span onClick={(e)=>{setPorcionNum(porcionNum+1)}} >Вперед</span>}
		    </div>
};

export default Pagination;

export const PaginationCount = ({pageSize, currentPage, onCountChanged})=> {
	let pages = [5,10,20,30,40,50];
	return  <div className={s.countProfile} >
				<p>Количество профилей на странице:</p>
				<div className={s.countProfileInside} >
					{pages.map( p => <span key={p} className={pageSize === p && s.currentPage} onClick={(e)=>{onCountChanged(p)}} >{p}</span>)}
				</div>
			</div>
};

