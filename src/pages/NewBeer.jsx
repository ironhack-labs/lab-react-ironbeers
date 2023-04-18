import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {
	const [name, setName] = useState('');
	const [tagline, setTagline] = useState('');
	const [description, setDescription] = useState('');
	const [first_brewed, setFirst_Brewed] = useState('');
	const [brewers_tips, setBrewers_Tips] = useState('');
	const [attenuation_level, setAttenuation_Level] = useState(0);
	const [contributed_by, setContributed_By] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };

		axios
			.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
			.then((res) => {
				console.log(res);
				navigate('/');
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div>
			<Header />

			<h1>Create a new Beer!</h1>

			<form className='p-5' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name:</label>
					<input
						className='form-control'
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='tagline'>Tagline:</label>
					<input
						className='form-control'
						type='text'
						name='tagline'
						id='tagline'
						value={tagline}
						onChange={(e) => setTagline(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='description'>Description:</label>
					<input
						className='form-control'
						type='text'
						name='description'
						id='description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='first_brewed'>First Brewed:</label>
					<input
						className='form-control'
						type='text'
						name='first_brewed'
						id='first_brewed'
						value={first_brewed}
						onChange={(e) => setFirst_Brewed(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='brewers_tips'>Brewer's Tips:</label>
					<input
						className='form-control'
						type='text'
						name='brewers_tips'
						id='brewers_tips'
						value={brewers_tips}
						onChange={(e) => setBrewers_Tips(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='attenuation_level'>Attenuation Level:</label>
					<input
						className='form-control'
						type='number'
						name='attenuation_level'
						id='attenuation_level'
						value={attenuation_level}
						onChange={(e) => setAttenuation_Level(e.target.value)}
					/>
				</div>
				<label htmlFor='contributed_by'>Contributed By:</label>
				<input
					className='form-control'
					type='text'
					name='contributed_by'
					id='contributed_by'
					value={contributed_by}
					onChange={(e) => setContributed_By(e.target.value)}
				/>

				<button type='submit'>Create Beer</button>
			</form>
		</div>
	);
};

export default NewBeer;
