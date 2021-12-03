import React from 'react';
import {Link} from 'react-router-dom';


function ListDetails(props){
	return(
		<div key={props.id}>
			
				<img src={props.img} alt={props.name}/>
				<Link to={`beers/${props.id}`}>
					<h3>{props.name}</h3>
				</Link>
				<p>{props.tagline}</p>
				<p>Created by: {props.name}</p>
		</div>
	);
}

export default ListDetails; 