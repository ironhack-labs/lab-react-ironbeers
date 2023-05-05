import './AddBeer.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/new';

function AddBeer() {
	const navigate = useNavigate();
	const [name, setName] = useState( '' );
	const [tagline, setTagline] = useState( '' );
	const [contribute, setContribute] = useState( '' );

	function handleName( e ) {
		setName( e.target.value );
	}
	function handleTagline( e ) {
		setTagline( e.target.value );
	}
	function handlecontribute( e ) {
		setContribute( e.target.value );
	}
	function handleSubmit( e ) {
		e.preventDefault();
		// eslint-disable-next-line camelcase, no-undef
		const newBeer = { name, tagline, contributed_by: contribute };
		axios.post( apiURL, newBeer )
			.then( () => {
				setName( '' );
				setTagline( '' );
				setContribute( '' );
				navigate( '/' );
			} )
			.catch( ( err ) => console.log( err ) );
	}
	return (
		<div className='add-beer'>
			<h1>Add new Beer</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' value={name} onChange={handleName} placeholder='name'/>
				<input type='text' value={tagline} onChange={handleTagline} placeholder='tagline'/>
				<input type='text' value={contribute} onChange={handlecontribute} placeholder='contribute_by'/>
				<button type='submit'>Add</button>
			</form>
		</div>
	);
}

export default AddBeer;
