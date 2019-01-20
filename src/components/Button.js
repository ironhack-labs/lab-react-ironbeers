import React from 'react';


export const Button = (props) => {
	return(
	<button 
		className = {props.type==='warning'? 'button is-warning' : 'button is-danger'}
		onClick= {props.action} > 
		{props.title} 
	</button>)
}