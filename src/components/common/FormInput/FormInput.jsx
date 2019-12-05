import React from 'react';
import s from './FormInput.module.css';

export const FormInput = ({input, meta, ...props})=> {
	return <div className={s.form}>
		<input {...input} {...props} />
		{meta.touched && meta.error && <span className={s.error} >{meta.error}</span>}
	</div>
};
