/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BeerDetails() {
	const { id } = useParams();

	// const navigate = useNavigate();

	const [details, setDetails] = useState({});

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
			.then((response) => {
				setDetails(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div className="details-box">
			<img
				src={
					details.image_url?.length
						? details.image_url
						: "https://placehold.co/400x260?text=No%20photo%20available"
				}
				alt={details.title}
			/>

			<div className="details-h">
				<h1>{details.name}</h1>
				<h2>{details.attenuation_level}</h2>
			</div>
			<div className="details-h">
				<h3>{details.tagline}</h3>
				<h5>
					<strong>{details.first_brewed}</strong>
				</h5>
			</div>
			<p>
				<strong>{details.description}</strong>
			</p>
			<h4>{details.contributed_by}</h4>
		</div>
	);
}
