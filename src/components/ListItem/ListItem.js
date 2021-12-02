import './ListItem.css';
import React from 'react';

function ListItem(props){
	return(
		<div className="list-item" key={props.id}>
			<div>
				<img src={props.img} alt={props.name}/>
			</div>
			<div>
				<h3>{props.name}</h3>
				<p>{props.tagline}</p>
				<p>Created by: {props.name}</p>
			</div>
		</div>
	);
}

export default ListItem;