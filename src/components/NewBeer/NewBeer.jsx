import { useState } from "react";
import beersService from "../../services/beer.service";
import "./NewBeer.css";

const NewBeer = () => {
	const [beerData, setBeerData] = useState({
		name: "",
		tagline: "",
		description: "",
		first_brewed: "",
		brewers_tips: "",
		attenuation_level: 20,
		contributed_by: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setBeerData({ ...beerData, [name]: value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		beersService
			.saveBeer(beerData)
			.then(() => {
				console.log(beerData);
			})
			.catch((err) => console.error(err));
	};

	const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = beerData;

	return (
		<div className="container mt-5">
			<div className="row mx-4 text-start">
				<h1 className="pb-5">Add a new beer</h1>
				<form onSubmit={handleFormSubmit}>
					<div className="mb-3">
						<label className="ms-3 fw-bold form-label">Name</label>
						<input
							value={name}
							name="name"
							onChange={handleInputChange}
							type="text"
							className="rounded-4 form-control"
							aria-describedby="emailHelp"
						/>
					</div>
					<div className="mb-3">
						<label className="ms-3 fw-bold form-label">Tagline</label>
						<input
							value={tagline}
							name="tagline"
							onChange={handleInputChange}
							type="text"
							className="rounded-4 form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="ms-3 fw-bold form-label">Description</label>
						<input
							value={description}
							name="description"
							onChange={handleInputChange}
							type="text"
							className="rounded-4 form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="ms-3 fw-bold form-label">First Brewed</label>
						<input
							value={first_brewed}
							name="first_brewed"
							onChange={handleInputChange}
							type="text"
							className="rounded-4 form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="ms-3 fw-bold form-label">Brewers Tips</label>
						<input
							value={brewers_tips}
							name="brewers_tips"
							onChange={handleInputChange}
							type="text"
							className="rounded-4 form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="ms-3 fw-bold form-label">Attenuation Level</label>
						<input
							value={attenuation_level}
							name="attenuation_level"
							onChange={handleInputChange}
							type="number"
							className="rounded-4 form-control"
						/>
					</div>
					<div className="mb-3">
						<label className="ms-3 fw-bold form-label">Contributed By</label>
						<input
							value={contributed_by}
							name="contributed_by"
							onChange={handleInputChange}
							type="text"
							className="rounded-4 form-control"
						/>
					</div>
					<div className="d-grid">
						<button type="submit" className="btn btn-primary rounded-4 my-5">
							ADD NEW
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewBeer;
