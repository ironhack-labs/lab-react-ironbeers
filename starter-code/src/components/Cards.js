import React from 'react';
import {Link} from 'react-router-dom'

const Cards = (props) => {
	return (
		<div className="card" style={{width:'100vw'}}>
			<img className="card-img-top" src={process.env.PUBLIC_URL + props.img} alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<Link to={props.link} className="btn btn-primary">Check the Page</Link>
			</div>
		</div>
	)
};

export default Cards