/** @format */

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBeer() {
	const [name, setName] = useState("");
	const [tagline, setTagline] = useState("");
	const [description, setDescription] = useState("");
	const [first_brewed, setFirst_brewed] = useState("");
	const [brewers_tips, setBrewers_tips] = useState("");
	const [contributed_by, setContributed_by] = useState("");
	const [attenuation_level, setAttenuation_level] = useState(0);

	const navigate = useNavigate();

	const createNewBeer = (e) => {
		e.preventDefault();
		axios
			.post(`https://ih-beers-api2.herokuapp.com/beers/new`, {
				name,
				tagline,
				description,
				first_brewed,
				brewers_tips,
				contributed_by,
				attenuation_level,
			})
			.then((res) => {
				console.log("created the...", res.data);
				navigate("/beers");
			})
			.catch((e) => {
				console.log(e);
			});
	};

	return (
		<div className="beer-create">
			<h1>New Choice</h1>
			<form onSubmit={(e) => createNewBeer(e)}>
				<label>
					Name
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</label>
				<label>
					Tagline
					<input
						type="text"
						value={tagline}
						onChange={(e) => setTagline(e.target.value)}
					/>
				</label>
				<label>
					Description
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</label>
				<label>
					First Brewed
					<input
						type="text"
						value={first_brewed}
						onChange={(e) => setFirst_brewed(e.target.value)}
						required
					/>
				</label>
				<label>
					Brewers Tips
					<input
						type="text"
						value={brewers_tips}
						onChange={(e) => setBrewers_tips(e.target.value)}
						required
					/>
				</label>
				<label>
					Attenuation Level
					<input
						type="number"
						value={attenuation_level}
						onChange={(e) => setAttenuation_level(e.target.value)}
						required
					/>
				</label>
				<label>
					Contributed By
					<input
						type="text"
						value={contributed_by}
						onChange={(e) => setContributed_by(e.target.value)}
						required
					/>
				</label>

				<button type="submit">Create</button>
			</form>
		</div>
	);
}
