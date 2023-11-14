import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBeerPage() {
	const [name, setName] = useState('');
	const [tagline, setTagline] = useState('');
	const [description, setDescription] = useState('');
	const [firstBrewed, setFirstBrewed] = useState('');
	const [brewersTip, setBrewersTip] = useState('');
	const [attenuation, setAttenuation] = useState('');
	const [contributedBy, setContributedBy] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		const requestBody = {
			name: name,
			tagline: tagline,
			description: description,
			first_brewed: firstBrewed,
			brewers_tips: brewersTip,
			attenuation_level: attenuation,
			contributed_by: contributedBy,
		};

		axios
			.post(`https://ih-beers-api2.herokuapp.com/beers/new`, requestBody)
			.then(() => {
				navigate('/beers');
			})
			.catch((error) => {
				console.log('error');
				console.log(error);
			});
	};
	return (
		<div className="AddBeerPage">
			<h2>Add your own beer!</h2>

			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						placeholder="enter the name"
						required={true}
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Tagline:
					<input
						type="text"
						name="tagline"
						placeholder="enter the tagline"
						required={true}
						value={tagline}
						onChange={(e) => {
							setTagline(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Description:
					<textarea
						type="text"
						name="description"
						placeholder="enter your description"
						required={true}
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					First Brewed:
					<input
						type="text"
						name="first_brewed"
						placeholder="Who brewed it for the first time?"
						required={true}
						value={firstBrewed}
						onChange={(e) => {
							setFirstBrewed(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Brewers Tips:
					<input
						type="text"
						name="brewers_tips"
						placeholder="Tips of Brewer"
						required={true}
						value={brewersTip}
						onChange={(e) => {
							setBrewersTip(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Attenuation Level:
					<input
						type="number"
						name="attenuation_level"
						required={true}
						value={attenuation}
						onChange={(e) => {
							setAttenuation(e.target.value);
						}}
					/>
				</label>
				<br />
				<label>
					Contributed By:
					<input
						type="text"
						name="contributed_by"
						required={true}
						value={contributedBy}
						onChange={(e) => {
							setContributedBy(e.target.value);
						}}
					/>
				</label>
				<button>Create Beer</button>
			</form>
		</div>
	);
}

export default AddBeerPage;