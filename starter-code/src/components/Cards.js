import React from 'react';
import {Link} from 'react-router-dom'

const Cards = (props) => {
	return (
		<div className="card" style={{width:'100vw'}}>
			<img className="card-img-top" src={process.env.PUBLIC_URL + props.img} alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{
					props.description 
						? props.description 
						: 'Vivamus consectetuer hendrerit lacus. Cras non dolor. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Phasellus magna.'
				}</p>
				
				{props.link 
					? <Link to={props.link} className="btn btn-primary">Check the Page</Link>
					: null}
			</div>
		</div>
	)
};

export default Cards