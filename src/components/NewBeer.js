import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function NewBeer() {
	const [formData, setFormData] = useState({
		name: '',
		tagline: '',
		description: '',
		first_brewed: '',
		brewers_tips: '',
		attenuation_level: 0,
		contributed_by: '',
	});

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
			.then((res) => {
				navigate('/beer/list');
			})
			.catch((e) => {
				console.log('error: ' + e);
			});
	};
	axios;

	if (!formData) {
		return (
			<div className="container-fluid d-flex justify-content-center align-items-center vh-100">
				<Spinner animation="border" variant="danger" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	} else {
		return (
			<form onSubmit={handleSubmit}>
				<div className="container-fluid d-flex justify-content-center">
					<div className="container-fluid d-flex flex-wrap justify-content-center">
						<div className="form-name form-group m-3">
							<label>
								Name
								<input
									className="form-control"
									type="text"
									placeholder={formData.name}
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
								/>
							</label>
						</div>

						<div className="form-tagline form-group m-3">
							<label>
								Tagline
								<input
									className="form-control"
									type="text"
									placeholder={formData.tagline}
									value={formData.tagline}
									onChange={(e) =>
										setFormData({ ...formData, tagline: e.target.value })
									}
								/>
							</label>
						</div>

						<div className="form-firstBrewed form-group m-3">
							<label>
								First Brewed
								<input
									className="form-control rounded-input"
									type="text"
									placeholder={formData.first_brewed}
									value={formData.first_brewed}
									onChange={(e) =>
										setFormData({ ...formData, first_brewed: e.target.value })
									}
								/>
							</label>
						</div>

						<div className="form-brewersTips form-group m-3">
							<label>
								Brewers Tips
								<input
									className="form-control rounded-input"
									type="text"
									placeholder={formData.brewers_tips}
									value={formData.brewers_tips}
									onChange={(e) =>
										setFormData({ ...formData, brewers_tips: e.target.value })
									}
								/>
							</label>
						</div>

						<div className="form-attenuationLevel form-group m-3">
							<label>
								Attenuation Level
								<input
									className="form-control rounded-input"
									type="number"
									placeholder={formData.attenuation_level}
									value={formData.attenuation_level}
									onChange={(e) =>
										setFormData({
											...formData,
											attenuation_level: e.target.value,
										})
									}
								/>
							</label>
						</div>

						<div className="form-contributedBy form-group m-3">
							<label>
								Contributed by
								<input
									className="form-control rounded-input"
									type="text"
									placeholder={formData.contributed_by}
									value={formData.contributed_by}
									onChange={(e) =>
										setFormData({ ...formData, contributed_by: e.target.value })
									}
								/>
							</label>
						</div>
					</div>

					<div className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
						<div className="container-fluid form-description form-group m-3">
							<label>
								Description
								<textarea
									rows={15}
									className="form-control"
									type="text"
									placeholder={formData.description}
									value={formData.description}
									onChange={(e) =>
										setFormData({ ...formData, description: e.target.value })
									}
								/>
							</label>
						</div>
					</div>
				</div>

				<button type="submit" className="btn btn-primary m-3 ">
					Submit
				</button>
			</form>
		);
	}
}

export default NewBeer;
