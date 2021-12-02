import './ListItem.css';
import React from 'react';
import {Link} from 'react-router-dom';


function ListItem(props){
	return(
		<div className="list-item" key={props.id}>
			<div>
				<img src={props.img} alt={props.name}/>
			</div>
			<div>
				<Link to={`beers/${props.id}`}>
					<h3>{props.name}</h3>
				</Link>
				<p>{props.tagline}</p>
				<p>Created by: {props.name}</p>
			</div>
		</div>
	);
}

export default ListItem;