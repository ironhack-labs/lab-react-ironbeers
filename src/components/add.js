import { useState } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBeer() {
	const [beerInput, setBeerInput] = useState({});
	const navigate = useNavigate();

	const handleOnchange = (e) => {
		setBeerInput((oldList) => ({
			...oldList,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post(`https://ih-beers-api2.herokuapp.com/beers/random/new`, beerInput)
			.then((message) => {
				navigate('/beers');
			})
			.catch((e) => console.log(e));
	};
	return (
		<>
			<Header />
			<div className="form">
				<form onSubmit={handleSubmit}>
					<label>
						Name{' '}
						<input
							type="text"
							value={beerInput.name}
							placeholder="beer name"
							onChange={handleOnchange}
							required
						></input>
					</label>
					<label>
						Tagline
						<input
							type="text"
							value={beerInput.tagline}
							placeholder="Tagline please"
							onChange={handleOnchange}
							required
						></input>
					</label>
					<label>
						Description
						<input
							type="text"
							value={beerInput.description}
							placeholder="Description here"
							onChange={handleOnchange}
							required
						></input>
					</label>
					<label>
						First Brewed
						<input
							type="text"
							value={beerInput.first_brewed}
							placeholder="mm/yyyy"
							onChange={handleOnchange}
							required
						></input>
					</label>

					<label>
						Brewers Tips
						<input
							type="text"
							value={beerInput.brewers_tips}
							placeholder="Enter Tips"
							onChange={handleOnchange}
							required
						></input>
					</label>
					<label>
						Attenuation Level
						<input
							type="number"
							value={beerInput.attenuation_level}
							placeholder="0"
							onChange={handleOnchange}
							required
						></input>
					</label>
					<label>
						Contributed By
						<input
							type="text"
							value={beerInput.contributed_by}
							placeholder="Enter name"
							onChange={handleOnchange}
							required
						></input>
					</label>
					<button>create beer</button>
				</form>
			</div>
		</>
	);
}

export default AddBeer;
