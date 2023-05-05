/* eslint-disable react/prop-types */
import './SingleBeer.css';
import { Link } from 'react-router-dom';

function RandomBeer( { beers } ) {
	const randomId = Math.floor( Math.random() * beers.length );
	const randomBeer = beers[randomId];

	if ( !randomBeer ) return <h1>Loading...</h1>;
	return (
		<div className='single-beer'>
			<h1></h1>
			<div className='details'>
				<div>
					<img src={randomBeer.image_url} />
				</div>
				<div>
					<h3>{randomBeer.name}</h3>
					<h4>{randomBeer.tagline}</h4>
					<p>by {randomBeer.contributed_by}</p>
					<br/>
					<br/>
					<Link to={'/'} className='anchor'>Go Back to Home</Link>
				</div>
			</div>
		</div>
	);
}

export default RandomBeer;
