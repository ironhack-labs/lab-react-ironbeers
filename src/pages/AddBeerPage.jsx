import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
	const [name, setName] = useState("");
	const [tagline, setTagline] = useState("");
	const [description, setDescription] = useState("");
	const [first_brewed, setFirst_Brewed] = useState("");
	const [brewer_tips, setBrewers_Tips] = useState("");
	const [attenuation_level, setAttenuation_Level] = useState(0);
	const [contributed_by, setContributed_by] = useState("");

	const nav = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("https://ih-beers-api2.herokuapp.com/beers/new", {
				name: name,
				tagline: tagline,
				description: description,
				first_brewed: first_brewed,
				brewer_tips: brewer_tips,
				attenuation_level: attenuation_level,
				contributed_by: contributed_by,
			})
			.then(() => {
				setName("");
				setTagline("");
				setDescription("");
				setFirst_Brewed("");
				setBrewers_Tips("");
				setAttenuation_Level(0);
				setContributed_by("");

				nav("/");
			})
			.catch((err) => {
				console.error("Error:", err);
			});
	};
	return (
		<div className="containerForm">
			<form onSubmit={handleSubmit}>
				<label className="formLabel">
					Name
					<input
						className="formName"
						type="text"
						name="name"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>

				<label className="formLabel">
					Tagline
					<input
						className="formTagline"
						type="text"
						name="tagline"
						placeholder="Tagline"
						value={tagline}
						onChange={(e) => setTagline(e.target.value)}
					/>
				</label>

				<label className="formLabel">
					Description
					<textarea
						className="formDescription"
						type="text"
						name="description"
						placeholder="Description"
						rows="10"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</label>

				<label className="formLabel">
					First Brewed
					<input
						className="formFirst"
						type="text"
						name="first_brewed"
						placeholder="First Brewed"
						value={first_brewed}
						onChange={(e) => setFirst_Brewed(e.target.value)}
					/>
				</label>

				<label className="formLabel">
					Brewer Tips
					<input
						className="formBrewers"
						type="text"
						name="brewers_tips"
						value={brewer_tips}
						onChange={(e) => setBrewers_Tips(e.target.value)}
					/>
				</label>

				<label className="formLabel">
					Attenuation Level
					<input
						className="formLevel"
						type="number"
						name="attenuation_level"
						value={attenuation_level}
						onChange={(e) => setAttenuation_Level(e.target.value)}
					/>
				</label>

				<label className="formLabel">
					Created By
					<input
						className="formCreated"
						type="text"
						name="contributed_by"
						placeholder="Created by"
						value={contributed_by}
						onChange={(e) => setContributed_by(e.target.value)}
					/>
				</label>

				<button className="butonForm">Add Beer</button>
			</form>
		</div>
	);
}

export default AddBeerPage;
