/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './ListBeers.css';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

function ListBeers( { beers } ) {
	const navigate = useNavigate();
	const [listBeers, setListBeers] = useState( beers );

	const [query, setQuery] = useState( '' );
	function handleQuery( e ) {
		setQuery( e.target.value );
	}
	function handleSubmit( e ) {
		e.preventDefault();
		navigate( `/beers?q=${query}` );
	}

	const [searchParams] = useSearchParams();
	const q = searchParams.get( 'q' );
	useEffect( () => {
		if ( !q ) {
			setListBeers( beers );
		} else {
			const filtered = beers.filter( ( beer ) => {
				return beer.name.toLowerCase().includes( q.toLowerCase() ) ||
				beer.tagline.toLowerCase().includes( q.toLowerCase() );
			} );
			setListBeers( filtered );
		}
	}, [searchParams] );

	if ( !listBeers ) return <h1>Loading...</h1>;
	return (
		<div className='beers'>
			<h1>Beers</h1>
			<form onSubmit={handleSubmit} className='search'>
				<input type='text' value={query} onChange={handleQuery} placeholder='type to search...'/>
				<button type='submit'>Search</button>
				<Link to='/beers'>Reset</Link>
			</form>
			{ listBeers.map( ( beer ) => {
				return (
					<Link to={'' + beer._id} className='card' key={beer._id}>
						<div>
							<img src={beer.image_url} alt={beer.name} />
						</div>
						<div>
							<h3>{beer.name}</h3>
							<h4>{beer.tagline}</h4>
							<p>{beer.contributed_by}</p>
						</div>
					</Link>
				);
			} )}
		</div>
	);
}

export default ListBeers;
