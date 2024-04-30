import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
	const [beer, setBeer] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		const newBeer = {
			name: event.target.name.value,
			tagline: event.target.tagline.value,
			description: event.target.description.value,
			first_brewed: event.target.first_brewed.value,
			brewers_tips: event.target.brewers_tips.value,
			attenuation_level: parseInt(event.target.attenuation_level.value),
			contributed_by: event.target.contributed_by.value,
		};

		axios
			.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
			.then((response) => {
				console.log(response.data);
				const newBeer = response.data;
				setBeer(newBeer);

				// Clear input fields
				event.target.name.value = '';
				event.target.tagline.value = '';
				event.target.description.value = '';
				event.target.first_brewed.value = '';
				event.target.brewers_tips.value = '';
				event.target.attenuation_level.value = '';
				event.target.contributed_by.value = '';

				// Display pop-up message
				const addAnother = window.confirm('Beer added! Do you want to add another beer?');

				if (!addAnother) {
					// Redirect to homepage
					window.location.href = '/';
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="inputs">
				<label htmlFor="name">Beer name: </label>
				<input type="text" name="name" />
				<label htmlFor="tagline">Tagline: </label>
				<input type="text" name="tagline" />
				<label htmlFor="description">Description: </label>
				<textarea type="text" name='description' />
				<label htmlFor="first_brewed">First Brewed: </label>
				<input type="text" name="first_brewed" />
				<label htmlFor="brewers_tips">Brewer tips: </label>
				<input type="text" name="brewers_tips" />
				<label htmlFor="attenuation_level">Attenuation level: </label>
				<input type="number" name="attenuation_level" />
				<label htmlFor="contributed_by">Contributed by: </label>
				<input type="text" name="contributed_by" />
			</div>
			<div className="button">
				<button type='submit'>Add Beer</button>
			</div>
		</form>
	);
}

export default AddBeerPage;