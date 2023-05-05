/* eslint-disable react/prop-types */
import './SingleBeer.css';
import { Link, useParams } from 'react-router-dom';

function SingleBeer( { beers } ) {
	const { beerId } = useParams();
	const beer = beers.filter( ( beer ) => beer._id === beerId );

	if ( !beer[0] ) return <h1>Loading...</h1>;
	return (
		<div className='single-beer'>
			<br/>
			<div className='details'>
				<div>
					<h3>{beer[0].name}</h3>
					<h4>{beer[0].tagline}</h4>
					<p>by {beer[0].contributed_by}</p>
				</div>
				<br/>
				<br/>

				<div>
					<img src={beer[0].image_url} />
				</div>
				<br/>
				<br/>

				<div>
					<Link to={'/beers'} className='anchor'>Go Back to List</Link>
				</div>
				<br/>
			</div>
		</div>
	);
}

export default SingleBeer;
