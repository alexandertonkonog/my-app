import React from 'react';
import s from './Preloader.module.css';
import gif from '../../../images/gif.gif';

const Preloader = ()=> {
	return <img src={gif} alt={gif} className={s.preloader} />
};

export default Preloader;