import React from 'react';
//use effect use state
import { useState } from 'react';
// //Axios
import axios from 'axios';
//Assets
import './../App.css';
//Components
import Menu from './Menu/Menu.js';

const NewBeer = () => {
	//Form consts
	const [ name, setName ] = useState('');
	const [ tagline, setTagLine ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ first_brewed, setFirstBrewed ] = useState('');
	const [ brewer_tips, setBrewerTips ] = useState('');
	const [ attenuation_level, setAttenuationLevel ] = useState(0);
	const [ contributed_by, setContributedBy ] = useState('');

	const handleSubmit = (e) => {
		// Prevent page reload on submit
		e.preventDefault();

		const body = {
			name: name,
			tagline: tagline,
			description: description,
			first_brewed: first_brewed,
			brewer_tips: brewer_tips,
			attenuation_level: attenuation_level,
			contributed_by: contributed_by
		};

		axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body).then((response) => {
			setName('');
			setTagLine('');
			setDescription('');
			setFirstBrewed('');
			setBrewerTips('');
			setAttenuationLevel(0);
			setContributedBy('');
		});
	};

	console.log('llegamos aquí');

	return (
		<div>
			<Menu />
			<div className="beerForm">
				<form className="beerFormDataForm" onSubmit={handleSubmit}>
					<div className="displayColumn">
						<label className="labelLeftBold">Name </label>
						<input
							className="form-control"
							type="text"
							name="name"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</div>
					<div className="displayColumn">
						<label className="labelLeftBold">Tagline </label>
						<input
							className="form-control"
							type="text"
							name="tagline"
							onChange={(e) => setTagLine(e.target.value)}
							value={tagline}
						/>
					</div>
					<div className="displayColumn">
						<label className="labelLeftBold">Description </label>
						<textarea
							className="form-controlTA"
							type="text"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						/>
					</div>
					<div className="displayColumn">
						<label className="labelLeftBold">First brewed </label>
						<input
							className="form-control"
							type="text"
							name="first_brewed"
							onChange={(e) => setFirstBrewed(e.target.value)}
							value={first_brewed}
						/>
					</div>
					<div className="displayColumn">
						<label className="labelLeftBold">Brewers tips </label>
						<input
							className="form-control"
							type="text"
							name="brewers_tips"
							onChange={(e) => setBrewerTips(e.target.value)}
							value={brewer_tips}
						/>
					</div>
					<div className="displayColumn">
						<label className="labelLeftBold">Attenuation level </label>
						<input
							className="form-control"
							type="number"
							name="attenuation_level"
							onChange={(e) => setAttenuationLevel(e.target.value)}
							value={attenuation_level}
						/>
					</div>
					<div className="displayColumn">
						<label className="labelLeftBold">Contributed by </label>
						<input
							className="form-control"
							type="text"
							name="contributed_by"
							onChange={(e) => setContributedBy(e.target.value)}
							value={contributed_by}
						/>
					</div>
					<button type="submit" className="btn-danger">
						ADD
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewBeer;
